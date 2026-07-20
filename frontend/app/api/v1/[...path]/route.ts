import type { NextRequest } from "next/server";

const BACKEND_API_URL = (
  process.env.BACKEND_API_URL ?? "http://127.0.0.1:8000"
).replace(/\/$/, "");

type RouteContext = {
  params: Promise<{ path: string[] }>;
};

const FORWARDED_REQUEST_HEADERS = [
  "accept",
  "accept-language",
  "authorization",
  "content-type",
  "user-agent",
  "x-analytics-source",
] as const;

async function proxyRequest(request: NextRequest, context: RouteContext) {
  const { path } = await context.params;

  if (!path.length || path.some((segment) => segment === "." || segment === "..")) {
    return Response.json({ detail: "Invalid API path" }, { status: 400 });
  }

  const target = new URL(
    `${BACKEND_API_URL}/api/v1/${path.map(encodeURIComponent).join("/")}`,
  );
  target.search = request.nextUrl.search;

  // Forward only application headers. Passing browser/Nginx hop-by-hop headers
  // (for example `connection`) to Node's fetch can make Undici reject the
  // internal request before it ever reaches FastAPI.
  const headers = new Headers();
  for (const name of FORWARDED_REQUEST_HEADERS) {
    const value = request.headers.get(name);
    if (value) {
      headers.set(name, value);
    }
  }
  headers.set("x-forwarded-host", request.nextUrl.host);
  headers.set("x-forwarded-proto", request.nextUrl.protocol.replace(":", ""));

  try {
    const response = await fetch(target, {
      method: request.method,
      headers,
      body:
        request.method === "GET" || request.method === "HEAD"
          ? undefined
          : await request.arrayBuffer(),
      cache: "no-store",
      redirect: "manual",
    });
    const responseHeaders = new Headers(response.headers);

    responseHeaders.delete("content-encoding");
    responseHeaders.delete("content-length");
    responseHeaders.delete("transfer-encoding");
    responseHeaders.delete("connection");

    return new Response(response.body, {
      status: response.status,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error("Failed to proxy API request", {
      method: request.method,
      path: request.nextUrl.pathname,
      error,
    });
    return Response.json(
      { detail: "Backend service is unavailable" },
      { status: 502 },
    );
  }
}

export const dynamic = "force-dynamic";
export const GET = proxyRequest;
export const POST = proxyRequest;
export const PATCH = proxyRequest;
export const PUT = proxyRequest;
export const DELETE = proxyRequest;
