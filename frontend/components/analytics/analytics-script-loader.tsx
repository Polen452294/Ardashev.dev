"use client";

import { useEffect } from "react";

type AnalyticsScriptLoaderProps = {
  gaMeasurementId?: string;
};

type IdleWindow = Window & {
  requestIdleCallback?: (
    callback: () => void,
    options?: { timeout: number },
  ) => number;
  cancelIdleCallback?: (handle: number) => void;
};

const YANDEX_SCRIPT_ID = "yandex-metrika";
const GOOGLE_SCRIPT_ID = "google-analytics";

function appendScript(id: string, src: string) {
  if (document.getElementById(id)) {
    return;
  }

  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  script.async = true;
  document.head.appendChild(script);
}

export function AnalyticsScriptLoader({
  gaMeasurementId,
}: AnalyticsScriptLoaderProps) {
  useEffect(() => {
    const idleWindow = window as IdleWindow;
    let delayHandle: number | undefined;
    let idleHandle: number | undefined;
    let loaded = false;

    const loadScripts = () => {
      if (loaded) {
        return;
      }

      loaded = true;
      appendScript(
        YANDEX_SCRIPT_ID,
        "https://mc.yandex.ru/metrika/tag.js?id=108437647",
      );

      if (gaMeasurementId) {
        appendScript(
          GOOGLE_SCRIPT_ID,
          `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
            gaMeasurementId,
          )}`,
        );
      }
    };

    const scheduleAfterLoad = () => {
      // The server-side counter has already recorded the request. Give the
      // visible content a clean critical path, then hydrate third-party tools
      // while keeping all commands queued by the early bootstrap snippets.
      delayHandle = window.setTimeout(() => {
        if (idleWindow.requestIdleCallback) {
          idleHandle = idleWindow.requestIdleCallback(loadScripts, {
            timeout: 2000,
          });
        } else {
          loadScripts();
        }
      }, 3500);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        loadScripts();
      }
    };

    if (document.readyState === "complete") {
      scheduleAfterLoad();
    } else {
      window.addEventListener("load", scheduleAfterLoad, { once: true });
    }

    // An engaged visitor should be handed to Metrika and GA immediately. This
    // also starts loading before an outbound click, while passive/very short
    // visits remain covered by the same-origin server counter and noscript hit.
    window.addEventListener("pointerdown", loadScripts, {
      once: true,
      passive: true,
    });
    window.addEventListener("keydown", loadScripts, { once: true });
    window.addEventListener("scroll", loadScripts, {
      once: true,
      passive: true,
    });
    window.addEventListener("pagehide", loadScripts, { once: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("load", scheduleAfterLoad);
      window.removeEventListener("pointerdown", loadScripts);
      window.removeEventListener("keydown", loadScripts);
      window.removeEventListener("scroll", loadScripts);
      window.removeEventListener("pagehide", loadScripts);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (delayHandle !== undefined) {
        window.clearTimeout(delayHandle);
      }

      if (idleHandle !== undefined) {
        idleWindow.cancelIdleCallback?.(idleHandle);
      }
    };
  }, [gaMeasurementId]);

  return null;
}
