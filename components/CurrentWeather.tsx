import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Skeleton,
  Text,
} from "@chakra-ui/react"
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons"
import { Coordinate, CurrentWeatherType } from "../types"
import WeatherIcon from "./WeatherIcon"
import { setCurrentWeather, useStateValue } from "../state"
import React from "react"
import axios from "axios"

interface CurrentWeatherProps extends Coordinate {
  id: string;
}

export default function CurrentWeather({ id, lat, lon }: CurrentWeatherProps) {
  const [{ currentWeather }, dispatch] = useStateValue()
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true)
        setError(false)
        const params = {
          lat,
          lon,
        }
        const { data: currentWeather } = await axios.get<CurrentWeatherType>(
          "/api/weather",
          { params },
        )

        dispatch(setCurrentWeather(id, currentWeather))
        setLoading(false)
      } catch (err) {
        setError(true)
        console.log(err)
      }
    }

    fetchWeather()
  }, [id, lat, lon, dispatch])

  if (error) return <h1>Something bad happened</h1>

  if (loading) {
    return (
      <Box
        display="flex"
        flexDir="column"
        w="100%"
        alignItems="center"
        gap={4}
        pt={4}
        borderRadius={8}
        bgColor="whiteAlpha.400"
        shadow="lg"
      >
        <Box
          px={4}
          display="flex"
          minW="80%"
          gap={8}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Box display="flex" flexDir="column" alignItems="center">
            <Skeleton
              height={20}
              width={20}
              startColor="blue.100"
              endColor="blue.300"
            />
            <Skeleton
              height={4}
              width={24}
              mt={1}
              startColor="blue.100"
              endColor="blue.300"
            />
          </Box>
          <Box display="flex" flexDir="column" alignItems="end">
            <Skeleton
              height={6}
              width={32}
              my={1.5}
              startColor="blue.100"
              endColor="blue.300"
            />
            <Skeleton
              height={"1.875rem"}
              width={24}
              my={1}
              startColor="blue.100"
              endColor="blue.300"
            />
            <Skeleton
              height={4}
              width={24}
              my={1}
              startColor="blue.100"
              endColor="blue.300"
            />
          </Box>
        </Box>
        <Box
          px={2}
          pb={{ base: 0, md: 4 }}
          display="flex"
          minW="100%"
          gap={4}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            display="flex"
            gap={4}
            width="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Skeleton
              height={10}
              width="100%"
              startColor="blue.100"
              endColor="blue.300"
            />
            <Skeleton
              height={10}
              width="100%"
              startColor="blue.100"
              endColor="blue.300"
            />
            <Skeleton
              height={10}
              width="100%"
              startColor="blue.100"
              endColor="blue.300"
            />
          </Box>
          <Box
            display={{ base: "none", md: "flex" }}
            gap={4}
            width="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Skeleton
              height={10}
              width="100%"
              startColor="blue.100"
              endColor="blue.300"
            />
            <Skeleton
              height={10}
              width="100%"
              startColor="blue.100"
              endColor="blue.300"
            />
            <Skeleton
              height={10}
              width="100%"
              startColor="blue.100"
              endColor="blue.300"
            />
          </Box>
        </Box>

        <Accordion display={{ base: "block", md: "none" }} allowToggle w="100%">
          <AccordionItem borderY="none">
            <Heading as="h6" fontWeight="normal">
              <AccordionButton
                fontSize="xs"
                justifyContent="space-around"
                _expanded={{ background: "blackAlpha.100" }}
                _hover={{ background: "transparent" }}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  lebih lanjut
                  <AccordionIcon />
                </Box>
              </AccordionButton>
            </Heading>
            <AccordionPanel px={2}>
              <Box
                display="flex"
                minW="100%"
                gap={4}
                alignItems="center"
                justifyContent="center"
              >
                <Skeleton
                  height={10}
                  width="100%"
                  startColor="blue.100"
                  endColor="blue.300"
                />
                <Skeleton
                  height={10}
                  width="100%"
                  startColor="blue.100"
                  endColor="blue.300"
                />
                <Skeleton
                  height={10}
                  width="100%"
                  startColor="blue.100"
                  endColor="blue.300"
                />
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    )
  }

  const now = Date.now()
  const today = new Date(now)
  const todayString = today.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "2-digit",
    month: "short",
    day: "numeric",
  })

  const day = () => {
    if (currentWeather[id].weather.icon.endsWith("d")) return true
    if (currentWeather[id].weather.icon.endsWith("n")) return false
    return undefined
  }

  return (
    <Box
      display="flex"
      flexDir="column"
      minW="100%"
      alignItems="center"
      gap={4}
      pt={4}
      borderRadius={8}
      bgColor="whiteAlpha.400"
      shadow="lg"
    >
      <Box
        px={4}
        display="flex"
        minW="80%"
        gap={8}
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Box
          textAlign="center"
          display="flex"
          flexDir="column"
          alignItems="center"
        >
          <WeatherIcon
            boxSize={20}
            weatherId={currentWeather[id].weather.id}
            day={day()}
          />
          <Text fontSize="sm" lineHeight={5} fontWeight="medium">
            {currentWeather[id].weather.description}
          </Text>
        </Box>
        <Box textAlign="right">
          <Text>{todayString}</Text>
          <Box>
            <Text fontSize="3xl" fontWeight="bold">
              {currentWeather[id].main.temp.toFixed(1)}&deg;C
            </Text>
            <Box
              display="flex"
              justifyContent="flex-end"
              gap={2}
              alignItems="center"
            >
              <Box display="flex" alignItems="center">
                <TriangleUpIcon w={3} h={3} mr={1} />
                <Text fontSize="xs">
                  {currentWeather[id].main.temp_max.toFixed(1)}&deg;
                </Text>
              </Box>
              <Box display="flex" alignItems="center">
                <TriangleDownIcon w={3} h={3} mr={1} />
                <Text fontSize="xs">
                  {currentWeather[id].main.temp_min.toFixed(1)}&deg;
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        px={2}
        mb={{ base: "none", md: "4" }}
        display="flex"
        justifyContent="space-evenly"
        w="100%"
      >
        <Box
          px={2}
          display="flex"
          justifyContent="space-evenly"
          w="100%"
          alignItems="center"
        >
          <Box
            display="flex"
            flexDir="column"
            alignItems="center"
            flex="1"
            minH={10}
          >
            <Text fontSize="sm" fontWeight="medium">
              {currentWeather[id].main.feels_like.toFixed(1)}&deg;C
            </Text>
            <Text fontSize="xs">Suhu Terasa</Text>
          </Box>
          <Box
            display="flex"
            flexDir="column"
            alignItems="center"
            flex="1"
            minH={10}
          >
            <Text fontSize="sm" fontWeight="medium">
              {currentWeather[id].main.humidity}%
            </Text>
            <Text fontSize="xs">Kelembapan</Text>
          </Box>
          <Box
            display="flex"
            flexDir="column"
            alignItems="center"
            flex="1"
            minH={10}
          >
            <Text fontSize="sm" fontWeight="medium">
              {currentWeather[id].main.pressure} hPa
            </Text>
            <Text fontSize="xs">Tekanan</Text>
          </Box>
        </Box>
        <Box
          px={2}
          display={{ base: "none", md: "flex" }}
          justifyContent="space-evenly"
          w="100%"
          alignItems="center"
        >
          <Box
            display="flex"
            flexDir="column"
            alignItems="center"
            flex="1"
            minH={10}
          >
            <Text fontSize="sm" fontWeight="medium">
              {currentWeather[id].wind.speed} m/s
            </Text>
            <Text fontSize="xs">Kcptn. Udara</Text>
          </Box>
          <Box
            display="flex"
            flexDir="column"
            alignItems="center"
            flex="1"
            minH={10}
          >
            <Text fontSize="sm" fontWeight="medium">
              {currentWeather[id].wind.deg}&deg;
            </Text>
            <Text fontSize="xs">Arah Udara</Text>
          </Box>
          <Box
            display="flex"
            flexDir="column"
            alignItems="center"
            flex="1"
            minH={10}
          >
            <Text fontSize="sm" fontWeight="medium">
              {(currentWeather[id].visibility / 1000).toFixed(1)} km
            </Text>
            <Text fontSize="xs">Visibilitas</Text>
          </Box>
        </Box>
      </Box>
      <Accordion display={{ base: "block", md: "none" }} allowToggle w="100%">
        <AccordionItem borderY="none">
          <Heading as="h6" fontWeight="normal">
            <AccordionButton
              fontSize="xs"
              justifyContent="space-around"
              _expanded={{ background: "blackAlpha.100" }}
              _hover={{ background: "transparent" }}
            >
              <Box display="flex" alignItems="center" gap={1}>
                lebih lanjut
                <AccordionIcon />
              </Box>
            </AccordionButton>
          </Heading>
          <AccordionPanel px={2}>
            <Box
              display="flex"
              justifyContent="space-evenly"
              w="100%"
              alignItems="center"
            >
              <Box
                display="flex"
                flexDir="column"
                alignItems="center"
                flex="1"
                minH={10}
              >
                <Text fontSize="sm" fontWeight="medium">
                  {currentWeather[id].wind.speed} m/s
                </Text>
                <Text fontSize="xs">Kcptn. Udara</Text>
              </Box>
              <Box
                display="flex"
                flexDir="column"
                alignItems="center"
                flex="1"
                minH={10}
              >
                <Text fontSize="sm" fontWeight="medium">
                  {currentWeather[id].wind.deg}&deg;
                </Text>
                <Text fontSize="xs">Arah Udara</Text>
              </Box>
              <Box
                display="flex"
                flexDir="column"
                alignItems="center"
                flex="1"
                minH={10}
              >
                <Text fontSize="sm" fontWeight="medium">
                  {(currentWeather[id].visibility / 1000).toFixed(1)} km
                </Text>
                <Text fontSize="xs">Visibilitas</Text>
              </Box>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}
