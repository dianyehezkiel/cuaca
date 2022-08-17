import { LocationFromApi, LocationType } from '../types'

const toLocation = (apiData: LocationFromApi): LocationType => {
  return {
    name: apiData.local_names?.id || apiData.local_names?.en || apiData.name,
    country: apiData.country,
    state: apiData.state,
    lat: apiData.lat,
    lon: apiData.lon,
  }
}

export default toLocation
