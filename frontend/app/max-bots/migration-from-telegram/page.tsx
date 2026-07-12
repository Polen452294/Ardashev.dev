import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, CircleAlert } from "lucide-react";
import {
  CtaSection,
  FaqSection,
  InnerPageLayout,
  InnerPageSection,
  InnerPageTitle,
  RelatedLinksSection,
  TwoColumnTextSection,
} from "@/components/pages/inner-page-layout";
import { Card } from "@/components/ui/card";

const siteUrl = "https://ardashev.dev";
const pageUrl = `${siteUrl}/max-bots/migration-from-telegram`;

export const metadata: Metadata = {
  title: "Перенос Telegram-бота в MAX | ardashev.dev",
  description:
    "Адаптация Telegram-бота под MAX: аудит сценария, перенос бизнес-логики, кнопок, уведомлений, файлов и интеграций с CRM или API.",
  alternates: { canonical: pageUrl },
};

const canTransfer = [
  "Сценарий диалога и последовательность вопросов",
  "Бизнес-логику, проверки и правила обработки заявок",
  "Работу с базой данных, CRM, таблицами и внешними API",
  "Уведомления менеджерам и внутренние статусы",
  "Админ-панель и серверную часть, если они не зависят от Telegram",
];

const needsAdaptation = [
  "Получение событий и структура объектов Bot API",
  "Кнопки, callback-события и навигация внутри диалога",
  "Идентификаторы пользователей, чатов и сообщений",
  "Загрузка изображений, документов, аудио и видео",
  "Telegram-специфичные функции, оплаты, inline-режим и Mini Apps",
];

const stages = [
  {
    title: "1. Аудит текущего бота",
    text: "Проверяю код, сценарии, команды, кнопки, хранение данных и внешние интеграции. После аудита понятно, что можно использовать повторно.",
  },
  {
    title: "2. Карта соответствий",
    text: "Сопоставляю действия Telegram с возможностями MAX и отдельно отмечаю функции, которым нужна другая реализация.",
  },
  {
    title: "3. Адаптация кода",
    text: "Отделяю бизнес-логику от мессенджера, подключаю MAX Bot API и переношу сценарии по согласованному приоритету.",
  },
  {
    title: "4. Проверка сценариев",
    text: "Тестирую старт, кнопки, ввод данных, файлы, ошибки, уведомления и передачу заявок во внешние системы.",
  },
  {
    title: "5. Запуск",
    text: "Настраиваю окружение и получение событий, затем помогаю проверить работу бота после публикации.",
  },
] as const;

const estimateFactors = [
  "размер и состояние существующего кода",
  "количество сценариев и типов кнопок",
  "работа с файлами, оплатой или мини-приложением",
  "CRM, таблицы, платежные и другие внешние API",
  "нужно ли поддерживать Telegram и MAX одновременно",
] as const;

const relatedLinks = [
  {
    title: "Разработка MAX-ботов",
    text: "Общая страница направления: заявки, консультации, уведомления и интеграции.",
    href: "/max-bots",
  },
  {
    title: "Разработка Telegram-ботов",
    text: "Разработка и доработка исходной версии бота в Telegram.",
    href: "/telegram-bots",
  },
  {
    title: "CRM и API-интеграции",
    text: "Передача заявок и статусов между ботами, CRM, таблицами и внутренними системами.",
    href: "/crm-integrations",
  },
];

