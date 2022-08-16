import { Coordinate } from "./UniversalTypes"

type LocalNames = {
  [key: string]: string
}

export interface LocationFromApi extends Coordinate {
  name: string;
  local_names?: LocalNames;
  country: string;
  state?: string;
}

export type LocationType = Omit<LocationFromApi, 'local_names'>