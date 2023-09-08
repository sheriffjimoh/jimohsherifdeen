import React, { useEffect } from 'react'
import { chakra, Flex, Stack, Text } from '@chakra-ui/react'
import  { Header }   from '@/components'
// import ReactGA from 'react-ga'

export const Container = ({ enableTransition, children } : any) => {
//   useEffect(() => {
//     ReactGA.initialize(process.env.NEXT_PUBLIC_UA_CODE)
//     ReactGA.pageview(window.location.pathname + window.location.search)
//   }, [])

  return (
    <>
      <Header enableTransition={enableTransition} />
      <Flex as="main" justifyContent="center" flexDirection="column">
        {children}
      </Flex>
      {/* <Stack alignItems="center" mt={10} mb={5}>
        <Text textAlign="center" fontSize="sm" textColor="#fff">
          Designed and Developed by Abdul Rahman.
          <br />
          Built with{' '}
          <chakra.span fontWeight="semibold" color="button1">
            Next.js
          </chakra.span>{' '}
          &{' '}
          <chakra.span fontWeight="semibold" color="button1">
            Chakra UI
          </chakra.span>
          . Hosted on{' '}
          <chakra.span fontWeight="semibold" color="button1">
            Vercel
          </chakra.span>
          .
        </Text>
      </Stack> */}
    </>
  )
}


