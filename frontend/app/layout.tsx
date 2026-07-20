import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { YandexMetrikaGoals } from "@/components/analytics/yandex-metrika-goals";
import { siteIdentityJsonLd } from "@/data/site-schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://ardashev.dev"),
  title: {
    default: "Разработка ботов, парсеров и CRM-интеграций | Ardashev.dev",
    template: "%s | Ardashev.dev",
  },
  description:
    "Разработка Telegram-ботов, Max-ботов, парсеров сайтов и Telegram, CRM/API-интеграций, систем приема заявок и автоматизации бизнес-процессов.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Ardashev.dev",
    title: "Разработка ботов, парсеров и CRM-интеграций",
    description:
      "Telegram-боты, Max-боты, парсеры, CRM-системы и API-интеграции для бизнеса.",
    url: "https://ardashev.dev",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ardashev.dev — разработка и автоматизация",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Разработка ботов, парсеров и CRM-интеграций",
    description:
      "Telegram-боты, Max-боты, парсеры, CRM-системы и API-интеграции для бизнеса.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteIdentityJsonLd) }}
        />
        {children}
        <YandexMetrikaGoals />

        <Script id="yandex-metrika-bootstrap" strategy="afterInteractive">
          {`
            window.ym = window.ym || function() {
              (window.ym.a = window.ym.a || []).push(arguments);
            };
            window.ym.l = 1 * new Date();

            ym(108437647, 'init', {
              ssr: true,
              webvisor: true,
              clickmap: true,
              ecommerce: "dataLayer",
              referrer: document.referrer,
              url: location.href,
              accurateTrackBounce: true,
              trackLinks: true
            });
          `}
        </Script>
        <Script
          id="yandex-metrika"
          src="https://mc.yandex.ru/metrika/tag.js?id=108437647"
          strategy="lazyOnload"
        />

        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/108437647"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
