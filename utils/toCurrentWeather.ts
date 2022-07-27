import {CurrentWeatherType, CurrentWeatherFromApi} from "../types/CurrentWeather";

const toCurrentWeather = (apiData: CurrentWeatherFromApi): CurrentWeatherType => {
  return {
    weather: apiData.weather[0],
    main: apiData.main,
    visibility: apiData.visibility,
    wind: apiData.wind,
    clouds: apiData.clouds,
    rain: apiData.rain,
    snow: apiData.snow,
    dt: apiData.dt,
    sys: apiData.sys,
    name: apiData.name,
  }
}

export default toCurrentWeather;
