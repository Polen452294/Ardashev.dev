"use client";

import { motion } from "framer-motion";
import { GlowButton } from "@/components/ui/glow-button";

export function HeroSection() {
  return (
    <section className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 pt-8 pb-4 sm:px-8 sm:pt-14 sm:pb-7 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-12 xl:px-16 min-[1024px]:max-[1440px]:max-w-[1040px] min-[1024px]:max-[1440px]:gap-8 min-[1024px]:max-[1440px]:px-14"
>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10"
      >
        <h1 className="max-w-[820px] text-[34px] font-semibold leading-[1.03] tracking-tight text-white sm:text-[52px] md:text-6xl lg:text-[78px] min-[1024px]:max-[1440px]:max-w-[720px] min-[1024px]:max-[1440px]:text-[48px]">
          Разработка ботов в Telegram / Max, CRM и парсеров
        </h1>

        <div className="mt-4 text-base font-medium tracking-wide text-emerald-300 sm:text-lg">
          От 1500₽
        </div>

        <p className="mt-4 max-w-[720px] text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8 md:text-lg min-[1024px]:max-[1440px]:max-w-[640px]">
          Создаю проекты, которые уменьшают ручную рутину, ускоряют процессы,
          объединяют сервисы через API и превращают задачи в работающую систему.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
          <GlowButton href="#contact">Создать заказ</GlowButton>
          <GlowButton href="#portfolio" secondary>
            Посмотреть портфолио
          </GlowButton>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="relative mx-auto flex w-full max-w-xl items-start justify-center lg:mt-0 lg:justify-end min-[1024px]:max-[1440px]:max-w-[400px]"
      >
        <div className="pointer-events-none absolute -inset-6 z-0 translate-x-20 rounded-[42px] bg-emerald-400/10 blur-3xl" />

        <div className="relative z-10 flex h-[600px] w-full max-w-[300px] flex-col rounded-[24px] border border-white/10 bg-[#081122]/80 p-3 shadow-[0_0_140px_rgba(52,211,153,0.16)] sm:h-[640px] sm:max-w-[330px] sm:rounded-[40px] sm:p-4 min-[1024px]:max-[1440px]:h-[560px] min-[1024px]:max-[1440px]:max-w-[315px]">
          <div className="flex h-full flex-col rounded-[20px] border border-white/5 bg-[#020617] p-3 sm:rounded-[32px] sm:p-4">
            <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-emerald-300 sm:text-xs sm:tracking-[0.2em]">
                    Live Preview
                  </div>
                </div>

                <div className="rounded-full border border-emerald-400/20 z-10 bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-300 sm:text-[11px]">
                  Active
                </div>
              </div>

              <div className="mt-0.75 flex-1 overflow-hidden rounded-[18px] bg-transparent sm:rounded-[28px]">
                <video
                  src="/demo/bot-preview.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full rounded-[18px] object-contain object-top sm:rounded-[28px]"
                />
              </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}