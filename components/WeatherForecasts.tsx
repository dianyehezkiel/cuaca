import WeatherForecast from "./WeatherForecast"
import { Box, HStack, Skeleton, Text } from "@chakra-ui/react"
import {
  ForecastData,
  DailyForecast,
  Coordinate,
  WeatherForecastType,
} from "../types"
import React from "react"
import { setWeatherForecast, useStateValue } from "../state"
import axios from "axios"
import { groupForecastData } from "../utils"
import { days } from "../utils/constant"

interface WeatherForecastProps extends Coordinate {
  id: string;
}

export default function WeatherForecasts({
  id,
  lat,
  lon,
}: WeatherForecastProps) {
  const [, dispatch] = useStateValue()
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [forecastData, setForecastData] = React.useState<DailyForecast[]>([])

  React.useEffect(() => {
    const fetchForecast = async () => {
      try {
        setLoading(true)
        setError(false)
        const params = {
          lat,
          lon,
        }
        const { data: weatherForecast } = await axios.get<WeatherForecastType>(
          "/api/forecast",
          { params },
        )

        dispatch(setWeatherForecast(id, weatherForecast))
        setForecastData(groupForecastData(weatherForecast))
        setLoading(false)
      } catch (err) {
        setError(true)
        console.log(err)
      }
    }

    fetchForecast()
  }, [id, lat, lon, dispatch])

  if (error) return <h1>Something bad happened</h1>

  if (loading) {
    return (
      <Box
        display="flex"
        flexDir="column"
        w="100%"
        overflow="hidden"
        borderRadius={8}
        bgColor="whiteAlpha.400"
        shadow="lg"
        alignItems="center"
      >
        <Skeleton
          h={6}
          w={24}
          my={1}
          startColor="blue.100"
          endColor="blue.300"
        />
        <Box
          display="flex"
          gap={1}
          pb={2.5}
          ml={1}
          alignItems="end"
          alignSelf="start"
        >
          <Box>
            <Skeleton
              h={5}
              w={12}
              mb={1}
              startColor="blue.100"
              endColor="blue.300"
            />
            <Skeleton h={24} w={16} startColor="blue.100" endColor="blue.300" />
          </Box>
          <Skeleton h={24} w={16} startColor="blue.100" endColor="blue.300" />
          <Skeleton h={24} w={16} startColor="blue.100" endColor="blue.300" />
          <Skeleton h={24} w={16} startColor="blue.100" endColor="blue.300" />
          <Box>
            <Skeleton
              h={5}
              w={12}
              mb={1}
              startColor="blue.100"
              endColor="blue.300"
            />
            <Skeleton h={24} w={16} startColor="blue.100" endColor="blue.300" />
          </Box>
          <Skeleton h={24} w={16} startColor="blue.100" endColor="blue.300" />
          <Skeleton h={24} w={16} startColor="blue.100" endColor="blue.300" />
          <Skeleton h={24} w={16} startColor="blue.100" endColor="blue.300" />
          <Skeleton h={24} w={16} startColor="blue.100" endColor="blue.300" />
          <Skeleton h={24} w={16} startColor="blue.100" endColor="blue.300" />
          <Skeleton h={24} w={16} startColor="blue.100" endColor="blue.300" />
          <Skeleton h={24} w={16} startColor="blue.100" endColor="blue.300" />
        </Box>
      </Box>
    )
  }

  const setForecastItem = (forecast: ForecastData, index: number) => {
    return (
      <Box
        key={forecast.dt}
        borderLeft={index > 0 ? "1px" : "none"}
        borderColor="blackAlpha.300"
      >
        <WeatherForecast
          time={forecast.dt}
          weatherId={forecast.weather[0].id}
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
            return null
          }

          const formattedDays = () => {
            if (i === 0) {
              return days[7]
            }
            if (i === 1) {
              return days[8]
            }
            return days[df.day]
          }

          return (
            <Box
              key={df.day}
              borderLeft={i > 0 ? "1px" : "none"}
              borderColor="blackAlpha.500"
            >
              <Text
                left={0}
                ml={1}
                mb={1}
                fontSize="sm"
                lineHeight={5}
                fontWeight="medium"
              >
                {formattedDays()}
              </Text>
              <Box display="flex">
                {df.forecast.map((f, i) => setForecastItem(f, i))}
              </Box>
            </Box>
          )
        })}
      </>
    )
  }

  return (
    <Box
      w="100%"
      overflow="hidden"
      borderRadius={8}
      bgColor="whiteAlpha.400"
      shadow="lg"
    >
      <Text fontSize="md" fontWeight="medium" align="center" my={1}>
        Prediksi Cuaca
      </Text>
      <HStack overflowX="auto" spacing={0}>
        {/*TODO: Make name of the day stick when scrolled*/}
        {setForecastDaily(forecastData)}
      </HStack>
    </Box>
  )
}
