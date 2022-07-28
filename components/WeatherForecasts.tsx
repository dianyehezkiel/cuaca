import WeatherForecast from "./WeatherForecast";
import {Box, HStack} from "@chakra-ui/react";
import {WeatherForecastType} from "../types/WeatherForecast";

export default function WeatherForecasts({ data }: { data: WeatherForecastType }) {
  return(
    <Box
      gap={1}
      w='100%'
      overflow='hidden'
      borderRadius={8}
      bgColor='blue.200'
    >
      <HStack
        overflowX='auto'
        spacing={1}
      >
        {/*TODO: Make clear border between forecast data with different day*/}
        {data.list.map((forecast) => (
          <WeatherForecast
            key={forecast.dt}
            time={forecast.dt}
            iconCode={forecast.weather[0].icon}
            temperature={forecast.main.temp}
          />
        ))}
      </HStack>
    </Box>
  )
}