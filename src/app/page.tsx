"use client"; // This is a client component 👈🏽

import { ChakraProvider } from '@chakra-ui/react'
import Todos from './pages/Todos/Todos'

export default function Home() {
  return (
    <ChakraProvider>
      <Todos/>
    </ChakraProvider>
  )
}
