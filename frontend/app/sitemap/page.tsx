import type { Metadata } from "next";
import Link from "next/link";
import {
  InnerPageLayout,
  InnerPageSection,
  InnerPageTitle,
} from "@/components/pages/inner-page-layout";
import { Card } from "@/components/ui/card";
import { blogPosts } from "@/data/blog-posts";

const siteUrl = "https://ardashev.dev";
const pageUrl = `${siteUrl}/sitemap`;

export const metadata: Metadata = {
  title: "Карта сайта",
  description:
    "Карта сайта Ardashev.dev: главная страница, услуги, кейсы, статьи, контакты и информация о разработчике.",
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: false,
    follow: true,
  },
};

const sitemapSections = [
  {
    title: "Основные страницы",
    text: "Главные разделы сайта: информация о разработчике, контакты и навигация.",
    links: [
      {
        title: "Главная",
        href: "/",
        description:
          "Разработка Telegram-ботов, Max-ботов, парсеров и CRM/API-интеграций.",
      },
      {
        title: "О разработчике",
        href: "/about",
        description:
          "Информация о подходе к работе, стеке, опыте и формате разработки.",
      },
      {
        title: "Контакты",
        href: "/contacts",
        description:
          "Способы связи для заказа разработки, обсуждения задачи или MVP.",
      },
      {
        title: "Все услуги",
        href: "/services",
        description:
          "Каталог направлений разработки с пояснением задач и результата.",
      },
      {
        title: "Все кейсы",
        href: "/cases",
        description:
          "Каталог реализованных ботов, парсеров и систем автоматизации.",
      },
    ],
  },
  {
    title: "Услуги",
    text: "Отдельные посадочные страницы под основные направления разработки.",
    links: [
      {
        title: "Каталог услуг",
        href: "/services",
        description:
          "Все направления разработки и помощь с выбором подходящего решения.",
      },
      {
        title: "Разработка Telegram-ботов",
        href: "/telegram-bots",
        description:
          "Telegram-боты для заявок, записи, консультаций, уведомлений, CRM и оплаты.",
      },
      {
        title: "Разработка Max-ботов",
        href: "/max-bots",
        description:
          "Max-боты для заявок, консультаций, поддержки и переноса логики из Telegram.",
      },
      {
        title: "Парсеры сайтов и Telegram",
        href: "/parsers",
        description:
          "Сбор данных, мониторинг заказов, фильтрация, выгрузка и уведомления.",
      },
      {
        title: "CRM и API-интеграции",
        href: "/crm-integrations",
        description:
          "Связка ботов, сайтов, таблиц, CRM, баз данных и внешних сервисов.",
      },
    ],
  },
  {
    title: "База знаний",
    text: "Практические материалы о подготовке, оценке и разработке Telegram-ботов.",
    links: [
      {
        title: "Все статьи",
        href: "/blog",
        description:
          "Раздел с материалами о ботах, интеграциях и автоматизации.",
      },
      ...blogPosts.map((post) => ({
        title: post.shortTitle,
        href: `/blog/${post.slug}`,
        description: post.excerpt,
      })),
    ],
  },
  {
    title: "Кейсы",
    text: "Примеры проектов, которые показывают подход к разработке и автоматизации.",
    links: [
      {
        title: "Каталог кейсов",
        href: "/cases",
        description:
          "Все опубликованные проекты с задачами, стеком и результатом.",
      },
      {
        title: "Перенос Telegram-бота в Max",
        href: "/max-bots/migration-from-telegram",
        description:
          "Аудит и адаптация сценариев, кнопок, файлов и интеграций под Max Bot API.",
      },
      {
        title: "USDT Exchange Bot",
        href: "/cases/usdt-exchange-bot",
        description:
          "Telegram-бот для обменных заявок, статусов, уведомлений и обработки обращений.",
      },
      {
        title: "Max Request Bot",
        href: "/cases/max-request-bot",
        description:
          "Max-бот для приема заявок, уведомлений и автоматизации первичной обработки.",
      },
      {
        title: "Profi Parser Bot",
        href: "/cases/profi-parser-bot",
        description:
          "Парсер заказов с фильтрацией, уведомлениями и автоматической обработкой данных.",
      },
    ],
  },
];

const allLinks = sitemapSections.flatMap((section) => section.links);

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${pageUrl}#sitemap-list`,
  name: "Карта сайта Ardashev.dev",
  itemListElement: allLinks.map((link, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: link.title,
    description: link.description,
    url: `${siteUrl}${link.href === "/" ? "" : link.href}`,
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
      url: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Карта сайта",
      item: pageUrl,
      url: pageUrl,
    },
  ],
};

export default function SitemapPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <InnerPageLayout
        eyebrow="Карта сайта"
        title="Карта сайта"
        description="Все основные страницы Ardashev.dev в одном месте: услуги, кейсы, статьи, контакты и информация о разработчике."
        primaryText="Создать заказ"
        primaryHref="/#contact"
        secondaryText="На главную"
        secondaryHref="/"
      >
        <InnerPageSection>
          <InnerPageTitle
            eyebrow="Навигация"
            title="Основные разделы сайта"
            text="Эта страница помогает быстрее найти нужную услугу, кейс или контактный раздел."
          />

          <div className="grid gap-3 sm:gap-4 lg:grid-cols-3">
            {sitemapSections.map((section) => (
              <Card
                key={section.title}
                className="relative overflow-hidden bg-[#081122]/72"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative">
                  <h2 className="text-xl font-semibold text-white">
                    {section.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {section.text}
                  </p>

                  <div className="mt-5 grid gap-2.5">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="group rounded-[18px] border border-white/10 bg-white/[0.03] p-4 transition hover:border-emerald-300/35 hover:bg-white/[0.05]"
                      >
                        <div className="text-base font-semibold text-white transition group-hover:text-emerald-300">
                          {link.title}
                        </div>

                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {link.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </InnerPageSection>
      </InnerPageLayout>
    </>
  );
}
