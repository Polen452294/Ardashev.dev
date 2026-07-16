import Link from "next/link";
import {
  InnerPageSection,
  InnerPageTitle,
} from "@/components/pages/inner-page-layout";
import { Card } from "@/components/ui/card";
import type { BlogPost } from "@/data/blog-posts";

export function KnowledgeLinksSection({
  items,
  title = "Полезные статьи о Telegram-ботах",
  text = "Практические материалы о стоимости, сроках и подготовке задачи к разработке.",
}: {
  items: BlogPost[];
  title?: string;
  text?: string;
}) {
  return (
    <InnerPageSection>
      <InnerPageTitle eyebrow="База знаний" title={title} text={text} />

      <div className="grid gap-2.5 sm:gap-5 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/blog/${item.slug}`}
            className="group block"
          >
            <Card className="flex h-full flex-col bg-[#081122]/72">
              <div className="text-xs font-medium text-emerald-300">
                {item.readingTime} чтения
              </div>

              <h3 className="mt-3 text-lg font-semibold leading-7 text-white transition group-hover:text-emerald-100">
                {item.shortTitle}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {item.excerpt}
              </p>

              <div className="mt-auto pt-5 text-sm font-medium text-emerald-300">
                Читать статью →
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </InnerPageSection>
  );
}
