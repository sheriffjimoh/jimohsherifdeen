import { SetStateAction, useState } from 'react'
import { Stack, Heading, Text, SimpleGrid, Divider } from '@chakra-ui/react'
import { Container, Card, projectProps} from '@/components'
import Head from 'next/head'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { FaSearch } from 'react-icons/fa'

export default function Projects({ projects } : projectProps) {
  const [query, setQuery] = useState('')
  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setQuery(e.target.value)
  }

  return (
    <>
      <Container>
        <Head>
          <title>Jimoh Sherifdeen - Full  Stack Software Engineer</title>
          <meta name="title" content="Jimoh Sherifdeen - Full  Stack Software Engineer" />
          <meta
            name="description"
            content="Software Engineer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://abdulrahman.id/projects" />
          <meta
            property="og:title"
            content="Jimoh Sherifdeen - Full  Stack Software Engineer"
          />
          <meta
            property="og:description"
            content="Software Engineer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
          />
          <meta property="og:image" content="https://imagizer.imageshack.com/a/img923/3917/IFUVhm.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://abdulrahman.id/projects"
          />
          <meta
            property="twitter:title"
            content="Jimoh Sherifdeen - Full  Stack Software Engineer"
          />
          <meta
            property="twitter:description"
            content="Software Engineer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
          />
          <meta
            property="twitter:image"
            content="https://imagizer.imageshack.com/a/img923/3917/IFUVhm.png"
          />
        </Head>
        <Stack
          spacing={10}
          justifyContent="center"
          px={['5vw', '10vw']}
          my={['15vh', '15vh', '22.5vh', '22.5vh']}
        >
          <Stack spacing={5}>
            {' '}
            <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
              Projects
            </Heading>
            <Text fontSize={{ base: '14px', md: '16px' }} textColor="#fff">
              I love building projects and practice my engineering skills,
              here&lsquo;s an archive of things that I&lsquo;ve worked on.
            </Text>
            <InputGroup maxW="400px">
              <InputRightElement pointerEvents="none" >
                  <FaSearch />
              </InputRightElement>
              <Input
                type="text"
                placeholder="Search projects"
                value={query}
                onChange={handleChange}
              />
            </InputGroup>
            <Divider />
          </Stack>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
            {projects.items
              .filter((e: { fields: { title: string } }) =>
                e.fields.title.toLowerCase().includes(query.toLowerCase()),
              )
              .map((project: { fields: { title: string, imgUrl: string, description: string, githubLink: string, deployLink: string,tags: [] } }) => (
                <Card
                  key={project.fields.title}
                  imageURL={project.fields.imgUrl}
                  title={project.fields.title}
                  desc={project.fields.description}
                  githubLink={project.fields.githubLink}
                  deployLink={project.fields.deployLink}
                  tag={project.fields.tags}
                />
              ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  )
}

let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps() {
  let projects = await client.getEntries({
    content_type: 'featuredProjects',
    order: 'sys.createdAt',
  })
  return {
    props: {
      projects
    },
  }
}
