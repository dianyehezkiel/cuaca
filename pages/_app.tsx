import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import { reducer, StateProvider } from '../state'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Navbar />
      <StateProvider reducer={reducer}>
        <Component {...pageProps} />
      </StateProvider>
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
