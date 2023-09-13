import styled from '@emotion/styled'
import { Stack } from '@chakra-ui/react'

export const PostContainer = styled(Stack)`
  &&& {
    padding-top: 24px;
    font-size: 16px;
    * {
      box-sizing: border-box;
      margin: 0;
    }
    * + :not(code) {
      margin-top: 1.2rem;
    }
    li {
      margin-top: 0 !important;
    }
    blockquote {
      padding: 16px;
      color: rgba(255, 255, 255, 0.82);
      border-left: 0.25em solid;
      border-color: #3ccf91;
      background: #080808;
    }
    blockquote p {
      font-style: italic;
    }
    img {
      display: block;
      margin: auto;
    }
    h1{
      font-size: 2.5rem;
      color:  white
    }
    h2{
      font-size: 2rem;
      font-weight: 600;
    }
    code{
      background: #080808;
      color: #3ccf91;
      padding: 0.2rem 0.4rem;
      border-radius: 0.2rem;
      font-style: italic;
      width: 100%;
      text-wrap: wrap;
    }
  }
`

