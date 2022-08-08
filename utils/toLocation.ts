import { LocationFromApi, LocationType } from '../types'

const toLocation = (apiData: LocationFromApi): LocationType => {
  return {
    name: apiData.name,
    country: apiData.country,
    state: apiData.state,
    lat: apiData.lat,
    lon: apiData.lon,
  }
}

export default toLocation
