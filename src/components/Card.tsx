import {
  TagLeftIcon,
  Tag,
  Text,
  Stack,
  Divider,
  TagLabel,
  Link,
  ScaleFade,
  chakra,
} from '@chakra-ui/react'
import {
  FaReact,
  FaPython,
  FaPepperHot,
  FaJs,
  FaSass,
  FaCode,
  FaGithub,
  FaExternalLinkAlt,
  FaLaravel,
  FaBootstrap,
  FaDatabase,
  FaPhp,
  FaVuejs
} from 'react-icons/fa'
import {
  SiJquery,
  SiTypescript,
  SiTailwindcss,
  SiCss3,
  SiGraphql,
  SiRedux
} from 'react-icons/si'
import { MdOutlinePayment } from 'react-icons/md'
import { SiNextdotjs, SiChakraui } from 'react-icons/si'
import { useMediaQuery }  from '../hooks'
import ReactGA from 'react-ga'

import { Image, LazyImage}  from '@/components'


export interface cardsProps{
  imageURL: string,
  title: string,
  desc: string,
  githubLink: string,
  deployLink: string,
  tag: []
}

export  function Card({
  imageURL,
  title,
  desc,
  githubLink,
  deployLink,
  tag,
}: cardsProps) {
  const getTag = (tag: any) => {
    let values = []
    if (tag == 'React' || tag == 'React.js' || tag == 'ReactNative' || tag == 'Expo ReactNative' ) {
      values[0] = 'blue'
      values[1] = FaReact
    } else if (tag == 'Python') {
      values[0] = 'orange'
      values[1] = FaPython
    } else if (tag == 'Javascript') {
      values[0] = 'yellow'
      values[1] = FaJs
    } else if (tag == 'Typescript') {
      values[0] = 'yellow'
      values[1] = SiTypescript
    } else if (tag == 'Sass') {
      values[0] = 'pink'
      values[1] = FaSass
    } else if (tag == 'Flask') {
      values[0] = 'green'
      values[1] = FaPepperHot
    } else if (tag == 'Laravel') {
      values[0] = 'red'
      values[1] = FaLaravel
    } else if (tag == 'PHP' || tag == 'PHP OOP') {      
      values[0] = 'red'
      values[1] = FaPhp
    } else if (tag == 'Jquery') {
      values[0] = 'blue'
      values[1] = SiJquery
    } else if (tag == 'Bootstrap') {
      values[0] = 'purple'
      values[1] = FaBootstrap
    } else if (tag == 'MYSQL') {
      values[0] = 'blue'
      values[1] = FaDatabase
    }
    else if (tag == 'Tailwind CSS') {
      values[0] = 'blue'
      values[1] = SiTailwindcss
    }else if (tag == 'Next.js') {
      values[0] = 'gray'
      values[1] = SiNextdotjs
    }
    else if (tag == 'Chakra UI') {
      values[0] = 'teal'
      values[1] = SiChakraui
    }
    else if (tag == 'CSS') {
      values[0] = 'blue'
      values[1] = SiCss3
    }
    else if (tag == 'Vue.js') {
      values[0] = 'green'
      values[1] = FaVuejs
    }
    else if (tag == 'GraphQL') {
      values[0] = 'pink'
      values[1] = SiGraphql
    }
    else if (tag == 'Redux') {
      values[0] = 'purple'
      values[1] = SiRedux
    }

    else if (tag == 'POS') {
      values[0] = 'yellow'
      values[1] =  MdOutlinePayment
    }

   
    else {
      values[0] = 'gray'
      values[1] = FaCode
    }
    return values
  }

  const isLargerThan800 = useMediaQuery(800)

  const Tags = tag.map((item: any) => (
    <Tag
      key={item}
      colorScheme={getTag(item)[0]}
      size={isLargerThan800 ? 'md' : 'sm'}
      width="100"
    >
      <TagLeftIcon as={getTag(item)[1]}></TagLeftIcon>
      <Text>{item}</Text>
    </Tag>
  ))
  const handleClick = (event: any) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }

  return (
    <Stack
      bg="secondary"
      borderRadius="10px"
      minH="320px"
      border="1px"
      borderColor={{ base: '#333', md: 'borderColor' }}
    >
      <Link href={deployLink} isExternal>
        <ScaleFade in={true} >
          <LazyImage
            width={1250}
            height={600}
            src={imageURL}
            alt="project image"
          ></LazyImage>
          <Stack px={4} py={2}>
            <Stack isInline justifyContent="space-between" alignItems="center">
              <Text fontFamily="Ubuntu" fontSize="2xl" color="displayColor">
                {title}
              </Text>
              <Stack
                isInline
                justifyContent="flex-end"
                alignItems="center"
                spacing={4}
              >
                {githubLink && (
                  <Link
                    href={githubLink}
                    color="white"
                    onClick={() =>
                      handleClick(`githublink_${title.replace('@', '-at-')}`)
                    }
                    isExternal
                  >
                    <FaGithub aria-label="github" size={23} />
                  </Link>
                )}
                {deployLink && (
                  <Link
                    href={deployLink}
                    color="white"
                    onClick={() =>
                      handleClick(`deploylink_${title.replace('@', '-at')}`)
                    }
                    isExternal
                  >
                    <FaExternalLinkAlt aria-label="project link" size={20} />
                  </Link>
                )}
              </Stack>
            </Stack>
            <Stack isInline spacing={4} flexWrap={"wrap"} >{Tags}</Stack>
            <Divider />
            <Text color="textSecondary" fontSize={['sm', 'md']}>
              {desc}
            </Text>
          </Stack>
        </ScaleFade>
      </Link>
    </Stack>
  )
}
