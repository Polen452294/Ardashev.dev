"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function HeroPreview() {
  const [canLoadVideo, setCanLoadVideo] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    const saveData = connection?.saveData;

    if (reducedMotion || saveData) {
      return;
    }

    let timeoutHandle: number | undefined;
    let enabled = false;

    const enableVideo = () => {
      if (enabled) {
        return;
      }

      enabled = true;
      setCanLoadVideo(true);
    };
    const scheduleVideo = () => {
      const mobileDelay = window.matchMedia("(max-width: 639px)").matches
        ? 1200
        : 300;

      timeoutHandle = window.setTimeout(enableVideo, mobileDelay);
    };

    if (document.readyState === "complete") {
      scheduleVideo();
    } else {
      window.addEventListener("load", scheduleVideo, { once: true });
    }

    window.addEventListener("pointerdown", enableVideo, {
      once: true,
      passive: true,
    });
    window.addEventListener("scroll", enableVideo, {
      once: true,
      passive: true,
    });
    window.addEventListener("keydown", enableVideo, { once: true });

    return () => {
      window.removeEventListener("load", scheduleVideo);
      window.removeEventListener("pointerdown", enableVideo);
      window.removeEventListener("scroll", enableVideo);
      window.removeEventListener("keydown", enableVideo);

      if (timeoutHandle !== undefined) {
        window.clearTimeout(timeoutHandle);
      }
    };
  }, []);

  useEffect(() => {
    if (!canLoadVideo || !videoRef.current) {
      return;
    }

    void videoRef.current.play().catch(() => {
      // The poster remains visible if this browser blocks muted autoplay.
    });
  }, [canLoadVideo]);

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
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Пример работы Telegram-бота"
          onPlaying={() => setIsVideoReady(true)}
          onError={() => setCanLoadVideo(false)}
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
