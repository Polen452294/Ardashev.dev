"use client";

import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

const contactItems = [
  {
    title: "Telegram",
    href: "https://t.me/likeaatea",
    icon: MessageCircle,
    text: "Быстрый способ обсудить проект.",
  },
  {
    title: "Max",
    href: "https://max.ru/u/f9LHodD0cOLBuQru9TuIcrq9TtQ-rk93xm-oFACo-BCvcrba4KdlG37ts_M",
    icon: MessageCircle,
    text: "Связь через Max, если так удобнее.",
  },
  {
    title: "Email",
    href: "mailto:aardashev8@gmail.com",
    icon: Mail,
    text: "Для подробного описания задачи.",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto px-5 py-7 sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:px-16 xl:py-14 2xl:px-20 2xl:py-16 max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1320px]"
    >
      <SectionTitle
        eyebrow="Contact"
        title="Создать заказ"
        text="Выберите удобный способ связи и коротко опишите задачу. Напишите: что нужно сделать, какой срок и какой результат вы хотите получить."
      />

      <Card className="relative overflow-hidden p-5 sm:p-7 lg:p-9">
        <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h3 className="text-[22px] font-semibold leading-7 text-white sm:text-2xl">
              Напишите в удобном формате
            </h3>

            <p className="mt-2 max-w-xl text-[13px] leading-6 text-slate-300 sm:text-sm sm:leading-7">
              Необязательно приходить с готовым планом — вместе разберем задачу и сформируем понятную структуру проекта.
            </p>
          </div>

          <div className="grid gap-3">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-4 transition hover:border-emerald-300/30 hover:bg-white/[0.07]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                    <Icon className="h-4 w-4" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <div className="text-[15px] font-semibold leading-5 text-white sm:text-lg sm:leading-6">
                        {item.title}
                      </div>

                      <ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:text-emerald-300" />
                    </div>

                    <div className="mt-1 text-[13px] leading-5 text-slate-300 sm:text-sm">
                      {item.text}
                    </div>
                  </div>

                  <span className="hidden shrink-0 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1.5 text-[13px] font-medium leading-5 text-emerald-200 transition group-hover:border-emerald-300/40 group-hover:bg-emerald-400/15 sm:inline-flex">
                    Перейти
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </Card>
    </section>
  );
}