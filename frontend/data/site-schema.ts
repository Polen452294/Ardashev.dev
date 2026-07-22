import { externalProfiles, siteContact } from "@/data/site-data";

const siteUrl = "https://ardashev.dev";

export const siteIdentityJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Александр Ардашев",
      url: siteUrl,
      image: `${siteUrl}/about-photo.jpg`,
      jobTitle: "Разработчик Telegram-ботов, Max-ботов, парсеров и CRM-интеграций",
      email: siteContact.email.label,
      telephone: siteContact.phone.label,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteContact.email.label,
        telephone: siteContact.phone.href.replace("tel:", ""),
        areaServed: "RU",
        availableLanguage: ["ru"],
      },
      worksFor: { "@id": `${siteUrl}/#organization` },
      sameAs: externalProfiles,
      knowsAbout: [
        "Разработка Telegram-ботов",
        "Разработка Max-ботов",
        "Парсинг данных",
        "CRM-интеграции",
        "API-интеграции",
        "Python",
      ],
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Ardashev.dev",
      url: siteUrl,
      logo: `${siteUrl}/icon.svg`,
      email: siteContact.email.label,
      telephone: siteContact.phone.label,
      founder: { "@id": `${siteUrl}/#person` },
      areaServed: { "@type": "Country", name: "Россия" },
      sameAs: externalProfiles,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Ardashev.dev",
      url: siteUrl,
      inLanguage: "ru-RU",
      description: "Сайт разработчика Telegram-ботов, Max-ботов, парсеров и CRM/API-интеграций.",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};
