import { Box, Progress, Text } from "@chakra-ui/react";

export default function AirQualityIndex() {
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
      <Text my={1} fontSize='md' fontWeight='medium'>Air Quality Index</Text>
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
          <Text fontSize='6xl' fontWeight='medium' lineHeight='110%'>1</Text>
          <Text fontSize='xs' fontWeight='medium'>Baik</Text>
        </Box>
        <Box flex='0 0 60%' display='flex' alignItems='center' justifyContent='space-between' height={20} gap={1}>
          <Box flex='1' display='flex' flexDir='column' height='100%'>
            <Box h={5} display='flex' alignItems='center'><Text fontSize='xs'>NO<sub>2</sub></Text></Box>
            <Box h={5} display='flex' alignItems='center'><Text fontSize='xs'>PM<sub>10</sub></Text></Box>
            <Box h={5} display='flex' alignItems='center'><Text fontSize='xs'>O<sub>3</sub></Text></Box>
            <Box h={5} display='flex' alignItems='center'><Text fontSize='xs'>PM<sub>2.5</sub></Text></Box>
          </Box>
          <Box flex='4' display='flex' flexDir='column' height='100%'>
            <Box h={5} py='1.5'><Progress value={80} colorScheme='red' size='sm'/></Box>
            <Box h={5} py='1.5'><Progress value={80} colorScheme='red' size='sm'/></Box>
            <Box h={5} py='1.5'><Progress value={80} colorScheme='red' size='sm'/></Box>
            <Box h={5} py='1.5'><Progress value={80} colorScheme='red' size='sm'/></Box>
          </Box>
          <Box flex='1' display='flex' flexDir='column' height='100%'>
            <Box h={5} display='flex' alignItems='center' justifyContent='end'><Text fontSize='xs'>10</Text></Box>
            <Box h={5} display='flex' alignItems='center' justifyContent='end'><Text fontSize='xs'>200</Text></Box>
            <Box h={5} display='flex' alignItems='center' justifyContent='end'><Text fontSize='xs'>200</Text></Box>
            <Box h={5} display='flex' alignItems='center' justifyContent='end'><Text fontSize='xs'>200</Text></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}