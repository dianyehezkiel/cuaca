import React, { createContext } from "react";
import { AirQualityIndexType } from "../types/AirQualityIndex";
import { CurrentWeatherType } from "../types/CurrentWeather";
import { Coordinate } from "../types/UniversalTypes";
import { WeatherForecastType } from "../types/WeatherForecast";
import { Action } from "./reducer";

export type State = {
  coordinate: { [id: string]: Coordinate };
  currentWeather: { [id: string]: CurrentWeatherType };
  weatherForecast: { [id: string]: WeatherForecastType };
  airQualityIndex: { [id: string]: AirQualityIndexType };
}

const initialState: State = {
  coordinate: { "default": { lat: 3.5896654, lon: 98.6738261 } },
  currentWeather: {},
  weatherForecast: {},
  airQualityIndex: {}
}

export const StateContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => initialState
])

type StateProviderProps = {
  reducer: React.Reducer<State, Action>;
  children: React.ReactElement;
}

export const StateProvider = ({
  reducer,
  children
}: StateProviderProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateValue = () => React.useContext(StateContext)