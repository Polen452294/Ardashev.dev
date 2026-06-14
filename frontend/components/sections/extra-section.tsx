import {
  BarChart3,
  Bot,
  Database,
  FileText,
  Layers3,
  Rocket,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

const extraItems = [
  {
    title: "Быстрый запуск MVP",
    text: "Можно быстро запустить первую рабочую версию проекта, чтобы проверить идею на практике и не тратить месяцы на подготовку.",
    icon: Rocket,
  },
  {
    title: "Удобный старт общения",
    text: "Простой и понятный способ связи: мессенджер, email или короткий бриф для первичной оценки.",
    icon: Database,
  },
  {
    title: "Боты и автоматизация",
    text: "Проект можно дополнить ботами, уведомлениями и автоматическими сценариями.",
    icon: Bot,
  },
  {
    title: "Интеграции с CRM и API",
    text: "Связка с CRM, таблицами, внутренними сервисами и внешними API.",
    icon: Layers3,
  },
  {
    title: "Аналитика и управляемость",
    text: "Можно подключить аналитику, статусы и административные инструменты.",
    icon: BarChart3,
  },
  {
    title: "Кейсы и доверие",
    text: "Понятная подача услуг и реальные кейсы помогают быстрее перейти к обсуждению проекта.",
    icon: FileText,
  },
];

export function ExtraSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-5 sm:px-8 sm:py-7 lg:max-w-6xl lg:px-12 lg:py-9 xl:max-w-7xl xl:px-16 xl:py-10 2xl:max-w-[1320px] 2xl:px-20 2xl:py-12"
    >
      <SectionTitle
        eyebrow="Extra Value"
        title="Что вы получаете на выходе"
        text="Не просто код, а инструмент, который помогает упрощать процессы и готовить проект к дальнейшему росту."
      />

      <div className="grid grid-cols-2 gap-2.5 sm:gap-5 xl:grid-cols-3">
        {extraItems.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.title} className="h-full p-3.5 sm:p-6">
              <div className="mb-2.5 inline-flex rounded-[18px] border border-emerald-400/20 bg-emerald-400/10 p-2.5 text-emerald-300 sm:mb-4 sm:rounded-2xl sm:p-3">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>

              <h3 className="text-[15px] font-semibold leading-5 text-white sm:text-lg sm:leading-6">
                {item.title}
              </h3>

              <p className="mt-2 text-[13px] leading-5 text-slate-300 sm:mt-3 sm:text-sm sm:leading-7">
                {item.text}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}