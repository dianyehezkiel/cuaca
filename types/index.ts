import { NextApiRequest } from 'next'

export interface WeatherApiRequest extends NextApiRequest {
  query: {
    lat: string
    lon: string
  }
}

export interface GeoCodingRequest extends NextApiRequest {
  query: {
    q: string
  }
}

export * from './UniversalTypes'
export * from './AirQualityIndex'
export * from './CurrentWeather'
export * from './WeatherForecast'
export * from './GeoCoding'
