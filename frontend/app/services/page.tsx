import type { Metadata } from "next";
import { withPageSocialMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import {
  CtaSection,
  InnerPageLayout,
  InnerPageSection,
  InnerPageTitle,
} from "@/components/pages/inner-page-layout";
import { Card } from "@/components/ui/card";
import { services } from "@/data/site-data";

const siteUrl = "https://ardashev.dev";
const pageUrl = `${siteUrl}/services`;

export const metadata: Metadata = withPageSocialMetadata({
  title: "Услуги разработки и автоматизации",
  description:
    "Telegram-боты, Max-боты, парсеры, CRM и API-интеграции для автоматизации заявок, данных и бизнес-процессов.",
  alternates: { canonical: pageUrl },
}, pageUrl);

const serviceDetails = [
  {
    href: "/telegram-bots",
    audience: "Бизнесу, которому нужно принимать заявки и общаться с клиентами в Telegram.",
    result: "Рабочий бот со сценарием, хранением данных и нужными интеграциями.",
  },
  {
    href: "/max-bots",
    audience: "Компаниям, которые используют Max или хотят добавить новый канал обращений.",
    result: "Max-бот для заявок, консультаций, уведомлений и передачи данных.",
  },
  {
    href: "/parsers",
    audience: "Командам, которые вручную ищут заказы, цены, публикации или другие данные.",
    result: "Система сбора, фильтрации, выгрузки и уведомлений по заданным условиям.",
  },
  {
    href: "/crm-integrations",
    audience: "Бизнесу, где данные приходится переносить между сервисами вручную.",
    result: "Связанные между собой боты, сайты, CRM, таблицы, базы данных и API.",
  },
] as const;

const comparisonItems = [
  {
    title: "Нужно принимать обращения",
    text: "Подойдет Telegram-бот или Max-бот с понятным сценарием и передачей заявки менеджеру.",
  },
  {
    title: "Нужно собирать данные",
    text: "Подойдет парсер с фильтрацией, выгрузкой в таблицу и уведомлениями о новых результатах.",
  },
  {
    title: "Нужно связать сервисы",
    text: "Подойдет CRM/API-интеграция для автоматической передачи контактов, статусов и событий.",
  },
] as const;

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${pageUrl}#services`,
  name: "Услуги Ardashev.dev",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: `${siteUrl}${service.href}`,
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${pageUrl}#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Главная",
      item: siteUrl,
      url: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Услуги",
      item: pageUrl,
      url: pageUrl,
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <InnerPageLayout
        eyebrow="Услуги"
        title="Услуги разработки и автоматизации"
        description="Разрабатываю ботов, парсеры и интеграции под конкретный процесс: от первого обращения клиента до передачи данных в CRM, таблицу или внутреннюю систему."
        primaryText="Обсудить задачу"
        primaryHref="/#contact"
        secondaryText="Посмотреть кейсы"
        secondaryHref="/cases"
      >
        <InnerPageSection>
          <InnerPageTitle
            eyebrow="Направления"
            title="Основные направления"
            text="Выберите страницу услуги, чтобы посмотреть задачи, функции, примеры и формат разработки подробнее."
          />

          <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              const details = serviceDetails.find(
                (item) => item.href === service.href,
              );

              return (
                <Card
                  key={service.href}
                  className="group relative overflow-hidden bg-[#081122]/72"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl transition group-hover:bg-emerald-400/15" />

                  <div className="relative flex h-full flex-col">
                    <div className="inline-flex w-fit rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h2 className="mt-4 text-xl font-semibold text-white sm:text-2xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {service.text}
                    </p>

                    {details && (
                      <div className="mt-5 grid gap-2.5">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300">
                          <span className="font-semibold text-white">Кому подходит: </span>
                          {details.audience}
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300">
                          <span className="font-semibold text-white">Результат: </span>
                          {details.result}
                        </div>
                      </div>
                    )}

                    <Link
                      href={service.href}
                      className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
                    >
                      Подробнее об услуге
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </InnerPageSection>

        <InnerPageSection>
          <InnerPageTitle
            eyebrow="Выбор решения"
            title="Как выбрать направление"
            text="Если задача затрагивает несколько систем, решение можно объединить в один проект."
          />
          <div className="grid gap-3 sm:gap-4 lg:grid-cols-3">
            {comparisonItems.map((item) => (
              <Card key={item.title} className="bg-[#081122]/72">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                <h2 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </Card>
            ))}
          </div>
        </InnerPageSection>

        <CtaSection
          title="Не уверены, какая услуга подходит?"
          text="Опишите текущий процесс и желаемый результат. Я помогу определить формат решения и следующий шаг без необходимости заранее готовить полное техническое задание."
        />
      </InnerPageLayout>
    </>
  );
}
