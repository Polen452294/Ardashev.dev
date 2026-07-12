import type { Metadata } from "next";
import {
  CaseStudyDetails,
  CtaSection,
  InnerPageLayout,
  RelatedLinksSection,
} from "@/components/pages/inner-page-layout";

const siteUrl = "https://ardashev.dev";
const pageUrl = `${siteUrl}/cases/max-request-bot`;

export const metadata: Metadata = {
  title: "Кейс: разработка MAX-бота на Python — ardashev.dev",
  description:
    "Демонстрационный проект MAX-бота на Python: асинхронная архитектура, API-клиент, обработчики, сервисный слой и основа для MVP.",
  alternates: {
    canonical: pageUrl,
  },
};

const facts = [
  { title: "Тип проекта", text: "Демонстрационный асинхронный MAX-бот и стартовая база для MVP, а не завершённый клиентский проект." },
  { title: "Назначение", text: "Проверить структуру приложения, получение событий MAX API, обработчики и возможность дальнейшего подключения бизнес-логики." },
  { title: "Роль Александра", text: "Архитектура проекта, API-клиент, обработчики, конфигурация окружения, mock CRM и документация запуска." },
];

const context = [
  { title: "Исходная проблема", text: "Для нового мессенджера требовалась понятная Python-основа, которую можно быстро развернуть и расширять без смешивания API-кода и бизнес-логики." },
  { title: "Почему не копия Telegram-бота", text: "MAX использует собственные методы, события и структуры данных, поэтому прямой перенос обработчиков дал бы хрупкую архитектуру." },
  { title: "Ограничения", text: "Проект демонстрационный: в нём нет подтверждённого клиентского трафика, коммерческой CRM и статистики эксплуатации." },
  { title: "Статус", text: "Репозиторий обозначает проект как WIP и основу для дальнейшего развития." },
];

const architecture = [
  { title: "Core", text: "Загружает настройки и переменные окружения без хранения токенов в исходном коде." },
  { title: "API", text: "Изолирует HTTP-взаимодействие с платформой MAX." },
  { title: "Handlers", text: "Получают команды и события и выбирают нужное действие." },
  { title: "Services", text: "Место для сценариев, заявок и внешних интеграций без зависимости от транспорта." },
  { title: "Mock CRM", text: "Позволяет отрабатывать передачу данных до подключения реальной CRM." },
];

const functionDetails = [
  { title: "Асинхронная обработка", text: "События обрабатываются без блокировки основного цикла приложения." },
  { title: "Модульная структура", text: "API, конфигурация, обработчики и сервисы разделены по назначению." },
  { title: "Переменные окружения", text: "Токен и адрес API задаются вне исходного кода." },
  { title: "Команды и события", text: "Входящие сообщения направляются в отдельные обработчики." },
  { title: "Mock-интеграция", text: "CRM-сценарий можно проверять до появления боевых доступов." },
  { title: "Основа для MVP", text: "Структура рассчитана на добавление кнопок, заявок, уведомлений и API." },
];

const outcomes = [
  { title: "До", text: "Не было оформленной базы проекта MAX с разделением платформенного кода и будущей бизнес-логики." },
  { title: "После", text: "Есть запускаемый Python-проект с модулями API, handlers, services, core и документацией окружения." },
  { title: "Измеримые показатели", text: "Проект демонстрационный, поэтому клиентские показатели и экономический эффект отсутствуют. Результат оценивался функционально." },
];

const retrospective = [
  { title: "После запуска", text: "Боевой запуск у клиента не заявлен; отдельного журнала эксплуатационных исправлений нет." },
  { title: "Что улучшить сейчас", text: "Зафиксировать версии API, добавить контрактные тесты клиента MAX и автоматическую проверку обработчиков." },
  { title: "Следующий этап", text: "Подключить реальный сценарий заявок, постоянное хранилище, журнал ошибок и метрики обработки событий." },
];

const functions = [
  "Асинхронная обработка событий",
  "HTTP-клиент MAX API",
  "Модульные обработчики",
  "Сервисный слой",
  "Конфигурация через .env",
  "Mock CRM для тестирования интеграции",
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
  "@id": `${pageUrl}#article`,
  headline: "Кейс: разработка MAX-бота на Python",
  description:
    "Демонстрационный асинхронный MAX-бот на Python с модульной архитектурой и основой для дальнейшего MVP.",
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
    "разработка Max ботов",
    "Max бот для заявок",
    "автоматизация обращений",
    "бот для консультаций",
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
  name: "MAX Python Bot",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Max",
  url: pageUrl,
  description:
    "Демонстрационный MAX-бот на Python с API-клиентом, обработчиками, сервисным слоем, конфигурацией окружения и mock CRM.",
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
    url: `${siteUrl}/max-bots`,
    availability: "https://schema.org/InStock",
    priceCurrency: "RUB",
    category: "Разработка Max ботов",
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
      name: "MAX Python Bot",
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
        title="MAX Python Bot: стартовая база для MVP"
        description="Демонстрационный проект на Python, созданный для проверки MAX Bot API и модульной архитектуры. Это не клиентский кейс с коммерческими показателями, а открытая основа для будущих сценариев и интеграций."
        primaryText="Создать заказ"
        secondaryText="Открыть GitHub"
        secondaryHref="https://github.com/Polen452294/Max-Python-Bot"
      >
        <CaseStudyDetails
          facts={facts}
          context={context}
          architecture={architecture}
          functions={functionDetails}
          outcomes={outcomes}
          retrospective={retrospective}
          githubUrl="https://github.com/Polen452294/Max-Python-Bot"
          mediaUrl="https://raw.githubusercontent.com/Polen452294/Max-Python-Bot/main/docs/demo.gif"
          mediaAlt="Демонстрация работы MAX Python Bot"
          evidenceNote="Демонстрация и весь исходный код опубликованы в GitHub. Кейс обозначен как демонстрационный, поэтому не приписывает проекту клиентские показатели."
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
