import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

const BACKEND_API_URL = (
  process.env.BACKEND_API_URL ?? "http://127.0.0.1:8000"
).replace(/\/$/, "");
const SESSION_COOKIE = "ardashev_analytics_session";
const SESSION_MAX_AGE = 30 * 60;
const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function isDocumentRequest(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    request.method !== "GET" ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/admin") ||
    pathname === "/favicon.ico"
  ) {
    return false;
  }

  const destination = request.headers.get("sec-fetch-dest");
  const accept = request.headers.get("accept") ?? "";
  return destination === "document" || (!destination && accept.includes("text/html"));
}

function limit(value: string | null, length: number) {
  return value ? value.slice(0, length) : null;
}

function recordServerPageView(
  request: NextRequest,
  sessionId: string,
  isEntry: boolean,
) {
  const searchParams = request.nextUrl.searchParams;
  const payload = JSON.stringify({
    session_id: sessionId,
    path: request.nextUrl.pathname,
    is_entry: isEntry,
    referrer: limit(request.headers.get("referer"), 2048),
    language: limit(request.headers.get("accept-language")?.split(",")[0] ?? null, 32),
    timezone: null,
    screen_width: null,
    screen_height: null,
    utm_source: limit(searchParams.get("utm_source"), 255),
    utm_medium: limit(searchParams.get("utm_medium"), 255),
    utm_campaign: limit(searchParams.get("utm_campaign"), 255),
  });

  return fetch(`${BACKEND_API_URL}/api/v1/analytics/pageviews`, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=UTF-8",
      "User-Agent": request.headers.get("user-agent") ?? "",
      "X-Analytics-Source": "next-middleware",
    },
    body: payload,
    cache: "no-store",
  })
    .then(() => undefined)
    .catch(() => undefined);
}

export function middleware(request: NextRequest, event: NextFetchEvent) {
  const hostname = request.headers.get("host")?.split(":")[0].toLowerCase();

  if (hostname === "www.ardashev.dev") {
    const destination = request.nextUrl.clone();
    destination.hostname = "ardashev.dev";
    destination.protocol = "https:";
    destination.port = "";

    return NextResponse.redirect(destination, 301);
  }

  const response = NextResponse.next();

  if (!isDocumentRequest(request)) {
    return response;
  }

  const currentSession = request.cookies.get(SESSION_COOKIE)?.value;
  const hasSession = Boolean(currentSession && UUID_PATTERN.test(currentSession));
  const sessionId = hasSession ? currentSession! : crypto.randomUUID();

  response.cookies.set({
    name: SESSION_COOKIE,
    value: sessionId,
    maxAge: SESSION_MAX_AGE,
    path: "/",
    sameSite: "lax",
    secure: request.nextUrl.protocol === "https:",
    httpOnly: false,
  });

  event.waitUntil(recordServerPageView(request, sessionId, !hasSession));

  return response;
}

export const config = {
  matcher: "/:path*",
};
