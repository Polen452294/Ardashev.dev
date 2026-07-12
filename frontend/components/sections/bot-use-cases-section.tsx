import {
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  MessageCircle,
  Store,
  UserRound,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

const audienceItems = [
  {
    title: "Малому бизнесу",
    text: "Бот помогает принимать заявки, отвечать на частые вопросы и не терять клиентов, которые пишут в нерабочее время.",
    icon: Store,
  },
  {
    title: "Экспертам и частным специалистам",
    text: "Подходит для записи на консультации, сбора заявок, отправки материалов и первичного общения с клиентом.",
    icon: UserRound,
  },
  {
    title: "Командам с менеджерами",
    text: "Бот собирает данные клиента заранее, передает заявку в работу и уменьшает количество ручных уточнений.",
    icon: BriefcaseBusiness,
  },
];

const featureItems = [
  "Принимать заявки и контакты клиентов",
  "Показывать услуги, цены и условия",
  "Записывать на консультации или встречи",
  "Передавать данные в CRM, таблицы или админ-панель",
  "Отправлять уведомления менеджерам",
  "Напоминать клиентам о незавершенной заявке",
];

export function BotUseCasesSection() {
  return (
    <section
      id="bot-use-cases"
      className="mx-auto max-w-5xl px-6 py-5 sm:px-10 sm:py-7 lg:max-w-6xl lg:px-10 lg:py-9 xl:max-w-7xl xl:px-16 xl:py-10 2xl:max-w-[1320px] 2xl:px-20 2xl:py-12"
    >
      <SectionTitle
        eyebrow="Сценарии использования"
        title="Кому подходят чат-боты и что они могут автоматизировать"
        text="Чат-бот — это не просто кнопки в мессенджере. Это удобный способ принимать заявки, общаться с клиентами и связывать разные сервисы в одну понятную систему."
      />

      <div className="grid gap-2.5 sm:gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div className="grid gap-2.5 sm:gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {audienceItems.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title} className="h-full p-3.5 sm:p-5">
                <div className="mb-2.5 inline-flex rounded-[16px] border border-emerald-400/20 bg-emerald-400/10 p-2 text-emerald-300 sm:mb-3 sm:p-2.5">
                  <Icon className="h-4 w-4" />
                </div>

                <h3 className="text-[15px] font-semibold leading-5 text-white sm:text-lg sm:leading-6">
                  {item.title}
                </h3>

                <p className="mt-2 text-[13px] leading-5 text-slate-300 sm:mt-2.5 sm:text-sm sm:leading-7">
                  {item.text}
                </p>
              </Card>
            );
          })}
        </div>

        <Card className="relative overflow-hidden p-3.5 sm:p-7 lg:p-8">
          <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative">
            <div className="mb-3 sm:mb-4 inline-flex rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300">
              <MessageCircle className="h-5 w-5" />
            </div>

            <h3 className="text-[22px] font-semibold leading-7 text-white sm:text-2xl">
              Что можно добавить в бота
            </h3>

            <p className="mt-3 max-w-2xl text-[13px] leading-6 text-slate-300 sm:text-sm sm:leading-7">
              Функционал подбирается под задачу: от простой записи клиента до
              полноценной системы с заявками, статусами, уведомлениями и
              интеграциями.
            </p>

            <div className="mt-4 grid gap-2.5 sm:mt-6 sm:gap-3 sm:grid-cols-2">
              {featureItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 rounded-[16px] border border-white/10 bg-white/[0.04] px-3 py-2.5 sm:gap-3 sm:rounded-[20px] sm:px-4 sm:py-3.5"
                >
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.55)]" />

                  <div className="text-[13px] leading-6 text-slate-200 sm:text-sm">
                    {item}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-[18px] border border-emerald-300/15 bg-emerald-400/[0.06] px-3.5 py-3 sm:mt-6 sm:rounded-[22px] sm:px-5 sm:py-4">
              <div className="text-[13px] leading-6 text-slate-200 sm:text-sm sm:leading-7">
                Такой бот можно запустить как простой MVP, а затем расширять:
                добавить CRM, админ-панель, аналитику, AI-функции или поддержку
                нескольких площадок — Telegram, Max и VK.
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}