import type { Metadata } from "next";
import {
  CaseLinksSection,
  CtaSection,
  FaqSection,
  InnerPageLayout,
  RelatedLinksSection,
  ServiceCommercialDetails,
  TextGridSection,
  TwoColumnTextSection,
} from "@/components/pages/inner-page-layout";

const siteUrl = "https://ardashev.dev";
const pageUrl = `${siteUrl}/max-bots`;

export const metadata: Metadata = {
  title: "Разработка Max-ботов на заказ",
  description:
    "Разработка Max-ботов для бизнеса: прием заявок, консультации, сценарии с кнопками, уведомления, интеграции с таблицами, CRM и внутренними сервисами.",
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
  "Переносить часть логики Telegram-бота в Max",
];

const includes = [
  "Разбор сценария и цели Max-бота",
  "Проектирование структуры диалога",
  "Разработка логики приема заявок",
  "Интеграция с таблицами, CRM или API",
  "Тестирование на реальном сценарии",
  "Запуск и помощь после передачи проекта",
];

const examples = [
  { title: "Бот для заявок", text: "Собирает контакты и детали обращения, затем передаёт заявку ответственному сотруднику." },
  { title: "Бот для консультаций", text: "Уточняет тему вопроса и контекст до подключения менеджера." },
  { title: "Бот для записи", text: "Помогает выбрать услугу или время и сохраняет данные клиента." },
  { title: "Бот поддержки", text: "Распределяет типовые обращения и передаёт сложные вопросы специалисту." },
  { title: "Бот уведомлений", text: "Отправляет сотрудникам события из CRM, сайта или внутренней системы." },
  { title: "Перенос из Telegram", text: "Сохраняет общую бизнес-логику, а работу с событиями и кнопками адаптирует под Max Bot API." },
];

const audience = [
  { title: "Компаниям, работающим в Max", text: "Когда клиентам и сотрудникам нужен привычный канал для заявок, уведомлений или поддержки." },
  { title: "Владельцам Telegram-ботов", text: "Когда нужно запустить второй канал без копирования всей бизнес-логики с нуля." },
];

const problems = [
  { title: "Обращения приходят без структуры", text: "Бот уточняет данные до передачи менеджеру и уменьшает число повторных вопросов." },
  { title: "События остаются во внутренних системах", text: "Max-бот доставляет сотрудникам нужные уведомления и ссылки на действия." },
];

const requirements = [
  "Описание аудитории и сценария: кто пишет боту и какой результат ожидается",
  "Перечень вопросов, кнопок, уведомлений и служебных статусов",
  "Доступы и документация внешних CRM или API",
  "Код Telegram-бота, если задача связана с переносом",
];

const process = [
  { title: "Разбор задачи", text: "Определяем основной путь пользователя и обязательные интеграции." },
  { title: "Проектирование", text: "Фиксируем структуру событий, кнопок, данных и ошибок." },
  { title: "Разработка", text: "Подключаю Max Bot API и собираю рабочий сценарий." },
  { title: "Интеграции", text: "Передаю заявки и события в CRM, таблицы или внутренние сервисы." },
  { title: "Запуск", text: "Проверяю получение событий, права бота и поведение на реальных устройствах." },
];

const deliverables = [
  "Исходный код Max-бота с согласованными сценариями",
  "Хранение заявок и подключённые интеграции",
  "Настроенное получение событий через webhook или long polling",
  "Рабочий запуск и инструкция по проверке основных функций",
];

const integrationExamples = [
  "CRM, Google Sheets, PostgreSQL и внутренние базы данных",
  "REST API сайта, личного кабинета или системы заявок",
  "Уведомления сотрудникам и передача обращения менеджеру",
  "Общая серверная логика для одновременной работы Telegram и Max",
];

const risks = [
  "Функции Telegram нельзя считать автоматически доступными в Max: возможности API нужно сопоставлять",
  "События, идентификаторы, кнопки и загрузка файлов имеют собственную структуру",
  "Изменения платформы могут потребовать обновления интеграции после запуска",
  "Работа внешних CRM и API зависит от их лимитов, доступов и стабильности",
];

const caseStudies = [
  {
    title: "Max-бот для приема заявок",
    text: "Кейс бота в Max для первичного общения с клиентом, сбора контактов, уточнения запроса и передачи обращения дальше.",
    href: "/cases/max-request-bot",
  },
];

