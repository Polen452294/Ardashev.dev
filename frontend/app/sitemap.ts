import type { MetadataRoute } from "next";

const siteUrl = "https://ardashev.dev";

const routes = [
  "",
  "/about",
  "/contacts",
  "/services",
  "/cases",
  "/telegram-bots",
  "/max-bots",
  "/max-bots/migration-from-telegram",
  "/parsers",
  "/crm-integrations",
  "/cases/usdt-exchange-bot",
  "/cases/max-request-bot",
  "/cases/profi-parser-bot",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
  }));
}
