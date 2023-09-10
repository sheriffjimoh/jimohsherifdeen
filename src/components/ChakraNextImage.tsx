import { chakra } from '@chakra-ui/react'
import NextImage from 'next/image'

export const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ['width', 'height', 'src', 'alt', 'layout', 'priority'].includes(prop),
})

