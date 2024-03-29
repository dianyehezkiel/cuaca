import { Box, Progress, Skeleton, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { setAirQualityIndex, useStateValue } from '../state'
import { AirQualityIndexType, Coordinate } from '../types'

interface AirQualityIndexProps extends Coordinate {
  id: string
}

export default function AirQualityIndex({
  id,
  lat,
  lon,
}: AirQualityIndexProps) {
  const [{ airQualityIndex }, dispatch] = useStateValue()
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    const fetchAqi = async () => {
      try {
        setLoading(true)
        setError(false)
        const params = {
          lat,
          lon,
        }
        const { data: airQualityIndex } = await axios.get<AirQualityIndexType>(
          '/api/aqi',
          { params },
        )

        dispatch(setAirQualityIndex(id, airQualityIndex))
        setLoading(false)
      } catch (err) {
        setError(true)
        console.log(err)
      }
    }

    fetchAqi()
  }, [id, lat, lon, dispatch])

  if (error) return <h1>Something bad happened</h1>

  if (loading) {
    return (
      <Box
        display="flex"
        flexDir="column"
        w="100%"
        alignItems="center"
        borderRadius={8}
        bgColor="whiteAlpha.400"
        shadow="lg"
      >
        <Skeleton
          h={5}
          w={40}
          my={1.5}
          startColor="blue.100"
          endColor="blue.300"
        />
        <Box
          mb={2}
          px={4}
          display="flex"
          w="100%"
          gap={4}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Box
            textAlign="center"
            flex="0 0 30%"
            display="flex"
            flexDir="column"
            alignItems="center"
          >
            <Skeleton
              h={16}
              w={12}
              my={2}
              startColor="blue.100"
              endColor="blue.300"
            />
            <Skeleton
              h={4}
              w={20}
              my={0.5}
              startColor="blue.100"
              endColor="blue.300"
            />
          </Box>
          <Box flex="0 0 60%" display="flex" flexDir="column">
            <Box display="flex" h={5} justifyContent="space-between">
              <Skeleton h={4} w={6} startColor="blue.100" endColor="blue.300" />
              <Skeleton
                h={4}
                w={16}
                startColor="blue.100"
                endColor="blue.300"
              />
              <Skeleton h={4} w={6} startColor="blue.100" endColor="blue.300" />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              height={20}
              gap={1}
            >
              <Box flex="1" display="flex" flexDir="column" height="100%">
                <Box h={5} display="flex" alignItems="center">
                  <Skeleton
                    h={4}
                    w="100%"
                    startColor="blue.100"
                    endColor="blue.300"
                  />
                </Box>
                <Box h={5} display="flex" alignItems="center">
                  <Skeleton
                    h={4}
                    w="100%"
                    startColor="blue.100"
                    endColor="blue.300"
                  />
                </Box>
                <Box h={5} display="flex" alignItems="center">
                  <Skeleton
                    h={4}
                    w="100%"
                    startColor="blue.100"
                    endColor="blue.300"
                  />
                </Box>
                <Box h={5} display="flex" alignItems="center">
                  <Skeleton
                    h={4}
                    w="100%"
                    startColor="blue.100"
                    endColor="blue.300"
                  />
                </Box>
              </Box>
              <Box flex="4" display="flex" flexDir="column" height="100%">
                <Box h={5} display="flex" alignItems="center">
                  <Skeleton
                    h={4}
                    w="100%"
                    startColor="blue.100"
                    endColor="blue.300"
                  />
                </Box>
                <Box h={5} display="flex" alignItems="center">
                  <Skeleton
                    h={4}
                    w="100%"
                    startColor="blue.100"
                    endColor="blue.300"
                  />
                </Box>
                <Box h={5} display="flex" alignItems="center">
                  <Skeleton
                    h={4}
                    w="100%"
                    startColor="blue.100"
                    endColor="blue.300"
                  />
                </Box>
                <Box h={5} display="flex" alignItems="center">
                  <Skeleton
                    h={4}
                    w="100%"
                    startColor="blue.100"
                    endColor="blue.300"
                  />
                </Box>
              </Box>
              <Box flex="1" display="flex" flexDir="column" height="100%">
                <Box h={5} display="flex" alignItems="center">
                  <Skeleton
                    h={4}
                    w="100%"
                    startColor="blue.100"
                    endColor="blue.300"
                  />
                </Box>
                <Box h={5} display="flex" alignItems="center">
                  <Skeleton
                    h={4}
                    w="100%"
                    startColor="blue.100"
                    endColor="blue.300"
                  />
                </Box>
                <Box h={5} display="flex" alignItems="center">
                  <Skeleton
                    h={4}
                    w="100%"
                    startColor="blue.100"
                    endColor="blue.300"
                  />
                </Box>
                <Box h={5} display="flex" alignItems="center">
                  <Skeleton
                    h={4}
                    w="100%"
                    startColor="blue.100"
                    endColor="blue.300"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }

  const aqiDescription = () => {
    switch (airQualityIndex[id].aqiData.main.aqi) {
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

  const no2Percentage =
    airQualityIndex[id].aqiData.components.no2 > 400
      ? 100
      : (airQualityIndex[id].aqiData.components.no2 / 400) * 100

  const pm10Percentage =
    airQualityIndex[id].aqiData.components.pm10 > 180
      ? 100
      : (airQualityIndex[id].aqiData.components.pm10 / 180) * 100

  const o3Percentage =
    airQualityIndex[id].aqiData.components.o3 > 240
      ? 100
      : (airQualityIndex[id].aqiData.components.o3 / 240) * 100

  const pm2_5Percentage =
    airQualityIndex[id].aqiData.components.pm2_5 > 110
      ? 100
      : (airQualityIndex[id].aqiData.components.pm2_5 / 110) * 100

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

  return (
    <Box
      display="flex"
      flexDir="column"
      minW="100%"
      alignItems="center"
      borderRadius={8}
      bgColor="whiteAlpha.400"
      shadow="lg"
    >
      <Text my={1} fontSize="md" fontWeight="medium">
        Indeks Kualitas Udara
      </Text>
      <Box
        mb={2}
        px={4}
        display="flex"
        w="100%"
        gap={4}
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Box
          textAlign="center"
          flex="0 0 30%"
          display="flex"
          flexDir="column"
          alignItems="center"
        >
          <Text fontSize="6xl" fontWeight="medium" lineHeight="5rem">
            {airQualityIndex[id].aqiData.main.aqi}
          </Text>
          <Text fontSize="xs" fontWeight="medium" lineHeight={5}>
            {aqiDescription()}
          </Text>
        </Box>
        <Box flex="0 0 60%" display="flex" flexDir="column">
          <Box display="flex" justifyContent="space-between">
            <Text flex="1" fontSize="xs" fontWeight="semibold" textAlign="left">
              Gas
            </Text>
            <Text
              flex="4"
              fontSize="xs"
              fontWeight="semibold"
              textAlign="center"
            >
              Indikator
            </Text>
            <Text
              flex="1"
              fontSize="xs"
              fontWeight="semibold"
              textAlign="right"
            >
              &micro;g/m<sup>3</sup>
            </Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            height={20}
            gap={1}
          >
            <Box flex="1" display="flex" flexDir="column" height="100%">
              <Box h={5} display="flex" alignItems="center">
                <Text fontSize="xs">
                  NO<sub>2</sub>
                </Text>
              </Box>
              <Box h={5} display="flex" alignItems="center">
                <Text fontSize="xs">
                  PM<sub>10</sub>
                </Text>
              </Box>
              <Box h={5} display="flex" alignItems="center">
                <Text fontSize="xs">
                  O<sub>3</sub>
                </Text>
              </Box>
              <Box h={5} display="flex" alignItems="center">
                <Text fontSize="xs">
                  PM<sub>2.5</sub>
                </Text>
              </Box>
            </Box>
            <Box flex="4" display="flex" flexDir="column" height="100%">
              <Box h={5} py="1.5">
                <Progress
                  value={no2Percentage}
                  colorScheme={colorIndicator(no2Percentage)}
                  size="sm"
                />
              </Box>
              <Box h={5} py="1.5">
                <Progress
                  value={pm10Percentage}
                  colorScheme={colorIndicator(pm10Percentage)}
                  size="sm"
                />
              </Box>
              <Box h={5} py="1.5">
                <Progress
                  value={o3Percentage}
                  colorScheme={colorIndicator(o3Percentage)}
                  size="sm"
                />
              </Box>
              <Box h={5} py="1.5">
                <Progress
                  value={pm2_5Percentage}
                  colorScheme={colorIndicator(pm2_5Percentage)}
                  size="sm"
                />
              </Box>
            </Box>
            <Box flex="1" display="flex" flexDir="column" height="100%">
              <Box
                h={5}
                display="flex"
                alignItems="center"
                justifyContent="end"
              >
                <Text fontSize="xs">
                  {airQualityIndex[id].aqiData.components.no2}
                </Text>
              </Box>
              <Box
                h={5}
                display="flex"
                alignItems="center"
                justifyContent="end"
              >
                <Text fontSize="xs">
                  {airQualityIndex[id].aqiData.components.pm10}
                </Text>
              </Box>
              <Box
                h={5}
                display="flex"
                alignItems="center"
                justifyContent="end"
              >
                <Text fontSize="xs">
                  {airQualityIndex[id].aqiData.components.o3}
                </Text>
              </Box>
              <Box
                h={5}
                display="flex"
                alignItems="center"
                justifyContent="end"
              >
                <Text fontSize="xs">
                  {airQualityIndex[id].aqiData.components.pm2_5}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
