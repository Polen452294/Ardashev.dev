"use client";

import Image from "next/image";
import { GraduationCap, ShieldCheck, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

const trustPoints = [
  {
    title: "Техническое образование",
    text: "Учусь в НИТУ МИСиС на направлении Программной инженерии и развиваюсь в backend-разработке, автоматизации и системной архитектуре.",
    icon: GraduationCap,
  },
  {
    title: "Сначала результат — потом оплата",
    text: "Можно начать с бесплатного MVP: вы видите рабочий результат без доступа к коду, проверяете логику и только после этого оплачиваете проект. Код и файлы передаются после оплаты.",
    icon: Eye,
  },
  {
    title: "Довожу до запуска",
    text: "Помогаю не только написать код, но и без дополнительных плат запустить проект на сервере, а также настроить его.",
    icon: ShieldCheck,
  },
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

      <div className="grid gap-2.5 sm:gap-5">
        <div className="grid gap-2.5 sm:gap-5 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-stretch xl:grid-cols-[385px_minmax(0,1fr)]">
          <Card className="relative overflow-hidden bg-[#081122]/72 p-3 sm:p-4">
            <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 right-6 h-56 w-56 rounded-full bg-cyan-400/5 blur-3xl" />

            <div className="relative flex h-full items-center overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-2 shadow-[0_0_70px_rgba(52,211,153,0.1)]">
              <div className="relative overflow-hidden rounded-[24px] bg-[#020817]">
                <Image
                  src="/about-photo.jpg"
                  alt="Александр Ардашев, разработчик Ardashev.dev"
                  width={1519}
                  height={2048}
                  sizes="(max-width: 1024px) 100vw, 385px"
                  className="h-auto w-full"
                  priority={false}
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020817]/85 via-[#020817]/25 to-transparent" />
              </div>
            </div>
          </Card>

          <div className="grid gap-2.5 sm:gap-5 lg:grid-rows-3">
            {trustPoints.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="relative overflow-hidden bg-white/[0.035] lg:h-full"
                >
                  <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />

                  <div className="relative flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-white sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <Card className="relative overflow-hidden bg-[#081122]/72 py-4 sm:py-5">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="pointer-events-none absolute left-10 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-emerald-300/35 to-transparent" />

          <div className="relative">
            <div className="space-y-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              <p>
                Я — разработчик систем автоматизации с практическим опытом создания и
                запуска проектов под ключ, главный разработчик в сервисе Ardashev.dev.
                Учусь в одном из лучших вузов страны. Специализируюсь на решениях для
                бизнеса: приём и обработка заказов, админ-панели, автоматизация общения
                с клиентами, интеграции с API, базами данных и платёжными системами.
                Работаю с CRM, нейросетями, aiogram, Docker, асинхронной архитектурой,
                базами данных и серверным деплоем. Моя задача — превратить идею в
                стабильное и удобное решение, которое экономит время и приносит пользу.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}