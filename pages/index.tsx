import { Box, Container } from '@chakra-ui/react'
import type {GetServerSideProps} from 'next'
import Head from 'next/head'
import CurrentWeather from "../components/CurrentWeather";
import {CurrentWeatherFromApi, CurrentWeatherType} from "../types/CurrentWeather";
import axios from "axios";
import {toAirQualityIndex, toCurrentWeather, toWeatherForecast} from "../utils";
import parseJson from "parse-json";
import WeatherForecasts from "../components/WeatherForecasts";
import {WeatherForecastType, WeatherForecastFromApi} from "../types/WeatherForecast";
import AirQualityIndex from '../components/AirQualityIndex';
import { AirQualityIndexType, AirQualityIndexFromApi } from '../types/AirQualityIndex';
import SearchBar from '../components/SearchBar';
import { setAirQualityIndex, setCurrentWeather, setWeatherForecast, useStateValue } from '../state';
import React from 'react';
import getWeatherData from './api/getWeatherData';

export default function Home () {
  const [
    { coordinate, currentWeather, weatherForecast, airQualityIndex }, 
    dispatch
  ] = useStateValue()

  React.useEffect(() => {
    const params = {
      lat: coordinate['default'].lat,
      lon: coordinate['default'].lon,
    }

    const fetchData = async () => {
      const { data } = await axios.get('/api/getWeatherData', { params })

      console.log(data)

      dispatch(setCurrentWeather(
        "default",
        data.currentWeather
      ))
      dispatch(setWeatherForecast(
        "default",
        data.weatherForecast
      ))
      dispatch(setAirQualityIndex(
        "default",
        data.airQualityIndex
      ))
    }

    fetchData()
  }, [coordinate, dispatch])

  return (
    <div>
      <Head>
        <title>Cuaca</title>
        <meta name="description" content="Cuaca weather app by Dian Yehezkiel. Powered by Open Weather API." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as='main'
        minH='100vh'
        pt={16}
        pb={24}
        px={4}
        bg='blue.300'
      >
        <Container
          p={0}
          maxW='container.md'
          display='flex'
          flexDir='column'
          alignItems='center'
          gap={2}
        >
          <SearchBar />
          <CurrentWeather data={currentWeather["default"]} />
          <WeatherForecasts data={weatherForecast["default"]}/>
          <AirQualityIndex data={airQualityIndex["default"]}/>
        </Container>
      </Box>
    </div>
  )
}
