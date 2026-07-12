import type { Metadata } from "next";
import {
  CaseStudyDetails,
  CtaSection,
  InnerPageLayout,
  RelatedLinksSection,
} from "@/components/pages/inner-page-layout";

const siteUrl = "https://ardashev.dev";
const pageUrl = `${siteUrl}/cases/usdt-exchange-bot`;

export const metadata: Metadata = {
  title: "Кейс: Telegram бот для обмена USDT — ardashev.dev",
  description:
  "Кейс разработки Telegram бота для обменного сервиса: прием заявок на обмен USDT, сбор данных, CRM-логика и автоматические напоминания клиентам.",
  alternates: {
    canonical: pageUrl,
  },
};

const facts = [
  {
    title: "Тип проекта",
    text: "Рабочая система для обменного сервиса: Telegram-бот, VK-бот, PostgreSQL, CRM-клиент и отдельный worker напоминаний.",
  },
  {
    title: "Заказчик и дата",
    text: "Название заказчика и точная дата разработки публично не раскрываются. Репозиторий опубликован как пример реализованной архитектуры.",
  },
  {
    title: "Роль Александра",
    text: "Проектирование сценариев, разработка ботов и сервисного слоя, модели данных, CRM-интеграция, worker и подготовка Docker-запуска.",
  },
];

const context = [
  { title: "Исходная проблема", text: "Менеджеру требовалось получать не свободное сообщение, а заявку с направлением обмена, суммой, офисом и контактами клиента." },
  { title: "Почему не хватало обычной формы", text: "Заявка оформляется внутри мессенджера, а незавершённый диалог должен сохраняться и продолжаться без повторного ввода данных." },
  { title: "Ограничения", text: "Два канала должны использовать одну базу и бизнес-логику, CRM может работать в mock- или real-режиме, а напоминания не должны дублироваться." },
  { title: "Конфиденциальность", text: "Реальные токены, CRM-доступы, клиентские данные и коммерческие показатели в открытом репозитории отсутствуют." },
];

const architecture = [
  { title: "Telegram и VK", text: "Отдельные точки входа принимают события и передают действия в общий сервисный слой." },
  { title: "Сервисный слой", text: "Draft, request и nudge-сервисы управляют черновиком заявки, подтверждением и повторными касаниями." },
  { title: "PostgreSQL", text: "SQLAlchemy-модели и repositories сохраняют заявки, статусы и состояние напоминаний." },
  { title: "CRM-клиент", text: "Infrastructure-слой передаёт подтверждённую заявку во внешнюю CRM или работает в mock-режиме." },
  { title: "Nudge worker", text: "Отдельный процесс проверяет условия напоминаний 1–7 и защищает отправку от повторов." },
];

const functionDetails = [
  { title: "Пошаговая заявка", text: "Пользователь выбирает направление, сумму и офис, затем проверяет сводку перед подтверждением." },
  { title: "Два мессенджера", text: "Telegram и VK используют общую базу данных и сервисную бизнес-логику." },
  { title: "CRM", text: "Подтверждённая заявка создаётся во внешней системе через отдельный клиент." },
  { title: "Напоминания", text: "Worker отправляет серию повторных касаний по таймерам и учитывает ответы пользователя." },
  { title: "Тестовые режимы", text: "Задержки напоминаний можно сократить для приёмочной проверки сценария." },
  { title: "Docker-запуск", text: "Бот, worker и база подготовлены к раздельному запуску в окружении проекта." },
];

const outcomes = [
  { title: "До", text: "Данные заявки требовалось собирать в переписке и переносить в обработку вручную." },
  { title: "После", text: "Система формирует структурированную заявку, сохраняет её и запускает CRM-обработку и напоминания." },
  { title: "Измеримые показатели", text: "Заказчик не передал публичную статистику конверсии или экономии времени. Результат подтверждается функционально и открытым кодом." },
];

const retrospective = [
  { title: "После запуска", text: "Публичный репозиторий содержит тестовые режимы напоминаний и пошаговую процедуру приёмки, но журнал исправлений после реальной эксплуатации не раскрывается." },
  { title: "Что улучшить сейчас", text: "Унифицировать имена CRM-переменных окружения, расширить автоматические тесты сервисного слоя и добавить health-check для отдельных процессов." },
  { title: "Следующий этап", text: "Добавить наблюдаемость: метрики прохождения шагов, ошибки CRM и долю заявок, завершённых после напоминания." },
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
  "@id": `${pageUrl}#article`,
  headline: "Кейс: Telegram бот для обмена USDT",
  description:
    "Разработка Telegram бота для обменного сервиса: оформление заявок, передача данных в обработку и автоматические напоминания клиентам.",
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
    "разработка Telegram ботов",
    "Telegram бот для заявок",
    "CRM-интеграции",
    "автоматизация заявок",
    "бот для обмена USDT",
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
  name: "Telegram бот для обмена USDT",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Telegram",
  url: pageUrl,
  description:
    "Telegram бот для обменного сервиса: пошаговое оформление заявки, сбор контактных данных, передача обращения в обработку, хранение статусов и автоматические напоминания.",
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
    url: `${siteUrl}/telegram-bots`,
    availability: "https://schema.org/InStock",
    priceCurrency: "RUB",
    category: "Разработка Telegram ботов",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
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
        <CaseStudyDetails
          facts={facts}
          context={context}
          architecture={architecture}
          functions={functionDetails}
          outcomes={outcomes}
          retrospective={retrospective}
          githubUrl="https://github.com/Polen452294/USDT_Exchange_bot"
          mediaUrl="https://raw.githubusercontent.com/Polen452294/USDT_Exchange_bot/master/assets/demo.gif"
          mediaAlt="Демонстрация оформления заявки в USDT Exchange Bot"
          evidenceNote="В репозитории опубликована демонстрация полного сценария: выбор параметров обмена, подтверждение заявки и работа напоминаний."
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
