import { NextApiResponse } from 'next'
import { GeoCodingRequest } from '../../types'
import { LocationFromApi } from '../../types/GeoCoding'
import { toLocation } from '../../utils'
import { appid, GC_BASE_URL } from '../../utils/constant'
import axios from 'axios'

export default async function geoCoding(
  req: GeoCodingRequest,
  res: NextApiResponse,
) {
  const params = {
    q: req.query.q,
    limit: 5,
    appid: appid,
  }

  const { data: locationFromApi } = await axios.get<LocationFromApi[]>(
    `${GC_BASE_URL}/direct`,
    { params },
  )

  res.json(locationFromApi.map((l) => toLocation(l)))
}
