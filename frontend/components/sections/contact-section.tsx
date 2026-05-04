import { CheckCircle2, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  "Прием и удобная обработка заявок",
  "Личный кабинет или административная панель",
  "Уведомления в Telegram и по email",
  "Интеграция с CRM и внешними сервисами",
  "Аналитика и контроль эффективности"
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto px-5 py-7 sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:px-16 xl:py-14 2xl:px-20 2xl:py-16 max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1320px]"
    >
      <Card className="overflow-hidden p-0">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-8 md:p-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-emerald-300">
              <MessageCircle className="h-3.5 w-3.5" />
              Contact
            </div>

            <h3 className="text-3xl font-semibold tracking-tight text-white">
              Обсудить проект
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
              Можно связаться удобным способом, описать задачу и обсудить, какое решение подойдет под цели проекта, сроки и формат работы.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://t.me/likeaatea"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white transition hover:border-emerald-300/30 hover:bg-white/[0.08]"
              >
                <MessageCircle className="h-4 w-4 text-emerald-300" />
                Telegram
              </a>

              <a
                href="https://max.ru/u/f9LHodD0cOLBuQru9TuIcrq9TtQ-rk93xm-oFACo-BCvcrba4KdlG37ts_M"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white transition hover:border-emerald-300/30 hover:bg-white/[0.08]"
              >
                <MessageCircle className="h-4 w-4 text-emerald-300" />
                Max
              </a>

              <a
                href="mailto:aardashev8@gmail.com"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white transition hover:border-emerald-300/30 hover:bg-white/[0.08]"
              >
                Email
              </a>
            </div>
          </div>

          <div className="border-l border-white/10 bg-slate-950/40 p-8 md:p-10">
            <div className="text-sm text-slate-400">Возможности проекта</div>

            <div className="mt-3 text-xl font-semibold text-white">
              Что можно добавить в проект
            </div>

            <div className="mt-6 space-y-4">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}