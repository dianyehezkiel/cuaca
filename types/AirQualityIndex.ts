interface AirComponentsData {
  co: number;
  no: number;
  no2: number;
  o3: number;
  so2: number;
  pm2_5: number;
  pm10: number;
  nh3: number;
}

interface AirQualityData {
  dt: number;
  main: {
    aqi: number;
  };
  components: AirComponentsData;
}

export interface AirQualityIndexFromApi {
  coord: number[];
  list: AirQualityData[];
}

export interface AirQualityIndexType {
  aqiData: AirQualityData;
}
