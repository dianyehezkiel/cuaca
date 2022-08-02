import { AirQualityIndex, AirQualityIndexFromApi } from "../types/AirQualityIndex";

const toAirQualityIndex = (apiData: AirQualityIndexFromApi): AirQualityIndex => {
  return {
    aqiData: apiData.list[0],
  }
}

export default toAirQualityIndex
