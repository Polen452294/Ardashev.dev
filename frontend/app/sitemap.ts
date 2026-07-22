import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";

const siteUrl = "https://ardashev.dev";

const staticRoutes = [
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

// Update this value only when static page content or metadata changes.
const staticLastModified = "2026-07-22";

const blogLastModified = blogPosts.reduce(
  (latest, post) => (post.updatedAt > latest ? post.updatedAt : latest),
  blogPosts[0]?.updatedAt ?? staticLastModified,
);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: staticLastModified,
    })),
    {
      url: `${siteUrl}/blog`,
      lastModified: blogLastModified,
    },
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
    })),
  ];
}
