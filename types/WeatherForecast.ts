import {CloudData, Coordinate, MainInfo, RainData, SnowData, WeatherData, WindData} from "./UniversalTypes"

interface ForecastMainInfo extends MainInfo {
  temp_kf: number;
}

interface SystemData {
  pod: string;
}

interface CityData {
  id: number;
  name: string;
  coord: Coordinate;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface ForecastData {
  dt: number;
  main: ForecastMainInfo;
  weather: WeatherData[];
  clouds: CloudData;
  wind: WindData;
  visibility: number;
  pop: number;
  rain: Omit<RainData, '1h'>;
  snow: Omit<SnowData, '1h'>;
  sys: SystemData;
  dt_txt: string;
}

export interface WeatherForecastFromApi {
  cod: number | string;
  message: number | string;
  cnt: number;
  list: ForecastData[];
  city: CityData;
}
// TODO: get rid of array of WeatherData (on ForecastData type)
export type WeatherForecastType = Omit<WeatherForecastFromApi, 'cod' | 'message' | 'cnt' | 'city'>

export interface DailyForecast {
  day: number;
  forecast: ForecastData[];
}
