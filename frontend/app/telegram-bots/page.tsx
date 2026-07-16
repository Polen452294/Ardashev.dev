import type { Metadata } from "next";
import { KnowledgeLinksSection } from "@/components/blog/knowledge-links-section";
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
import { blogPosts } from "@/data/blog-posts";

const siteUrl = "https://ardashev.dev";
const pageUrl = `${siteUrl}/telegram-bots`;

export const metadata: Metadata = {
  title: "Разработка Telegram-ботов на заказ",
  description:
    "Разработка Telegram-ботов для бизнеса: прием заявок, CRM-интеграции, уведомления, админ-панели, оплата, базы данных и запуск на сервере.",
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
  "Разработка Telegram-бота на Python",
  "Подключение базы данных при необходимости",
  "Интеграция с CRM, API, таблицами или внешними сервисами",
  "Тестирование, запуск и помощь после публикации",
];

const examples = [
  { title: "Бот для заявок", text: "Задаёт вопросы по порядку, собирает контакты и передаёт готовое обращение менеджеру." },
  { title: "Бот для записи", text: "Помогает выбрать услугу и время, сохраняет запись и отправляет подтверждение." },
  { title: "Бот с оплатой", text: "Формирует платёжный шаг, получает статус операции и связывает его с заказом." },
  { title: "Бот с CRM", text: "Создаёт контакт или сделку и передаёт ответы пользователя без ручного копирования." },
  { title: "Бот с админ-панелью", text: "Позволяет просматривать заявки, менять статусы и управлять данными проекта." },
  { title: "Бот для уведомлений", text: "Сообщает сотрудникам о новых заявках, изменениях статуса и ошибках интеграций." },
];

const audience = [
  { title: "Отделам продаж", text: "Когда заявки приходят в Telegram, но менеджеры тратят время на одинаковые уточняющие вопросы." },
  { title: "Сервисному бизнесу", text: "Когда клиенту нужно выбрать услугу, записаться, оставить контакты или получить инструкцию." },
];

const problems = [
  { title: "Заявки теряются в переписке", text: "Бот сохраняет ответы и передаёт обращение в понятной структуре." },
  { title: "Данные приходится переносить вручную", text: "Контакты, комментарии и статусы автоматически уходят в CRM, таблицу или базу." },
];

const requirements = [
  "Описание текущего процесса и результата, который должен получить клиент",
  "Список вопросов, обязательных данных и возможных веток сценария",
  "Доступы к CRM, таблице или API, если нужна интеграция",
  "Тексты, реквизиты и правила обработки заявок",
];

const process = [
  { title: "Сценарий", text: "Фиксируем команды, вопросы, кнопки, статусы и действия после каждого ответа." },
  { title: "Рабочая версия", text: "Собираю основной путь пользователя и подключаю хранение данных." },
  { title: "Интеграции", text: "Добавляю CRM, оплату, таблицы, уведомления и обработку ошибок." },
  { title: "Проверка", text: "Проходим нормальные и ошибочные сценарии на тестовых данных." },
  { title: "Запуск", text: "Настраиваю окружение, webhook или polling и проверяю работу на сервере." },
];

const deliverables = [
  "Исходный код Telegram-бота и зафиксированная структура сценария",
  "База данных и интеграции, согласованные в составе проекта",
  "Настроенное окружение и рабочий запуск на сервере",
  "Инструкция по основным действиям и передача доступов",
];

const integrationExamples = [
  "amoCRM, Битрикс24 или другая CRM с доступным API",
  "Google Sheets, Excel, PostgreSQL и внутренние базы",
  "Платёжные провайдеры, сайты, формы и внешние REST API",
  "Уведомления менеджерам в Telegram и служебные журналы ошибок",
];

const risks = [
  "Telegram Bot API не даёт боту читать произвольные личные переписки пользователя",
  "Оплата и внешние API зависят от правил и доступности стороннего сервиса",
  "Сложный старый код иногда безопаснее частично переработать, чем расширять без аудита",
  "Для стабильной работы нужен сервер, мониторинг и корректное хранение токенов",
];

const caseStudies = [
  {
    title: "Telegram-бот для обмена USDT",
    text: "Кейс бота для обменного сервиса: оформление заявок, сбор данных, CRM-логика и автоматические напоминания клиентам.",
    href: "/cases/usdt-exchange-bot",
  },
];

