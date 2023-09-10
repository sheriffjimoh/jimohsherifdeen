import {
  Box,
  Code,
  Heading,
  Link,
  Text,
  Divider,
  useColorMode,
} from '@chakra-ui/react'
import { jsx } from '@emotion/react'
import NextLink from 'next/link'
import { Image }  from '@/components'

const CustomLink = (props: any) => {
  const { colorMode } = useColorMode()
  const color = {
    light: 'blue.500',
    dark: 'blue.500',
  }

  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color[colorMode]} {...props} />
      </NextLink>
    )
  }

  return <Link color={color[colorMode]} isExternal {...props} />
}

const DocsHeading = (props: any) => (
  <Heading
    css={{
      scrollMarginTop: '100px',
      scrollSnapMargin: '100px', // Safari
      '&[id]': {
        pointerEvents: 'none',
      },
      '&[id]:before': {
        display: 'block',
        height: ' 6rem',
        marginTop: '-6rem',
        visibility: 'hidden',
        content: `""`,
      },
      '&[id]:hover a': { opacity: 1 },
    }}
    {...props}
    mb="1em"
    mt="2em"
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <Box
          aria-label="anchor"
          as="a"
          color="blue.500"
          fontWeight="normal"
          outline="none"
          _focus={{
            opacity: 1,
            boxShadow: 'outline',
          }}
          opacity="0"
          ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </Box>
      )}
    </Box>
  </Heading>
)

const Hr = () => {
  const { colorMode } = useColorMode()
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600',
  }

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />
}
// add type 'any' to all props

export const MDXComponents = {
  h1: (props: any) => (
    <Heading as="h1" size="xl" my={4} color="displayColor" {...props} />
  ),
  h2: (props: any) => <DocsHeading as="h2" size="lg" fontWeight="bold" {...props} />,
  h3: (props : any) => <DocsHeading as="h3" size="md" fontWeight="bold" {...props} />,
  h4: (props: any) => <DocsHeading as="h4" size="sm" fontWeight="bold" {...props} />,
  h5: (props: any) => <DocsHeading as="h5" size="sm" fontWeight="bold" {...props} />,
  h6: (props: any) => <DocsHeading as="h6" size="xs" fontWeight="bold" {...props} />,
  img: (props: any) => (
    <Image
    alt={props.alt}
      width={600}
      height={300}
      layout="responsive"
      objectFit="contain"
      w="auto"
      h="auto"
      mx="auto"
      {...props}
    />
  ),
  inlineCode: (props: any) => (
    <Code colorScheme="blue" fontSize="0.84em" mt={-10} {...props} />
  ),
  br: (props: any) => <Box height="24px" {...props} />,
  hr: Hr,
  a: CustomLink,
  p: (props: any) => <Text as="p" mt={0} lineHeight="tall" {...props} />,
  ul: (props : any) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: (props: any) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: (props: any) => <Box as="li" pb={1} {...props} />,
}

export { CustomLink }

