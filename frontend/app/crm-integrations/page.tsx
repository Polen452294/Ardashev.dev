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
const pageUrl = `${siteUrl}/crm-integrations`;

export const metadata: Metadata = {
  title: "Интеграция CRM и API для ботов и сайтов",
  description:
    "Интеграция Telegram-ботов, MAX-ботов, сайтов и парсеров с CRM, API, Google Sheets, Excel, PostgreSQL и внутренними сервисами.",
  alternates: {
    canonical: pageUrl,
  },
};

const scenarios = [
  "Telegram-бот передает заявку в CRM",
  "MAX-бот отправляет обращение менеджеру и в таблицу",
  "Парсер сохраняет найденные данные в базу или CRM",
  "Сайт отправляет форму в Telegram, CRM или Google Sheets",
  "Менеджеры получают уведомления о новых заявках",
  "Статусы и результаты обработки синхронизируются между сервисами",
];

const integrations = [
  "CRM API",
  "Google Sheets",
  "Excel",
  "PostgreSQL",
  "Telegram API",
  "MAX API",
  "Webhook",
  "Внутренние сервисы",
];

const examples = [
  { title: "Бот и CRM", text: "Создаёт контакт и сделку из ответов пользователя, сохраняя источник и комментарий." },
  { title: "Сайт и CRM", text: "Передаёт форму, проверяет обязательные поля и уведомляет менеджера о новой заявке." },
  { title: "Парсер и база", text: "Нормализует найденные данные и сохраняет только новые записи." },
  { title: "Синхронизация статусов", text: "Передаёт изменение этапа между системами и не создаёт повторные операции." },
  { title: "Google Sheets как первый этап", text: "Сохраняет заявки в таблицу, когда полноценная CRM пока не нужна." },
  { title: "Контроль ошибок", text: "Повторяет временно неуспешные запросы и сообщает о данных, которые не удалось передать." },
];

const audience = [
  { title: "Отделам продаж и поддержки", text: "Когда заявки приходят из нескольких каналов и сотрудники переносят их вручную." },
  { title: "Компаниям с внутренними системами", text: "Когда CRM, сайт, бот и база данных должны обмениваться событиями без копирования." },
];

const problems = [
  { title: "Заявки теряются между сервисами", text: "Интеграция фиксирует передачу, повторяет временные ошибки и оставляет журнал." },
  { title: "Статусы расходятся", text: "Правила синхронизации определяют источник истины и порядок обновлений." },
];

const requirements = [
  "Описание систем, направления передачи и обязательных полей",
  "Тестовые доступы, документация API и примеры данных",
  "Правила создания дублей, обновления статусов и обработки ошибок",
  "Контакт специалиста со стороны CRM или внутренней системы при необходимости",
];

const process = [
  { title: "Карта обмена", text: "Фиксируем источники, получателей, поля, события и владельца каждого статуса." },
  { title: "Проверка API", text: "Проверяю авторизацию, лимиты, webhook и тестовый контур." },
  { title: "Реализация", text: "Добавляю преобразование данных, идемпотентность и журнал операций." },
  { title: "Ошибки", text: "Настраиваю повторные попытки, сохранение неотправленных данных и уведомления." },
  { title: "Запуск", text: "Проверяю реальные сценарии и сверяю результат в обеих системах." },
];

const deliverables = [
  "Исходный код интеграции и схема движения данных",
  "Настроенная авторизация и преобразование полей",
  "Обработка дублей, временных ошибок и журналирование",
  "Инструкция по проверке и перечень используемых доступов",
];

const integrationExamples = [
  "Telegram и MAX-боты с CRM или внутренней системой",
  "Формы сайта с amoCRM, Битрикс24 или другой CRM через API",
  "Google Sheets, Excel, PostgreSQL и REST API",
  "Webhooks, очереди задач и служебные уведомления",
];

const risks = [
  "Не все тарифы CRM предоставляют нужные методы API или webhooks",
  "Лимиты запросов и нестабильность стороннего сервиса требуют очередей и повторов",
  "Без правила обработки дублей одна заявка может создать несколько сущностей",
  "Изменение полей, прав доступа или версии API требует повторной проверки интеграции",
];

const caseStudies = [
  {
    title: "Telegram-бот для обмена USDT",
    text: "Кейс бота с заявками, статусами, хранением данных и логикой автоматических напоминаний.",
    href: "/cases/usdt-exchange-bot",
  },
  {
    title: "Парсер заказов с Profi.ru",
    text: "Кейс инструмента, где собранные данные можно передавать дальше в уведомления, таблицы, CRM или базу.",
    href: "/cases/profi-parser-bot",
  },
];

