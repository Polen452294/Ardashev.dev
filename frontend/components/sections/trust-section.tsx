import { BadgeCheck, FileCheck2, ShieldCheck, Star } from "lucide-react";
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

export function TrustSection() {
  return (
    <section className="mx-auto px-10 py-5 sm:px-8 sm:py-7 lg:px-12 lg:py-9 xl:px-16 xl:py-10 2xl:px-20 2xl:py-12 max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1320px]"
    >
      <SectionTitle
        eyebrow="Reviews & Reputation"
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
              Можно перейти на профиль Profi.ru, посмотреть отзывы, ознакомиться с
              аккаунтом и увидеть подтвержденную платформой личность. Такой формат
              делает старт сотрудничества спокойнее и прозрачнее.
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-2.5 sm:mt-6 sm:gap-3">
            <GlowButton href="https://profi.ru/profile/ArdashevAD/#reviews-tab">Отзывы на Profi.ru</GlowButton>
            <GlowButton href="https://profi.ru/profile/ArdashevAD/" secondary>
              Профиль на Profi.ru
            </GlowButton>
          </div>
        </Card>
      </div>
    </section>
  );
}