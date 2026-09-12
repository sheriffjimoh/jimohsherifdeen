import { Hero, Marquee, About, Projects, BlogPreview, Contact, Footer }  from '@/components'
import Head from 'next/head'

export default function Home({ projects, articles }: any) {
  return (
     <>
     <Head>
        <title>Jimoh Sherifdeen - Full Stack Software Engineer</title> 
     </Head>
        <Hero />
        <Marquee />
        <About />
        <Projects projects={projects} />
        <BlogPreview articles={articles} />
        <Contact />
        <Footer />   
    </>
  )
}


let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps() {
  let projects = await client.getEntries({
    content_type: 'featuredProjects'
  })

  let articles = await client.getEntries({
    content_type: 'blogPosts',
    limit: 4,
    order: '-sys.createdAt',
  });
  

  return {
    props: {
      projects,
      articles: articles.items,
    },
  }
}