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
const pageUrl = `${siteUrl}/max-bots`;

export const metadata: Metadata = {
  title: "Разработка Max ботов на заказ — ardashev.dev",
  description:
    "Разработка Max ботов для бизнеса: прием заявок, консультации, сценарии с кнопками, уведомления, интеграции с таблицами, CRM и внутренними сервисами.",
  alternates: {
    canonical: pageUrl,
  },
};

const tasks = [
  "Принимать заявки и обращения через Max",
  "Собирать контакты и ответы клиента по шагам",
  "Передавать данные менеджеру, в таблицу или CRM",
  "Настраивать сценарии с кнопками и понятной логикой",
  "Уведомлять сотрудников о новых заявках",
  "Переносить часть логики Telegram бота в Max",
];

const includes = [
  "Разбор сценария и цели Max бота",
  "Проектирование структуры диалога",
  "Разработка логики приема заявок",
  "Интеграция с таблицами, CRM или API",
  "Тестирование на реальном сценарии",
  "Запуск и помощь после передачи проекта",
];

const examples = [
  "Бот для заявок",
  "Бот для консультаций",
  "Бот для записи",
  "Бот для поддержки",
  "Бот с уведомлениями",
  "Перенос Telegram бота в Max",
];

const caseStudies = [
  {
    title: "Max бот для приема заявок",
    text: "Кейс бота в Max для первичного общения с клиентом, сбора контактов, уточнения запроса и передачи обращения дальше.",
    href: "/cases/max-request-bot",
  },
];

const relatedServices = [
  {
    title: "Разработка Telegram ботов",
    text: "Если нужно сделать основную версию бота в Telegram или перенести готовую логику между мессенджерами.",
    href: "/telegram-bots",
  },
  {
    title: "CRM и API-интеграции",
    text: "Если Max бот должен передавать заявки в CRM, таблицы, базу данных или внутреннюю систему.",
    href: "/crm-integrations",
  },
  {
    title: "Парсеры сайтов и Telegram",
    text: "Если к боту нужно подключить сбор данных из сайтов, площадок или открытых источников.",
    href: "/parsers",
  },
];

const faq = [
  {
    question: "Можно ли сделать бота для Max по логике Telegram бота?",
    answer:
      "Да. Если уже есть понятный сценарий Telegram бота, его можно адаптировать под Max с учетом возможностей платформы и нужных интеграций.",
  },
  {
    question: "Можно ли подключить Max бота к CRM или таблицам?",
    answer:
      "Да. Max бот может передавать заявки и контакты в CRM, Google Sheets, Excel, базу данных или внутренний сервис через API.",
  },
  {
    question: "Для каких задач подходит Max бот?",
    answer:
      "Max бот подходит для приема заявок, консультаций, записи клиентов, уведомлений, первичной квалификации обращений и передачи данных менеджерам.",
  },
  {
    question: "Можно ли начать с простой версии Max бота?",
    answer:
      "Да. Часто лучше начать с минимальной версии: сценарий вопросов, сбор контактов и передача заявки. После проверки можно добавить CRM, статусы и дополнительные функции.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Разработка Max ботов на заказ",
  description:
    "Разработка Max ботов для бизнеса: прием заявок, консультации, сценарии с кнопками, уведомления, интеграции с таблицами, CRM и внутренними сервисами.",
  url: pageUrl,
  provider: {
    "@type": "Person",
    name: "Александр Ардашев",
    url: siteUrl,
  },
  areaServed: "Россия",
  serviceType: "Разработка Max ботов",
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
      name: "Разработка Max ботов",
      item: pageUrl,
    },
  ],
};

export default function MaxBotsPage() {
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
        eyebrow="Max Bots"
        title="Разработка Max ботов на заказ"
        description="Разрабатываю ботов для Max: прием заявок, консультации, уведомления, сценарии с кнопками, интеграции с таблицами, CRM и внутренними сервисами."
        primaryText="Создать заказ"
        secondaryText="Посмотреть кейсы"
      >
        <TwoColumnTextSection
          leftTitle="Что может делать Max бот"
          leftItems={tasks}
          rightTitle="Что входит в работу"
          rightItems={includes}
        />

        <TagGridSection
          eyebrow="Примеры"
          title="Примеры Max ботов"
          text="Сценарии, которые чаще всего используют для приема заявок и первичного общения с клиентами."
          items={examples}
        />

        <CaseLinksSection
          title="Кейсы по разработке Max ботов"
          text="Пример бота для приема обращений в Max с понятной структурой диалога."
          items={caseStudies}
        />

        <RelatedLinksSection items={relatedServices} />

        <FaqSection items={faq} />

        <CtaSection
          title="Нужен Max бот?"
          text="Опишите, какие заявки или обращения должен принимать бот. Я помогу выбрать сценарий, структуру и способ передачи данных."
          buttonText="Создать заказ"
        />
      </InnerPageLayout>
    </>
  );
}