
import Head from 'next/head'
import { Container }  from '@/components'
import {  getReadTime}  from '@/hooks'
import dateFormat from 'dateformat'
import { ArrowRight, Clock, Calendar, ArrowLeft, Search, ArrowUpRight } from 'lucide-react';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, useState } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Article } from '@/components/BlogPreview';

export default function Index({ articles }: { articles: Article[] }) {
 
   const ref = useScrollReveal<HTMLDivElement>();
  const [query, setQuery] = useState('');
  const filtered = articles.filter((a: Article) => {
    const matchesQuery =
      query === '' ||
      a.fields.title.toLowerCase().includes(query.toLowerCase()) ||
      a.fields.summary.toLowerCase().includes(query.toLowerCase());
    return matchesQuery;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  console.log('filtered', filtered);

  return (
    <>
      <Head>
        <title>Blog - Jimoh Sherifdeen</title>
        <meta name="title" content="Blog - Jimoh Sherifdeen" />
        <meta
          name="description"
          content="Writings on tech, programming, frameworks, libraries, frontend, backend, tutorials, and my experiences."
        />
         <meta
          name="keywords"
          content="tech, programming, frameworks, libraries, frontend, backend, tutorials, software developement."
        />

        <meta property="og:type" content="website" />
        <meta
          name="og:keywords"
          content="tech, programming, frameworks, libraries, frontend, backend, tutorials, software developement."
        />
        <meta property="og:url" content="https://jimohsherifdeen.vercel.app/blog" />
        <meta property="og:title" content="Blog - Jimoh Sherifdeen" />
        <meta
          property="og:description"
          content="Writings on tech, programming, frameworks, libraries, frontend, backend, tutorials, and my experiences."
        />
        <meta property="og:image" content="https://imagizer.imageshack.com/img923/2757/2RJKn5.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jimohsherifdeen.vercel.app/" />
        <meta property="twitter:title" content="Blog - Jimoh Sherifdeen" />
        <meta
          property="twitter:description"
          content="Writings on tech, programming, frameworks, libraries, frontend, backend, tutorials, and my experiences."
        />
        <meta
          property="twitter:image"
          content="https://imagizer.imageshack.com/img923/2757/2RJKn5.png"
        />
      </Head>
   



      <main className="pt-32">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-12">
          <a href="/"
            className=" group inline-flex items-center gap-2 text-sm text-ink-500 transition-colors hover:text-ink-900"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back home
          </a>

          <h1 className=" mt-8 text-5xl font-bold leading-tight text-ink-900 sm:text-7xl">
            The{' '}
            <span className="font-display italic font-normal text-brand-500">Journal</span>
          </h1>
          <p className=" mt-6 max-w-2xl text-lg leading-relaxed text-ink-500">
            This is where I share my writings on tech, programming, frameworks,
            and my experiences building software.
          </p>

          {/* Search + filters */}
          <div className=" mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-sm flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-full border border-ink-900/10 bg-cream-100 py-3 pl-11 pr-4 text-sm text-ink-900 placeholder-ink-400 outline-none transition-all focus:border-brand-500/40 focus:bg-cream-50"
              />
            </div>
            {/* <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all ${
                    category === cat
                      ? 'border-ink-900 bg-ink-900 text-cream-50'
                      : 'border-ink-900/10 bg-cream-50 text-ink-500 hover:border-ink-900/30 hover:text-ink-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div> */}
          </div>
        </section>

        {/* Featured article */}
        {featured && (
          <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-12">
            <a
              href={`/blog/${featured.fields.slug}`}
              className=" card-lift group grid overflow-hidden rounded-3xl border border-ink-900/10 bg-cream-100 lg:grid-cols-2"
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
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />  {dateFormat(Date.parse(featured.fields.date), "mmmm d yyyy")}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />  {getReadTime(featured.fields.body)}</span>
                </div>
                <h2 className="mt-4 text-2xl font-bold leading-snug text-ink-900 transition-colors group-hover:text-brand-600 lg:text-3xl">
                  {featured.fields.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-500 line-clamp-3">{featured.fields.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          </section>
        )}

        {/* Article list */}
        <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-28">
          {rest.length > 0 ? (
            <div className="divide-y divide-ink-900/8 border-y border-ink-900/8">
              {rest.map((article: Article, i: number) => (
                <a
                  key={article.fields.slug}
                  href={`/blog/${article.fields.slug}`}
                  className=" group flex flex-col gap-4 py-8 transition-colors hover:bg-cream-100/50 sm:flex-row sm:items-center sm:gap-8"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="flex items-center gap-3 sm:w-40 shrink-0">
                    <span className="font-mono text-sm text-ink-300">{String(i + 2).padStart(2, '0')}</span>
                    {/* <span className="rounded-md bg-brand-500/10 px-2 py-0.5 font-mono text-xs text-brand-600">
                      {article.category}
                    </span> */}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold leading-snug text-ink-900 transition-colors group-hover:text-brand-600 lg:text-xl">
                      {article.fields.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-500 line-clamp-1">{article.fields.summary}</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-ink-400 sm:shrink-0">
                    <span className="hidden sm:block"> {dateFormat(Date.parse(featured.fields.date), "mmmm d yyyy")}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {getReadTime(featured.fields.body)}</span>
                  </div>
                  <ArrowUpRight className="hidden h-5 w-5 text-ink-400 transition-all group-hover:text-brand-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:block shrink-0" />
                </a>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg text-ink-400">No articles found. Try a different search or category.</p>
            </div>
          )}
        </section>
      </main>

    </>
  )
}

let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps() {
  let articles = await client.getEntries({
    content_type: 'blogPosts',
    limit: 50,
    order: '-sys.createdAt',
  })

  return {
    props: {
      articles: articles.items,
    },
    revalidate: 60
  }
}
