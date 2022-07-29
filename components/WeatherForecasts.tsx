import WeatherForecast from "./WeatherForecast";
import {Box, HStack, Text} from "@chakra-ui/react";
import {ForecastData, WeatherForecastType, DailyForecast} from "../types/WeatherForecast";
import React from "react";

export default function WeatherForecasts({ data }: { data: WeatherForecastType }) {
  const [forecastData, setForecastData] = React.useState<DailyForecast[]>([])

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  React.useEffect(() => {
    const sortForecastData = () => {
      const today = new Date()
      const sortedData: DailyForecast[] = []

      data.list.map((f, i) => {
        const dataDate = new Date(f.dt * 1000)
        const diff = dataDate.getDay() - today.getDay()
        const index = diff >= 0 ? diff : diff + 7

        if (i === 0 && index === 1) {
          sortedData.push({
            day: today.getDay(),
            forecast: []
          })
        }

        if (!sortedData[index]) {
          sortedData.push({
            day: dataDate.getDay(),
            forecast: [],
          })
        }

        sortedData[index].forecast.push(f)
      })

      return sortedData
    }
    
    setForecastData(sortForecastData())
  }, [data])

  const setForecastItem = (forecast: ForecastData, index: number) => {
    return (
      <Box
        key={forecast.dt}
        borderLeft={index > 0 ? '1px' : 'none'}
        borderColor='blackAlpha.300'
      >
        <WeatherForecast
          time={forecast.dt}
          iconCode={forecast.weather[0].icon}
          temperature={forecast.main.temp}
        />
      </Box>
    )
  }

  const setForecastDaily = (sortedData: DailyForecast[]) => {
    return (
      <>
        {sortedData.map((df, i) => {
          if (df.forecast.length === 0) {
            return null;
          }

          const formattedDays = () => {
            if (i === 0) {
              return 'Today'
            }
            if (i === 1) {
              return 'Tomorrow'
            }
            return days[df.day]
          }

          return (
            <Box 
              key={df.day}
              borderLeft={i > 0 ? '1px' : 'none'}
              borderColor='blackAlpha.500'
            >
              <Text left={0} ml={1} mb={1} fontSize='sm' fontWeight='medium'>{formattedDays()}</Text>
              <Box display='flex'>
                {df.forecast.map((f, i) => setForecastItem(f, i))}
              </Box>
            </Box>
          )
        })}
      </>
    )
  }
  
  return(
    <Box
      w='100%'
      overflow='hidden'
      borderRadius={8}
      bgColor='whiteAlpha.400'
      shadow='lg'
    >
      <Text fontSize='md' fontWeight='medium' align='center' my={1}>Forecast</Text>
      <HStack
        overflowX='auto'
        spacing={0}
      >
        {/*TODO: Make name of the day stick when scrolled*/}
        {setForecastDaily(forecastData)}
      </HStack>
    </Box>
  )
}