import {
    Link,
    Text,
    Stack,
    Heading,
    Box,
    Button,
    SlideFade,
    Image,
  } from '@chakra-ui/react'
  import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
  import { useMediaQuery } from '@/hooks'
  import ReactGA from 'react-ga'
  
  export  function Introduction() {
    const isLargerThan800 = useMediaQuery(800)
    const handleClick = (event : any) => {
      ReactGA.event({
        category: 'click',
        action: event,
      })
    }
    return (
      <>
        <Stack spacing={10} justifyContent="flex-start" alignItems="flex-start">
          <SlideFade
            // 
            in={true}
            transition={{ enter: { duration: 0.4, delay: 0.7 } }}
          >
            <Box position="relative">
              <Image
                src="https://svgsilh.com/svg/26432.svg"
                filter="invert(0.1)"
                w={{ base: '70px', md: '150px' }}
                position="absolute"
                top={{ base: '0', md: '-15' }}
                left={{ base: '-5', md: '-10' }}
                zIndex={0}
                alt=""
              ></Image>
              <Text
                color="button1"
                fontSize="display2"
                fontWeight="medium"
                position="relative"
                zIndex={1}
              >
                 I &lsquo;m
              </Text>
            </Box>
            <Heading
              fontSize="6xl"
              lineHeight={'95%'}
              color="displayColor"
              letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
              position="relative"
              zIndex={1}
            >
             Jimoh Sherifdeen
            </Heading>
          </SlideFade>
  
          <SlideFade
            
            in={true}
            transition={{ enter: { duration: 0.4, delay: 0.8 } }}
          >
            <Heading
              color="textSecondary"
              fontSize="display2"
              fontWeight="medium"
              whiteSpace="pre-wrap"
              letterSpacing="-1.6px"
            >
              <Box color="displayColor" as="span">
             Full Stack  Software Engineer
              </Box>
              {' '}
             I am a  passionate professional {' '}
             skilled in turning concepts into functional products
             and dedicated to continuous learning and problem-solving in the tech industry.
            
            </Heading>
          </SlideFade>
  
          <SlideFade
            
            in={true}
            transition={{ enter: { duration: 0.4, delay: 0.9 } }}
          >
            <Text fontSize="display3" color="textSecondary">
            🚀  Exploring opportunities and side projects.
              <br />
              <Stack isInline spacing={1}>
                <Box>💻</Box>
                <Box>
                I love building product, and i have worked on both {' '}
                  <Box as="span" color="button1">FrontEnd</Box>, 
                  {' '}
                  <Box as="span" color="button1">BackEnd</Box>
                  {' '}
                  And
                  {' '}
                  <Box as="span" color="button1">Mobile Development</Box>
                </Box>

                
              </Stack>
           
              <Stack isInline spacing={1}>
                  <Box>✍️</Box>
                  <Box>
                  I also have a strong passion for technical content writing, Check out my articles 
                  {' '}
                   <Link href='/blog'>
                     <Box as="span" color="button1">Here</Box>
                  </Link> 
                  </Box>
                 
                
                
              </Stack>
            </Text>
          </SlideFade>
          <SlideFade
            
            in={true}
            transition={{ enter: { duration: 0.4, delay: 1.0 } }}
          >
            <Stack isInline spacing={4}>
              <Link href="https://github.com/sheriffjimoh" isExternal>
                <Button
                
                  leftIcon={<FaGithub color="#3CCF91" />}
                  position="static"
                  size={isLargerThan800 ? 'md' : 'sm'}
                  color="white"
                  onClick={() => handleClick('introduction_github')}
                  variant="ghost"
                >
                  Github
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/jimoh-sherifdeen-fullstack-developer/" isExternal>
                <Button
                  variant="ghost"
                  leftIcon={<FaLinkedin color="#3CCF91" />}
                  position="static"
                  size={isLargerThan800 ? 'md' : 'sm'}
                  color="white"
                  onClick={() => handleClick('introduction_linkedin')}
                >
                  LinkedIn
                </Button>
              </Link>
              <Link href="mailto:jimohsherifdeen6@gmail.com" isExternal>
                <Button
                  variant="ghost"
                  leftIcon={<FaEnvelope fill="#3CCF91" />}
                  transition="0.3s"
                  position="static"
                  size={isLargerThan800 ? 'md' : 'sm'}
                  color="white"
                  onClick={() => handleClick('introduction_email')}
                >
                  Email
                </Button>
              </Link>
            </Stack>
          </SlideFade>
        </Stack>
      </>
    )
  }
  