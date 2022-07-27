import { Box, Text, Link } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CurrentWeather from "../components/CurrentWeather";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cuaca</title>
        <meta name="description" content="Cuaca weather app by Dian Yehezkiel. Powered by Open Weather API." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as='main'
        minH='100vh' 
        p={4}
        display='flex'
        flexDir='column'
        alignItems='center'
      >
        <CurrentWeather />
      </Box>

      <Box as='footer'
        display='flex'
        flex={1}
        py='2rem'
        borderTop='1px'
        borderTopColor='#eaeaea'
        justifyContent='center'
        alignItems='center'
      >
        <Text>
          Created by
          <Link
            href="https://dianyehezkiel.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box
              as='span'
              display='inline'
              h='1rem'
              ml='0.5rem'
              mr='0.25rem'
            >
              <Image src="/dy-logo.svg" alt="DY Logo" width={32} height={16} />
            </Box>
            Dian Yehezkiel
          </Link>
        </Text>
      </Box>
    </div>
  )
}

export default Home