const relatedServices = [
  {
    title: "Перенос Telegram-бота в Max",
    text: "Отдельный разбор переноса бизнес-логики, кнопок, файлов и интеграций на Max Bot API.",
    href: "/max-bots/migration-from-telegram",
  },
  {
    title: "Разработка Telegram-ботов",
    text: "Если нужно сделать основную версию бота в Telegram или перенести готовую логику между мессенджерами.",
    href: "/telegram-bots",
  },
  {
    title: "CRM и API-интеграции",
    text: "Если Max-бот должен передавать заявки в CRM, таблицы, базу данных или внутреннюю систему.",
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
    question: "Можно ли сделать бота для Max по логике Telegram-бота?",
    answer:
      "Да. Бизнес-логику и интеграции часто можно сохранить, а код сообщений, кнопок и файлов адаптировать под Max Bot API. Подробный процесс описан на отдельной странице переноса Telegram-бота в Max.",
  },
  {
    question: "Можно ли подключить Max-бота к CRM или таблицам?",
    answer:
      "Да. Max-бот может передавать заявки и контакты в CRM, Google Sheets, Excel, базу данных или внутренний сервис через API.",
  },
  {
    question: "Для каких задач подходит Max-бот?",
    answer:
      "Max-бот подходит для приема заявок, консультаций, записи клиентов, уведомлений, первичной квалификации обращений и передачи данных менеджерам.",
  },
  {
    question: "Можно ли начать с простой версии Max-бота?",
    answer:
      "Да. Часто лучше начать с минимальной версии: сценарий вопросов, сбор контактов и передача заявки. После проверки можно добавить CRM, статусы и дополнительные функции.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Разработка Max-ботов на заказ",
  alternateName: [
    "Создание Max-ботов",
    "Max-бот для бизнеса",
    "Max-бот для заявок",
    "Max-бот с CRM",
  ],
  description:
    "Разработка Max-ботов для бизнеса: прием заявок, консультации, сценарии с кнопками, уведомления, интеграции с таблицами, CRM и внутренними сервисами.",
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
  serviceType: "Разработка Max-ботов",
  category: "Боты, автоматизация заявок и CRM-интеграции",
  offers: {
    "@type": "Offer",
    url: `${siteUrl}/contacts`,
    availability: "https://schema.org/InStock",
    priceCurrency: "RUB",
    category: "Разработка Max-ботов",
    itemOffered: {
      "@type": "Service",
      name: "Разработка Max-бота под задачу бизнеса",
      url: pageUrl,
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Что входит в разработку Max-бота",
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
      name: "Разработка Max-ботов",
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
        eyebrow="Max-боты"
        title="Разработка Max-ботов на заказ"
        description="Разрабатываю ботов для Max: прием заявок, консультации, уведомления, сценарии с кнопками, интеграции с таблицами, CRM и внутренними сервисами."
        primaryText="Создать заказ"
        secondaryText="Посмотреть кейсы"
      >
        <TwoColumnTextSection
          leftTitle="Что может делать Max-бот"
          leftItems={tasks}
          rightTitle="Что входит в работу"
          rightItems={includes}
        />

        <ServiceCommercialDetails
          audience={audience}
          problems={problems}
          requirements={requirements}
          process={process}
          deliverables={deliverables}
          timeline="Срок определяется после проверки сценария и интеграций. Для переноса существующего Telegram-бота сначала проводится аудит кода и составляется список функций, которые можно сохранить."
          pricing="Стоимость зависит от количества веток, типов событий, внешних систем и необходимости поддерживать два мессенджера. Оценка делится на обязательную первую версию и дополнительные функции."
          integrations={integrationExamples}
          risks={risks}
          support="После запуска проверяю доставку событий и заявок, исправляю согласованные замечания и при необходимости обновляю интеграцию при изменениях Max Bot API."
        />

        <TextGridSection
          eyebrow="Примеры"
          title="Примеры Max-ботов"
          text="Сценарии, которые чаще всего используют для приема заявок и первичного общения с клиентами."
          items={examples}
        />

        <CaseLinksSection
          title="Кейсы по разработке Max-ботов"
          text="Пример бота для приема обращений в Max с понятной структурой диалога."
          items={caseStudies}
        />

        <RelatedLinksSection items={relatedServices} />

        <FaqSection items={faq} />

        <CtaSection
          title="Нужен Max-бот?"
          text="Опишите, какие заявки или обращения должен принимать бот. Я помогу выбрать сценарий, структуру и способ передачи данных."
          buttonText="Создать заказ"
        />
      </InnerPageLayout>
    </>
  );
}
