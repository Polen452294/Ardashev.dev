import type { Metadata } from "next";
import FloatingShapes from "@/components/background/floating-shapes";
import { ContactButtons } from "@/components/contact-buttons";
import { ExtraSection } from "@/components/sections/extra-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustSection } from "@/components/sections/trust-section";
import { ServicesSection } from "@/components/sections/services-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { BotUseCasesSection } from "@/components/sections/bot-use-cases-section";
import { FooterSection } from "@/components/sections/footer-section";
import { SiteHeader } from "@/components/site-header";

const siteUrl = "https://ardashev.dev";

export const metadata: Metadata = {
  title:
    "Разработка Telegram-ботов, Max-ботов, парсеров и CRM-интеграций — ardashev.dev",
  description:
    "Александр Ардашев разрабатывает Telegram-ботов, Max-ботов, парсеры, CRM/API-интеграции и системы приема заявок для бизнеса.",
  alternates: {
    canonical: siteUrl,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Александр Ардашев",
  url: siteUrl,
  jobTitle: "Разработчик Telegram-ботов, Max-ботов, парсеров и CRM-интеграций",
  email: "mailto:aardashev.dev@gmail.com",
  telephone: "+7 916 862-64-04",
  sameAs: [
    "https://github.com/Polen452294",
    "https://t.me/aardashevdev",
    "https://max.ru/u/f9LHodD0cOLjnaroqIXC9x50AYUTb-v1MgisAQs3JGzrycVAMO3inOzXILw",
  ],
  knowsAbout: [
    "Разработка Telegram-ботов",
    "Разработка Max-ботов",
    "Парсинг данных",
    "CRM-интеграции",
    "API-интеграции",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Docker",
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ardashev.dev",
  url: siteUrl,
  email: "mailto:aardashev.dev@gmail.com",
  telephone: "+7 916 862-64-04",
  founder: {
    "@type": "Person",
    name: "Александр Ардашев",
  },
  sameAs: [
    "https://github.com/Polen452294",
    "https://t.me/aardashevdev",
    "https://max.ru/u/f9LHodD0cOLjnaroqIXC9x50AYUTb-v1MgisAQs3JGzrycVAMO3inOzXILw",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ardashev.dev",
  url: siteUrl,
  inLanguage: "ru-RU",
  description:
    "Сайт разработчика Telegram-ботов, Max-ботов, парсеров и CRM/API-интеграций.",
  publisher: {
    "@type": "Organization",
    name: "ardashev.dev",
    url: siteUrl,
  },
};

const navigationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Основные страницы ardashev.dev",
  itemListElement: [
    {
      "@type": "SiteNavigationElement",
      position: 1,
      name: "Разработка Telegram-ботов",
      url: `${siteUrl}/telegram-bots`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 2,
      name: "Разработка Max-ботов",
      url: `${siteUrl}/max-bots`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 3,
      name: "Разработка парсеров",
      url: `${siteUrl}/parsers`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 4,
      name: "CRM и API-интеграции",
      url: `${siteUrl}/crm-integrations`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 5,
      name: "Кейс: Telegram-бот для обмена USDT",
      url: `${siteUrl}/cases/usdt-exchange-bot`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 6,
      name: "Кейс: Max-бот для приема заявок",
      url: `${siteUrl}/cases/max-request-bot`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 7,
      name: "Кейс: парсер заказов с Profi.ru",
      url: `${siteUrl}/cases/profi-parser-bot`,
    },
  ],
};

const offerCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Услуги ardashev.dev",
  url: siteUrl,
  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Разработка Telegram-ботов",
        url: `${siteUrl}/telegram-bots`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Разработка Max-ботов",
        url: `${siteUrl}/max-bots`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Разработка парсеров",
        url: `${siteUrl}/parsers`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "CRM и API-интеграции",
        url: `${siteUrl}/crm-integrations`,
      },
    },
  ],
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#020817] text-white selection:bg-emerald-300 selection:text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }}
      />

      <div className="relative isolate overflow-hidden">
        <FloatingShapes />

        <SiteHeader />

        <main id="top">
          <HeroSection />
          <BotUseCasesSection />
          <TrustSection />
          <ServicesSection />
          <PortfolioSection />
          <ProcessSection />
          <ExtraSection />
          <ContactSection />
          <FooterSection />
        </main>
      </div>
    </div>
  );
}