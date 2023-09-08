import Image from 'next/image'
import Link from 'next/link'
import { Container, Introduction, AboutMe, FeaturedProjects }  from '@/components'
import { Stack } from '@chakra-ui/react'
export default function Home({ projects }: any) {

  return (
    <Container enableTransition={true} >
         <Stack
          as="main"
          spacing={{md: "114px", base: "64px"}}
          justifyContent="center"
          alignItems="flex-start"
          px={{ base: '5vw', md: '10vw' }}
          mt={{ base: '15vh', md: '22.5vh' }}
        >
             <Introduction  />
             <AboutMe />
             <FeaturedProjects projects={projects} />
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

  // let data2 = await client.getEntries({
  //   content_type: 'blogPosts',
  //   limit: 4,
  //   order: 'sys.createdAt',
  // })

  let introduction = await client.getEntries({
    content_type: 'introduction',
    limit: 2,
    order: 'sys.createdAt',
  })

  console.log(introduction)

  // let data4 = await client.getEntries({
  //   content_type: 'contactMe',
  //   limit: 1,
  //   order: 'sys.createdAt',
  // })

  return {
    props: {
      projects: projects,
      articles: [],
      introduction: introduction.items,
      contactMe: [],
    },
  }
}