"use client";

import { motion } from "framer-motion";
import { Bot, Database, Layers3, Sparkles } from "lucide-react";
import { metrics } from "@/data/site-data";
import { Card } from "@/components/ui/card";
import { GlowButton } from "@/components/ui/glow-button";

const previewItems = [
  {
    title: "Telegram / Max bot",
    text: "Автоматизация общения, уведомлений и бизнес-сценариев",
    icon: Bot,
  },
  {
    title: "Контактный сценарий",
    text: "Удобный старт обсуждения проекта без перегруженной формы",
    icon: Database,
  },
  {
    title: "Интеграции и backend",
    text: "CRM, API, внутренние сервисы и логика",
    icon: Layers3,
  },
  {
    title: "AI-функции",
    text: "Обработка данных, ассистенты и генерация контента",
    icon: Sparkles,
  },
];

export function HeroSection() {
  return (
    <section className="relative mx-auto grid max-w-7xl items-start gap-8 px-5 pt-12 pb-6 sm:px-8 sm:pt-20 sm:pb-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-12 xl:px-16 min-[1024px]:max-[1440px]:max-w-[1040px] min-[1024px]:max-[1440px]:gap-8 min-[1024px]:max-[1440px]:px-14"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10"
      >
        <h1 className="max-w-[820px] text-[34px] font-semibold leading-[1.03] tracking-tight text-white sm:text-[52px] md:text-6xl lg:text-[78px] min-[1024px]:max-[1440px]:max-w-[720px] min-[1024px]:max-[1440px]:text-[48px]">
          Разработка чат-ботов, CRM, парсеров и AI-решения
        </h1>

        <p className="mt-4 max-w-[720px] text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8 md:text-lg min-[1024px]:max-[1440px]:max-w-[640px]">
          Создаю проекты, которые уменьшают ручную рутину, ускоряют процессы,
          объединяют сервисы через API и превращают задачи в работающую систему.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
          <GlowButton href="#contact">Обсудить проект</GlowButton>
          <GlowButton href="#portfolio" secondary>
            Посмотреть портфолио
          </GlowButton>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="relative mx-auto flex w-full max-w-xl justify-center lg:justify-end min-[1024px]:max-[1440px]:max-w-[420px]"
      >
        <div className="absolute -inset-2 rounded-[28px] bg-emerald-400/10 blur-3xl sm:-inset-4 sm:rounded-[42px]" />

        <div className="relative w-full max-w-[320px] rounded-[24px] border border-white/10 bg-[#081122]/80 p-3 shadow-[0_0_60px_rgba(52,211,153,0.08)] sm:max-w-[400px] sm:rounded-[40px] sm:p-4 min-[1024px]:max-[1440px]:max-w-[360px]">
          <div className="rounded-[20px] border border-white/5 bg-[#020617] p-3 sm:rounded-[32px] sm:p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.16em] text-emerald-300 sm:text-xs sm:tracking-[0.2em]">
                  Live Preview
                </div>
                <div className="mt-1 text-sm text-slate-300">Что я разрабатываю</div>
              </div>

              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-300 sm:text-[11px]">
                Active
              </div>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {previewItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-[18px] border border-white/5 bg-white/[0.03] p-3 sm:rounded-2xl sm:p-4"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 sm:h-11 sm:w-11 sm:rounded-2xl">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium leading-tight text-white">
                        {item.title}
                      </div>
                      <div className="mt-1 text-xs leading-5 text-slate-400 sm:leading-relaxed">
                        {item.text}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}