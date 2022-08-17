import {
  Box,
  Container,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'

export default function Navbar() {
  return (
    <Box
      as="header"
      py={{ base: 1, md: 2 }}
      px={4}
      bgColor="blue.300"
      pos="absolute"
      top="0"
      w="100%"
      zIndex={999}
      shadow="lg"
    >
      <Container
        p={0}
        maxW="container.md"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <NextLink href="/">
          <Link fontSize="xl" lineHeight={8} fontWeight="bold">
            Cuaca
          </Link>
        </NextLink>
        <Box
          as="nav"
          display={{ base: 'none', md: 'flex' }}
          gap={4}
          alignItems="center"
        >
          <NextLink href="/">
            <Link fontWeight="bold">Beranda</Link>
          </NextLink>
          <NextLink href="/about">
            <Link fontWeight="bold">Tentang</Link>
          </NextLink>
        </Box>
        <Box
          as="nav"
          display={{ base: 'flex', md: 'none' }}
          gap="8px"
          alignItems="center"
        >
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon w={6} h={6} />}
              variant="ghost"
              _hover={{ background: 'transparent' }}
              _active={{ background: 'blackAlpha.100' }}
            />
            <MenuList>
              <NextLink href="/">
                <MenuItem>
                  <Link>Beranda</Link>
                </MenuItem>
              </NextLink>
              <NextLink href="/about">
                <MenuItem>
                  <Link>Tentang</Link>
                </MenuItem>
              </NextLink>
            </MenuList>
          </Menu>
        </Box>
      </Container>
    </Box>
  )
}
