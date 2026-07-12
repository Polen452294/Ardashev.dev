import type { Metadata } from "next";
import {
  CtaSection,
  FaqSection,
  InnerPageLayout,
  InnerPageSection,
  RelatedLinksSection,
  TagGridSection,
  TextGridSection,
  TwoColumnTextSection,
} from "@/components/pages/inner-page-layout";

const siteUrl = "https://ardashev.dev";
const pageUrl = `${siteUrl}/about`;

export const metadata: Metadata = {
  title: "Александр Ардашев — разработчик ботов и парсеров",
  description:
    "О разработчике Ardashev.dev: Telegram-боты, MAX-боты, парсеры, CRM/API-интеграции, автоматизация заявок и бизнес-процессов.",
  alternates: {
    canonical: pageUrl,
  },
};

const workAreas = [
  "Разработка Telegram-ботов для приема заявок, консультаций, уведомлений и автоматизации общения с клиентами",
  "Разработка MAX-ботов для бизнеса и переноса логики из Telegram в MAX",
  "Создание парсеров сайтов, площадок, Telegram каналов и открытых источников",
  "CRM и API-интеграции для автоматической передачи заявок, контактов, статусов и уведомлений",
  "Запуск проектов на сервере, настройка базы данных, Docker и базовой инфраструктуры",
];

const approach = [
  "Сначала разбираю задачу простым языком и помогаю определить минимальную рабочую версию",
  "Проектирую сценарий, структуру данных и логику до начала активной разработки",
  "Делаю рабочее решение, которое можно проверить в деле, а не просто посмотреть на макет",
  "После запуска помогаю проверить работу, исправить замечания и подготовить проект к использованию",
];

const trustItems = [
  {
    title: "Понятная коммуникация",
    text: "Объясняю технические решения простым языком, чтобы было понятно, что именно делается и зачем.",
  },
  {
    title: "Ориентация на бизнес-задачу",
    text: "Главная цель — не просто написать код, а убрать ручную работу, ускорить обработку заявок и сделать процесс удобнее.",
  },
  {
    title: "Пошаговый запуск",
    text: "Можно начать с минимальной рабочей версии, проверить идею и только потом расширять функционал.",
  },
  {
    title: "Прозрачность работы",
    text: "На сайте есть кейсы, контакты, профиль Profi.ru и примеры проектов, чтобы можно было заранее оценить подход.",
  },
];

const stack = [
  "Python",
  "aiogram",
  "FastAPI",
  "PostgreSQL",
  "SQLAlchemy",
  "Docker",
  "Next.js",
  "Telegram API",
  "MAX API",
  "CRM API",
];

const relatedLinks = [
  {
    title: "Разработка Telegram-ботов",
    text: "Боты для заявок, записи, консультаций, уведомлений, CRM и оплаты.",
    href: "/telegram-bots",
  },
  {
    title: "Разработка MAX-ботов",
    text: "Боты для MAX: заявки, консультации, уведомления и бизнес-сценарии.",
    href: "/max-bots",
  },
  {
    title: "Парсеры сайтов и Telegram",
    text: "Сбор данных, мониторинг заказов, фильтрация и выгрузка результатов.",
    href: "/parsers",
  },
  {
    title: "CRM и API-интеграции",
    text: "Связка ботов, сайтов, таблиц, CRM и внутренних систем.",
    href: "/crm-integrations",
  },
];

const faq = [
  {
    question: "Чем занимается Ardashev.dev?",
    answer:
      "Ardashev.dev — это разработка Telegram-ботов, MAX-ботов, парсеров, CRM/API-интеграций и систем автоматизации для бизнеса.",
  },
  {
    question: "Можно ли обратиться без готового технического задания?",
    answer:
      "Да. Достаточно описать задачу, желаемый результат и текущий процесс. После этого можно вместе определить минимальную рабочую версию и план разработки.",
  },
  {
    question: "Можно ли начать с MVP?",
    answer:
      "Да. Проект можно начать с минимальной рабочей версии, чтобы сначала проверить логику и пользу решения, а затем постепенно добавлять новые функции.",
  },
  {
    question: "Какие проекты можно заказать?",
    answer:
      "Можно заказать Telegram-бота, MAX-бота, парсер, интеграцию с CRM, связку с таблицами, автоматическую передачу заявок, уведомления и серверный запуск проекта.",
  },
];

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${pageUrl}#profile`,
  url: pageUrl,
  name: "О разработчике — Александр Ардашев",
  description:
    "Страница о разработчике Ardashev.dev: опыт, стек, услуги, подход к разработке и автоматизации.",
  dateModified: "2026-07-12",
  primaryImageOfPage: `${siteUrl}/about-photo.jpg`,
  mainEntity: {
    "@id": `${siteUrl}/#person`,
  },
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
      name: "О разработчике",
      item: pageUrl,
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
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
        eyebrow="О разработчике"
        title="О разработчике Ardashev.dev"
        description="Я разрабатываю Telegram-ботов, MAX-ботов, парсеры, CRM/API-интеграции и системы автоматизации, которые помогают бизнесу быстрее принимать заявки, обрабатывать данные и убирать ручную рутину."
        primaryText="Создать заказ"
        primaryHref="/#contact"
        secondaryText="Посмотреть услуги"
        secondaryHref="/#services"
      >
        <InnerPageSection>
          <TwoColumnTextSection
            leftTitle="Что я разрабатываю"
            leftItems={workAreas}
            rightTitle="Как подхожу к работе"
            rightItems={approach}
          />
        </InnerPageSection>

        <TextGridSection
          eyebrow="Доверие"
          title="Почему можно доверить разработку"
          text="Для меня важно не просто написать код, а сделать понятное, рабочее и полезное решение под конкретную задачу."
          items={trustItems}
        />

        <TagGridSection
          eyebrow="Технологии"
          title="Техническая основа проектов"
          text="Использую стек, который подходит для ботов, парсеров, интеграций, баз данных и серверного запуска."
          items={stack}
        />

        <RelatedLinksSection items={relatedLinks} />

        <FaqSection items={faq} />

        <CtaSection
          title="Хотите обсудить проект?"
          text="Напишите, что нужно автоматизировать, где сейчас возникает ручная работа и какой результат вы хотите получить. Я помогу выбрать подходящий формат реализации."
        />
      </InnerPageLayout>
    </>
  );
}
