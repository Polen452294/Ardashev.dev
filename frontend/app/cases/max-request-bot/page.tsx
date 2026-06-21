import type { Metadata } from "next";
import {
  CtaSection,
  InnerPageLayout,
  RelatedLinksSection,
  TagGridSection,
  TextGridSection,
} from "@/components/pages/inner-page-layout";

const siteUrl = "https://ardashev.dev";
const pageUrl = `${siteUrl}/cases/max-request-bot`;

export const metadata: Metadata = {
  title: "Кейс: Max бот для приема заявок — ardashev.dev",
  description:
    "Кейс разработки Max бота для приема консультационных заявок: сбор контактов, уточнение запроса, сценарии с кнопками и передача обращения в обработку.",
  alternates: {
    canonical: pageUrl,
  },
};

const taskAndSolution = [
  {
    title: "Задача",
    text: "Нужно было сделать простой канал приема обращений в Max, чтобы клиент мог оставить заявку через понятный сценарий, а бизнес получал уже собранные данные для дальнейшей обработки.",
  },
  {
    title: "Решение",
    text: "Бот ведет пользователя по шагам, задает нужные вопросы, собирает контактную информацию и формирует обращение, которое можно передавать менеджеру или подключать к CRM/API.",
  },
  {
    title: "Результат",
    text: "У бизнеса появляется отдельный канал приема заявок в Max, а первичная информация от клиента собирается автоматически и в понятной структуре.",
  },
];

const functions = [
  "Стартовый сценарий общения с клиентом",
  "Сбор контактных данных",
  "Уточнение запроса по шагам",
  "Кнопки и понятная навигация",
  "Передача заявки дальше",
  "Подготовка логики к расширению",
];

const technologies = [
  "Python",
  "Max API",
  "Сценарии с кнопками",
  "Обработка заявок",
  "Интеграции",
  "GitHub",
];

const relatedServices = [
  {
    title: "Разработка Max ботов",
    text: "Если нужно принимать заявки, консультации и обращения внутри Max.",
    href: "/max-bots",
  },
  {
    title: "CRM и API-интеграции",
    text: "Если заявки из Max нужно автоматически передавать в CRM, таблицу или внутренний сервис.",
    href: "/crm-integrations",
  },
  {
    title: "Разработка Telegram ботов",
    text: "Если похожий сценарий нужно реализовать в Telegram или перенести логику между мессенджерами.",
    href: "/telegram-bots",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Кейс: Max бот для приема заявок",
  description:
    "Разработка Max бота для приема консультационных заявок, сбора контактов и передачи обращений в обработку.",
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
    "разработка Max ботов",
    "бот для заявок",
    "автоматизация обращений",
    "бот для консультаций",
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
      name: "Max бот для приема заявок",
      item: pageUrl,
    },
  ],
};

export default function MaxRequestBotCasePage() {
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
        title="Max бот для приема заявок"
        description="Кейс бота в Max для первичного общения с клиентом: он помогает собрать контактные данные, уточнить запрос и передать обращение дальше без ручного переписывания информации."
        primaryText="Создать заказ"
        secondaryText="Открыть GitHub"
        secondaryHref="https://github.com/Polen452294/Max-Python-Bot"
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
          text="Основные возможности, которые помогают принимать обращения и передавать данные дальше."
          items={functions}
        />

        <TagGridSection
          eyebrow="Stack"
          title="Технологии проекта"
          text="Стек и элементы проекта, которые использовались для реализации сценария приема заявок."
          items={technologies}
        />

        <RelatedLinksSection items={relatedServices} />

        <CtaSection
          title="Нужен похожий Max бот?"
          text="Опишите, какие заявки или обращения должен принимать бот. Я помогу выбрать сценарий, структуру и способ передачи данных."
          buttonText="Создать заказ"
        />
      </InnerPageLayout>
    </>
  );
}