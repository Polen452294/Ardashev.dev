import type { Metadata } from "next";

const siteName = "Ardashev.dev";
const defaultImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Ardashev.dev — разработка и автоматизация",
};

type PageMetadata = Omit<Metadata, "title" | "description"> & {
  title: string;
  description: string;
};

export function withPageSocialMetadata(
  metadata: PageMetadata,
  url: string,
  type: "website" | "article" = "website",
): Metadata {
  return {
    ...metadata,
    openGraph: {
      type,
      locale: "ru_RU",
      siteName,
      url,
      title: metadata.title,
      description: metadata.description,
      images: [defaultImage],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [defaultImage.url],
    },
  };
}
