import Image from 'next/image'
import Link from 'next/link'
import { Container, Introduction, AboutMe, FeaturedProjects, LatestArticle,ContactMe }  from '@/components'
import { Stack } from '@chakra-ui/react'

export default function Home({ projects, articles }: any) {
  return (
    <Container enableTransition={true} >
         <Stack
          as="main"
          spacing={{md: "120px", base: "64px"}}
          justifyContent="center"
          alignItems="flex-start"
          px={{ base: '5vw', md: '10vw' }}
          mt={{ base: '15vh', md: '22.5vh' }}
        >
             <Introduction  />
             <AboutMe />
             <FeaturedProjects projects={projects} />
             <LatestArticle articles={articles} />
             <ContactMe /> 
        </Stack>
    </Container>
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
    order: 'sys.createdAt',
  })

  let introduction = await client.getEntries({
    content_type: 'introduction',
    limit: 2,
    order: 'sys.createdAt',
  })



  return {
    props: {
      projects,
      articles: articles.items,
    },
  }
}