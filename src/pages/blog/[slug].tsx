import { Avatar, Text, Heading, Stack } from '@chakra-ui/react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { ArticleJsonLd, NextSeo } from 'next-seo'
import mdxPrism from 'mdx-prism'
import dateFormat from 'dateformat'
import { getReadTime } from '@/hooks';
import { Image, Container, PostContainer, LazyImage } from '@/components'

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
        title={metadata.title}
        images={[metadata.image]}
        datePublished={metadata.date}
        dateModified={metadata.date}
        authorName="Jimoh Sherifdeen"
        publisherName="Jimoh Sherifdeen"
        publisherLogo="https://res.cloudinary.com/dy9yoeiq2/image/upload/v1757781139/1707894377337_ccmxx2.jpg"
        description={metadata.summary}
      />
      <Container>
        <Stack my="15vh" justifyContent="center" alignItems="center">
          <Stack
            w={['100vw', '95vw']}
            maxW="680px"
            p={['20px', '20px', '24px', '24px']}
          >
            <Heading
              fontSize={['3xl', '3xl', '5xl', '5xl']}
              color="displayColor"
            >
              {metadata.title}
            </Heading>
            <Stack
              py={4}
              direction={{ base: 'column', md: 'row' }}
              alignItems="baseline"
              justifyContent="space-between"
            >
              <Stack isInline alignItems="center">
                <Avatar
                  name="Jimoh Sherifdeen"
                  size="xs"
                  src="https://res.cloudinary.com/dy9yoeiq2/image/upload/v1757781139/1707894377337_ccmxx2.jpg"
                  border="1px solid textPrimary"
                />
                <Text fontSize={['xs', 'xs', 'sm', 'sm']} color="textPrimary">
                  Jimoh Sherifdeen /{' '}
                  {dateFormat(Date.parse(metadata.date), 'mmmm d, yyyy')}
                </Text>
              </Stack>
              <Stack>
                <Text fontSize={['xs', 'xs', 'sm', 'sm']} color="textSecondary">
                  {metadata.readingTime} 
                </Text>
              </Stack>
            </Stack>
            <Stack
              bg="secondary"
              borderRadius="10px"
              minH="200px"
              border="1px"
              borderColor={{ base: '#333', md: 'borderColor' }}
            >
              <LazyImage
                src={metadata.image}
                width={1366}
                height={892}
                alt=""
              ></LazyImage>
            </Stack>
            <PostContainer>
              {documentToReactComponents(metadata.body)}
            </PostContainer>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: 'blogPosts',
  })
  return {
    paths: data.items.map((item: { fields: { slug: any } }) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  let data = await client.getEntries({
    content_type: 'blogPosts',
    'fields.slug': params.slug,
  })

  const article = data.items[0].fields
  const source = article.body
  article.readingTime = getReadTime(source)
  
  const mdxSource = await serialize(source, {
    mdxOptions: {
      rehypePlugins: [mdxPrism],
    },
  })


  return {
    props: {
      metadata: article,
      source: mdxSource
    },
    revalidate: 30,
  }
}
