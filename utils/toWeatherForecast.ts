import {WeatherForecastFromApi, WeatherForecastType} from "../types"

const toWeatherForecast = (apiData: WeatherForecastFromApi): WeatherForecastType => {
  return {
    list: apiData.list,
  }
}

export default toWeatherForecast