const relatedServices = [
  {
    title: "Разработка Telegram-ботов",
    text: "Если CRM-интеграция нужна для Telegram-бота, который принимает заявки и передает их менеджерам.",
    href: "/telegram-bots",
  },
  {
    title: "Разработка MAX-ботов",
    text: "Если заявки из MAX-бота нужно автоматически передавать в CRM, таблицу или внутренний сервис.",
    href: "/max-bots",
  },
  {
    title: "Парсеры сайтов и Telegram",
    text: "Если данные из парсера нужно сохранять, фильтровать и передавать в CRM или базу данных.",
    href: "/parsers",
  },
];

const faq = [
  {
    question: "Можно ли подключить бота к CRM?",
    answer:
      "Да. Бота можно связать с CRM через API или webhook, чтобы заявки, контакты, комментарии и статусы передавались автоматически.",
  },
  {
    question: "Можно ли передавать заявки в Google Sheets или Excel?",
    answer:
      "Да. Если полноценная CRM пока не нужна, заявки можно отправлять в Google Sheets, Excel-файлы, базу данных или другой удобный формат.",
  },
  {
    question: "Что делать, если CRM API временно недоступен?",
    answer:
      "В интеграции можно добавить повторные попытки, логирование ошибок и сохранение заявки, чтобы не потерять данные при временных сбоях.",
  },
  {
    question: "Можно ли связать парсер с CRM?",
    answer:
      "Да. Данные, найденные парсером, можно фильтровать, очищать от дублей и затем передавать в CRM, таблицу, базу данных или Telegram-уведомления.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "CRM и API-интеграции для ботов, сайтов и парсеров",
  description:
    "Интеграция Telegram-ботов, MAX-ботов, сайтов и парсеров с CRM, API, Google Sheets, Excel, PostgreSQL и внутренними сервисами.",
  url: pageUrl,
  provider: {
    "@id": `${siteUrl}/#person`,
  },
  areaServed: "Россия",
  serviceType: "CRM и API-интеграции",
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
      name: "CRM и API-интеграции",
      item: pageUrl,
    },
  ],
};

export default function CrmIntegrationsPage() {
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
        eyebrow="CRM и API"
        title="CRM и API-интеграции для ботов, сайтов и парсеров"
        description="Интегрирую Telegram-ботов, MAX-ботов, сайты и парсеры с CRM, API, Google Sheets, Excel, PostgreSQL и внутренними сервисами, чтобы заявки и данные передавались автоматически."
        primaryText="Создать заказ"
        secondaryText="Посмотреть кейсы"
      >
        <TwoColumnTextSection
          leftTitle="Сценарии интеграций"
          leftItems={scenarios}
          rightTitle="С чем можно интегрировать"
          rightItems={integrations}
        />

        <ServiceCommercialDetails
          audience={audience}
          problems={problems}
          requirements={requirements}
          process={process}
          deliverables={deliverables}
          timeline="Срок зависит от количества систем, качества документации API и правил синхронизации. До оценки проводится тест авторизации и одной типовой операции."
          pricing="Стоимость считается по числу направлений обмена, сущностей, сценариев ошибок и требованиям к журналированию. Платные тарифы CRM и сторонних API оплачиваются отдельно."
          integrations={integrationExamples}
          risks={risks}
          support="После запуска проверяю журнал передачи, помогаю разобрать ошибки и могу сопровождать изменения полей, прав доступа и версий API."
        />

        <TextGridSection
          eyebrow="Примеры"
          title="Примеры CRM и API-интеграций"
          text="Сценарии, где интеграция помогает автоматически передавать данные между ботами, сайтами, таблицами, CRM и внутренними сервисами."
          items={examples}
        /> 

        <CaseLinksSection
          title="Кейсы по CRM и API-интеграциям"
          text="Примеры проектов, где заявки и собранные данные передаются между ботами, парсерами, CRM и внутренними сервисами."
          items={caseStudies}
        />

        <RelatedLinksSection items={relatedServices} />

        <FaqSection items={faq} />

        <CtaSection
          title="Нужно связать бота, сайт или парсер с CRM?"
          text="Опишите, откуда нужно брать данные и куда их передавать. Я помогу продумать схему интеграции, обработку ошибок и стабильную передачу заявок."
          buttonText="Создать заказ"
        />
      </InnerPageLayout>
    </>
  );
}
