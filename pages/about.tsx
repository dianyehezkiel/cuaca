import { Box, Container, Link, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../public/profile_pic.jpg'

export default function About() {
  return (
    <div>
      <Head>
        <title>Cuaca</title>
      </Head>
      <Box as="main" minH="100vh" pt={16} pb={24} px={4} bg="blue.200" userSelect='none'>
        <Container
          p={0}
          maxW="container.md"
          display="flex"
          flexDir="column"
          alignItems="center"
          bgColor="whiteAlpha.400"
          padding={4}
          borderRadius={8}
          gap={2}
          shadow="lg"
        >
          <Box w={32} h={32} pos="relative" rounded={'full'} overflow="hidden">
            <Image
              src={profilePic}
              loading="lazy"
              alt="picture of dian"
              layout="fill"
            />
          </Box>
          <Text>
            Cuaca merupakan proyek portfolio aplikasi web oleh{' '}
            <Link
              color="blue.600"
              href="https://twitter.com/dianyehezkiel_"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dian Yehezkiel
            </Link>
            . Data live cuaca, prediksi cuaca, lokasi geografis kota, dan
            indeks kualitas udara diperoleh dari{' '}
            <Link
              color="blue.600"
              href="https://openweathermap.org/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Weather Map API
            </Link>
            .
          </Text>
          <Text>
            Jika Anda menemukan masalah saat menggunakan Cuaca, silahkan buka
            issue baru pada{' '}
            <Link
              color="blue.600"
              href="https://github.com/dianyehezkiel/cuaca"
              target="_blank"
              rel="noopener noreferrer"
            >
              repositori Cuaca
            </Link>
            . Anda juga dapat mengirimkan saran fitur untuk aplikasi cuaca di
            repositori.
          </Text>
        </Container>
      </Box>
    </div>
  )
}
