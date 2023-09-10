import React, { useRef } from 'react'
import {
  Button,
  Flex,
  Box,
  Text,
  Slide,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Icon,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import { useMediaQuery } from '@/hooks'
import { AiOutlineMenu } from 'react-icons/ai'

export  function Header({ enableTransition } : any) {
  const isLargerThan768 = useMediaQuery(768)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = useRef()
  const Bracket = styled.span`
    color: #8f9094;
    font-weight: 600;
  `
  const NavbarDrawer = () => (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        // finalFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="secondary" textColor="#fff">
          <DrawerCloseButton  />
          {/* <DrawerHeader borderBottomWidth="1px">
          <Bracket>&lt;</Bracket>Jimoh<Bracket> /&gt;</Bracket>
          </DrawerHeader> */}

          <DrawerBody>
            <Stack spacing="24px">
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" fontSize="16px" textColor="#fff">
                  Home
                </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Button as="a" variant="ghost" fontSize="16px" textColor="#fff">
                  Projects
                </Button>
              </NextLink>
              <NextLink href="/blog" passHref>
                <Button as="a" variant="ghost" fontSize="16px" textColor="#fff">
                  Blog
                </Button>
              </NextLink>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )

  return (
    <Box zIndex="100" >
      <Slide
        direction="top"
        in={true}
        transition={
          enableTransition
            ? { enter: { duration: 0.5, delay: 0.01 } }
            : { enter: { duration: 0, delay: 0 } }
        }
       
      >
        <Flex
          as="nav"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          px="3vw"
          py="3"
          borderBottom="0.5px solid #1e2029"
          background={enableTransition ? 'rgba(0,0,0,0.5)' : 'transparent'}
        >
          <NextLink href="/" passHref>
            <Text
              cursor="pointer"
              color="displayColor"
              fontWeight="bold"
              fontSize="32px"
            >
              <Bracket>&lt;</Bracket>Jimoh<Bracket> /&gt;</Bracket>
            </Text>
          </NextLink>
          {isLargerThan768 ? (
            <Box color="textSecondary" textColor="#fff">
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px" textColor="#fff">
                  Home
                </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px" textColor="#fff">
                  Projects
                </Button>
              </NextLink>
              <NextLink href="/blog" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px" textColor="#fff">
                  Blog
                </Button>
              </NextLink>{' '}
            </Box>
          ) : (
            <Icon as={AiOutlineMenu} w={7} h={7} onClick={onOpen} textColor="#fff" />
          )}
        </Flex>
      </Slide>
      <NavbarDrawer />
    </Box>
  )
}
