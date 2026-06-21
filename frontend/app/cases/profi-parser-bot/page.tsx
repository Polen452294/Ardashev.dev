import type { Metadata } from "next";
import {
  CtaSection,
  InnerPageLayout,
  RelatedLinksSection,
  TagGridSection,
  TextGridSection,
} from "@/components/pages/inner-page-layout";

const siteUrl = "https://ardashev.dev";
const pageUrl = `${siteUrl}/cases/profi-parser-bot`;

export const metadata: Metadata = {
  title: "Кейс: парсер заказов с Profi.ru — ardashev.dev",
  description:
    "Кейс разработки парсера заказов с Profi.ru: мониторинг новых заказов, фильтрация подходящих заявок и уведомления для быстрого реагирования.",
  alternates: {
    canonical: pageUrl,
  },
};

const taskAndSolution = [
  {
    title: "Задача",
    text: "Нужно было сократить время на ручной поиск новых заказов и сделать систему, которая сама проверяет источник, отбирает подходящие заявки и помогает быстрее на них реагировать.",
  },
  {
    title: "Решение",
    text: "Был реализован парсер с логикой проверки новых заказов, фильтрацией результатов и уведомлениями, чтобы пользователь видел только подходящие варианты и не тратил время на ручной мониторинг.",
  },
  {
    title: "Результат",
    text: "Поиск заказов становится быстрее и удобнее: система сама отслеживает источник, помогает отбирать подходящие заявки и снижает количество ручной проверки.",
  },
];

const functions = [
  "Мониторинг новых заказов",
  "Фильтрация заявок по условиям",
  "Уведомления о подходящих заказах",
  "Экономия времени на ручном поиске",
  "Подготовка данных в удобном виде",
  "Возможность расширения под новые источники",
];

const technologies = [
  "Python",
  "Парсинг данных",
  "Фильтрация",
  "Уведомления",
  "Прокси",
  "Автоматизация",
];

const relatedServices = [
  {
    title: "Парсеры сайтов и Telegram",
    text: "Если нужно собирать данные с сайтов, каталогов, площадок или открытых источников.",
    href: "/parsers",
  },
  {
    title: "Разработка Telegram ботов",
    text: "Если результаты парсинга нужно отправлять в Telegram бота или уведомлять менеджеров.",
    href: "/telegram-bots",
  },
  {
    title: "CRM и API-интеграции",
    text: "Если найденные данные нужно передавать в CRM, таблицы, базу данных или внутренний сервис.",
    href: "/crm-integrations",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Кейс: парсер заказов с Profi.ru",
  description:
    "Разработка парсера для мониторинга заказов, фильтрации подходящих заявок и отправки уведомлений.",
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
    "разработка парсеров",
    "парсер заказов",
    "автоматизация поиска заявок",
    "уведомления о новых заказах",
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
      name: "Парсер заказов с Profi.ru",
      item: pageUrl,
    },
  ],
};

export default function ProfiParserBotCasePage() {
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
        title="Парсер заказов с Profi.ru"
        description="Кейс инструмента, который помогает отслеживать новые заказы, отбирать подходящие варианты и быстрее реагировать на заявки без постоянного ручного мониторинга площадки."
        primaryText="Создать заказ"
        secondaryText="Открыть GitHub"
        secondaryHref="https://github.com/Polen452294/Profi.ru_Parser_Bot"
      >
        <TextGridSection
          eyebrow="Project"
          title="Задача, решение и результат"
          text="Кратко о том, зачем создавался проект, какая логика была реализована и какую пользу дает система."
          items={taskAndSolution}
        />

        <TagGridSection
          eyebrow="Функции"
          title="Что умеет парсер"
          text="Основные возможности, которые помогают быстрее находить подходящие заявки и не мониторить площадку вручную."
          items={functions}
        />

        <TagGridSection
          eyebrow="Stack"
          title="Технологии проекта"
          text="Инструменты и подходы, которые использовались для сбора, фильтрации и передачи данных."
          items={technologies}
        />

        <RelatedLinksSection items={relatedServices} />

        <CtaSection
          title="Нужен похожий парсер?"
          text="Напишите, какие данные нужно собирать, откуда их брать и куда выгружать результат. Я помогу оценить реализуемость и предложу удобную структуру проекта."
          buttonText="Создать заказ"
        />
      </InnerPageLayout>
    </>
  );
}