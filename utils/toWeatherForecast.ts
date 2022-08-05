import {WeatherForecastFromApi, WeatherForecastType} from "../types/WeatherForecast";

const toWeatherForecast = (apiData: WeatherForecastFromApi): WeatherForecastType => {
  return {
    list: apiData.list,
  }
}

export default toWeatherForecast;