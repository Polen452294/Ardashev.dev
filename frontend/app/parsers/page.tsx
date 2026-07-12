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
const pageUrl = `${siteUrl}/parsers`;

export const metadata: Metadata = {
  title: "Разработка парсеров сайтов и Telegram",
  description:
    "Разработка парсеров для сайтов, каталогов, маркетплейсов, Telegram-каналов и открытых источников с выгрузкой в Excel, Google Sheets, базу данных, CRM или Telegram-бота.",
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

const examples = [
  { title: "Мониторинг цен", text: "Регулярно проверяет карточки товаров и фиксирует изменение цены или наличия." },
  { title: "Анализ конкурентов", text: "Собирает открытые товары, характеристики и предложения в единую структуру для сравнения." },
  { title: "Поиск новых заказов", text: "Проверяет источник по расписанию и уведомляет только о записях, прошедших фильтры." },
  { title: "Сбор каталогов", text: "Обходит разделы и карточки, нормализует поля и удаляет повторяющиеся записи." },
  { title: "Парсинг Telegram", text: "Собирает доступные публикации из согласованных источников и фильтрует их по условиям." },
  { title: "Подготовка выгрузки", text: "Сохраняет результат в таблицу, базу или API с логами и статусом обновления." },
];

const audience = [
  { title: "Отделам закупок и аналитики", text: "Когда сотрудники вручную сравнивают цены, остатки и предложения конкурентов." },
  { title: "Специалистам по продажам", text: "Когда важно быстрее находить новые заказы, объявления или открытые контакты." },
];

const problems = [
  { title: "Ручной сбор занимает часы", text: "Парсер повторяет проверку по расписанию и сохраняет результат в одном формате." },
  { title: "В данных много дублей и шума", text: "Фильтры, нормализация и дедупликация оставляют только нужные записи." },
];

const requirements = [
  "Список источников и примеры страниц или каналов",
  "Перечень нужных полей, фильтров и правил отбора",
  "Желаемая частота проверки и формат результата",
  "Подтверждение допустимого способа доступа к данным",
];

const process = [
  { title: "Проверка источника", text: "Оцениваю структуру, доступность данных, авторизацию и технические ограничения." },
  { title: "Схема данных", text: "Фиксируем поля, форматы, фильтры и правила удаления дублей." },
  { title: "Сборщик", text: "Реализую получение страниц или событий и обработку ошибок." },
  { title: "Выгрузка", text: "Подключаю таблицу, базу, CRM, API или уведомления." },
  { title: "Контроль", text: "Добавляю расписание, логи и признаки, по которым видно успешность запуска." },
];

const deliverables = [
  "Исходный код парсера и конфигурация согласованных источников",
  "Структурированные данные в выбранном формате",
  "Фильтрация, дедупликация, расписание и журнал ошибок",
  "Инструкция по запуску и требования к серверу или аккаунтам",
];

const integrationExamples = [
  "Excel, CSV, Google Sheets и PostgreSQL",
  "CRM, внутренний REST API или административная панель",
  "Telegram-уведомления о новых данных и ошибках",
  "Планировщик задач, прокси и система журналирования",
];

const risks = [
  "Вёрстка и внутренние API источника могут измениться, поэтому парсер требует сопровождения",
  "CAPTCHA, авторизация и антибот-защита могут ограничить стабильность или сделать сбор недопустимым",
  "Частота запросов должна учитывать правила площадки и нагрузку на источник",
  "Собираются только согласованные данные с учётом закона, условий площадки и прав доступа",
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
    title: "Разработка Telegram-ботов",
    text: "Если парсер должен отправлять уведомления, отчеты или найденные заявки в Telegram-бота.",
    href: "/telegram-bots",
  },
  {
    title: "Разработка Max-ботов",
    text: "Если результаты парсинга нужно передавать в Max или использовать в сценарии Max-бота.",
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
      "Результаты можно сохранять в Excel, Google Sheets, PostgreSQL, CRM, внутренний сервис или отправлять уведомлениями в Telegram-бота.",
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
  "@id": `${pageUrl}#service`,
  name: "Разработка парсеров на заказ",
  alternateName: [
    "Создание парсеров",
    "Парсер сайтов",
    "Парсер Telegram",
    "Парсер данных для бизнеса",
  ],
  description:
    "Разработка парсеров для сайтов, каталогов, маркетплейсов, Telegram-каналов и открытых источников с выгрузкой в Excel, Google Sheets, базу данных, CRM или Telegram-бота.",
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
  serviceType: "Разработка парсеров",
  category: "Парсинг данных, автоматизация сбора данных и интеграции",
  offers: {
    "@type": "Offer",
    url: `${siteUrl}/contacts`,
    availability: "https://schema.org/InStock",
    priceCurrency: "RUB",
    category: "Разработка парсеров",
    itemOffered: {
      "@type": "Service",
      name: "Разработка парсера под источник данных",
      url: pageUrl,
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Что может входить в разработку парсера",
    itemListElement: outputs.map((item) => ({
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
        eyebrow="Парсеры"
        title="Разработка парсеров на заказ"
        description="Разрабатываю парсеры для сбора данных с сайтов, каталогов, маркетплейсов, Telegram-каналов и открытых источников. Результаты можно выгружать в Excel, Google Sheets, базу данных, CRM или отправлять в Telegram-бота."
        primaryText="Создать заказ"
        secondaryText="Посмотреть кейсы"
      >
        <TwoColumnTextSection
          leftTitle="Какие данные можно собирать"
          leftItems={dataTypes}
          rightTitle="Куда можно выгружать результаты"
          rightItems={outputs}
        />

        <ServiceCommercialDetails
          audience={audience}
          problems={problems}
          requirements={requirements}
          process={process}
          deliverables={deliverables}
          timeline="Срок зависит от числа источников, их защиты, объёма данных и формата выгрузки. Сначала проверяется один типовой источник, после чего можно точно оценить остальные."
          pricing="Цена рассчитывается после технической проверки источника. Отдельно оцениваются новые сайты, авторизация, прокси, высокая частота обновлений, хранение истории и интеграции."
          integrations={integrationExamples}
          risks={risks}
          support="После запуска могу контролировать ошибки, адаптировать сбор при изменении источника и добавлять новые поля, фильтры или форматы выгрузки."
        />

        <TextGridSection
          eyebrow="Примеры"
          title="Примеры использования парсеров"
          text="Сценарии, где парсер помогает заменить ручной поиск, регулярную проверку источников и сбор данных вручную."
          items={examples}
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
