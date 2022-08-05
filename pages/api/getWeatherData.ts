import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next";
import { AirQualityIndexFromApi } from "../../types/AirQualityIndex"
import { CurrentWeatherFromApi } from "../../types/CurrentWeather"
import { WeatherForecastFromApi } from "../../types/WeatherForecast"
import { toAirQualityIndex, toCurrentWeather, toWeatherForecast } from "../../utils";

interface GetWeatherDataRequest extends NextApiRequest {
  query: {
    "lat": string;
    "lon": string;
  }
}

export default async function getWeatherData(req: GetWeatherDataRequest, res: NextApiResponse) {
  const BASE_URL = 'https://api.openweathermap.org/data/2.5'
  const appid = process.env.REACT_APP_API_KEY
  try {
    const aqiParams = {
      lat: req.query.lat,
      lon: req.query.lon,
      appid,
    }
  
    const weatherParams = {
      ...aqiParams,
      units: 'metric',
      lang: 'id',
    }
  
    const [
      { data: weatherFromApi },
      { data: forecastFromApi },
      { data: aqiFromApi },
    ] = await Promise.all([
      axios.get<CurrentWeatherFromApi>(`${BASE_URL}/weather`, { params: weatherParams }),
      axios.get<WeatherForecastFromApi>(`${BASE_URL}/forecast`, { params: weatherParams }),
      axios.get<AirQualityIndexFromApi>(`${BASE_URL}/air_pollution`, { params: aqiParams }),
    ])
  
    res.json({
      currentWeather: toCurrentWeather(weatherFromApi),
      weatherForecast: toWeatherForecast(forecastFromApi),
      airQualityIndex: toAirQualityIndex(aqiFromApi),
    })
  } catch (error) {
    res.status(500).json({error})
  }
  
}