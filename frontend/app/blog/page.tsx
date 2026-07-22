import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  InnerPageLayout,
  InnerPageSection,
  InnerPageTitle,
} from "@/components/pages/inner-page-layout";
import { Card } from "@/components/ui/card";
import { blogPosts } from "@/data/blog-posts";

const siteUrl = "https://ardashev.dev";
const pageUrl = `${siteUrl}/blog`;

export const metadata: Metadata = {
  title: "База знаний о ботах и автоматизации",
  description:
    "Практические статьи о стоимости и сроках разработки Telegram-ботов, подготовке ТЗ, интеграциях, парсерах и автоматизации бизнеса.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Ardashev.dev",
    url: pageUrl,
    title: "База знаний о ботах и автоматизации",
    description:
      "Статьи Александра Ардашева о Telegram-ботах, интеграциях и подготовке проектов к разработке.",
    images: ["/opengraph-image"],
  },
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${pageUrl}#collection`,
  name: "База знаний Ardashev.dev",
  description:
    "Практические статьи о разработке Telegram-ботов, интеграциях и автоматизации.",
  url: pageUrl,
  inLanguage: "ru-RU",
  author: {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Александр Ардашев",
  },
  hasPart: blogPosts.map((post) => ({
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url: `${pageUrl}/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
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
      name: "База знаний",
      item: pageUrl,
      url: pageUrl,
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <InnerPageLayout
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "База знаний" },
        ]}
        eyebrow="База знаний"
        title="Статьи о ботах и автоматизации"
        description="Разбираю стоимость, сроки и подготовку задач на примерах из разработки. Без универсальных рецептов и выдуманных цифр."
        primaryText="Обсудить задачу"
        primaryHref="/#contact"
        secondaryText="Посмотреть услуги"
        secondaryHref="/services"
      >
        <InnerPageSection>
          <InnerPageTitle
            eyebrow="Опубликовано"
            title="Материалы для подготовки проекта"
            text="Каждая статья содержит автора, даты, рабочие примеры, изображения, выводы и ссылки на связанные услуги и кейсы."
          />

          <div className="grid gap-3 sm:gap-5 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <Card className="flex h-full flex-col overflow-hidden bg-[#081122]/72 p-3 sm:p-4">
                  <div className="flex h-[280px] items-center justify-center overflow-hidden rounded-[20px] border border-white/10 bg-[#020817]/70 p-3">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      width={362}
                      height={742}
                      className="h-full w-auto rounded-xl object-contain"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-2 pt-4 sm:p-3 sm:pt-5">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
                      <span className="text-emerald-300">{post.category}</span>
                      <time dateTime={post.publishedAt}>{post.publishedLabel}</time>
                      <span>{post.readingTime}</span>
                    </div>

                    <h2 className="mt-3 text-xl font-semibold leading-8 text-white transition group-hover:text-emerald-100">
                      {post.shortTitle}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-5 text-sm font-medium text-emerald-300">
                      Читать статью →
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </InnerPageSection>

        <InnerPageSection>
          <Card className="border-emerald-300/20 bg-emerald-400/10">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Раздел будет пополняться постепенно
            </h2>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Следующие темы связаны с переносом ботов в Max, передачей заявок в CRM,
              Google Sheets, разработкой парсеров и регулярным мониторингом данных.
              Новая статья появится только тогда, когда для неё есть конкретные примеры
              и проверяемые материалы.
            </p>
          </Card>
        </InnerPageSection>
      </InnerPageLayout>
    </>
  );
}
