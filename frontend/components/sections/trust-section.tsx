"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
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

const reviewScreenshots = [
  {
    src: "/reviews/review-1.png",
    alt: "Скриншот отзыва клиента 1 на Profi.ru",
  },
  {
    src: "/reviews/review-2.png",
    alt: "Скриншот отзыва клиента 2 на Profi.ru",
  },
  {
    src: "/reviews/review-3.png",
    alt: "Скриншот отзыва клиента 3 на Profi.ru",
  },
  {
    src: "/reviews/review-4.png",
    alt: "Скриншот отзыва клиента 4 на Profi.ru",
  },
  {
    src: "/reviews/review-5.png",
    alt: "Скриншот отзыва клиента 5 на Profi.ru",
  },
  {
    src: "/reviews/review-6.png",
    alt: "Скриншот отзыва клиента 6 на Profi.ru",
  },
  {
    src: "/reviews/review-7.png",
    alt: "Скриншот отзыва клиента 7 на Profi.ru",
  },
  {
    src: "/reviews/review-8.png",
    alt: "Скриншот отзыва клиента 8 на Profi.ru",
  },
];

export function TrustSection() {
  const [activeReview, setActiveReview] = useState(0);

  const currentReview = reviewScreenshots[activeReview];

  const showPreviousReview = () => {
    setActiveReview((current) =>
      current === 0 ? reviewScreenshots.length - 1 : current - 1,
    );
  };

  const showNextReview = () => {
    setActiveReview((current) =>
      current === reviewScreenshots.length - 1 ? 0 : current + 1,
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
        title="Гарантии качества и отзывы"
        text="До начала работы можно заранее ознакомиться с отзывами, посмотреть профиль на Profi.ru и убедиться, что личность подтверждена платформой."
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
              Проверяемая репутация и открытая информация
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300 sm:mt-4 sm:leading-7">
              Можно перейти на профиль Profi.ru, посмотреть отзывы, ознакомиться
              с аккаунтом и увидеть подтвержденную платформой личность. Такой
              формат делает старт сотрудничества спокойнее и прозрачнее.
            </p>

            <div className="mt-3 rounded-[22px] border border-white/10 bg-white/[0.03] p-2 sm:mt-4">
              <div className="group relative overflow-hidden rounded-[18px] bg-[#020817]">
                <div className="relative h-[95px] w-full sm:h-[120px] lg:h-[135px] xl:h-[145px]">
                  <Image
                    src={currentReview.src}
                    alt={currentReview.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-contain"
                  />
                </div>

                <button
                  type="button"
                  onClick={showPreviousReview}
                  aria-label="Предыдущий отзыв"
                  className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#020817]/75 text-white opacity-100 backdrop-blur-md transition duration-200 hover:border-emerald-300/40 hover:text-emerald-300 focus-visible:pointer-events-auto focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/40 sm:pointer-events-none sm:opacity-0 sm:group-hover:pointer-events-auto sm:group-hover:opacity-100"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={showNextReview}
                  aria-label="Следующий отзыв"
                  className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#020817]/75 text-white opacity-100 backdrop-blur-md transition duration-200 hover:border-emerald-300/40 hover:text-emerald-300 focus-visible:pointer-events-auto focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/40 sm:pointer-events-none sm:opacity-0 sm:group-hover:pointer-events-auto sm:group-hover:opacity-100"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 flex flex-col gap-2.5 sm:mt-6 sm:gap-3">
                <div className="flex gap-1.5">
                  {reviewScreenshots.map((review, index) => (
                    <button
                      key={review.src}
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

                <span className="text-xs font-medium text-slate-400">
                  {activeReview + 1}/{reviewScreenshots.length}
                </span>
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