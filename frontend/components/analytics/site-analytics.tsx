"use client";

import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/$/, "");
const SESSION_STORAGE_KEY = "ardashev_analytics_session";
const SESSION_DURATION_MS = 30 * 60 * 1000;
const YANDEX_COUNTER_ID = 108437647;
const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
let fallbackSessionId: string | null = null;

type StoredSession = {
  id: string;
  expiresAt: number;
};

type SiteAnalyticsProps = {
  gaMeasurementId?: string;
};

function persistSession(id: string, expiresAt: number) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${SESSION_STORAGE_KEY}=${id}; Max-Age=${
    SESSION_DURATION_MS / 1000
  }; Path=/; SameSite=Lax${secure}`;

  try {
    localStorage.setItem(
      SESSION_STORAGE_KEY,
      JSON.stringify({ id, expiresAt }),
    );
  } catch {
    // Cookies or the in-memory fallback still keep the current session stable.
  }
}

function getSessionId() {
  const now = Date.now();
  const cookieSession = document.cookie
    .split(";")
    .map((item) => item.trim())
    .find((item) => item.startsWith(`${SESSION_STORAGE_KEY}=`))
    ?.slice(SESSION_STORAGE_KEY.length + 1);

  if (cookieSession && UUID_PATTERN.test(cookieSession)) {
    persistSession(cookieSession, now + SESSION_DURATION_MS);
    return cookieSession;
  }

  try {
    const stored = localStorage.getItem(SESSION_STORAGE_KEY);

    if (stored) {
      const session = JSON.parse(stored) as StoredSession;

      if (
        typeof session.id === "string" &&
        typeof session.expiresAt === "number" &&
        session.expiresAt > now &&
        UUID_PATTERN.test(session.id)
      ) {
        persistSession(session.id, now + SESSION_DURATION_MS);
        return session.id;
      }
    }
  } catch {
    // A blocked localStorage must not interfere with page rendering.
  }

  const id = fallbackSessionId ?? crypto.randomUUID();
  fallbackSessionId = id;
  persistSession(id, now + SESSION_DURATION_MS);

  return id;
}

function sendOwnPageView(
  path: string,
  referrer: string | null,
  isEntry: boolean,
) {
  const searchParams = new URLSearchParams(window.location.search);
  const payload = JSON.stringify({
    session_id: getSessionId(),
    path,
    is_entry: isEntry,
    referrer,
    language: navigator.language || null,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || null,
    screen_width: window.screen.width,
    screen_height: window.screen.height,
    utm_source: searchParams.get("utm_source"),
    utm_medium: searchParams.get("utm_medium"),
    utm_campaign: searchParams.get("utm_campaign"),
  });
  const endpoint = `${API_URL}/api/v1/analytics/pageviews`;
  const body = new Blob([payload], { type: "text/plain;charset=UTF-8" });

  if (navigator.sendBeacon?.(endpoint, body)) {
    return;
  }

  void fetch(endpoint, {
    method: "POST",
    body: payload,
    headers: { "Content-Type": "text/plain;charset=UTF-8" },
    keepalive: true,
  }).catch(() => {
    // Analytics must never affect the visitor experience.
  });
}

function PageViewTracker({ gaMeasurementId }: SiteAnalyticsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstPage = useRef(true);
  const previousUrl = useRef<string | null>(null);
  const query = searchParams.toString();

  useEffect(() => {
    const path = query ? `${pathname}?${query}` : pathname;
    const currentUrl = window.location.href;

    if (previousUrl.current === null) {
      previousUrl.current = document.referrer || "";
    }

    const isEntry = isFirstPage.current;

    if (!isEntry) {
      window.ym?.(YANDEX_COUNTER_ID, "hit", currentUrl, {
        title: document.title,
        referer: previousUrl.current,
      });
    }

    if (gaMeasurementId) {
      window.gtag?.("event", "page_view", {
        page_location: currentUrl,
        page_path: path,
        page_title: document.title,
      });
    }

    sendOwnPageView(
      pathname,
      isEntry ? previousUrl.current || null : null,
      isEntry,
    );
    previousUrl.current = currentUrl;
    isFirstPage.current = false;
  }, [gaMeasurementId, pathname, query]);

  return null;
}

export function SiteAnalytics(props: SiteAnalyticsProps) {
  return (
    <Suspense fallback={null}>
      <PageViewTracker {...props} />
    </Suspense>
  );
}
