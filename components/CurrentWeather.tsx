import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading, Image,
  Text
} from "@chakra-ui/react";
import {TriangleDownIcon, TriangleUpIcon} from "@chakra-ui/icons";
import {CurrentWeatherType} from "../types/CurrentWeather";

export default function CurrentWeather({ data }: { data: CurrentWeatherType }) {
  const now = Date.now()
  const today = new Date(now)
  const todayString = today.toLocaleDateString('id-ID', { weekday: "long", year: "2-digit", month: "short", day: "numeric" })
  return (
    <Box
      display='flex'
      flexDir='column'
      minW='100%'
      alignItems='center'
      gap={4}
      pt={4}
      borderRadius={8}
      bgColor='blue.300'
    >
      <Text px={4} fontWeight='medium'>{`${data.name}, ${data.sys.country}`}</Text>
      <Box
        px={4}
        display='flex'
        minW='80%'
        gap={8}
        alignItems='center'
        justifyContent='space-evenly'
      >
        <Box textAlign='center' display='flex' flexDir='column' alignItems='center'>
          {/*TODO: Change open weather icon to other icon pack*/}
          <Image
            boxSize={20}
            objectFit='fill'
            src={`http://openweathermap.org/img/wn/${data.weather.icon}@2x.png`}
            alt={data.weather.description}
          />
          <Text fontSize='sm' fontWeight='medium'>{data.weather.description}</Text>
        </Box>
        <Box textAlign='right'>
          <Text>{todayString}</Text>
          <Box>
            <Text fontSize='3xl' fontWeight='bold'>{data.main.temp.toFixed(1)}&deg;C</Text>
            <Box
              display='flex'
              justifyContent='space-between'
              gap={2}
              alignItems='center'
            >
              <Box display='flex' alignItems='center'>
                <TriangleUpIcon w={3} h={3} mr={1}/>
                <Text fontSize='xs'>{data.main.temp_max.toFixed(1)}&deg;</Text>
              </Box>
              <Box display='flex' alignItems='center'>
                <TriangleDownIcon w={3} h={3} mr={1}/>
                <Text fontSize='xs'>{data.main.temp_min.toFixed(1)}&deg;</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box px={2} display='flex' justifyContent='space-evenly' w='100%' alignItems='center'>
        <Box display='flex' flexDir='column' alignItems='center' flex='1'>
          <Text fontSize='sm' fontWeight='medium'>{data.main.feels_like.toFixed(1)}&deg;C</Text>
          <Text fontSize='xs'>Feels like</Text>
        </Box>
        <Box display='flex' flexDir='column' alignItems='center' flex='1'>
          <Text fontSize='sm' fontWeight='medium'>{data.main.humidity}%</Text>
          <Text fontSize='xs'>Humidity</Text>
        </Box>
        <Box display='flex' flexDir='column' alignItems='center' flex='1'>
          <Text fontSize='sm' fontWeight='medium'>{data.main.pressure} hPa</Text>
          <Text fontSize='xs'>Pressure</Text>
        </Box>
      </Box>
      <Accordion allowToggle w='100%'>
        <AccordionItem borderY='none'>
          <Heading as='h6' fontWeight='normal'>
            <AccordionButton fontSize='xs' justifyContent='space-around' _expanded={{background: 'blackAlpha.100'}} _hover={{background: 'transparent'}}>
              <Box display='flex' alignItems='center' gap={1}>
                Show more
                <AccordionIcon />
              </Box>
            </AccordionButton>
            <AccordionPanel px={2}>
              <Box display='flex' justifyContent='space-evenly' w='100%' alignItems='center'>
                <Box display='flex' flexDir='column' alignItems='center' flex='1'>
                  <Text fontSize='sm' fontWeight='medium'>{data.wind.speed} m/s</Text>
                  <Text fontSize='xs'>Wind Speed</Text>
                </Box>
                <Box display='flex' flexDir='column' alignItems='center' flex='1'>
                  <Text fontSize='sm' fontWeight='medium'>{data.wind.deg}&deg;</Text>
                  <Text fontSize='xs'>Wind Direction</Text>
                </Box>
                <Box display='flex' flexDir='column' alignItems='center' flex='1'>
                  <Text fontSize='sm' fontWeight='medium'>{(data.visibility / 1000).toFixed(1)} km</Text>
                  <Text fontSize='xs'>Visibility</Text>
                </Box>
              </Box>
            </AccordionPanel>
          </Heading>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}