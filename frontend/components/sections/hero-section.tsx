"use client";

import { motion } from "framer-motion";
import { GlowButton } from "@/components/ui/glow-button";

export function HeroSection() {
  return (
    <section className="relative mx-auto grid max-w-7xl grid-cols-[1.05fr_0.95fr] items-center gap-2 px-10 pb-5 pt-6 sm:px-8 sm:pb-7 sm:pt-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-12 xl:px-16 min-[1024px]:max-[1440px]:max-w-[1040px] min-[1024px]:max-[1440px]:gap-8 min-[1024px]:max-[1440px]:px-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="contents lg:relative lg:z-10 lg:block"
      >
        <div className="order-1 max-w-[165px] min-[390px]:max-w-[185px] sm:hidden">
          <h1 className="text-[24px] font-semibold leading-[1.12] tracking-tight text-white min-[390px]:text-[26px]">
            Разработка
            <br />
            ботов в
            <br />
            Telegram / Max,
            <br />
            CRM и
            <br />
            парсеров
          </h1>

          <div className="mt-4 text-base font-medium tracking-wide text-emerald-300">
            От 1500₽
          </div>

          <div className="mt-4 flex w-fit flex-col gap-2.5">
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

        <h1 className="hidden max-w-[820px] font-semibold leading-[1.03] tracking-tight text-white sm:block sm:text-[52px] md:text-6xl lg:text-[78px] min-[1024px]:max-[1440px]:max-w-[720px] min-[1024px]:max-[1440px]:text-[48px]">
          Разработка ботов в Telegram / Max, CRM и парсеров
        </h1>

        <div className="order-3 col-span-2 lg:col-span-1">
          <div className="mt-4 hidden text-base font-medium tracking-wide text-emerald-300 sm:block sm:text-lg">
            От 1500₽
          </div>

          <p className="mt-4 max-w-[720px] text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8 md:text-lg min-[1024px]:max-[1440px]:max-w-[640px]">
            Создаю проекты, которые уменьшают ручную рутину, ускоряют процессы,
            объединяют сервисы через API и превращают задачи в работающую систему.
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
        className="order-2 relative ml-auto mt-2 flex w-full max-w-[178px] items-start justify-end sm:mx-auto sm:mt-0 sm:max-w-xl sm:justify-center lg:mt-0 lg:justify-end min-[1024px]:max-[1440px]:max-w-[400px]"
      >
        <div className="pointer-events-none absolute -inset-4 z-0 translate-x-6 rounded-[32px] bg-emerald-400/10 blur-2xl sm:-inset-6 sm:translate-x-20 sm:rounded-[42px] sm:blur-3xl" />

        <div className="relative z-10 flex h-[330px] w-full max-w-[160px] flex-col rounded-[20px] border border-white/10 bg-[#081122]/80 p-2 shadow-[0_0_90px_rgba(52,211,153,0.14)] sm:h-[640px] sm:max-w-[330px] sm:rounded-[40px] sm:p-4 min-[1024px]:max-[1440px]:h-[560px] min-[1024px]:max-[1440px]:max-w-[315px]">
          <div className="flex h-full flex-col rounded-[16px] border border-white/5 bg-[#020617] p-2 sm:rounded-[32px] sm:p-4">
            <div className="mb-2 flex items-center justify-between sm:mb-4">
              <div className="text-[8px] uppercase tracking-[0.14em] text-emerald-300 sm:text-xs sm:tracking-[0.2em]">
                Live Preview
              </div>

              <div className="z-10 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-1.5 py-0.5 text-[8px] text-emerald-300 sm:px-2 sm:py-1 sm:text-[11px]">
                Active
              </div>
            </div>

            <div className="mt-1 flex-1 overflow-hidden rounded-[14px] bg-transparent sm:rounded-[28px]">
              <video
                src="/demo/bot-preview.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full rounded-[14px] object-contain object-top sm:rounded-[28px]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}