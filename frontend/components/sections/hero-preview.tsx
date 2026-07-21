"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type IdleWindow = Window & {
  requestIdleCallback?: (
    callback: () => void,
    options?: { timeout: number },
  ) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export function HeroPreview() {
  const [canLoadVideo, setCanLoadVideo] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    const slowConnection =
      connection?.saveData ||
      ["slow-2g", "2g"].includes(connection?.effectiveType ?? "");

    if (reducedMotion || slowConnection) {
      return;
    }

    const idleWindow = window as IdleWindow;
    let idleHandle: number | undefined;
    let timeoutHandle: number | undefined;

    const enableVideo = () => setCanLoadVideo(true);
    const scheduleWhenIdle = () => {
      if (idleWindow.requestIdleCallback) {
        idleHandle = idleWindow.requestIdleCallback(enableVideo, {
          timeout: 2500,
        });
        return;
      }

      timeoutHandle = window.setTimeout(enableVideo, 1500);
    };

    const scheduleVideo = () => {
      const mobileDelay = window.matchMedia("(max-width: 639px)").matches
        ? 5000
        : 500;

      timeoutHandle = window.setTimeout(scheduleWhenIdle, mobileDelay);
    };

    if (document.readyState === "complete") {
      scheduleVideo();
    } else {
      window.addEventListener("load", scheduleVideo, { once: true });
    }

    return () => {
      window.removeEventListener("load", scheduleVideo);

      if (idleHandle !== undefined) {
        idleWindow.cancelIdleCallback?.(idleHandle);
      }

      if (timeoutHandle !== undefined) {
        window.clearTimeout(timeoutHandle);
      }
    };
  }, []);

  return (
    <div className="relative mt-1 aspect-[480/982] overflow-hidden rounded-[14px] bg-[#020617] sm:rounded-[28px]">
      <Image
        src="/demo/bot-preview-poster-v2.webp"
        alt="Пример работы Telegram-бота"
        width={480}
        height={982}
        sizes="(max-width: 389px) 140px, (max-width: 639px) 155px, (max-width: 1023px) 330px, 315px"
        priority
        className={`block h-full w-full rounded-[14px] object-cover sm:rounded-[28px] ${
          isVideoReady ? "opacity-0" : "opacity-100"
        }`}
      />

      {canLoadVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-label="Пример работы Telegram-бота"
          onLoadedData={() => setIsVideoReady(true)}
          className={`absolute inset-0 block h-full w-full rounded-[14px] object-cover sm:rounded-[28px] ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/demo/bot-preview-v2.webm" type="video/webm" />
          <source src="/demo/bot-preview-v2.mp4" type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
