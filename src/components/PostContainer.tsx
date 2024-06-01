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
      text-wrap: wrap;
      white-space: pre-wrap; /* Allow text to wrap */
      word-break: break-word; /* Break words when needed */
      overflow-x: auto; /* Add horizontal scroll if needed for small screens */
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
    p code,
    code {
      background: #2e2e2e; /* Dark background color */
      color: #3ccf91; /* Light green text color for readability */
      padding: 0.4rem 0.6rem; /* Adequate padding for readability */
      border-radius: 0.3rem; /* Rounded corners */
      font-family: 'Courier New', Courier, monospace; /* Monospaced font */
      font-size: 1rem; /* Base font size */
      white-space: pre-wrap; /* Preserve whitespace and allow text to wrap */
      word-break: break-word; /* Break words when needed */
      overflow-x: auto; /* Add horizontal scroll if needed for small screens */
      display: block; /* Ensure the code block spans the full width */
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* Subtle shadow for depth */
    }
    
    /* Optional: Add a custom scrollbar for better UX */
    code::-webkit-scrollbar {
      height: 8px;
    }
    
    code::-webkit-scrollbar-thumb {
      background-color: #3ccf91;
      border-radius: 4px;
    }
    
    code::-webkit-scrollbar-track {
      background: #2b2b2b;
    }
    
    p{
      color: white
    }
  }
`

