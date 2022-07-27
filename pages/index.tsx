import { Box, Text, Link } from '@chakra-ui/react'
import type {GetServerSideProps} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CurrentWeather from "../components/CurrentWeather";
import {CurrentWeatherFromApi, CurrentWeatherType} from "../types/CurrentWeather";
import axios from "axios";
import {toCurrentWeather} from "../utils";
import parseJson from "parse-json";

const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
interface HomeProps {
  currentWeather: CurrentWeatherType;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const params = {
    lat: 3.5896654,
    lon: 98.6738261,
    units: 'metric',
    lang: 'id',
    appid: process.env.API_KEY,
  }

  const weatherFromApi = await axios.get<CurrentWeatherFromApi>(WEATHER_BASE_URL, { params })
  const currentWeather = toCurrentWeather(weatherFromApi.data);

  return { props: { currentWeather: parseJson(JSON.stringify(currentWeather)) }}
}

export default function Home ({ currentWeather }: HomeProps) {
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
        <CurrentWeather data={currentWeather} />
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
