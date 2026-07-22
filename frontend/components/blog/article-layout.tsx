import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CtaSection,
  InnerPageLayout,
  InnerPageSection,
} from "@/components/pages/inner-page-layout";
import { Card } from "@/components/ui/card";
import { KnowledgeLinksSection } from "@/components/blog/knowledge-links-section";
import { blogPosts, type BlogPost } from "@/data/blog-posts";

const siteUrl = "https://ardashev.dev";

type ArticleLink = {
  title: string;
  text: string;
  href: string;
};

export function ArticleLayout({
  post,
  children,
}: {
  post: BlogPost;
  children: ReactNode;
}) {
  const pageUrl = `${siteUrl}/blog/${post.slug}`;
  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: post.title,
    description: post.description,
    image: `${siteUrl}${post.image}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: "ru-RU",
    isAccessibleForFree: true,
    author: {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Александр Ардашев",
      url: `${siteUrl}/about`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Ardashev.dev",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
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
        url: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "База знаний",
        item: `${siteUrl}/blog`,
        url: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: pageUrl,
        url: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <InnerPageLayout
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "База знаний", href: "/blog" },
          { label: post.shortTitle },
        ]}
        eyebrow={post.category}
        title={post.title}
        description={post.description}
        primaryText="Обсудить задачу"
        primaryHref="/#contact"
        secondaryText="Все статьи"
        secondaryHref="/blog"
      >
        <article>
          <InnerPageSection className="pt-4 sm:pt-5">
            <div className="grid gap-3 sm:gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
              <Card className="bg-[#081122]/72">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <Image
                    src="/about-photo.jpg"
                    alt="Александр Ардашев"
                    width={72}
                    height={72}
                    className="h-[72px] w-[72px] rounded-2xl object-cover"
                  />

                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-emerald-300">
                      Автор
                    </div>
                    <Link
                      href="/about"
                      rel="author"
                      className="mt-1 inline-block text-lg font-semibold text-white transition hover:text-emerald-300"
                    >
                      Александр Ардашев
                    </Link>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Разработчик Telegram-ботов, парсеров и CRM-интеграций
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 border-t border-white/10 pt-5 text-sm text-slate-400 sm:grid-cols-3">
                  <div>
                    <div className="text-xs text-slate-500">Опубликовано</div>
                    <time dateTime={post.publishedAt} className="mt-1 block text-slate-200">
                      {post.publishedLabel}
                    </time>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Обновлено</div>
                    <time dateTime={post.updatedAt} className="mt-1 block text-slate-200">
                      {post.updatedLabel}
                    </time>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Время чтения</div>
                    <div className="mt-1 text-slate-200">{post.readingTime}</div>
                  </div>
                </div>
              </Card>

              <Card className="bg-[#081122]/72">
                <div className="text-sm font-semibold text-white">Содержание</div>
                <ol className="mt-4 grid gap-2.5">
                  {post.contents.map((item, index) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="flex gap-3 text-sm leading-6 text-slate-400 transition hover:text-emerald-300"
                      >
                        <span className="text-emerald-300/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{item.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </Card>
            </div>
          </InnerPageSection>

          {children}
        </article>

        <KnowledgeLinksSection
          items={relatedPosts}
          title="Продолжить чтение"
          text="Ещё два материала из серии о подготовке и разработке Telegram-бота."
        />

        <CtaSection
          title="Нужно оценить Telegram-бота?"
          text="Опишите задачу и текущий процесс. Я помогу выделить первую рабочую версию, уточнить интеграции и подготовить оценку."
          buttonText="Обсудить задачу"
        />
      </InnerPageLayout>
    </>
  );
}

export function ArticleSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <InnerPageSection id={id} className="scroll-mt-24">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        <div className="mt-4 space-y-4 text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8">
          {children}
        </div>
      </div>
    </InnerPageSection>
  );
}

export function ArticleList({
  items,
}: {
  items: Array<string | { title: string; text: string }>;
}) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => {
        const key = typeof item === "string" ? item : item.title;

        return (
          <li
            key={key}
            className="rounded-2xl border border-white/10 bg-[#081122]/70 px-4 py-3.5"
          >
            {typeof item === "string" ? (
              <span>{item}</span>
            ) : (
              <>
                <div className="font-semibold text-white">{item.title}</div>
                <p className="mt-1 text-sm leading-7 text-slate-300">{item.text}</p>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function ArticleNote({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[22px] border border-emerald-300/20 bg-emerald-400/10 px-5 py-4 text-slate-200">
      {children}
    </div>
  );
}

export function ArticleFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="my-6">
      <Card className="overflow-hidden bg-[#081122]/72 p-3 sm:p-5">
        <div className="flex justify-center rounded-[20px] border border-white/10 bg-[#020817]/70 p-3 sm:p-5">
          <Image
            src={src}
            alt={alt}
            width={362}
            height={742}
            className="h-auto max-h-[620px] w-auto max-w-full rounded-2xl object-contain"
          />
        </div>
        <figcaption className="px-1 pb-1 pt-3 text-sm leading-6 text-slate-400">
          {caption}
        </figcaption>
      </Card>
    </figure>
  );
}

export function ArticleLinkGrid({
  items,
}: {
  items: ArticleLink[];
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="group block">
          <Card className="h-full bg-[#081122]/72">
            <h3 className="text-lg font-semibold text-white transition group-hover:text-emerald-100">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
            <div className="mt-4 text-sm font-medium text-emerald-300">
              Открыть →
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export function ArticleSources({
  items,
}: {
  items: ArticleLink[];
}) {
  return (
    <div className="grid gap-3">
      {items.map((item, index) => {
        const external = item.href.startsWith("http");
        const content = (
          <>
            <span className="text-emerald-300/70">{index + 1}.</span>{" "}
            <span className="font-medium text-white">{item.title}</span>
            <span className="text-slate-400">: {item.text}</span>
          </>
        );

        return external ? (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-[#081122]/70 px-4 py-3 text-sm leading-7 transition hover:border-emerald-300/30"
          >
            {content}
          </a>
        ) : (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-2xl border border-white/10 bg-[#081122]/70 px-4 py-3 text-sm leading-7 transition hover:border-emerald-300/30"
          >
            {content}
          </Link>
        );
      })}
    </div>
  );
}
