"use client";

import { useEffect } from "react";

const counterId = 108437647;

type MetrikaGoal =
  | "click_telegram"
  | "click_max"
  | "copy_email"
  | "click_phone"
  | "open_case"
  | "open_profi";

declare global {
  interface Window {
    ym?: (
      counterId: number,
      method: "reachGoal",
      goal: MetrikaGoal,
      params?: Record<string, string>,
    ) => void;
  }
}

function isDomain(hostname: string, domain: string) {
  return hostname === domain || hostname.endsWith(`.${domain}`);
}

function reachGoal(goal: MetrikaGoal, params?: Record<string, string>) {
  window.ym?.(counterId, "reachGoal", goal, params);
}

export function YandexMetrikaGoals() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) {
        return;
      }

      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      const href = link?.getAttribute("href");

      if (!href) {
        return;
      }

      let url: URL;

      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }

      if (isDomain(url.hostname, "t.me")) {
        reachGoal("click_telegram");
        return;
      }

      if (isDomain(url.hostname, "max.ru")) {
        reachGoal("click_max");
        return;
      }

      if (url.protocol === "mailto:") {
        reachGoal("copy_email");
        return;
      }

      if (url.protocol === "tel:") {
        reachGoal("click_phone");
        return;
      }

      if (isDomain(url.hostname, "profi.ru")) {
        reachGoal("open_profi");
        return;
      }

      if (
        url.origin === window.location.origin &&
        /^\/cases\/[^/]+\/?$/.test(url.pathname)
      ) {
        reachGoal("open_case", { case_url: url.pathname });
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
