import {Box, Image, Text} from "@chakra-ui/react";

export default function WeatherForecast(
  {
    time,
    iconCode,
    temperature
  }: {
    time: number,
    iconCode: string,
    temperature: number
  }
) {
  const SECONDS_TO_MILLISECONDS = 1000
  const hour = new Date(time * SECONDS_TO_MILLISECONDS).getHours()
  const formattedHour = hour < 10 ? `0${hour}.00` : `${hour}.00`
  return (
    <Box
      display='flex'
      flexDir='column'
      alignItems='center'
      bgColor='whiteAlpha.400'
      minW={16}
    >
      <Text fontSize='sm'>{formattedHour}</Text>
      {/*TODO: Change open weather icon to other icon pack*/}
      <Image
        boxSize={12}
        objectFit='fill'
        src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`}
        alt='rain'
        loading='lazy'
      />
      <Text fontSize='sm' fontWeight='medium'>{temperature.toFixed(1)}&deg;C</Text>
    </Box>
  )
}