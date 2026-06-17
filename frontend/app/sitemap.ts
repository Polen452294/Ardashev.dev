import type { MetadataRoute } from "next";

const siteUrl = "https://ardashev.dev";

const routes = [
  "",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}