import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import CurrentWeather from '../components/CurrentWeather'
import WeatherForecasts from '../components/WeatherForecasts'
import AirQualityIndex from '../components/AirQualityIndex'
import SearchBar from '../components/SearchBar'
import { useStateValue } from '../state'
import React from 'react'

export default function Home() {
  const [{ coordinate }] = useStateValue()

  return (
    <div>
      <Head>
        <title>Cuaca</title>
        <meta
          name="description"
          content={
            'Cuaca weather app by Dian Yehezkiel. Powered by Open Weather API.'
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main" minH="100vh" pt={16} pb={24} px={4} bg="blue.300">
        <Container
          p={0}
          maxW="container.md"
          display="flex"
          flexDir="column"
          alignItems="center"
          gap={2}
        >
          <SearchBar />
          <CurrentWeather
            id="default"
            lat={coordinate['default'].lat}
            lon={coordinate['default'].lon}
          />
          <WeatherForecasts
            id="default"
            lat={coordinate['default'].lat}
            lon={coordinate['default'].lon}
          />
          <AirQualityIndex
            id="default"
            lat={coordinate['default'].lat}
            lon={coordinate['default'].lon}
          />
        </Container>
      </Box>
    </div>
  )
}
