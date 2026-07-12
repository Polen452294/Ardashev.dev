import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import {
  CtaSection,
  FaqSection,
  InnerPageLayout,
  InnerPageSection,
  InnerPageTitle,
} from "@/components/pages/inner-page-layout";
import { Card } from "@/components/ui/card";
import { GlowButton } from "@/components/ui/glow-button";
import { allContactLinks, siteContact } from "@/data/site-data";

const siteUrl = "https://ardashev.dev";
const pageUrl = `${siteUrl}/contacts`;

export const metadata: Metadata = {
  title: "Контакты — заказать бота или парсер",
  description:
    "Контакты Ardashev.dev: заказать разработку Telegram бота, Max бота, парсера, CRM/API-интеграции или автоматизации бизнес-процессов.",
  alternates: {
    canonical: pageUrl,
  },
};

const faq = [
  {
    question: "Что написать при первом обращении?",
    answer:
      "Коротко опишите задачу: что нужно сделать, где сейчас возникает ручная работа, какой результат нужен и есть ли примеры похожих решений.",
  },
  {
    question: "Можно ли написать без готового ТЗ?",
    answer:
      "Да. Можно просто описать идею или проблему. После этого можно вместе определить структуру, минимальную версию и следующий шаг разработки.",
  },
  {
    question: "Какие проекты можно обсудить?",
    answer:
      "Telegram боты, Max боты, парсеры сайтов и Telegram, CRM/API-интеграции, автоматизация заявок, уведомления, таблицы, базы данных и серверный запуск.",
  },
];

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${pageUrl}#contact-page`,
  url: pageUrl,
  name: "Контакты Ardashev.dev",
  description:
    "Контакты для заказа разработки Telegram ботов, Max ботов, парсеров, CRM/API-интеграций и автоматизации бизнес-процессов.",
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
      name: "Контакты",
      item: pageUrl,
    },
  ],
};

export default function ContactsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
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
        eyebrow="Contacts"
        title="Контакты для заказа разработки"
        description="Напишите удобным способом, если нужен Telegram бот, Max бот, парсер, CRM/API-интеграция или автоматизация бизнес-процесса."
        primaryText="Написать в Telegram"
        primaryHref={siteContact.telegram.href}
        secondaryText="Посмотреть услуги"
        secondaryHref="/#services"
      >
        <InnerPageSection>
          <InnerPageTitle
            eyebrow="Contact"
            title="Как со мной связаться"
            text="Лучше всего коротко описать задачу, желаемый результат, сроки и сервисы, с которыми нужно сделать интеграцию."
          />

          <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
            {allContactLinks.map((item) => {
              const Icon =
                item.title === "Email"
                  ? Mail
                  : item.title === "Телефон"
                    ? Phone
                    : MessageCircle;

              return (
                <Card
                  key={item.title}
                  className="group relative overflow-hidden bg-[#081122]/72"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl" />

                  <div className="relative flex h-full flex-col justify-between gap-5">
                    <div>
                      <div className="mb-4 inline-flex rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h2 className="text-xl font-semibold text-white">
                        {item.title}
                      </h2>

                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        {item.text}
                      </p>
                    </div>

                    <Link
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white transition hover:border-emerald-300/40 hover:bg-white/[0.06] hover:text-emerald-300"
                    >
                      {item.label}
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </InnerPageSection>

        <InnerPageSection>
          <Card className="relative overflow-hidden bg-[#081122]/72">
            <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="relative grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-emerald-300">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Brief
                </div>

                <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                  Что лучше указать в сообщении
                </h2>
              </div>

              <div className="space-y-3 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                <p>
                  Напишите, какой процесс нужно автоматизировать, кто будет
                  пользоваться системой и куда должны попадать заявки или данные.
                </p>
                <p>
                  Если есть примеры, ссылки, таблицы, CRM или текущий бот — их
                  тоже можно отправить. Так получится быстрее оценить задачу и
                  предложить подходящий формат реализации.
                </p>
              </div>
            </div>
          </Card>
        </InnerPageSection>

        <FaqSection items={faq} />

        <CtaSection
          title="Готовы обсудить проект?"
          text="Напишите в Telegram, Max или на email. Можно начать с короткого описания идеи без полноценного технического задания."
          buttonText="Создать заказ"
        />
      </InnerPageLayout>
    </>
  );
}
