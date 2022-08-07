import axios from "axios"
import { NextApiResponse } from "next"
import { AirQualityIndexFromApi, WeatherApiRequest } from "../../types"
import { toAirQualityIndex } from "../../utils"
import { appid, BASE_URL } from "../../utils/constant"

export default async function airQualityIndex(
  req: WeatherApiRequest,
  res: NextApiResponse,
) {
  try {
    const params = {
      lat: req.query.lat,
      lon: req.query.lon,
      appid: appid,
    }

    const { data: aqiFromApi } = await axios.get<AirQualityIndexFromApi>(
      `${BASE_URL}/air_pollution`,
      { params },
    )

    res.json(toAirQualityIndex(aqiFromApi))
  } catch (err) {
    res.status(500).json({ err })
  }
}
