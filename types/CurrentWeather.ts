interface Coordinat {
  lon: number;
  lat: number;
}

interface WeatherData {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface MainInfo {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

interface WindData {
  speed: number;
  deg: number;
  gust?: number;
}

interface CloudData {
  all: number;
}

interface RainData {
  "1h"?: number;
  "3h"?: number;
}

interface SnowData {
  "1h"?: number;
  "3h"?: number;
}

interface SystemData {
  type: number;
  id: number;
  message?: string;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface CurrentWeatherFromApi {
  coord: Coordinat;
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
  cod: number;
}

export interface CurrentWeatherType extends Omit<CurrentWeatherFromApi, 'weather' | 'coord' | 'base' | 'timezone' | 'id' | 'cod'> {
  weather: WeatherData;
}