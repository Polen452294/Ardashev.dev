import type { Metadata } from "next";
import {
  CaseStudyDetails,
  CtaSection,
  InnerPageLayout,
  RelatedLinksSection,
} from "@/components/pages/inner-page-layout";

const siteUrl = "https://ardashev.dev";
const pageUrl = `${siteUrl}/cases/profi-parser-bot`;

export const metadata: Metadata = {
  title: "Кейс: парсер заказов с Profi.ru",
  description:
    "Кейс разработки парсера заказов с Profi.ru: мониторинг новых заказов, фильтрация подходящих заявок и уведомления для быстрого реагирования.",
  alternates: {
    canonical: pageUrl,
  },
};

const facts = [
  { title: "Тип проекта", text: "Python-приложение для мониторинга новых заказов на динамической веб-странице и отправки релевантных карточек в Telegram." },
  { title: "Источник", text: "Profi.ru без отдельного публичного API для требуемого сценария; страница загружается через Playwright." },
  { title: "Роль Александра", text: "Авторизация, браузерный клиент, извлечение карточек, фильтры, хранение состояния, Telegram-уведомления и документация." },
];

const context = [
  { title: "Исходная проблема", text: "Новые заказы приходилось искать вручную, обновляя страницу и просматривая нерелевантные карточки." },
  { title: "Почему не обычный HTTP-запрос", text: "Контент загружается динамически, поэтому проект использует реальный браузер и работает с DOM через Playwright." },
  { title: "Ограничения", text: "Работа зависит от вёрстки, авторизации и правил площадки. Частые проверки увеличивают риск ограничений аккаунта." },
  { title: "Конфиденциальность", text: "Данные аккаунта, токен Telegram и реальные заказы не публикуются. В репозитории хранится только код и пример интерфейса." },
];

const architecture = [
  { title: "Авторизация", text: "Сессия входа сохраняется и повторно используется без постоянных логинов." },
  { title: "Playwright", text: "Headless-браузер открывает динамическую страницу и получает готовый DOM." },
  { title: "Parser", text: "Извлекает ID, заголовок, описание и ссылку каждой карточки." },
  { title: "Filters и storage", text: "Проверяют ключевые слова и сохраняют ID уже обработанных заказов." },
  { title: "Telegram", text: "Formatter готовит сообщение, а бот отправляет только новые подходящие заказы." },
];

const functionDetails = [
  { title: "Динамический контент", text: "Playwright ждёт загрузку страницы и работает с элементами, которых нет в исходном HTML." },
  { title: "Фильтр по ключевым словам", text: "Название и описание проверяются до отправки уведомления." },
  { title: "Защита от дублей", text: "ID обработанных карточек сохраняются и не отправляются повторно после перезапуска." },
  { title: "Telegram-уведомления", text: "Подходящий заказ приходит со структурированным описанием и ссылкой." },
  { title: "Настраиваемый интервал", text: "Период проверки задаётся конфигурацией и не должен быть агрессивным." },
  { title: "Разделение модулей", text: "Авторизация, клиент, parser, filters, storage и Telegram-часть разделены." },
];

const outcomes = [
  { title: "До", text: "Пользователь вручную обновлял страницу, просматривал карточки и проверял их соответствие специализации." },
  { title: "После", text: "Система отслеживает новые ID, применяет фильтр и отправляет в Telegram только подходящие заказы." },
  { title: "Измеримые показатели", text: "Статистика времени реакции и числа полученных заказов публично не собиралась. Результат подтверждается функционально, кодом и демонстрационным скриншотом." },
];

const retrospective = [
  { title: "После запуска", text: "В проекте появились сохранение авторизации, контроль новых ID и рекомендации по безопасному интервалу проверок." },
  { title: "Что улучшить сейчас", text: "Перенести секреты из config.py в переменные окружения, добавить устойчивые селекторы, тесты parser и уведомления об изменении структуры страницы." },
  { title: "Следующий этап", text: "Хранить историю в базе данных, добавить несколько наборов фильтров и метрики успешных и ошибочных циклов." },
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
  "@id": `${pageUrl}#article`,
  headline: "Кейс: парсер заказов с Profi.ru",
  description:
    "Разработка парсера заказов с Profi.ru: сбор подходящих заявок, фильтрация, обработка данных и уведомления в Telegram.",
  url: pageUrl,
  inLanguage: "ru-RU",
  author: {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Александр Ардашев",
    url: siteUrl,
  },
  publisher: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "ardashev.dev",
    url: siteUrl,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": pageUrl,
  },
  about: [
    "разработка парсеров",
    "парсер заказов",
    "парсинг Profi.ru",
    "Telegram уведомления",
    "автоматизация поиска заявок",
    "CRM-интеграции",
  ],
  mentions: relatedServices.map((service) => ({
    "@type": "Service",
    name: service.title,
    url: `${siteUrl}${service.href}`,
  })),
};

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${pageUrl}#software`,
  name: "Парсер заказов с Profi.ru",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: pageUrl,
  description:
    "Парсер заказов с Profi.ru для автоматического поиска подходящих заявок, фильтрации по условиям, обработки данных и отправки уведомлений в Telegram.",
  creator: {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Александр Ардашев",
    url: siteUrl,
  },
  provider: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "ardashev.dev",
    url: siteUrl,
  },
  featureList: functions,
  programmingLanguage: ["Python"],
  softwareRequirements: technologies,
  offers: {
    "@type": "Offer",
    url: `${siteUrl}/parsers`,
    availability: "https://schema.org/InStock",
    priceCurrency: "RUB",
    category: "Разработка парсеров",
  },
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
      item: `${siteUrl}/cases`,
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationJsonLd),
        }}
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
        <CaseStudyDetails
          facts={facts}
          context={context}
          architecture={architecture}
          functions={functionDetails}
          outcomes={outcomes}
          retrospective={retrospective}
          githubUrl="https://github.com/Polen452294/Profi.ru_Parser_Bot"
          mediaUrl="https://raw.githubusercontent.com/Polen452294/Profi.ru_Parser_Bot/main/docs/screenshots/parser_example.jpg"
          mediaAlt="Пример уведомления парсера заказов Profi.ru"
          evidenceNote="В репозитории опубликован пример уведомления и исходный код модулей авторизации, парсинга, фильтрации, хранения ID и Telegram-отправки."
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
