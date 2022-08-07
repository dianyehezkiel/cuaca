import { AirQualityIndexType, AirQualityIndexFromApi } from "../types"

const toAirQualityIndex = (apiData: AirQualityIndexFromApi): AirQualityIndexType => {
  return {
    aqiData: apiData.list[0],
  }
}

export default toAirQualityIndex
