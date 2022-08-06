import {Box, Text} from "@chakra-ui/react"
import WeatherIcon from "./WeatherIcon"

export default function WeatherForecast(
  {
    time,
    weatherId,
    iconCode,
    temperature,
  }: {
    time: number;
    weatherId: number;
    iconCode: string;
    temperature: number;
  },
) {
  const SECONDS_TO_MILLISECONDS = 1000
  const hour = new Date(time * SECONDS_TO_MILLISECONDS).getHours()
  const formattedHour = hour < 10 ? `0${hour}.00` : `${hour}.00`

  const day = () => {
    if (weatherId !== 800) return undefined

    if (iconCode.endsWith('d')) return true
    return false
  }

  return (
    <Box
      display='flex'
      flexDir='column'
      alignItems='center'
      borderColor='blackAlpha.500'
      minW={16}
      minH={24}
    >
      <Text fontSize='xs'>
        {formattedHour}
      </Text>
      <WeatherIcon boxSize={12} weatherId={weatherId} day={day()} my='auto'/>
      <Text fontSize='sm' fontWeight='medium'>
        {temperature.toFixed(1)}&deg;C
      </Text>
    </Box>
  )
}