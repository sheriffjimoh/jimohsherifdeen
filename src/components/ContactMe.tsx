import { Link, Button, chakra, Heading, Stack, Text } from '@chakra-ui/react'
import { useMediaQuery, SlideUpWhenVisible } from '@/hooks'
import { FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'
import ReactGA from 'react-ga'

export  function ContactMe() {
  const isLargerThan800 = useMediaQuery(800)
  const handleClick = (event: string) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }
  return (
    <>
      <Stack
        spacing={10}
        mt='190px'
        mb={{ md: '70px'}}
       h={{ md: "100%", base: '60vh'}}
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <SlideUpWhenVisible  threshold={undefined}>
          <Heading fontSize={{ base: '4xl', md: '5xl' }} textAlign="center" textColor="#ffff">
            Keep In Touch.
          </Heading>
        </SlideUpWhenVisible>

        <SlideUpWhenVisible  threshold={undefined}>
          <Text fontSize="md" color="textSecondary" textAlign="center">
          I&lsquo;m currently working around all stacks in
          <chakra.span
              color="button1"
              display={{ base: 'block', md: 'inline' }}
            >
              {' '}
              software Development.
            </chakra.span> 

            <br />
          
Feel free to get in touch and talk more about your projects.
           
           
          </Text>
        </SlideUpWhenVisible>

        <SlideUpWhenVisible  threshold={undefined}>
          <Stack isInline spacing={4}>
            <Link
              href="https://www.linkedin.com/in/jimoh-sherifdeen-fullstack-developer/"
              isExternal
              onClick={() => handleClick('contact_linkedin')}
            >
              <Button
                leftIcon={<FaLinkedin fill="#3CCF91" />}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
                variant="ghost"
              >
                LinkedIn
              </Button>
            </Link>
            <Link
              href="mailto:jimohsherifdeen6@gmail.com"
              isExternal
              onClick={() => handleClick('contact_email')}
            >
              <Button
                color="white"
                leftIcon={<FaEnvelope fill="#3CCF91" />}
                transition="0.3s"
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                variant="ghost"
              >
                Email
              </Button>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1PUxFIIeTQNENj-T5UIcFoHGBYmgKB489/view?usp=sharing"
              isExternal
              onClick={() => handleClick('contact_resume')}
            >
              <Button
                leftIcon={<FaFileAlt fill="#3CCF91" />}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
                variant="ghost"
              >
                Resume
              </Button>
            </Link>
          </Stack>
        </SlideUpWhenVisible>
      </Stack>
    </>
  )
}
