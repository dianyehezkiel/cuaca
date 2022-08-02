import { Box, Text, Link } from '@chakra-ui/react'
import type {GetServerSideProps} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CurrentWeather from "../components/CurrentWeather";
import {CurrentWeatherFromApi, CurrentWeatherType} from "../types/CurrentWeather";
import axios from "axios";
import {toAirQualityIndex, toCurrentWeather, toWeatherForecast} from "../utils";
import parseJson from "parse-json";
import WeatherForecasts from "../components/WeatherForecasts";
import {WeatherForecastType, WeatherForecastFromApi} from "../types/WeatherForecast";
import AirQualityIndex from '../components/AirQualityIndex';
import { AirQualityIndexType, AirQualityIndexFromApi } from '../types/AirQualityIndex';

const BASE_URL = 'https://api.openweathermap.org'
interface HomeProps {
  currentWeather: CurrentWeatherType;
  weatherForecast: WeatherForecastType;
  airQualityIndex: AirQualityIndexType;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const aqiParams = {
    lat: 3.5896654,
    lon: 98.6738261,
    appid: process.env.API_KEY,
  }
  const weatherParams = {
    ...aqiParams,
    units: 'metric',
    lang: 'id',
  }

  const weatherFromApi = await axios.get<CurrentWeatherFromApi>(`${BASE_URL}/data/2.5/weather`, { params: weatherParams })
  const forecastFromApi = await axios.get<WeatherForecastFromApi>(`${BASE_URL}/data/2.5/forecast`, { params: weatherParams })
  const aqiFromApi = await axios.get<AirQualityIndexFromApi>(`${BASE_URL}/data/2.5/air_pollution`, { params: aqiParams })

  const currentWeather = toCurrentWeather(weatherFromApi.data)
  const weatherForecast = toWeatherForecast(forecastFromApi.data)
  const airQualityIndex = toAirQualityIndex(aqiFromApi.data)

  return {
    props: {
      currentWeather: parseJson(JSON.stringify(currentWeather)),
      weatherForecast: parseJson(JSON.stringify(weatherForecast)),
      airQualityIndex: parseJson(JSON.stringify(airQualityIndex)),
    }
  }
}

export default function Home ({ currentWeather, weatherForecast, airQualityIndex }: HomeProps) {
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
        gap={2}
        bg='blue.300'
      >
        <CurrentWeather data={currentWeather} />
        <WeatherForecasts data={weatherForecast}/>
        <AirQualityIndex data={airQualityIndex}/>
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
