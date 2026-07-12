import type { Metadata } from "next";
import FloatingShapes from "@/components/background/floating-shapes";
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
import { AboutSection } from "@/components/sections/about-section";
import { HomeFaqSection } from "@/components/sections/home-faq-section";
import { homeFaqJsonLd } from "@/data/home-faq";
import { externalProfiles, siteContact } from "@/data/site-data";

const siteUrl = "https://ardashev.dev";

export const metadata: Metadata = {
  description:
    "Александр Ардашев разрабатывает Telegram-ботов, Max-ботов, парсеры, CRM/API-интеграции и системы приема заявок для бизнеса.",
  alternates: {
    canonical: siteUrl,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Александр Ардашев",
  url: siteUrl,
  jobTitle: "Разработчик Telegram-ботов, Max-ботов, парсеров и CRM-интеграций",
  email: siteContact.email.href,
  telephone: siteContact.phone.label,
  worksFor: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
  },
  sameAs: externalProfiles,
  knowsAbout: [
    "Разработка Telegram-ботов",
    "Разработка Max-ботов",
    "Парсинг данных",
    "CRM-интеграции",
    "API-интеграции",
    "Автоматизация заявок",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Docker",
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Ardashev.dev",
  url: siteUrl,
  email: siteContact.email.href,
  telephone: siteContact.phone.label,
  founder: {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Александр Ардашев",
  },
  sameAs: externalProfiles,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Ardashev.dev",
  url: siteUrl,
  inLanguage: "ru-RU",
  description:
    "Сайт разработчика Telegram-ботов, Max-ботов, парсеров и CRM/API-интеграций.",
  publisher: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
  },
};

const navigationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}/#navigation`,
  name: "Основные страницы Ardashev.dev",
  itemListElement: [
    {
      "@type": "SiteNavigationElement",
      position: 1,
      name: "Главная",
      url: siteUrl,
    },
    {
      "@type": "SiteNavigationElement",
      position: 2,
      name: "О разработчике",
      url: `${siteUrl}/about`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 3,
      name: "Контакты",
      url: `${siteUrl}/contacts`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 4,
      name: "Разработка Telegram-ботов",
      url: `${siteUrl}/telegram-bots`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 5,
      name: "Разработка Max-ботов",
      url: `${siteUrl}/max-bots`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 6,
      name: "Разработка парсеров",
      url: `${siteUrl}/parsers`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 7,
      name: "CRM и API-интеграции",
      url: `${siteUrl}/crm-integrations`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 8,
      name: "Кейс: Telegram-бот для обмена USDT",
      url: `${siteUrl}/cases/usdt-exchange-bot`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 9,
      name: "Кейс: Max-бот для приема заявок",
      url: `${siteUrl}/cases/max-request-bot`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 10,
      name: "Кейс: парсер заказов с Profi.ru",
      url: `${siteUrl}/cases/profi-parser-bot`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 11,
      name: "Карта сайта",
      url: `${siteUrl}/sitemap`,
    },
  ],
};

const offerCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "@id": `${siteUrl}/#offer-catalog`,
  name: "Услуги Ardashev.dev",
  url: siteUrl,
  provider: {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
  },
  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        "@id": `${siteUrl}/telegram-bots#service`,
        name: "Разработка Telegram-ботов",
        url: `${siteUrl}/telegram-bots`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        "@id": `${siteUrl}/max-bots#service`,
        name: "Разработка Max-ботов",
        url: `${siteUrl}/max-bots`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        "@id": `${siteUrl}/parsers#service`,
        name: "Разработка парсеров",
        url: `${siteUrl}/parsers`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        "@id": `${siteUrl}/crm-integrations#service`,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />

      <div className="relative isolate overflow-hidden">
        <FloatingShapes />

        <SiteHeader />

        <main id="top">
          <HeroSection />
          <AboutSection />
          <BotUseCasesSection />
          <TrustSection />
          <ServicesSection />
          <PortfolioSection />
          <ProcessSection />
          <ExtraSection />
          <ContactSection />
          <HomeFaqSection />
          <FooterSection />
        </main>
      </div>
    </div>
  );
}
