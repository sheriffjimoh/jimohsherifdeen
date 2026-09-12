import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArticleJsonLd, NextSeo } from 'next-seo'
import dateFormat from 'dateformat'
import { getReadTime } from '@/hooks';
import { PostContainer, Navbar, Contact, Footer } from '@/components'
import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { profile } from '@/content/portfolio';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Image from "next/image";


const richTextOptions: Options = {
  renderMark: {
    [MARKS.CODE]: (text) => (
      <code className="rounded bg-ink-900 px-1.5 py-0.5 font-mono text-sm text-brand-300">
        {text}
      </code>
    ),
  },

  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      const text = node.content
        .map((item: any) => item.value ?? '')
        .join('');

      // Render multiline code as an editor-style code block
      if (text.includes('\n')) {
        return (
          <pre className="my-6 overflow-x-auto rounded-xl bg-ink-900 p-5 shadow-lg">
            <code className="font-mono text-sm leading-7 text-brand-300">
              {text}
            </code>
          </pre>
        );
      }

      return <p>{children}</p>;
    },
  },
};

interface blogProps {
  title: string,
  slug: string,
  date: string,
  summary: string,
  body: any,
  image: string,
  readingTime: string
}

export default function Post({ metadata }: { metadata: blogProps }) {

  const ref = useScrollReveal<HTMLDivElement>();
  const slug = metadata?.slug;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);
  
  if (!metadata) {
    return (
      <div ref={ref}>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-center px-6">
          <h1 className="text-6xl font-bold text-ink-900">404</h1>
          <p className="mt-4 text-lg text-ink-500">Article not found.</p>
          <Link
            href="/blog"
            className="mt-8 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-cream-50 transition-all hover:bg-brand-500 hover:text-ink-900"
          >
            Back to blog
          </Link>
        </main>
      </div>
    );
  }
 
  return (
    <>
      <NextSeo
        title={metadata.title}
        description={metadata.summary}
        canonical={`https://jimohsherifdeen.vercel.app/blog/${metadata.slug}`}
        openGraph={{
          url: `https://jimohsherifdeen.vercel.app/blog/${metadata.slug}`,
          site_name: 'Jimoh Sherifdeen',
          title: metadata.title,
          description: metadata.summary,
          type: 'article',
          article: {
            authors: ['Jimoh Sherifdeen'],
            publishedTime: metadata.date,
            modifiedTime: metadata.date,
            tags: ['Programming', 'Web Development', 'Software Engineering', 'Tech', 'Software Development', 'full stack development'],
          },
          images: [
            {
              url: metadata.image,
              alt: metadata.title,
            },
          ],
        }}
        additionalMetaTags={[
          { property: 'twitter:card', content: 'summary_large_image' },
          {
            property: 'twitter:url',
            content: `https://jimohsherifdeen.vercel.app/blog/${metadata.slug}`,
          },
          { property: 'twitter:title', content: metadata.title },
          { property: 'twitter:description', content: metadata.summary },
          { property: 'twitter:image', content: metadata.image },
        ]}
      />
      <ArticleJsonLd
        url={`https://jimohsherifdeen.vercel.app/blog/${metadata.slug}`}
        title={metadata?.title}
        images={[metadata.image]}
        datePublished={metadata.date}
        dateModified={metadata.date}
        authorName="Jimoh Sherifdeen"
        publisherName="Jimoh Sherifdeen"
        publisherLogo="https://res.cloudinary.com/dy9yoeiq2/image/upload/v1757781139/1707894377337_ccmxx2.jpg"
        description={metadata.summary}
      />
    
       <div ref={ref}>
      <Navbar />
      <main className="pt-32">
        {/* Article header */}
        <article className="mx-auto max-w-3xl px-6 lg:px-10">
          {/* Breadcrumb */}
          <Link
            href="/blog"
            className=" group inline-flex items-center gap-2 text-sm text-ink-500 transition-colors hover:text-ink-900"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            All articles
          </Link>

          {/* Category + meta */}
          <div className=" mt-8 flex flex-wrap items-center gap-4 text-sm text-ink-400">
            <span className="rounded-md bg-brand-500/10 px-3 py-1 font-mono text-xs font-medium text-brand-600">
              Tech & Programming
            </span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {dateFormat(Date.parse(metadata.date), "mmmm d yyyy")}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {getReadTime(metadata.body)}</span>
          </div>

          {/* Title */}
          <h1 className=" mt-6 text-4xl font-bold leading-[1.15] text-ink-900 sm:text-5xl lg:text-6xl">
            {metadata.title}
          </h1>

          {/* Excerpt */}
          <p className=" mt-6 text-xl leading-relaxed text-ink-500 font-normal">
            {metadata.summary}
          </p>

          {/* Author + share */}
          <div className=" mt-10 flex items-center justify-between border-y border-ink-900/10 py-5">
            <div className="flex items-center gap-3">
              <Image
                src={profile.avatarUrl}
                alt={profile.name}
                className="h-11 w-11 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-semibold text-ink-900">{profile.name}</div>
                <div className="text-xs text-ink-400">{profile.role}</div>
              </div>
            </div>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: metadata.title, url: window.location.href }).catch(() => {});
                } else {
                  navigator.clipboard?.writeText(window.location.href);
                }
              }}
              className="flex items-center gap-2 rounded-full border border-ink-900/10 px-4 py-2 text-sm font-medium text-ink-600 transition-all hover:border-ink-900 hover:bg-ink-900 hover:text-cream-50"
            >
              <Share2 className="h-3.5 w-3.5" />
              Share
            </button>
          </div>
        </article>

        {/* Article body */}
        <div className="mx-auto max-w-3xl px-6 lg:px-10 mt-12">
          <div className="prose-article  text-ink-700">
            <PostContainer>
              {documentToReactComponents(metadata.body, richTextOptions)}
            </PostContainer>
          </div>
        </div>






          <div className="mx-auto max-w-3xl px-6 lg:px-10 mt-16">
          <div className="flex items-center justify-between border-t border-ink-900/10 pt-8">
            <Link
              href={`mailto:${profile.email}`}
              className="text-sm font-medium text-brand-600 underline-link"
            >
              Reply via email
            </Link>
          </div>
        </div>

      
        {/* Contact CTA */}
        <Contact />
      </main>
      <Footer />
    </div>
    </>
  )
}




let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})


export async function getStaticPaths({ params }: any) {
  let data = await client.getEntries({
    content_type: 'blogPosts',
  })


  if (!data.items || !data.items.length) {
    console.error("No post found for slug:", params.slug)
    return { notFound: true } 
  }

  return {
    paths: data.items.map((item: { fields: { slug: any } }) => ({
      params: { slug: item.fields?.slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const data = await client.getEntries({
    content_type: 'blogPosts',
    'fields.slug': params.slug,
  });

  if (!data.items.length) {
    return { notFound: true };
  }

  const fields = data.items[0].fields;

  return {
    props: {
      metadata: {
        ...fields,
      },
    },
    revalidate: 30,
  };
}
