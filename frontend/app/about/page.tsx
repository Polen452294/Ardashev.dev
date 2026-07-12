import type { Metadata } from "next";
import Image from "next/image";
import {
  CaseLinksSection,
  CtaSection,
  FaqSection,
  InnerPageLayout,
  InnerPageSection,
  RelatedLinksSection,
  TagGridSection,
  TextGridSection,
  TwoColumnTextSection,
} from "@/components/pages/inner-page-layout";
import { Card } from "@/components/ui/card";

const siteUrl = "https://ardashev.dev";
const pageUrl = `${siteUrl}/about`;

export const metadata: Metadata = {
  title: "Александр Ардашев — разработчик ботов и парсеров",
  description:
    "О разработчике Ardashev.dev: Telegram-боты, Max-боты, парсеры, CRM/API-интеграции, автоматизация заявок и бизнес-процессов.",
  alternates: {
    canonical: pageUrl,
  },
};

const workAreas = [
  "Разработка Telegram-ботов для приема заявок, консультаций, уведомлений и автоматизации общения с клиентами",
  "Разработка Max-ботов для бизнеса и переноса логики из Telegram в Max",
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

const cooperationItems = [
  {
    title: "Обсуждение задачи",
    text: "Можно прийти без готового технического задания. Сначала разбираем текущий процесс, ограничения и результат, который нужен бизнесу.",
  },
  {
    title: "Состав и оценка работ",
    text: "До начала разработки фиксируем функции первой версии, сроки и стоимость. Расходы на серверы и сторонние сервисы обсуждаются отдельно.",
  },
  {
    title: "Проверка результата",
    text: "Рабочую версию можно проверить по согласованным сценариям. После оплаты передаю код и файлы проекта.",
  },
  {
    title: "Запуск и поддержка",
    text: "Помогаю развернуть проект, проверить основные сценарии и исправить замечания, найденные после запуска.",
  },
];

const caseLinks = [
  {
    title: "Telegram-бот для обмена USDT",
    text: "Бот принимает заявки, сохраняет статусы и отправляет напоминания. Архитектура и код описаны в отдельном кейсе.",
    href: "/cases/usdt-exchange-bot",
  },
  {
    title: "Max-бот на Python",
    text: "Открытый демонстрационный проект с API-клиентом, обработчиками и сервисным слоем.",
    href: "/cases/max-request-bot",
  },
  {
    title: "Парсер заказов с Profi.ru",
    text: "Парсер отслеживает новые заказы, применяет фильтры и отправляет подходящие варианты в Telegram.",
    href: "/cases/profi-parser-bot",
  },
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
  "Max API",
  "CRM API",
];

const relatedLinks = [
  {
    title: "Разработка Telegram-ботов",
    text: "Боты для заявок, записи, консультаций, уведомлений, CRM и оплаты.",
    href: "/telegram-bots",
  },
  {
    title: "Разработка Max-ботов",
    text: "Боты для Max: заявки, консультации, уведомления и бизнес-сценарии.",
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
      "Ardashev.dev — это разработка Telegram-ботов, Max-ботов, парсеров, CRM/API-интеграций и систем автоматизации для бизнеса.",
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
      "Можно заказать Telegram-бота, Max-бота, парсер, интеграцию с CRM, связку с таблицами, автоматическую передачу заявок, уведомления и серверный запуск проекта.",
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
  dateModified: "2026-07-13",
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
        description="Я разрабатываю Telegram-ботов, Max-ботов, парсеры, CRM/API-интеграции и системы автоматизации, которые помогают бизнесу быстрее принимать заявки, обрабатывать данные и убирать ручную рутину."
        primaryText="Создать заказ"
        primaryHref="/#contact"
        secondaryText="Посмотреть услуги"
        secondaryHref="/#services"
      >
        <InnerPageSection>
          <div className="grid gap-3 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-5 xl:grid-cols-[310px_minmax(0,1fr)]">
            <Card className="flex items-center justify-center overflow-hidden bg-[#081122]/72 p-3 sm:p-4">
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#020817]">
                <Image
                  src="/about-photo.jpg"
                  alt="Александр Ардашев, разработчик Telegram-ботов, Max-ботов и парсеров"
                  width={1519}
                  height={2048}
                  sizes="(max-width: 1023px) 280px, 310px"
                  className="h-auto max-h-[420px] w-auto"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020817]/80 to-transparent" />
              </div>
            </Card>

            <Card className="bg-[#081122]/72 sm:p-7">
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300 sm:text-sm">
                Александр Ардашев
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Разработчик и автор проектов Ardashev.dev
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                <p>Разрабатываю Telegram-ботов, Max-ботов, парсеры, CRM-системы и API-интеграции.</p>
                <p>Учусь в НИТУ МИСИС. Технические решения и открытые примеры кода публикую на GitHub.</p>
                <p>Отзывы о выполненных заказах и подтверждённый профиль исполнителя доступны на Profi.ru.</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2.5">
                <a href="https://github.com/Polen452294" target="_blank" rel="noreferrer" className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-400/15">
                  GitHub
                </a>
                <a href="https://profi.ru/profile/ArdashevAD/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition hover:border-emerald-300/30">
                  Профиль на Profi.ru
                </a>
                <a href="https://t.me/aardashevdev" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition hover:border-emerald-300/30">
                  Telegram
                </a>
              </div>
            </Card>
          </div>
        </InnerPageSection>

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

        <TextGridSection
          eyebrow="Сотрудничество"
          title="Как проходит работа"
          text="Условия зависят от задачи, но порядок работы остаётся понятным: сначала состав проекта и оценка, затем разработка и проверка."
          items={cooperationItems}
        />

        <CaseLinksSection
          title="Проекты с описанием реализации"
          text="В кейсах указаны задача, архитектура, ограничения и подтверждённый результат проекта."
          items={caseLinks}
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
