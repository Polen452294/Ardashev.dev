"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

const aboutParagraphs = [
  "Я — разработчик систем автоматизации с практическим опытом создания и запуска проектов под ключ, главный разработчик в сервисе Ardashev.dev. Учусь в одном из лучших вузов страны.",
  "Специализируюсь на решениях для бизнеса: приём и обработка заказов, админ-панели, автоматизация общения с клиентами, интеграции с API, базами данных и платёжными системами.",
  "Работаю с CRM, нейросетями, aiogram, Docker, асинхронной архитектурой, базами данных и серверным деплоем. Моя задача — превратить идею в стабильное и удобное решение, которое экономит время и приносит пользу.",
];

export function AboutSection() {
  return (
    <section
      id="about"
      data-no-dots
      className="mx-auto max-w-5xl px-6 py-5 sm:px-8 sm:py-7 lg:max-w-6xl lg:px-12 lg:py-9 xl:max-w-7xl xl:px-16 xl:py-10 2xl:max-w-[1320px] 2xl:px-20 2xl:py-12"
    >
      <SectionTitle
        eyebrow="About"
        title="Кто я такой"
        text="Небольшой блок обо мне — чтобы было понятно, кому вы доверяете разработку проекта."
      />

      <div className="hidden gap-2.5 sm:gap-5 lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:items-stretch lg:gap-4 xl:grid-cols-[300px_minmax(0,1fr)]">
        <Card className="relative flex h-full items-center justify-center overflow-hidden bg-[#081122]/72 !p-3 sm:!p-4">
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 right-6 h-56 w-56 rounded-full bg-cyan-400/5 blur-3xl" />

          <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-2 shadow-[0_0_70px_rgba(52,211,153,0.1)]">
            <div className="relative overflow-hidden rounded-[24px] bg-[#020817]">
              <Image
                src="/about-photo.jpg"
                alt="Александр Ардашев, разработчик Ardashev.dev"
                width={1519}
                height={2048}
                sizes="300px"
                className="h-auto max-h-[440px] w-auto max-w-full xl:max-h-[460px]"
                priority={false}
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#020817]/85 via-[#020817]/25 to-transparent sm:h-32" />
            </div>
          </div>
        </Card>

        <Card className="relative flex overflow-hidden bg-[#081122]/72 !p-5 sm:!p-6 lg:h-full lg:items-start xl:!p-7">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="pointer-events-none absolute left-10 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-emerald-300/35 to-transparent" />

          <div className="space-y-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 xl:text-[17px] xl:leading-8">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Card>
      </div>

      <Card className="relative overflow-hidden bg-[#081122]/72 !p-4 sm:!p-5 lg:hidden">
        <div className="pointer-events-none absolute -left-14 -top-14 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-4 h-56 w-56 rounded-full bg-cyan-400/5 blur-3xl" />
        <div className="pointer-events-none absolute left-10 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-emerald-300/35 to-transparent" />

        <div className="relative text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
          <div className="float-left mb-3 mr-4 w-[132px] min-[390px]:w-[150px] sm:mb-4 sm:mr-5 sm:w-[190px]">
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-2 shadow-[0_0_60px_rgba(52,211,153,0.08)]">
              <div className="relative overflow-hidden rounded-[18px] bg-[#020817] sm:rounded-[20px]">
                <Image
                  src="/about-photo.jpg"
                  alt="Александр Ардашев, разработчик Ardashev.dev"
                  width={1519}
                  height={2048}
                  sizes="(max-width: 390px) 132px, (max-width: 640px) 150px, 190px"
                  className="h-auto w-full"
                  priority={false}
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#020817]/80 via-[#020817]/20 to-transparent" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}