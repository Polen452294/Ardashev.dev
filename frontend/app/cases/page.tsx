import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Layers3 } from "lucide-react";
import {
  CtaSection,
  InnerPageLayout,
  InnerPageSection,
  InnerPageTitle,
} from "@/components/pages/inner-page-layout";
import { Card } from "@/components/ui/card";
import { portfolio } from "@/data/site-data";

const siteUrl = "https://ardashev.dev";
const pageUrl = `${siteUrl}/cases`;

export const metadata: Metadata = {
  title: "Кейсы ботов, парсеров и интеграций",
  description:
    "Примеры разработки Telegram и Max-ботов, парсеров и систем автоматизации: задача, стек, реализация и результат.",
  alternates: { canonical: pageUrl },
};

const caseCategories = ["Боты", "Max", "Парсеры", "CRM и интеграции"];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${pageUrl}#cases`,
  name: "Кейсы Ardashev.dev",
  itemListElement: portfolio.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.title,
    description: item.result,
    url: `${siteUrl}${item.caseUrl}`,
  })),
};

export default function CasesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <InnerPageLayout
        eyebrow="Кейсы"
        title="Кейсы разработки и автоматизации"
        description="Примеры проектов с разными задачами: прием заявок в мессенджерах, автоматизация общения и мониторинг новых заказов."
        primaryText="Обсудить похожую задачу"
        primaryHref="/#contact"
        secondaryText="Все услуги"
        secondaryHref="/services"
      >
        <InnerPageSection>
          <InnerPageTitle
            eyebrow="Портфолио"
            title="Реализованные проекты"
            text="В каждой карточке указаны задача, техническая основа и подтвержденный результат без выдуманных показателей."
          />

          <div className="mb-5 flex flex-wrap gap-2">
            {caseCategories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="grid gap-3 sm:gap-4 lg:grid-cols-3">
            {portfolio.map((item) => (
              <Card
                key={item.caseUrl}
                className="group relative overflow-hidden bg-[#081122]/72"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl transition group-hover:bg-emerald-400/15" />
                <div className="relative flex h-full flex-col">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                    <Layers3 className="h-3.5 w-3.5" />
                    {item.stack}
                  </div>

                  <h2 className="mt-4 text-xl font-semibold text-white">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>

                  <div className="mt-5 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                    <p className="text-sm leading-6 text-slate-300">
                      <span className="font-semibold text-white">Результат: </span>
                      {item.result}
                    </p>
                  </div>

                  <Link
                    href={item.caseUrl}
                    className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
                  >
                    Открыть кейс
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </InnerPageSection>

        <InnerPageSection>
          <Card className="relative overflow-hidden bg-[#081122]/72">
            <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="relative grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <div className="text-xs font-medium uppercase tracking-[0.24em] text-emerald-300">
                  Approach
                </div>
                <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  От задачи к рабочему решению
                </h2>
              </div>
              <p className="text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                Сначала уточняется процесс и минимальная рабочая версия. Затем проектируется сценарий, данные и интеграции, после чего решение проверяется на реальной задаче и готовится к запуску.
              </p>
            </div>
          </Card>
        </InnerPageSection>

        <CtaSection
          title="Нужен похожий проект?"
          text="Пришлите описание текущего процесса или ссылку на подходящий кейс. Это поможет быстрее определить состав первой версии и необходимые интеграции."
        />
      </InnerPageLayout>
    </>
  );
}