const faq = [
  {
    question: "Можно ли перенести Telegram-бота в MAX без полной переработки?",
    answer:
      "Часто можно сохранить бизнес-логику, базу данных и внешние интеграции. Код, который напрямую работает с Telegram Bot API, обычно приходится адаптировать под события и методы MAX.",
  },
  {
    question: "Будут ли Telegram и MAX работать одновременно?",
    answer:
      "Да, если отделить общую бизнес-логику от кода мессенджеров. Тогда два бота могут использовать одну базу данных и интеграции, но иметь отдельные обработчики сообщений и кнопок.",
  },
  {
    question: "Можно ли точно повторить все функции Telegram-бота?",
    answer:
      "Не всегда. Возможности и объекты API отличаются. До начала разработки составляется список функций: что переносится без изменений, что адаптируется и что лучше заменить другим сценарием.",
  },
  {
    question: "Как оценить срок и стоимость переноса?",
    answer:
      "Нужен короткий аудит текущего бота. Для предварительной оценки достаточно репозитория или описания сценариев, списка интеграций и функций, которые обязательно должны работать в MAX.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Перенос Telegram-бота в MAX",
  description:
    "Аудит и адаптация Telegram-бота под MAX с переносом бизнес-логики, сценариев, уведомлений и интеграций.",
  url: pageUrl,
  serviceType: "Перенос и адаптация ботов между мессенджерами",
  provider: {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Александр Ардашев",
  },
  areaServed: { "@type": "Country", name: "Россия" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Разработка MAX-ботов",
      item: `${siteUrl}/max-bots`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Перенос Telegram-бота в MAX",
      item: pageUrl,
    },
  ],
};

export default function MigrationFromTelegramPage() {
  return (
    <>
      {[serviceJsonLd, faqJsonLd, breadcrumbJsonLd].map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}

      <InnerPageLayout
        eyebrow="MAX Migration"
        title="Перенос Telegram-бота в MAX"
        description="Перенос начинается не с переписывания всего проекта, а с разбора текущего бота. Бизнес-логику и интеграции часто можно сохранить, а работу с сообщениями, кнопками и файлами адаптировать под MAX Bot API."
        primaryText="Оценить перенос"
        primaryHref="/#contact"
        secondaryText="Разработка MAX-ботов"
        secondaryHref="/max-bots"
      >
        <TwoColumnTextSection
          leftTitle="Что обычно можно сохранить"
          leftItems={canTransfer}
          rightTitle="Что нужно адаптировать"
          rightItems={needsAdaptation}
        />

        <InnerPageSection>
          <InnerPageTitle
            eyebrow="Process"
            title="Как проходит перенос"
            text="Сначала определяется объем повторного использования кода. Это снижает риск потерять рабочие функции при переходе на другую платформу."
          />
          <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
            {stages.map((stage) => (
              <Card key={stage.title} className="bg-[#081122]/72">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                <h2 className="mt-4 text-lg font-semibold text-white sm:text-xl">
                  {stage.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {stage.text}
                </p>
              </Card>
            ))}
          </div>
        </InnerPageSection>

        <InnerPageSection>
          <InnerPageTitle
            eyebrow="Estimate"
            title="От чего зависят срок и стоимость"
            text="Точная оценка без просмотра текущего бота будет неточной. На объем работ сильнее всего влияют следующие детали."
          />
          <Card className="relative overflow-hidden bg-[#081122]/72">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="relative grid gap-3 sm:grid-cols-2">
              {estimateFactors.map((factor) => (
                <div
                  key={factor}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300"
                >
                  <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                  {factor}
                </div>
              ))}
            </div>
          </Card>
        </InnerPageSection>

        <InnerPageSection>
          <Card className="bg-[#081122]/72">
            <div className="text-xs font-medium uppercase tracking-[0.24em] text-emerald-300">
              Documentation
            </div>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              Различия сверяются с актуальным API
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
              Возможности платформ меняются. Перед переносом я проверяю текущие методы, типы кнопок, правила получения событий и загрузки файлов в официальной документации.
            </p>
            <div className="mt-5 flex flex-wrap gap-4">
              <Link
                href="https://dev.max.ru/docs-api"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
              >
                MAX для разработчиков <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://core.telegram.org/bots/api"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
              >
                Telegram Bot API <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Card>
        </InnerPageSection>

        <RelatedLinksSection items={relatedLinks} />
        <FaqSection items={faq} />
        <CtaSection
          title="Хотите перенести работающего бота?"
          text="Пришлите ссылку на репозиторий или коротко опишите сценарии, кнопки и интеграции. После просмотра можно определить, какой код сохраняется и какие части нужно адаптировать под MAX."
          buttonText="Оценить перенос"
        />
      </InnerPageLayout>
    </>
  );
}
