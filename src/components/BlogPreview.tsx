import { getReadTime } from "@/hooks/getReadTime";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import dateFormat from "dateformat";

export type Article = {
  fields: {
    title: string;
    slug: string;
    date: string;
    summary: string;
    body: any;
    image: string;
  };
};

export interface BlogPreviewProps {
  articles: Article[];
}



export function BlogPreview({ articles }: BlogPreviewProps) {
  const featured = articles[0];
  const rest = articles.slice(1, 4);
  return (
    <section id="blog" className="relative py-28 lg:py-36 bg-cream-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className=" flex items-center gap-3 mb-6">
          <span className="font-mono text-sm text-brand-500">03</span>
          <div className="h-px w-12 bg-brand-500/40" />
          <span className="text-sm uppercase tracking-widest text-ink-400">
            Writing
          </span>
        </div>

        <div className="reveal flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="text-3xl font-bold leading-tight text-ink-900 sm:text-5xl">
            Latest{" "}
            <span className="font-display italic font-normal text-brand-500">
              articles
            </span>
          </h2>
          <a
            href="/blog"
            className="group flex items-center gap-2 text-sm font-semibold text-ink-900 underline-link"
          >
            View all articles
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Featured */}
        <a
          href={`/blog/${featured.fields.slug}`}
          className="reveal card-lift group mt-10 grid overflow-hidden rounded-2xl border border-ink-900/10 bg-cream-50 lg:grid-cols-2"
        >
          <div className="relative min-h-[240px] overflow-hidden bg-gradient-to-br from-brand-400/20 to-cream-200">
            <img
              src={featured.fields.image}
              alt={featured.fields.title}
              className="absolute inset-0 z-0 h-full w-full object-cover transition-transform group-hover:scale-105"
            />

            <div className="relative z-10 flex h-full flex-col justify-start p-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-cream-50">
                Featured
              </span>
            </div>
          </div>
          <div className="p-8 lg:p-10">
            <div className="flex items-center gap-4 text-xs text-ink-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />{" "}
                {dateFormat(Date.parse(featured.fields.date), "mmmm d yyyy")}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />{" "}
                {getReadTime(featured.fields.body)}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-bold leading-snug text-ink-900 transition-colors group-hover:text-brand-600 lg:text-3xl">
              {featured.fields.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink-500 line-clamp-3">
              {featured.fields.summary}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
              Read article
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </a>

        {/* Rest */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {rest.map((article, i) => (
            <a
              key={article.fields.slug}
              href={`/blog/${article.fields.slug}`}
              className=" card-lift group rounded-2xl border border-ink-900/10 bg-cream-50 p-6"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3 text-xs text-ink-400">
                {/* <span className="rounded-md bg-brand-500/10 px-2 py-0.5 font-mono text-brand-600">{article.fields.category}</span> */}
                <span>{dateFormat(Date.parse(article.fields.date), "mmmm d yyyy")}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold leading-snug text-ink-900 transition-colors group-hover:text-brand-600">
                {article.fields.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500 line-clamp-2">{article.fields.summary}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-ink-400">
                <Clock className="h-3 w-3" /> {getReadTime(article.fields.body)}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
