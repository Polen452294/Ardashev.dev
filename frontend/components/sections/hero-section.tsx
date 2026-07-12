"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GlowButton } from "@/components/ui/glow-button";

export function HeroSection() {
  const previewRef = useRef<HTMLDivElement>(null);
  const [canLoadVideo, setCanLoadVideo] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    const slowConnection = connection?.saveData || ["slow-2g", "2g"].includes(connection?.effectiveType ?? "");

    if (reducedMotion || slowConnection || !previewRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCanLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(previewRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="relative mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_145px] items-start gap-3 px-5 pb-4 pt-5 sm:grid-cols-[1.05fr_0.95fr] sm:items-center sm:gap-2 sm:px-8 sm:pb-7 sm:pt-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-12 xl:px-16 min-[390px]:grid-cols-[minmax(0,1fr)_158px] min-[1024px]:max-[1440px]:max-w-[1040px] min-[1024px]:max-[1440px]:gap-8 min-[1024px]:max-[1440px]:px-14"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="contents lg:relative lg:z-10 lg:block"
      >
        <div className="order-1 max-w-[175px] min-[390px]:max-w-[190px] sm:contents">
          <h1 className="text-[31px] font-semibold leading-[1.06] tracking-tight text-white min-[390px]:text-[34px] sm:max-w-[820px] sm:text-[52px] sm:leading-[1.03] md:text-6xl lg:text-[74px] min-[1024px]:max-[1440px]:max-w-[720px] min-[1024px]:max-[1440px]:text-[48px]">
            <span className="sm:hidden">
              Разработка
              <br />
              ботов в
              <br />
              Telegram /
              <br />
              Max,
              <br />
              CRM и
              <br />
              парсеров
            </span>

            <span className="hidden sm:block">
              Разработка ботов в Telegram / Max, CRM и парсеров
            </span>
          </h1>

          <div className="mt-4 text-base font-medium tracking-wide text-emerald-300 sm:hidden">
            От 1500₽
          </div>

          <div className="mt-4 flex w-fit flex-col gap-2.5 sm:hidden">
            <a
              href="#contact"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-full bg-emerald-400 px-4 text-[12px] font-medium text-slate-950 shadow-[0_0_32px_rgba(52,211,153,0.25)] transition hover:bg-emerald-300"
            >
              Создать заказ
              <span>→</span>
            </a>

            <a
              href="#portfolio"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 text-[12px] font-medium text-white transition hover:border-emerald-300/30 hover:bg-white/[0.08]"
            >
              Портфолио
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="order-3 col-span-2 lg:col-span-1">
          <div className="mt-4 hidden text-base font-medium tracking-wide text-emerald-300 sm:block sm:text-lg">
            От 1500₽
          </div>

          <p className="mt-6 max-w-[720px] text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8 md:text-lg min-[1024px]:max-[1440px]:max-w-[640px]">
            Создаю Telegram-ботов, Max-ботов, парсеры и CRM/API-интеграции,
            которые помогают бизнесу принимать заявки, собирать данные,
            уведомлять менеджеров и уменьшать ручную рутину.
          </p>

          <div className="mt-6 hidden flex-col gap-3 sm:mt-8 sm:flex sm:flex-row">
            <GlowButton href="#contact">Создать заказ</GlowButton>
            <GlowButton href="#portfolio" secondary>
              Посмотреть портфолио
            </GlowButton>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="order-2 relative ml-auto mt-1 flex w-full max-w-[145px] items-start justify-end sm:mx-auto sm:mt-0 sm:max-w-xl sm:justify-center lg:mt-0 lg:justify-end min-[390px]:max-w-[158px] min-[1024px]:max-[1440px]:max-w-[400px]"
      >
        <div className="pointer-events-none absolute -inset-4 z-0 translate-x-3 rounded-[32px] bg-emerald-400/10 blur-2xl sm:-inset-6 sm:translate-x-20 sm:rounded-[42px] sm:blur-3xl" />

        <div className="relative z-10 flex w-full max-w-[140px] flex-col rounded-[20px] border border-white/10 bg-[#081122]/80 p-2 shadow-[0_0_90px_rgba(52,211,153,0.14)] sm:max-w-[330px] sm:rounded-[40px] sm:p-4 min-[390px]:max-w-[155px] min-[1024px]:max-[1440px]:max-w-[315px]">
          <div className="flex flex-col rounded-[16px] border border-white/5 bg-[#020617] p-2 sm:rounded-[32px] sm:p-4">
            <div className="mb-2 flex items-center justify-between sm:mb-4">
              <div className="text-[8px] uppercase tracking-[0.14em] text-emerald-300 sm:text-xs sm:tracking-[0.2em]">
                Live Preview
              </div>

              <div className="z-10 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-1.5 py-0.5 text-[8px] text-emerald-300 sm:px-2 sm:py-1 sm:text-[11px]">
                Active
              </div>
            </div>

            <div ref={previewRef} className="mt-1 overflow-hidden rounded-[14px] bg-[#020617] sm:rounded-[28px]">
              <video
                autoPlay={canLoadVideo}
                muted
                loop
                playsInline
                preload="none"
                poster="/demo/bot-preview-poster-v2.webp"
                aria-label="Пример работы Telegram-бота"
                className="block h-auto w-full rounded-[14px] sm:rounded-[28px]"
              >
                {canLoadVideo ? (
                  <>
                    <source src="/demo/bot-preview-v2.webm" type="video/webm" />
                    <source src="/demo/bot-preview-v2.mp4" type="video/mp4" />
                  </>
                ) : null}
              </video>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
