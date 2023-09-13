import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useState } from 'react'
import { Stack, Heading, Text, Divider, Flex, Box } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { Container }  from '@/components'
import { FaSearch } from 'react-icons/fa'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { useMediaQuery }  from '@/hooks'
import readingTime from 'reading-time'
import dateFormat from 'dateformat'

export default function Index({ articles }: any) {
  const [query, setQuery] = useState('')
  const handleChange = (e: any) => setQuery(e.target.value)
  const isLargerThan1024 = useMediaQuery(1024)

  return (
    <Container>
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
        <meta property="og:url" content="https://abdulrahman.id/blog" />
        <meta property="og:title" content="Blog - Jimoh Sherifdeen" />
        <meta
          property="og:description"
          content="Writings on tech, programming, frameworks, libraries, frontend, backend, tutorials, and my experiences."
        />
        <meta property="og:image" content="https://imagizer.imageshack.com/img923/2757/2RJKn5.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://abdulrahman.id/" />
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
      <Stack
        as="main"
        spacing={5}
        justifyContent="center"
        alignItems="flex-start"
        px={['5vw', '10vw']}
        my={['15vh', '15vh', '22.5vh', '22.5vh']}
      >
        <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
          Blog
        </Heading>
        <Text fontSize={{ base: '14px', md: '16px' }} textColor="#fff">
          This is where I share my writings on tech, programming, frameworks, and my
          experiences.
        </Text>
        <InputGroup maxW="400px">
          <InputRightElement pointerEvents="none"  >
            <FaSearch />
          </InputRightElement>
          <Input
            type="text"
            placeholder="Search articles"
            value={query}
            onChange={handleChange}
          />
        </InputGroup>
        <Divider />
        <Stack spacing={5}>
          {articles
            .filter((e: { fields: { title: string } }) =>
              e.fields.title.toLowerCase().includes(query.toLowerCase()),
            )
            .map((article: { fields: { date: string; body: string; slug: string; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; summary: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined } }, index: Key | null | undefined) => (
              <Stack
               key={index}
               
                direction={'column'}
                alignItems="flex-start"
                justifyContent="flex-start"
              >

              
                <Flex flexDirection="column" 
                // px={isLargerThan1024 ? 10 : 0}
                my="4"
                >
                  <Link href={'/blog/' + article.fields.slug}>
                    
                      <Text
                        color="displayColor"
                        fontSize="xl"
                        fontWeight="bold"
                        cursor="pointer"
                      >
                        {article.fields.title}
                      </Text>
                      <Text color="textSecondary">
                        {article.fields.summary}
                      </Text>

                      <Flex flexDirection="row" justifyContent="space-between">
                        
                        <Text color="button1" cursor="pointer">
                        Learn more &rarr;
                       </Text>
                       <Flex alignItems={'center'} >
                        <Text  fontSize="15px" color="button1" mr={'3px'}> 
                          {dateFormat(Date.parse(article.fields.date), 'mmm, d yyyy')}   
                        </Text>
                          <Text textColor="#fff">  -  {readingTime(article.fields.body).text}</Text>
                        </Flex>
                      </Flex>

                      
                
                  </Link>
                </Flex>
              </Stack>
            ))}
        </Stack>
      </Stack>
    </Container>
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
    order: 'sys.createdAt',
  })

  return {
    props: {
      articles: articles.items,
    },
  }
}
