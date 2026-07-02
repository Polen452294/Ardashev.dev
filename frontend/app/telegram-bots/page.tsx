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
const pageUrl = `${siteUrl}/telegram-bots`;

export const metadata: Metadata = {
  title: "Разработка Telegram ботов на заказ — ardashev.dev",
  description:
    "Разработка Telegram ботов для бизнеса: прием заявок, CRM-интеграции, уведомления, админ-панели, оплата, базы данных и запуск на сервере.",
  alternates: {
    canonical: pageUrl,
  },
};

const tasks = [
  "Принимать заявки от клиентов через понятный сценарий с кнопками",
  "Передавать заявки в CRM, Google Sheets, Excel или базу данных",
  "Уведомлять менеджеров о новых обращениях",
  "Собирать контакты, суммы, даты, адреса и другие данные",
  "Подключать админ-панель, оплату, статусы и напоминания",
  "Запускать бота на сервере и готовить проект к дальнейшей поддержке",
];

const includes = [
  "Разбор задачи и структуры будущего бота",
  "Проектирование сценария общения с пользователем",
  "Разработка Telegram бота на Python",
  "Подключение базы данных при необходимости",
  "Интеграция с CRM, API, таблицами или внешними сервисами",
  "Тестирование, запуск и помощь после публикации",
];

const examples = [
  "Для приема заявок",
  "Для записи клиентов",
  "Для консультаций",
  "Бот с оплатой",
  "Бот с CRM",
  "Бот с админ-панелью",
];

const caseStudies = [
  {
    title: "Telegram бот для обмена USDT",
    text: "Кейс бота для обменного сервиса: оформление заявок, сбор данных, CRM-логика и автоматические напоминания клиентам.",
    href: "/cases/usdt-exchange-bot",
  },
];

const relatedServices = [
  {
    title: "CRM и API-интеграции",
    text: "Если Telegram бот должен передавать заявки в CRM, таблицы, базу данных или внешний сервис.",
    href: "/crm-integrations",
  },
  {
    title: "Разработка Max ботов",
    text: "Если нужно сделать похожий сценарий приема заявок не только в Telegram, но и в Max.",
    href: "/max-bots",
  },
  {
    title: "Парсеры сайтов и Telegram",
    text: "Если боту нужно получать данные из сайтов, площадок, каналов или внешних источников.",
    href: "/parsers",
  },
];

const faq = [
  {
    question: "Сколько стоит разработка Telegram бота?",
    answer:
      "Стоимость зависит от сценария, количества экранов, интеграций, базы данных, админ-панели и дополнительных функций. Обычно сначала можно сделать минимальную рабочую версию, а затем постепенно расширять проект.",
  },
  {
    question: "Можно ли подключить Telegram бота к CRM?",
    answer:
      "Да. Telegram бот может передавать заявки, контакты, статусы, комментарии и другие данные в CRM, Google Sheets, Excel, базу данных или внутренний API.",
  },
  {
    question: "Можно ли доработать уже готового Telegram бота?",
    answer:
      "Да, если есть доступ к коду и понятно, на каком стеке написан проект. Можно добавить новые функции, исправить ошибки, подключить CRM или перенести бота на сервер.",
  },
  {
    question: "Сколько времени занимает разработка Telegram бота?",
    answer:
      "Простой бот для заявок можно сделать быстрее, сложный бот с CRM, оплатой, базой данных и админ-функциями требует больше времени. Сроки зависят от объема логики и интеграций.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Разработка Telegram ботов на заказ",
  alternateName: [
    "Создание Telegram ботов",
    "Telegram бот для бизнеса",
    "Telegram бот для заявок",
    "Telegram бот с CRM",
  ],
  description:
    "Разработка Telegram ботов для бизнеса: прием заявок, CRM-интеграции, уведомления, админ-панели, оплата, базы данных и запуск на сервере.",
  url: pageUrl,
  provider: {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Александр Ардашев",
    url: siteUrl,
  },
  areaServed: {
    "@type": "Country",
    name: "Россия",
  },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Бизнес",
  },
  serviceType: "Разработка Telegram ботов",
  category: "Боты, автоматизация заявок и CRM-интеграции",
  offers: {
    "@type": "Offer",
    url: `${siteUrl}/contacts`,
    availability: "https://schema.org/InStock",
    priceCurrency: "RUB",
    category: "Разработка Telegram ботов",
    itemOffered: {
      "@type": "Service",
      name: "Разработка Telegram бота под задачу бизнеса",
      url: pageUrl,
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Что входит в разработку Telegram бота",
    itemListElement: includes.map((item) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: item,
      },
    })),
  },
  subjectOf: caseStudies.map((item) => ({
    "@type": "Article",
    name: item.title,
    description: item.text,
    url: `${siteUrl}${item.href}`,
  })),
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
  "@id": `${pageUrl}#breadcrumb`,
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
      name: "Разработка Telegram ботов",
      item: pageUrl,
    },
  ],
};

export default function TelegramBotsPage() {
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
        eyebrow="Telegram Bots"
        title="Разработка Telegram ботов на заказ"
        description="Разрабатываю Telegram ботов для бизнеса: прием заявок, уведомления менеджерам, интеграции с CRM, Google Sheets, Excel, базами данных, оплатой и внешними API."
        primaryText="Создать заказ"
        secondaryText="Посмотреть кейсы"
      >
        <TwoColumnTextSection
          leftTitle="Какие задачи решает Telegram бот"
          leftItems={tasks}
          rightTitle="Что входит в разработку"
          rightItems={includes}
        />

        <TagGridSection
          eyebrow="Examples of use"
          title="Примеры Telegram ботов"
          text="Самые частые сценарии, с которых обычно начинается разработка бота для бизнеса."
          items={examples}
        />

        <CaseLinksSection
          title="Кейсы по разработке Telegram ботов"
          text="Пример проекта, где бот помогает принимать заявки, хранить данные и возвращать клиентов к незавершенному сценарию."
          items={caseStudies}
        />

        <RelatedLinksSection items={relatedServices} />

        <FaqSection items={faq} />

        <CtaSection
          title="Нужен Telegram бот для заявок или CRM?"
          text="Напишите, какую задачу должен решать бот. Я помогу определить минимальную рабочую версию, структуру сценария и варианты интеграций."
          buttonText="Создать заказ"
        />
      </InnerPageLayout>
    </>
  );
}