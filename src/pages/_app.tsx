import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../styles/theme'
import { Global, css } from '@emotion/react'
import { prismDarkTheme } from '../styles/prism'

export default function App({ Component, pageProps }: AppProps) {

  const GlobalStyle = ({ children } : any) => {
    return (
      <>
        <Global
          styles={css`
            ${prismDarkTheme};
            ::selection {
              background-color: #90cdf4;
              color: #fefefe;
            }
            ::-moz-selection {
              background: #ffb7b7;
              color: #fefefe;
            }
            html {
              min-width: 356px;
              color-scheme: dark;
            }
            .header{
              background: red
            }
            #__next {
              display: flex;
              flex-direction: column;
              min-height: 100vh;
              color-scheme: dark;
              background: #121a26;
            }
            ::-webkit-scrollbar {
              width: 8px;
              background: #080808;
            }
  
            ::-webkit-scrollbar-thumb {
              background: #111111;
              border-radius: 8px;
            }
          `}
        />
        {children}
      </>
    )
  }

  return (
    <ChakraProvider resetCSS  theme={customTheme}>
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
     </ChakraProvider>
  )
}
