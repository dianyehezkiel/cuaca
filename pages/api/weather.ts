import axios from "axios"
import { NextApiResponse } from "next"
import { CurrentWeatherFromApi, WeatherApiRequest } from "../../types"
import { toCurrentWeather } from "../../utils"
import { appid, BASE_URL } from "../../utils/constant"

export default async function currentWeather(req: WeatherApiRequest, res: NextApiResponse) {
  try {
    const params = {
      lat: req.query.lat,
      lon: req.query.lon,
      appid: appid,
      units: 'metric',
      lang: 'id',
    }

    const { data: weatherFromApi } = await axios.get<CurrentWeatherFromApi>(`${BASE_URL}/weather`, { params })

    res.json({
      currentWeather: toCurrentWeather(weatherFromApi),
    })
  } catch (err) {
    res.status(500).json({ err })
  }
}