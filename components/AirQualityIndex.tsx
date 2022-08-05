import { Box, Progress, Text } from "@chakra-ui/react";
import { AirQualityIndexType } from "../types/AirQualityIndex";

export default function AirQualityIndex({ data }: { data?: AirQualityIndexType }) {
  if (!data) return null

  const aqiDescription = () => {
    switch (data.aqiData.main.aqi) {
      case 1:
        return 'Baik'
      case 2:
        return 'Cukup Baik'
      case 3:
        return 'Tidak Sehat'
      case 4:
        return 'Sangat Tidak Sehat'
      case 5:
        return 'Berbahaya'
      default:
        return 'N/A'
    }
  }

  const no2Percentage = data.aqiData.components.no2 > 400
    ? 100
    : data.aqiData.components.no2 / 400 * 100

  const pm10Percentage = data.aqiData.components.pm10 > 180
    ? 100
    : data.aqiData.components.pm10 / 180 * 100
  
  const o3Percentage = data.aqiData.components.o3 > 240
    ? 100
    : data.aqiData.components.o3 / 240 * 100

  const pm2_5Percentage = data.aqiData.components.pm2_5 > 110
    ? 100
    : data.aqiData.components.pm2_5 / 110 * 100
  
  const colorIndicator = (percentage: number) => {
    switch (true) {
      case percentage < 25:
        return 'green'
      case percentage < 50:
        return 'yellow'
      case percentage < 75:
        return 'orange'
      case percentage < 100:
        return 'red'
      default:
        return 'purple'
    }
  }
  
  return(
    <Box
      display='flex'
      flexDir='column'
      minW='100%'
      alignItems='center'
      borderRadius={8}
      bgColor='whiteAlpha.400'
      shadow='lg'
    >
      <Text my={1} fontSize='md' fontWeight='medium'>Indeks Kualitas Udara</Text>
      <Box
        mb={2}
        px={4}
        display='flex'
        w='100%'
        gap={4}
        alignItems='center'
        justifyContent='space-evenly'
      >
        <Box textAlign='center' flex='0 0 30%' display='flex' flexDir='column' alignItems='center'>
          <Text fontSize='6xl' fontWeight='medium' lineHeight='110%'>{data.aqiData.main.aqi}</Text>
          <Text fontSize='xs' fontWeight='medium'>{aqiDescription()}</Text>
        </Box>
        <Box flex='0 0 60%' display='flex' flexDir='column'>
          <Box display='flex' justifyContent='space-between'>
            <Text flex='1' fontSize='xs' fontWeight='semibold' textAlign='left'>Gas</Text>
            <Text flex='4' fontSize='xs' fontWeight='semibold' textAlign='center'>Indikator</Text>
            <Text flex='1' fontSize='xs' fontWeight='semibold' textAlign='right'>&micro;g/m<sup>3</sup></Text>
          </Box>
          <Box display='flex' alignItems='center' justifyContent='space-between' height={20} gap={1}>
            <Box flex='1' display='flex' flexDir='column' height='100%'>
              <Box h={5} display='flex' alignItems='center'><Text fontSize='xs'>NO<sub>2</sub></Text></Box>
              <Box h={5} display='flex' alignItems='center'><Text fontSize='xs'>PM<sub>10</sub></Text></Box>
              <Box h={5} display='flex' alignItems='center'><Text fontSize='xs'>O<sub>3</sub></Text></Box>
              <Box h={5} display='flex' alignItems='center'><Text fontSize='xs'>PM<sub>2.5</sub></Text></Box>
            </Box>
            <Box flex='4' display='flex' flexDir='column' height='100%'>
              <Box h={5} py='1.5'><Progress value={no2Percentage} colorScheme={colorIndicator(no2Percentage)} size='sm'/></Box>
              <Box h={5} py='1.5'><Progress value={pm10Percentage} colorScheme={colorIndicator(pm10Percentage)} size='sm'/></Box>
              <Box h={5} py='1.5'><Progress value={o3Percentage} colorScheme={colorIndicator(o3Percentage)} size='sm'/></Box>
              <Box h={5} py='1.5'><Progress value={pm2_5Percentage} colorScheme={colorIndicator(pm2_5Percentage)} size='sm'/></Box>
            </Box>
            <Box flex='1' display='flex' flexDir='column' height='100%'>
              <Box h={5} display='flex' alignItems='center' justifyContent='end'><Text fontSize='xs'>{data.aqiData.components.no2}</Text></Box>
              <Box h={5} display='flex' alignItems='center' justifyContent='end'><Text fontSize='xs'>{data.aqiData.components.pm10}</Text></Box>
              <Box h={5} display='flex' alignItems='center' justifyContent='end'><Text fontSize='xs'>{data.aqiData.components.o3}</Text></Box>
              <Box h={5} display='flex' alignItems='center' justifyContent='end'><Text fontSize='xs'>{data.aqiData.components.pm2_5}</Text></Box>
            </Box>
          </Box>
        </Box>
        
      </Box>
    </Box>
  )
}