import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/site-data";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="mx-auto max-w-5xl px-6 py-5 sm:px-8 sm:py-7 lg:max-w-6xl lg:px-12 lg:py-9 xl:max-w-7xl xl:px-16 xl:py-10 2xl:max-w-[1320px] 2xl:px-20 2xl:py-12"
    >
      <SectionTitle
        eyebrow="Услуги"
        title="Основные услуги"
        text="Отдельные направления, под которые можно заказать разработку: боты для Telegram и MAX, парсеры данных, CRM и API-интеграции."
      />

      <div className="grid grid-cols-2 gap-2.5 sm:gap-6 xl:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Link
              key={service.title}
              href={service.href}
              className="group block h-full"
            >
              <Card className="relative z-10 flex h-full min-h-[50px] flex-col p-3.5 sm:min-h-[355px] sm:p-6">
                <div className="mb-2.5 inline-flex w-fit rounded-[18px] border border-emerald-400/20 bg-emerald-400/10 p-2.5 text-emerald-300 transition group-hover:border-emerald-300/40 group-hover:bg-emerald-400/15 sm:mb-4 sm:rounded-2xl sm:p-3">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>

                <h3 className="text-[15px] font-semibold leading-5 text-white transition group-hover:text-emerald-100 sm:text-xl sm:leading-7">
                  {service.title}
                </h3>

                <p className="mt-1.5 text-[13px] leading-5 text-slate-300 sm:mt-3 sm:text-sm sm:leading-7">
                  {service.text}
                </p>

                <div className="mt-auto hidden items-center gap-2 pt-6 text-sm font-medium text-emerald-300 sm:flex">
                  Подробнее
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
