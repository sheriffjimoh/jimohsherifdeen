import { Heading } from '@chakra-ui/layout'
import { Box, Flex, Link, Stack, Text, SimpleGrid } from '@chakra-ui/react'
import dateFormat from 'dateformat'
import { SlideUpWhenVisible } from '@/hooks'
import NextLink from 'next/link'
import readingTime from 'reading-time'

export interface singleArticeleProps{
  articles: {
      fields:{
        title: string,
        slug: string,
        date: string,
        summary: string,
        body: string,
        image: string
      }
  }[]
   
}
export  function LatestArticle({ articles }: singleArticeleProps) {

  console.log("article.fields.body::", readingTime(articles[0].fields.body))

  return (
    <Stack
      spacing={5}
      w="100%"
      h={100}
      display={articles.length < 2 ? 'none' : 'block'}
    >
      <SlideUpWhenVisible 
       threshold={undefined}>
        <Flex alignItems="center" justifyContent="space-between" mb="20px">
          <Heading fontSize={{ base: 'xl', md: '2xl' }} fontFamily="Ubuntu" textColor="#ffff">
            📰 Latest Articles.
          </Heading>
          <NextLink href="/blog">
            <Link>
              <Text fontSize={{ base: 'sm', md: 'md' }}>
                View all articles &rarr;
              </Text>
            </Link>
          </NextLink>
        </Flex>
      </SlideUpWhenVisible>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={{ base: 2, md: 4 }}>
        {articles.map((article: { fields: { slug: string; title: string; date: string, body: string} }, index: any) => (
          <SlideUpWhenVisible 
             threshold={undefined} key={index}>
            <Link
              href={'/blog/' + article.fields.slug}
              _hover={{ textDecoration: 'none' }}
              _focus={{ outline: 'none' }}
              w="100%"
            >
              <Stack
                direction="column"
                alignItems="flex-start"
                bg="secondary"
                _hover={{ bg: '#111' }}
                transition="0.3s"
                border="1px"
                borderColor={{ base: '#333', md: 'borderColor' }}
                borderRadius="10px"
                p={5}
                justifyContent="flex-start"
                // space={2}
              >
                <Text
                  color="displayColor"
                  fontSize={{ base: 'md', md: 'xl' }}
                  fontWeight="bold"
                  cursor="pointer"
                >
                  {article.fields.title.length > 54 ? (
                    <>{article?.fields?.title?.substring(0, 54)}...</>
                  ) : (
                    article.fields.title
                  )}
                </Text>
                <Text color="textSecondary" fontSize="sm">
                  {dateFormat(Date.parse(article.fields.date), 'mmmm d yyyy')}{' '}
                  <Box as="span" fontSize="xs">
                    &bull;
                  </Box>{' '}
                  {/* {readingTime(article.fields.body).text} */}
                 
                </Text>
              </Stack>
            </Link>
          </SlideUpWhenVisible>
        ))}
      </SimpleGrid>
    </Stack>
  )
}
