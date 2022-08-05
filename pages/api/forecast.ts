import axios from "axios"
import { NextApiResponse } from "next"
import { WeatherApiRequest, WeatherForecastFromApi } from "../../types"
import { toWeatherForecast } from "../../utils"
import { appid, BASE_URL } from "../../utils/constant"

export default async function weatherForecast(req: WeatherApiRequest, res: NextApiResponse) {
  try {
    const params = {
      lat: req.query.lat,
      lon: req.query.lon,
      appid: appid,
      units: 'metric',
      lang: 'id',
    }

    const { data: forecastFromApi } = await axios.get<WeatherForecastFromApi>(`${BASE_URL}/forecast`, { params })

    res.json({
      weatherForecast: toWeatherForecast(forecastFromApi),
    })
  } catch (err) {
    res.status(500).json({ err })
  }
}