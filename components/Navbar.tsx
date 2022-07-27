import {Box, IconButton, Link, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import NextLink from "next/link";
import {HamburgerIcon} from "@chakra-ui/icons";

export default function Navbar() {
  return (
    <Box
      as='header'
      py={2}
      px={2}
      bgColor='blue.100'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      position='sticky'
      top={0}
      zIndex={999}
    >
      <NextLink href='/'>
        <Link fontSize='xl' fontWeight='bold'>Cuaca</Link>
      </NextLink>
      <Box as='nav' display={{base: 'none', md: 'flex'}} gap={4} alignItems='center'>
        <NextLink href='/'>
          <Link fontWeight='bold'>Home</Link>
        </NextLink>
        <NextLink href='/about'>
          <Link fontWeight='bold'>About</Link>
        </NextLink>
      </Box>
      <Box as='nav' display={{base: 'flex', md: 'none'}} gap='8px' alignItems='center'>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon w={6} h={6}/>}
            variant='ghost'
            _hover={{background: 'transparent'}}
            _active={{background: 'blackAlpha.100'}}
          />
          <MenuList maxW={2}>
            <MenuItem>
              <NextLink href='/'>
                <Link>Home</Link>
              </NextLink>
            </MenuItem>
            <MenuItem>
              <NextLink href='/about'>
                <Link>About</Link>
              </NextLink>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  )
}