const relatedServices = [
  {
    title: "CRM и API-интеграции",
    text: "Если Telegram-бот должен передавать заявки в CRM, таблицы, базу данных или внешний сервис.",
    href: "/crm-integrations",
  },
  {
    title: "Разработка Max-ботов",
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
    question: "Сколько стоит разработка Telegram-бота?",
    answer:
      "Стоимость зависит от сценария, количества экранов, интеграций, базы данных, админ-панели и дополнительных функций. Обычно сначала можно сделать минимальную рабочую версию, а затем постепенно расширять проект.",
  },
  {
    question: "Можно ли подключить Telegram-бота к CRM?",
    answer:
      "Да. Telegram-бот может передавать заявки, контакты, статусы, комментарии и другие данные в CRM, Google Sheets, Excel, базу данных или внутренний API.",
  },
  {
    question: "Можно ли доработать уже готового Telegram-бота?",
    answer:
      "Да, если есть доступ к коду и понятно, на каком стеке написан проект. Можно добавить новые функции, исправить ошибки, подключить CRM или перенести бота на сервер.",
  },
  {
    question: "Сколько времени занимает разработка Telegram-бота?",
    answer:
      "Простой бот для заявок можно сделать быстрее, сложный бот с CRM, оплатой, базой данных и админ-функциями требует больше времени. Сроки зависят от объема логики и интеграций.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Разработка Telegram-ботов на заказ",
  alternateName: [
    "Создание Telegram-ботов",
    "Telegram-бот для бизнеса",
    "Telegram-бот для заявок",
    "Telegram-бот с CRM",
  ],
  description:
    "Разработка Telegram-ботов для бизнеса: прием заявок, CRM-интеграции, уведомления, админ-панели, оплата, базы данных и запуск на сервере.",
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
  serviceType: "Разработка Telegram-ботов",
  category: "Боты, автоматизация заявок и CRM-интеграции",
  offers: {
    "@type": "Offer",
    url: `${siteUrl}/contacts`,
    availability: "https://schema.org/InStock",
    priceCurrency: "RUB",
    category: "Разработка Telegram-ботов",
    itemOffered: {
      "@type": "Service",
      name: "Разработка Telegram-бота под задачу бизнеса",
      url: pageUrl,
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Что входит в разработку Telegram-бота",
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
      name: "Разработка Telegram-ботов",
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
        eyebrow="Telegram-боты"
        title="Разработка Telegram-ботов на заказ"
        description="Разрабатываю Telegram-ботов для бизнеса: прием заявок, уведомления менеджерам, интеграции с CRM, Google Sheets, Excel, базами данных, оплатой и внешними API."
        primaryText="Создать заказ"
        secondaryText="Посмотреть кейсы"
      >
        <TwoColumnTextSection
          leftTitle="Какие задачи решает Telegram-бот"
          leftItems={tasks}
          rightTitle="Что входит в разработку"
          rightItems={includes}
        />

        <ServiceCommercialDetails
          audience={audience}
          problems={problems}
          requirements={requirements}
          process={process}
          deliverables={deliverables}
          timeline="Срок зависит от числа сценариев и интеграций. После короткого разбора задачи я разделяю работу на первую версию и последующие доработки и фиксирую сроки каждого этапа."
          pricing="Цена рассчитывается по составу первой версии: сценариям, базе данных, админ-панели, оплате и внешним API. До оценки отдельно фиксируется, что входит в работу и какие расходы оплачиваются сторонним сервисам."
          integrations={integrationExamples}
          risks={risks}
          support="После запуска проверяю рабочие сценарии, исправляю замечания в согласованном объёме и могу отдельно сопровождать новые функции и изменения API."
        />

        <TextGridSection
          eyebrow="Примеры использования"
          title="Примеры Telegram-ботов"
          text="Самые частые сценарии, с которых обычно начинается разработка бота для бизнеса."
          items={examples}
        />

        <CaseLinksSection
          title="Кейсы по разработке Telegram-ботов"
          text="Пример проекта, где бот помогает принимать заявки, хранить данные и возвращать клиентов к незавершенному сценарию."
          items={caseStudies}
        />

        <RelatedLinksSection items={relatedServices} />

        <KnowledgeLinksSection items={blogPosts} />

        <FaqSection items={faq} />

        <CtaSection
          title="Нужен Telegram-бот для заявок или CRM?"
          text="Напишите, какую задачу должен решать бот. Я помогу определить минимальную рабочую версию, структуру сценария и варианты интеграций."
          buttonText="Создать заказ"
        />
      </InnerPageLayout>
    </>
  );
}
