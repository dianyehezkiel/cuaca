import {
  MainInfo,
  Coordinate,
  WeatherData,
  WindData,
  CloudData,
  RainData,
  SnowData,
} from "./UniversalTypes";

interface SystemData {
  type: number;
  id: number;
  message?: string | number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface CurrentWeatherFromApi {
  coord: Coordinate;
  weather: WeatherData[];
  base: string;
  main: MainInfo;
  visibility: number;
  wind: WindData;
  clouds: CloudData;
  rain?: RainData;
  snow?: SnowData;
  dt: number;
  sys: SystemData;
  timezone: number;
  id: number;
  name: string;
  cod: number | string;
}

export interface CurrentWeatherType extends Omit<CurrentWeatherFromApi, 'weather' | 'coord' | 'base' | 'timezone' | 'id' | 'cod'> {
  weather: WeatherData;
}