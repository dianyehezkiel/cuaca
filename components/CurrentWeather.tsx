import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text
} from "@chakra-ui/react";
import {SunIcon, TriangleDownIcon, TriangleUpIcon} from "@chakra-ui/icons";

export default function CurrentWeather() {
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
      <Text px={4}>Medan, ID</Text>
      <Box
        px={4}
        display='flex'
        minW='80%'
        gap={8}
        alignItems='center'
        justifyContent='space-evenly'
      >
        <Box textAlign='center'>
          <SunIcon w={20} h={20} mb={2}/>
          <Text fontSize='sm'>Awan Pecah</Text>
        </Box>
        <Box textAlign='right'>
          <Text>Rabu, 27 Juli</Text>
          <Box>
            <Text fontSize='3xl'>28.9&deg;C</Text>
            <Box
              display='flex'
              justifyContent='space-between'
              gap={2}
              alignItems='center'
            >
              <Box display='flex' alignItems='center'>
                <TriangleUpIcon w={3} h={3} mr={1}/>
                <Text fontSize='xs'>29.0&deg;</Text>
              </Box>
              <Box display='flex' alignItems='center'>
                <TriangleDownIcon w={3} h={3} mr={1}/>
                <Text fontSize='xs'>28.9&deg;</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box px={4} display='flex' justifyContent='space-between' w='100%'>
        <Box display='flex' flexDir='column' alignItems='center'>
          <Text fontSize='sm' fontWeight='medium'>34&deg;C</Text>
          <Text fontSize='xs'>Feels like</Text>
        </Box>
        <Box display='flex' flexDir='column' alignItems='center'>
          <Text fontSize='sm' fontWeight='medium'>79%</Text>
          <Text fontSize='xs'>Humidity</Text>
        </Box>
        <Box display='flex' flexDir='column' alignItems='center'>
          <Text fontSize='sm' fontWeight='medium'>1007 hPa</Text>
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
            <AccordionPanel px={4}>
              <Box display='flex' justifyContent='space-around' w='100%'>
                <Box display='flex' flexDir='column' alignItems='center'>
                  <Text fontSize='sm' fontWeight='medium'>4.12 m/s</Text>
                  <Text fontSize='xs'>Wind Speed</Text>
                </Box>
                <Box display='flex' flexDir='column' alignItems='center'>
                  <Text fontSize='sm' fontWeight='medium'>90&deg;</Text>
                  <Text fontSize='xs'>Wind Direction</Text>
                </Box>
              </Box>
            </AccordionPanel>
          </Heading>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}