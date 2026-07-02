import type { MetadataRoute } from "next";

const siteUrl = "https://ardashev.dev";

const routes = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.85 },
  { path: "/contacts", priority: 0.85 },
  { path: "/sitemap", priority: 0.7 },
  { path: "/telegram-bots", priority: 0.9 },
  { path: "/max-bots", priority: 0.9 },
  { path: "/parsers", priority: 0.9 },
  { path: "/crm-integrations", priority: 0.9 },
  { path: "/cases/usdt-exchange-bot", priority: 0.75 },
  { path: "/cases/max-request-bot", priority: 0.75 },
  { path: "/cases/profi-parser-bot", priority: 0.75 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date("2026-07-02"),
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}