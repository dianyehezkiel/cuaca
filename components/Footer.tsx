import { Box, Link, Text } from "@chakra-ui/react"
import Image from "next/image"

export default function Footer () {
  return (
    <Box as='footer'
        display='flex'
        pos='absolute'
        bottom='0'
        w='100%'
        flex={1}
        py={6}
        borderTop='2px'
        bg='white'
        borderTopColor='blue.500'
        justifyContent='center'
        alignItems='center'
      >
        <Text>
          Dibuat oleh
          <Link
            href="https://dianyehezkiel.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box
              as='span'
              display='inline'
              h={4}
              ml={2}
              mr={1}
            >
              <Image src="/dy-logo.svg" alt="DY Logo" width={32} height={16} />
            </Box>
            Dian Yehezkiel
          </Link>
        </Text>
      </Box>
  )
}