import { Coordinate } from '../types/UniversalTypes'
import { State } from './state'
import { CurrentWeatherType } from '../types/CurrentWeather'
import { WeatherForecastType } from '../types/WeatherForecast'
import { AirQualityIndexType } from '../types/AirQualityIndex'

export type Action =
  | {
      type: 'SET_COORDINATE';
      payload: {
        id: string;
        data: Coordinate;
      };
    }
  | {
      type: 'SET_CURRENT_WEATHER';
      payload: {
        id: string;
        data: CurrentWeatherType;
      };
    }
  | {
      type: 'SET_WEATHER_FORECAST';
      payload: {
        id: string;
        data: WeatherForecastType;
      };
    }
  | {
      type: 'SET_AQI';
      payload: {
        id: string;
        data: AirQualityIndexType;
      };
    };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_COORDINATE':
      return {
        ...state,
        coordinate: {
          ...state.coordinate,
          [action.payload.id]: action.payload.data,
        },
      }
    case 'SET_CURRENT_WEATHER':
      return {
        ...state,
        currentWeather: {
          ...state.currentWeather,
          [action.payload.id]: action.payload.data,
        },
      }
    case 'SET_WEATHER_FORECAST':
      return {
        ...state,
        weatherForecast: {
          ...state.weatherForecast,
          [action.payload.id]: action.payload.data,
        },
      }
    case 'SET_AQI':
      return {
        ...state,
        airQualityIndex: {
          ...state.airQualityIndex,
          [action.payload.id]: action.payload.data,
        },
      }
    default:
      return state
  }
}

export const setCoordinate = (id: string, data: Coordinate): Action => {
  return {
    type: 'SET_COORDINATE',
    payload: { id, data },
  }
}

export const setCurrentWeather = (
  id: string,
  data: CurrentWeatherType,
): Action => {
  return {
    type: 'SET_CURRENT_WEATHER',
    payload: { id, data },
  }
}

export const setWeatherForecast = (
  id: string,
  data: WeatherForecastType,
): Action => {
  return {
    type: 'SET_WEATHER_FORECAST',
    payload: { id, data },
  }
}

export const setAirQualityIndex = (
  id: string,
  data: AirQualityIndexType,
): Action => {
  return {
    type: 'SET_AQI',
    payload: { id, data },
  }
}
