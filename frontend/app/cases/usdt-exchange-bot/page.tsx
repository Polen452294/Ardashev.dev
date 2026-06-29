import type { Metadata } from "next";
import {
  CtaSection,
  InnerPageLayout,
  RelatedLinksSection,
  TagGridSection,
  TextGridSection,
} from "@/components/pages/inner-page-layout";

const siteUrl = "https://ardashev.dev";
const pageUrl = `${siteUrl}/cases/usdt-exchange-bot`;

export const metadata: Metadata = {
  title: "Кейс: Telegram бот для обмена USDT — ardashev.dev",
  description:
    "Кейс разработки Telegram/VK бота для обменного сервиса: прием заявок на обмен USDT, сбор данных, CRM-логика и автоматические напоминания клиентам.",
  alternates: {
    canonical: pageUrl,
  },
};

const taskAndSolution = [
  {
    title: "Задача",
    text: "Нужно было сделать удобный сценарий приема заявок на обмен криптовалюты, чтобы клиент мог самостоятельно оставить данные, а менеджер получал уже структурированную заявку без лишней переписки.",
  },
  {
    title: "Решение",
    text: "Была реализована бот-система с пошаговым оформлением заявки, хранением данных, передачей обращения в обработку и автоматическими напоминаниями для клиентов, которые не завершили процесс.",
  },
  {
    title: "Результат",
    text: "Клиенты проходят понятный путь оформления заявки, менеджер получает данные в структурированном виде, а система снижает риск потери обращений за счет автоматических напоминаний.",
  },
];

const functions = [
  "Пошаговое оформление заявки на обмен USDT",
  "Выбор направления обмена, города и суммы",
  "Сбор контактных данных клиента",
  "Передача заявки в обработку",
  "Хранение статусов и данных заявки",
  "Автоматические напоминания о незавершенных заявках",
];

const technologies = [
  "Python",
  "Aiogram",
  "VK API",
  "PostgreSQL",
  "SQLAlchemy",
  "Docker",
  "CRM API",
  "Background worker",
];

const relatedServices = [
  {
    title: "Разработка Telegram ботов",
    text: "Если нужно принимать заявки, собирать данные клиентов и автоматизировать сценарии внутри Telegram.",
    href: "/telegram-bots",
  },
  {
    title: "CRM и API-интеграции",
    text: "Если заявки из бота нужно передавать в CRM, таблицы, базу данных или внутренний сервис.",
    href: "/crm-integrations",
  },
  {
    title: "Разработка Max ботов",
    text: "Если похожий сценарий приема заявок нужно реализовать в Max.",
    href: "/max-bots",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Кейс: Telegram бот для обмена USDT",
  description:
    "Разработка Telegram/VK бота для обменного сервиса: оформление заявок, передача данных в обработку и автоматические напоминания клиентам.",
  url: pageUrl,
  author: {
    "@type": "Person",
    name: "Александр Ардашев",
    url: siteUrl,
  },
  publisher: {
    "@type": "Organization",
    name: "ardashev.dev",
    url: siteUrl,
  },
  mainEntityOfPage: pageUrl,
  about: [
    "разработка Telegram ботов",
    "CRM-интеграции",
    "автоматизация заявок",
    "бот для обмена USDT",
  ],
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
      name: "Кейсы",
      item: `${siteUrl}/#portfolio`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Telegram бот для обмена USDT",
      item: pageUrl,
    },
  ],
};

export default function UsdtExchangeBotCasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <InnerPageLayout
        eyebrow="Case Study"
        title="Telegram бот для обмена USDT"
        description="Кейс бота для обменного сервиса: клиент выбирает направление обмена, вводит сумму, город и контактные данные, а система передает заявку в обработку и помогает не терять незавершенные обращения."
        primaryText="Создать заказ"
        secondaryText="Открыть GitHub"
        secondaryHref="https://github.com/Polen452294/USDT_Exchange_bot"
      >
        <TextGridSection
          eyebrow="Project"
          title="Задача, решение и результат"
          text="Кратко о том, зачем создавался проект, какая логика была реализована и какую пользу дает система."
          items={taskAndSolution}
        />

        <TagGridSection
          eyebrow="Функции"
          title="Что умеет бот"
          text="Основные возможности, которые помогают принимать заявки и сопровождать клиента по сценарию."
          items={functions}
        />

        <TagGridSection
          eyebrow="Stack"
          title="Технологии проекта"
          text="Стек, который использовался для разработки, хранения данных, интеграций и фоновой логики."
          items={technologies}
        />

        <RelatedLinksSection items={relatedServices} />

        <CtaSection
          title="Нужен похожий бот для заявок?"
          text="Опишите сценарий, который нужно автоматизировать. Я помогу определить структуру бота, нужные интеграции и первую рабочую версию."
          buttonText="Создать заказ"
        />
      </InnerPageLayout>
    </>
  );
}