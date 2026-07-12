"use client";

import { useState } from "react";
import {
  BadgeCheck,
  FileCheck2,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { GlowButton } from "@/components/ui/glow-button";
import { SectionTitle } from "@/components/ui/section-title";

const trustItems = [
  {
    title: "Реальные отзывы клиентов",
    text: "На Profi.ru можно заранее посмотреть отзывы и понять, как проходит работа на практике.",
    icon: Star,
  },
  {
    title: "Открытый профиль исполнителя",
    text: "Профиль открыт для просмотра, поэтому до начала работы можно ознакомиться с информацией обо мне.",
    icon: BadgeCheck,
  },
  {
    title: "Личность подтверждена платформой",
    text: "Аккаунт подтвержден платформой, включая проверку паспорта, что добавляет прозрачности и доверия.",
    icon: ShieldCheck,
  },
  {
    title: "Понятный старт сотрудничества",
    text: "Сначала можно обсудить задачу, формат работы и только потом переходить к реализации проекта.",
    icon: FileCheck2,
  },
];

const reviews = [
  {
    name: "Анастасия",
    date: "30 марта 2026",
    service: "Разработка Telegram-бота",
    quote: "Работа выполнена быстро, качественно, в сроки.",
    cost: "5000 ₽",
  },
  {
    name: "Александр",
    date: "21 февраля 2026",
    service: "Разработка парсера и Telegram-бота",
    quote: "Отличный специалист в ботах. Парсер сделал идеально и быстро.",
    cost: "4000 ₽",
  },
  {
    name: "Дмитрий",
    date: "11 февраля 2026",
    service: "Разработка Telegram-бота",
    quote: "Работа выполнена вовремя, результат порадовал.",
    cost: "6000 ₽",
  },
  {
    name: "Андрей",
    date: "11 февраля 2026",
    service: "Разработка Telegram-бота",
    quote: "Заказ выполнен прекрасно.",
    cost: "5000 ₽",
  },
  {
    name: "Антон",
    date: "10 февраля 2026",
    service: "Разработка Telegram-бота",
    quote: "Все сделано быстро и хорошо. Бот работает. Буду обращаться еще.",
    cost: undefined,
  },
  {
    name: "Ольга",
    date: "10 февраля 2026",
    service: "Разработка Telegram-бота",
    quote: "Бот работает хорошо, специалист очень качественно выполнил работу.",
    cost: "5000 ₽",
  },
  {
    name: "Ирина",
    date: "5 февраля 2026",
    service: "Разработка Telegram-бота",
    quote: "Все хорошо, бот сделан быстро и качественно.",
    cost: "20000 ₽",
  },
  {
    name: "Елена",
    date: "13 января 2026",
    service: "Разработка Telegram-бота и админ-панели",
    quote: "Работа выполнена в срок. Александр предложил более удобный для клиентов вариант бота и сделал админ-панель.",
    cost: undefined,
  },
];

export function TrustSection() {
  const [activeReview, setActiveReview] = useState(0);

  const currentReview = reviews[activeReview];

  const showPreviousReview = () => {
    setActiveReview((current) =>
      current === 0 ? reviews.length - 1 : current - 1,
    );
  };

  const showNextReview = () => {
    setActiveReview((current) =>
      current === reviews.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      data-no-dots
      className="relative mx-auto max-w-5xl px-6 py-5 sm:px-8 sm:py-7 lg:max-w-6xl lg:px-12 lg:py-9 xl:max-w-7xl xl:px-16 xl:py-10 2xl:max-w-[1320px] 2xl:px-20 2xl:py-12"
    >
      <div
        id="trust"
        aria-hidden="true"
        className="absolute top-[70px] sm:top-[80px] lg:top-[90px]"
      />

      <SectionTitle
        eyebrow="Отзывы и репутация"
        title="Отзывы и открытые профили"
        text="Отзывы опубликованы на Profi.ru. Там же можно проверить даты, формулировки клиентов и подтверждение личности исполнителя."
      />

      <div className="grid gap-2.5 sm:gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="h-full p-3.5 sm:p-6">
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[20px] border border-white/10 bg-white/[0.03] p-3 sm:rounded-2xl sm:p-5"
                >
                  <div className="mb-2.5 inline-flex rounded-[18px] border border-emerald-400/20 bg-emerald-400/10 p-2.5 text-emerald-300 sm:mb-4 sm:rounded-2xl sm:p-3">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>

                  <h3 className="text-[15px] font-semibold leading-5 text-white sm:text-base sm:leading-6">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-5 text-slate-300 sm:mt-3 sm:text-sm sm:leading-7">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="flex h-full flex-col justify-between p-3.5 sm:p-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300 sm:text-xs sm:tracking-[0.24em]">
              <ShieldCheck className="h-3.5 w-3.5" />
              Profi.ru
            </div>

            <h3 className="mt-3 text-xl font-semibold text-white sm:mt-4 sm:text-2xl">
              Отзывы, которые можно проверить
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300 sm:mt-4 sm:leading-7">
              Здесь указаны имя клиента, дата, услуга и текст отзыва. Оригиналы
              доступны в открытом профиле Profi.ru.
            </p>

            <div className="mt-3 rounded-[22px] border border-white/10 bg-[#020817]/60 p-4 sm:mt-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
                <span className="font-medium text-white">{currentReview.name}</span>
                <span>{currentReview.date}</span>
                {currentReview.cost ? <span>Стоимость: {currentReview.cost}</span> : null}
              </div>
              <div className="mt-2 text-xs font-medium text-emerald-300 sm:text-sm">
                {currentReview.service}
              </div>
              <blockquote className="mt-2 text-sm leading-6 text-slate-200 sm:leading-7">
                &quot;{currentReview.quote}&quot;
              </blockquote>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                <button
                  type="button"
                  onClick={showPreviousReview}
                  aria-label="Предыдущий отзыв"
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-white transition hover:border-emerald-300/40 hover:text-emerald-300"
                >
                  ← Назад
                </button>

                <div className="flex items-center gap-1.5">
                  {reviews.map((review, index) => (
                    <button
                      key={`${review.name}-${review.date}`}
                      type="button"
                      onClick={() => setActiveReview(index)}
                      aria-label={`Открыть отзыв ${index + 1}`}
                      className={`h-2 rounded-full transition ${
                        activeReview === index
                          ? "w-6 bg-emerald-300"
                          : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={showNextReview}
                  aria-label="Следующий отзыв"
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-white transition hover:border-emerald-300/40 hover:text-emerald-300"
                >
                  Далее →
                </button>
              </div>

              <div className="mt-3 text-center text-xs font-medium text-slate-400">
                {activeReview + 1}/{reviews.length}
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-col gap-2.5 sm:mt-4 sm:gap-3">
            <GlowButton href="https://profi.ru/profile/ArdashevAD/#reviews-tab">
              Отзывы на Profi.ru
            </GlowButton>

            <GlowButton href="https://profi.ru/profile/ArdashevAD/" secondary>
              Профиль на Profi.ru
            </GlowButton>
          </div>
        </Card>
      </div>
    </section>
  );
}
