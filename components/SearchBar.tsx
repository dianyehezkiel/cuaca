import { CloseIcon, Search2Icon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
  Input,
  List,
  ListItem,
  Text,
  useEditableControls,
} from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { LocationType } from '../types'

let timeoutId: NodeJS.Timer

export default function SearchBar() {
  const [searchResult, setSearchResult] = React.useState<LocationType[]>([])
  // const [editing, setEditing] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  console.info('----RENDER SearchBar----')

  React.useEffect(() => {
    const searchLocation = async (q: string) => {
      try {
        const params = { q }
        const { data: location } = await axios.get<LocationType[]>(
          '/api/geocoding',
          { params },
        )

        setSearchResult(location)
        setLoading(false)
      } catch (err) {
        setError(true)
        console.log(err)
      }
    }

    if (timeoutId) clearInterval(timeoutId)

    if (searchQuery) {
      setLoading(true)
      setError(false)
      timeoutId = setTimeout(() => {
        searchLocation(searchQuery)
      }, 500)
    } else {
      setSearchResult([])
    }
  }, [searchQuery])

  const EditableControls = () => {
    const { isEditing, getCancelButtonProps, getEditButtonProps } =
      useEditableControls()

    return isEditing ? (
      <Box
        display="flex"
        zIndex={10}
        pos="absolute"
        right="0"
        justifyContent="center"
      >
        <IconButton
          bg="transparent"
          _hover={{ bg: 'transparent' }}
          _active={{ background: 'blackAlpha.100' }}
          size="sm"
          icon={<CloseIcon />}
          aria-label="cancel edit location"
          {...getCancelButtonProps()}
        />
      </Box>
    ) : (
      <Box display="flex" pos="absolute" right="0" justifyContent="center">
        <IconButton
          bg="transparent"
          _hover={{ bg: 'transparent' }}
          _active={{ background: 'blackAlpha.100' }}
          size="sm"
          icon={<Search2Icon />}
          aria-label="edit location"
          {...getEditButtonProps()}
        />
      </Box>
    )
  }

  const SearchResult = () => {
    if (error) return <Text>Something wrong happened</Text>
    if (!searchQuery) return <Text>Enter any location</Text>
    if (loading) return <CircularProgress isIndeterminate />
    if (searchResult.length === 0)
      return <Text>{`Cannot find "${searchQuery}"`}</Text>

    return (
      <List w="100%">
        {searchResult.map((location, index) => (
          <Box key={`${index}-${location.name}`}>
            <ListItem>
              <Button w="100%" textAlign="left" variant="unstyled">
                {`${location.name}, ${location.country}`}
              </Button>
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
    )
  }

  const SearchResultWrapper = () => {
    const { isEditing } = useEditableControls()

    return isEditing ? (
      <Box
        display="flex"
        w="100%"
        borderRadius={8}
        p={2}
        bg="blue.200"
        zIndex={10}
        pos="absolute"
        top={8}
        shadow="lg"
        justifyContent="center"
      >
        <SearchResult />
      </Box>
    ) : null
  }

  return (
    <Editable
      display="flex"
      pos="relative"
      width="100%"
      alignItems="center"
      justifyContent="center"
      gap={2}
      borderRadius={8}
      textAlign="center"
      defaultValue="Kota Medan, ID"
      fontSize="md"
      fontWeight="medium"
      isPreviewFocusable={false}
    >
      <EditablePreview noOfLines={1} h={8} />
      <Input
        as={EditableInput}
        size="sm"
        onChange={(e) => setSearchQuery(e.target.value)}
        _focus={{borderRadius: 8, bg: 'whiteAlpha.300'}}
      />
      <EditableControls />
      <SearchResultWrapper />
    </Editable>
  )
}
