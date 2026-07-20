"use client";

import { Eye, Files, MonitorSmartphone, Users } from "lucide-react";
import type { AnalyticsSummary } from "@/types/analytics";

type AnalyticsSummaryProps = {
  data: AnalyticsSummary | null;
  isLoading: boolean;
  errorMessage: string;
};

const deviceLabels: Record<string, string> = {
  desktop: "Компьютеры",
  mobile: "Телефоны",
  tablet: "Планшеты",
};

export function AnalyticsSummaryPanel({
  data,
  isLoading,
  errorMessage,
}: AnalyticsSummaryProps) {
  if (isLoading) {
    return (
      <section className="mb-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-slate-300">
        Загрузка статистики...
      </section>
    );
  }

  if (errorMessage) {
    return (
      <section className="mb-10 rounded-3xl border border-amber-400/20 bg-amber-400/10 p-6 text-amber-200">
        {errorMessage}
      </section>
    );
  }

  if (!data) {
    return null;
  }

  const cards = [
    { label: "Просмотры", value: data.views, icon: Eye },
    { label: "Визиты", value: data.visits, icon: Users },
    {
      label: "Страниц за визит",
      value: data.pages_per_visit.toLocaleString("ru-RU"),
      icon: Files,
    },
    {
      label: "Период",
      value: `${data.period_days} дней`,
      icon: MonitorSmartphone,
    },
  ];

  return (
    <section className="mb-10">
      <div className="mb-5">
        <div className="text-xs uppercase tracking-[0.24em] text-emerald-300">
          Собственная аналитика
        </div>
        <h2 className="mt-2 text-2xl font-semibold text-white">
          Посещения сайта
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Обезличенные данные из PostgreSQL без сохранения IP-адресов.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
          >
            <Icon className="h-5 w-5 text-emerald-300" />
            <div className="mt-4 text-3xl font-semibold text-white">{value}</div>
            <div className="mt-1 text-sm text-slate-400">{label}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <AnalyticsList
          title="Популярные страницы"
          items={data.top_pages.map((item) => ({
            label: item.name,
            value: item.views,
          }))}
        />
        <AnalyticsList
          title="Источники"
          items={data.sources.map((item) => ({
            label: item.name === "direct" ? "Прямые заходы" : item.name,
            value: item.views,
          }))}
        />
        <AnalyticsList
          title="Устройства"
          items={data.devices.map((item) => ({
            label: deviceLabels[item.name] ?? item.name,
            value: item.views,
          }))}
        />
      </div>
    </section>
  );
}

function AnalyticsList({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; value: number }>;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <h3 className="font-medium text-white">{title}</h3>
      {items.length ? (
        <div className="mt-4 space-y-3">
          {items.slice(0, 8).map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between gap-3 text-sm"
            >
              <span className="min-w-0 truncate text-slate-300">
                {item.label}
              </span>
              <span className="shrink-0 font-medium text-emerald-300">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-sm text-slate-500">Данных пока нет.</p>
      )}
    </div>
  );
}
