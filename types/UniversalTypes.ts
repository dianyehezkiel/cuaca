export interface Coordinat {
  lon: number;
  lat: number;
}

export interface MainInfo {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

export interface WeatherData {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WindData {
  speed: number;
  deg: number;
  gust?: number;
}

export interface CloudData {
  all: number;
}

export interface RainData {
  "1h"?: number;
  "3h"?: number;
}

export interface SnowData {
  "1h"?: number;
  "3h"?: number;
}