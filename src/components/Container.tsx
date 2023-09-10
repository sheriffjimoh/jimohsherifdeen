import React, { useEffect } from 'react'
import { chakra, Flex, Stack, Text } from '@chakra-ui/react'
import  { Header }   from '@/components'
import ReactGA from 'react-ga'

export const Container = ({ enableTransition,  children } : any) => {
  useEffect(() => {
    // ReactGA.initialize(process.env.NEXT_PUBLIC_UA_CODE)
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <>
      <Header enableTransition={enableTransition} />
      <Flex as="main" justifyContent="center" flexDirection="column"  >
        {children}
      </Flex>
 
    </>
  )
}


