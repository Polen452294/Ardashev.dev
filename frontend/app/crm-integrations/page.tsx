import type { Metadata } from "next";
import {
  CaseLinksSection,
  CtaSection,
  FaqSection,
  InnerPageLayout,
  RelatedLinksSection,
  TagGridSection,
  TwoColumnTextSection,
} from "@/components/pages/inner-page-layout";

const siteUrl = "https://ardashev.dev";
const pageUrl = `${siteUrl}/crm-integrations`;

export const metadata: Metadata = {
  title: "CRM и API-интеграции для ботов, сайтов и парсеров — ardashev.dev",
  description:
    "Интеграция Telegram ботов, Max ботов, сайтов и парсеров с CRM, API, Google Sheets, Excel, PostgreSQL и внутренними сервисами.",
  alternates: {
    canonical: pageUrl,
  },
};

const scenarios = [
  "Telegram бот передает заявку в CRM",
  "Max бот отправляет обращение менеджеру и в таблицу",
  "Парсер сохраняет найденные данные в базу или CRM",
  "Сайт отправляет форму в Telegram, CRM или Google Sheets",
  "Менеджеры получают уведомления о новых заявках",
  "Статусы и результаты обработки синхронизируются между сервисами",
];

const integrations = [
  "CRM API",
  "Google Sheets",
  "Excel",
  "PostgreSQL",
  "Telegram API",
  "Max API",
  "Webhook",
  "Внутренние сервисы",
];

const examples = [
  "Передача заявок, контактов, статусов и комментариев",
  "Проверка данных перед отправкой",
  "Повторные попытки при временных ошибках",
  "Логирование интеграций и ошибок",
  "Уведомления менеджерам",
  "Подготовка проекта к поддержке и доработкам",
];

const caseStudies = [
  {
    title: "Telegram бот для обмена USDT",
    text: "Кейс бота с заявками, статусами, хранением данных и логикой автоматических напоминаний.",
    href: "/cases/usdt-exchange-bot",
  },
  {
    title: "Парсер заказов с Profi.ru",
    text: "Кейс инструмента, где собранные данные можно передавать дальше в уведомления, таблицы, CRM или базу.",
    href: "/cases/profi-parser-bot",
  },
];

const relatedServices = [
  {
    title: "Разработка Telegram ботов",
    text: "Если CRM-интеграция нужна для Telegram бота, который принимает заявки и передает их менеджерам.",
    href: "/telegram-bots",
  },
  {
    title: "Разработка Max ботов",
    text: "Если заявки из Max бота нужно автоматически передавать в CRM, таблицу или внутренний сервис.",
    href: "/max-bots",
  },
  {
    title: "Парсеры сайтов и Telegram",
    text: "Если данные из парсера нужно сохранять, фильтровать и передавать в CRM или базу данных.",
    href: "/parsers",
  },
];

const faq = [
  {
    question: "Можно ли подключить бота к CRM?",
    answer:
      "Да. Бота можно связать с CRM через API или webhook, чтобы заявки, контакты, комментарии и статусы передавались автоматически.",
  },
  {
    question: "Можно ли передавать заявки в Google Sheets или Excel?",
    answer:
      "Да. Если полноценная CRM пока не нужна, заявки можно отправлять в Google Sheets, Excel-файлы, базу данных или другой удобный формат.",
  },
  {
    question: "Что делать, если CRM API временно недоступен?",
    answer:
      "В интеграции можно добавить повторные попытки, логирование ошибок и сохранение заявки, чтобы не потерять данные при временных сбоях.",
  },
  {
    question: "Можно ли связать парсер с CRM?",
    answer:
      "Да. Данные, найденные парсером, можно фильтровать, очищать от дублей и затем передавать в CRM, таблицу, базу данных или Telegram-уведомления.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CRM и API-интеграции для ботов, сайтов и парсеров",
  description:
    "Интеграция Telegram ботов, Max ботов, сайтов и парсеров с CRM, API, Google Sheets, Excel, PostgreSQL и внутренними сервисами.",
  url: pageUrl,
  provider: {
    "@type": "Person",
    name: "Александр Ардашев",
    url: siteUrl,
  },
  areaServed: "Россия",
  serviceType: "CRM и API-интеграции",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Главная",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "CRM и API-интеграции",
      item: pageUrl,
    },
  ],
};

export default function CrmIntegrationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <InnerPageLayout
        eyebrow="CRM & API"
        title="CRM и API-интеграции для ботов, сайтов и парсеров"
        description="Интегрирую Telegram ботов, Max ботов, сайты и парсеры с CRM, API, Google Sheets, Excel, PostgreSQL и внутренними сервисами, чтобы заявки и данные передавались автоматически."
        primaryText="Создать заказ"
        secondaryText="Посмотреть кейсы"
      >
        <TwoColumnTextSection
          leftTitle="Сценарии интеграций"
          leftItems={scenarios}
          rightTitle="С чем можно интегрировать"
          rightItems={integrations}
        />

        <TagGridSection
          eyebrow="Примеры"
          title="Примеры CRM и API-интеграций"
          text="Сценарии, где интеграция помогает автоматически передавать данные между ботами, сайтами, таблицами, CRM и внутренними сервисами."
          items={examples}
        /> 

        <CaseLinksSection
          title="Кейсы по CRM и API-интеграциям"
          text="Примеры проектов, где заявки и собранные данные передаются между ботами, парсерами, CRM и внутренними сервисами."
          items={caseStudies}
        />

        <RelatedLinksSection items={relatedServices} />

        <FaqSection items={faq} />

        <CtaSection
          title="Нужно связать бота, сайт или парсер с CRM?"
          text="Опишите, откуда нужно брать данные и куда их передавать. Я помогу продумать схему интеграции, обработку ошибок и стабильную передачу заявок."
          buttonText="Создать заказ"
        />
      </InnerPageLayout>
    </>
  );
}