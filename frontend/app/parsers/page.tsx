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
const pageUrl = `${siteUrl}/parsers`;

export const metadata: Metadata = {
  title: "Разработка парсеров на заказ — ardashev.dev",
  description:
    "Разработка парсеров для сайтов, каталогов, маркетплейсов, Telegram-каналов и открытых источников с выгрузкой в Excel, Google Sheets, базу данных, CRM или Telegram бота.",
  alternates: {
    canonical: pageUrl,
  },
};

const dataTypes = [
  "Товары, цены, характеристики и остатки",
  "Контакты, карточки компаний и открытые профили",
  "Заказы, объявления и новые публикации",
  "Сообщения, посты и данные из Telegram-каналов",
  "Данные из каталогов, площадок и открытых источников",
  "Результаты поиска с фильтрацией по ключевым словам",
];

const outputs = [
  "Excel-файл",
  "Google Sheets",
  "PostgreSQL или другая база данных",
  "CRM-система",
  "Telegram-уведомления",
  "Админ-панель или внутренний сервис",
];

const features = [
  "Регулярный сбор данных по расписанию",
  "Фильтрация и дедупликация результатов",
  "Уведомления о новых подходящих данных",
  "Работа с прокси и ограничениями площадок",
  "Экспорт результатов в удобном формате",
  "Логи, статусы и контроль ошибок",
];

const caseStudies = [
  {
    title: "Парсер заказов с Profi.ru",
    text: "Кейс инструмента для отслеживания новых заказов, фильтрации подходящих заявок и уведомлений для быстрого реагирования.",
    href: "/cases/profi-parser-bot",
  },
];

const relatedServices = [
  {
    title: "CRM и API-интеграции",
    text: "Если результаты парсинга нужно автоматически отправлять в CRM, таблицы, базу данных или внутренний сервис.",
    href: "/crm-integrations",
  },
  {
    title: "Разработка Telegram ботов",
    text: "Если парсер должен отправлять уведомления, отчеты или найденные заявки в Telegram бота.",
    href: "/telegram-bots",
  },
  {
    title: "Разработка Max ботов",
    text: "Если результаты парсинга нужно передавать в Max или использовать в сценарии Max бота.",
    href: "/max-bots",
  },
];

const faq = [
  {
    question: "Какие сайты и источники можно парсить?",
    answer:
      "Можно собирать данные с сайтов, каталогов, открытых площадок, Telegram-каналов и других источников, если данные технически доступны и их сбор не нарушает ограничения площадки.",
  },
  {
    question: "Куда можно выгружать результаты парсинга?",
    answer:
      "Результаты можно сохранять в Excel, Google Sheets, PostgreSQL, CRM, внутренний сервис или отправлять уведомлениями в Telegram бота.",
  },
  {
    question: "Можно ли сделать регулярный парсинг по расписанию?",
    answer:
      "Да. Парсер может запускаться по расписанию, проверять новые данные, фильтровать результаты, удалять дубли и отправлять уведомления о подходящих находках.",
  },
  {
    question: "Можно ли добавить фильтрацию по ключевым словам?",
    answer:
      "Да. В парсер можно добавить фильтры по ключевым словам, городам, категориям, цене, дате публикации и другим параметрам, которые есть в источнике.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Разработка парсеров на заказ",
  description:
    "Разработка парсеров для сайтов, каталогов, маркетплейсов, Telegram-каналов и открытых источников с выгрузкой в Excel, Google Sheets, базу данных, CRM или Telegram бота.",
  url: pageUrl,
  provider: {
    "@type": "Person",
    name: "Александр Ардашев",
    url: siteUrl,
  },
  areaServed: "Россия",
  serviceType: "Разработка парсеров",
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
      name: "Разработка парсеров",
      item: pageUrl,
    },
  ],
};

export default function ParsersPage() {
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
        eyebrow="Parsers"
        title="Разработка парсеров на заказ"
        description="Разрабатываю парсеры для сбора данных с сайтов, каталогов, маркетплейсов, Telegram-каналов и открытых источников. Результаты можно выгружать в Excel, Google Sheets, базу данных, CRM или отправлять в Telegram бота."
        primaryText="Создать заказ"
        secondaryText="Посмотреть кейсы"
      >
        <TwoColumnTextSection
          leftTitle="Какие данные можно собирать"
          leftItems={dataTypes}
          rightTitle="Куда можно выгружать результаты"
          rightItems={outputs}
        />

        <TagGridSection
          eyebrow="Возможности"
          title="Что можно добавить в парсер"
          text="Дополнительные функции, которые делают парсер удобным не только для разовой выгрузки, но и для регулярной работы."
          items={features}
        />

        <CaseLinksSection
          title="Кейсы по разработке парсеров"
          text="Пример проекта, где парсер помогает отслеживать новые заказы и быстрее реагировать на подходящие заявки."
          items={caseStudies}
        />

        <RelatedLinksSection items={relatedServices} />

        <FaqSection items={faq} />

        <CtaSection
          title="Нужен парсер сайта или Telegram?"
          text="Напишите, какие данные нужно собирать, откуда их брать и куда выгружать результат. Я помогу оценить реализуемость и предложу минимальную рабочую версию."
          buttonText="Создать заказ"
        />
      </InnerPageLayout>
    </>
  );
}