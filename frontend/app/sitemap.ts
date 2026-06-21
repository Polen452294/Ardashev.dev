import type { MetadataRoute } from "next";

const siteUrl = "https://ardashev.dev";

const routes = [
  "",
  "/telegram-bots",
  "/max-bots",
  "/parsers",
  "/crm-integrations",
  "/cases/usdt-exchange-bot",
  "/cases/max-request-bot",
  "/cases/profi-parser-bot",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : route.startsWith("/cases") ? 0.75 : 0.9,
  }));
}