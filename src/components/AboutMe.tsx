import {
    SimpleGrid,
    Text,
    Stack,
    Heading,
    Image,
    Flex,
    Box,
    chakra,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
  } from '@chakra-ui/react'
  
  import { useMediaQuery, SlideUpWhenVisible }  from '../hooks'
  import ReactGA from 'react-ga'
  
  export  function AboutMe() {
    const isLargerThan800 = useMediaQuery(800)
    const handleHover = (event: any) => {
      ReactGA.event({
        category: 'hover',
        action: event,
      })
    }
    const MoreInfo = ({ text, content }: {text: string, content: string} ) => {
      return (
        <>
          {' '}
          {isLargerThan800 ? (
            <Popover trigger="hover" placement="right" isLazy>
              <PopoverTrigger>
                <chakra.span
                  onMouseOver={() => handleHover(`about_${text}`)}
                  color="button1"
                  cursor="help"
                >
                  {text}
                </chakra.span>
              </PopoverTrigger>
              <PopoverContent bg="secondary" borderColor="button1" color="white">
                <PopoverArrow bg="button1" />
                <PopoverBody fontSize="sm" color="textPrimary">
                  {content}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          ) : (
            <Text as="span" color="button1">
              {text}
            </Text>
          )}{' '}
        </>
      )
    }
  
    return (
      <>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <SlideUpWhenVisible 
          threshold={undefined}>
            <Stack spacing={4}>
              <Heading fontFamily="Ubuntu" fontSize="2xl"  textColor="#ffff">
                ⚡ About Me
              </Heading>
              <Text
                color="textSecondary"
                fontSize={{ base: '14px', md: '16px' }}
                whiteSpace="pre-line"
              >
                Hi, I am Jimoh Sherifdeen,  I embarked on my coding journey in 2018,
                <MoreInfo
                  text="In School"
                  content="I am a graduate of Computer Science from Kwara State Polytechnics  Ilorin, Nigeria."
                />,
                 inspired by the idea that with web development skills,  I could create a platform like Facebook.
                  🚀 We began with HTML, and the journey has led me to here today.
                
                 <br />
                 <br/>
                 Over the years, I&lsquo;ve crafted numerous web and mobile apps, working as a freelancer, 
                 a full-time professional, and a part-time engineer.  Remote work has been my forte 🌍, 
                 and I&lsquo;m well-versed in 
                 <MoreInfo
                  text="Agile methodology. 🏢"
                  content=" I've become proficient in using a range of Agile tools and practices, such as JIRA, Trello, Clickup and Scrum, to ensure efficient project management and collaboration. 📊"
                />

                 <br />
                 <br/> 
                 
                 Continuous learning has been a vital part of my path 📚, 
                 starting from 
                 <MoreInfo
                  text="Web design 💻"
                  content="I've employed a variety of tools to construct web templates and interfaces, ensuring a responsive and pixel-perfect design, and transforming PSD designs into fully functional web applications."
                />
                  and progressing to 
                  <MoreInfo
                  text="full-stack web development "
                  content="As a full-stack web developer, I specialize in crafting pixel-perfect designs using HTML, CSS, JavaScript, and related frameworks, while also proficiently building robust backends using PHP, PHP OOP, Laravel, Codeigniter, and MySQL for seamless database management."
                />
                  , 
                 eventually expanding into full-stack web and 
                 <MoreInfo
                  text="mobile development."
                  content="I've developed multiple mobile applications using React Native, Ionic Capacitor, and Expo for React Native."
                />
                  
                 As a computer science graduate, grasping new programming languages has always been second nature 🧠, 
                 thanks to my solid foundation in control structures.
              </Text>
            </Stack>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible
           threshold={undefined}>
            <Flex alignItems="center" justifyContent="center" position="relative">
              <Box
                maxW={{ base: '300px', lg: '350px' }}
                maxH={{ base: '300px', lg: '350px' }}
              >
                <Image
                  src="https://svgsilh.com/svg/26432.svg"
                  filter="invert(0.1)"
                  zIndex={3}
                  position="absolute"
                  top={0}
                  right={0}
                  w={{ base: '100px', lg: '150px' }}
                  alt=""
                />
                <Image
                  src="https://res.cloudinary.com/dy9yoeiq2/image/upload/v1757781139/1707894377337_ccmxx2.jpg"
                  w={{ base: '300px', lg: '350px' }}
                  h={{ base: '300px', lg: '350px' }}
                  borderRadius="50%"
                  alt="Abdul Rahman"
                />
              </Box>
            </Flex>
          </SlideUpWhenVisible>
        </SimpleGrid>
      </>
    )
  }
  