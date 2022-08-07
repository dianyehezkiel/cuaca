import { DailyForecast, WeatherForecastType } from "../types"

const groupForecastData = (weatherForecast: WeatherForecastType) => {
  const today = new Date()
  const groupedData: DailyForecast[] = []

  weatherForecast.list.map((f, i) => {
    const dataDate = new Date(f.dt * 1000)
    const diff = dataDate.getDay() - today.getDay()
    const index = diff >= 0 ? diff : diff + 7

    if (i === 0 && index === 1) {
      groupedData.push({
        day: today.getDay(),
        forecast: [],
      })
    }

    if (!groupedData[index]) {
      groupedData.push({
        day: dataDate.getDay(),
        forecast: [],
      })
    }

    groupedData[index].forecast.push(f)
  })

  return groupedData
}

export default groupForecastData