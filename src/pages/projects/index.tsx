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

  // Generate structured data for projects
  const projectsStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Jimoh Sherifdeen - Software Projects Portfolio",
    "description": "A collection of software engineering projects showcasing full-stack development skills, web applications, and technical expertise by Jimoh Sherifdeen",
    "url": "https://jimohsherifdeen.vercel.app/projects",
    "author": {
      "@type": "Person",
      "name": "Jimoh Sherifdeen",
      "jobTitle": "Full Stack Software Engineer"
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": projects?.items?.length || 0,
      "itemListElement": projects?.items?.map((project: any, index: number) => ({
        "@type": "CreativeWork",
        "position": index + 1,
        "name": project.fields.title,
        "description": project.fields.description,
        "url": project.fields.deployLink || project.fields.githubLink,
        "image": project.fields.imgUrl,
        "creator": {
          "@type": "Person",
          "name": "Jimoh Sherifdeen"
        },
        "keywords": project.fields.tags?.join(", ") || "web development, software engineering",
        "programmingLanguage": project.fields.tags || [],
        "codeRepository": project.fields.githubLink
      })) || []
    }
  }

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://jimohsherifdeen.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://jimohsherifdeen.vercel.app/projects"
      }
    ]
  }

  const softwareApplicationData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Software Projects by Jimoh Sherifdeen",
    "description": "Browse through a curated collection of software projects demonstrating full-stack development capabilities, including web applications, mobile apps, and innovative solutions",
    "url": "https://jimohsherifdeen.vercel.app/projects",
    "author": {
      "@type": "Person",
      "name": "Jimoh Sherifdeen",
      "jobTitle": "Full Stack Software Engineer"
    },
    "about": {
      "@type": "Thing",
      "name": "Software Development Portfolio",
      "description": "Full-stack software development projects"
    },
    "keywords": "software projects, web development, full stack engineer, portfolio, JavaScript, React, Node.js",
    "inLanguage": "en-US"
  }

  return (
    <>
      <Container>
        <Head>
          <title>Projects - Jimoh Sherifdeen | Full Stack Software Engineer Portfolio</title>
          <meta name="title" content="Projects - Jimoh Sherifdeen | Full Stack Software Engineer" />
          <meta
            name="description"
            content="Explore my software engineering projects showcasing full-stack development skills. From web applications to mobile solutions, discover the innovative projects I've built using modern technologies."
          />
          <meta name="keywords" content="software projects, web development portfolio, full stack projects, React projects, Node.js applications, JavaScript developer, Jimoh Sherifdeen projects" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://jimohsherifdeen.vercel.app/projects" />
          <meta
            property="og:title"
            content="Projects - Jimoh Sherifdeen | Full Stack Software Engineer"
          />
          <meta
            property="og:description"
            content="Explore my software engineering projects showcasing full-stack development skills. From web applications to mobile solutions, discover innovative projects built with modern technologies."
          />
          <meta property="og:image" content="https://res.cloudinary.com/dy9yoeiq2/image/upload/v1757781139/1707894377337_ccmxx2.jpg" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://jimohsherifdeen.vercel.app/projects"
          />
          <meta
            property="twitter:title"
            content="Projects - Jimoh Sherifdeen | Full Stack Software Engineer"
          />
          <meta
            property="twitter:description"
            content="Explore my software engineering projects showcasing full-stack development skills. From web applications to mobile solutions, discover innovative projects built with modern technologies."
          />
          <meta
            property="twitter:image"
            content="https://res.cloudinary.com/dy9yoeiq2/image/upload/v1757781139/1707894377337_ccmxx2.jpg"
          />

          {/* Projects Collection Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(projectsStructuredData)
            }}
          />

          {/* Breadcrumb Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(breadcrumbStructuredData)
            }}
          />

          {/* Web Page Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(softwareApplicationData)
            }}
          />
        </Head>

        <Stack
          spacing={10}
          justifyContent="center"
          px={['5vw', '10vw']}
          my={['15vh', '15vh', '22.5vh', '22.5vh']}
        >
          <Stack spacing={5}>
            <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
              Projects
            </Heading>
            <Text fontSize={{ base: '14px', md: '16px' }} textColor="#fff">
              I love building projects and practice my engineering skills,
              here&lsquo;s an archive of things that I&lsquo;ve worked on.
            </Text>
            <InputGroup maxW="400px">
              <InputRightElement pointerEvents="none">
                <FaSearch />
              </InputRightElement>
              <Input
                type="text"
                placeholder="Search projects"
                value={query}
                onChange={handleChange}
                aria-label="Search through projects"
              />
            </InputGroup>
            <Divider />
          </Stack>
          
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
            {projects.items
              .filter((e: { fields: { title: string } }) =>
                e.fields.title.toLowerCase().includes(query.toLowerCase()),
              )
              .map((project: { fields: { title: string, imgUrl: string, description: string, githubLink: string, deployLink: string, tags: [] } }) => (
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
    revalidate: 60
  }
}