import {
  Link,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Box,
} from '@chakra-ui/layout'
import NextLink from 'next/link'
import Cards  from './Card'
import { SlideUpWhenVisible }  from '@/hooks'
import ReactGA from 'react-ga'


interface projectProps{
  projects: { 
    items:{
    fields: {
      imgUrl: string,
      title: string,
      description: string,
      githubLink: string,
      deployLink: string,
      tags: []
    }
   }[]
  }
}

export  function FeaturedProjects({ projects }: projectProps) {

  const handleClick = (event: any) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }

  return (
    <>
      <Stack spacing={8} w="full">
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={20}>
          <SlideUpWhenVisible threshold={0.1}>
            <Stack spacing={1}>
              <Stack
                isInline
                alignItems="center"
                justifyContent="space-between"
              >
                <Heading
                  fontSize={{ base: 'xl', md: '2xl' }}
                  color="displayColor"
                  fontFamily="Ubuntu"
                >
                  All Creative Works.
                </Heading>
                <NextLink href="/projects" passHref>
                  <Link
                    onClick={() => handleClick('featuredprojects_explore more')}
                  >
                    <Text
                      display={{ base: 'block', md: 'none' }}
                      fontSize={{ base: 'sm', md: 'xl' }}
                      color="button1"
                      _hover={{ color: 'button2' }}
                    >
                      {' '}
                      Explore more &rarr;
                    </Text>
                  </Link>
                </NextLink>
              </Stack>
              <Text fontSize={{ base: 'md', md: 'xl' }} color="textSecondary">
                Here&lsquo;s some of my projects that I have worked on.
              </Text>
              <NextLink href="/projects">
                <Link
                  onClick={() => handleClick('featuredprojects_explore more')}
                >
                  <Text
                    display={{ base: 'none', md: 'block' }}
                    fontSize={{ base: 'md', md: 'xl' }}
                  >
                    Explore more &rarr;
                  </Text>
                </Link>
              </NextLink>
            </Stack>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible threshold={undefined}>
            <Cards
              imageURL={projects.items[0].fields.imgUrl}
              title={projects.items[0].fields.title}
              desc={projects.items[0].fields.description}
              githubLink={projects.items[0].fields.githubLink}
              deployLink={projects.items[0].fields.deployLink}
              tag={projects.items[0].fields.tags}
            />
          </SlideUpWhenVisible>
          <SlideUpWhenVisible threshold={undefined}>
            <Box mt={{ md: '-50%' }}>
            <Cards
              imageURL={projects.items[1].fields.imgUrl}
              title={projects.items[1].fields.title}
              desc={projects.items[1].fields.description}
              githubLink={projects.items[1].fields.githubLink}
              deployLink={projects.items[1].fields.deployLink}
              tag={projects.items[1].fields.tags}
            />
            </Box>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible threshold={0.8}>
            <Box mt={{ md: '40px' }}> 
          <Cards
              imageURL={projects.items[2].fields.imgUrl}
              title={projects.items[2].fields.title}
              desc={projects.items[2].fields.description}
              githubLink={projects.items[2].fields.githubLink}
              deployLink={projects.items[2].fields.deployLink}
              tag={projects.items[2].fields.tags}
            />
            </Box>
          </SlideUpWhenVisible>
        </SimpleGrid>
      </Stack>
    </>
  )
}
