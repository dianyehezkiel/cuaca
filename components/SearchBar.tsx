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
import { setCoordinate, useStateValue } from '../state'
import { Coordinate, LocationType } from '../types'

let timeoutId: NodeJS.Timer

export default function SearchBar() {
  const [{ coordinate }, dispatch] = useStateValue()
  const [searchResult, setSearchResult] = React.useState<LocationType[]>([])
  const [searchQuery, setSearchQuery] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [editablePreviewValue, setEditablePreviewValue] =
    React.useState('Medan, ID')
  const [cityName, setCityName] = React.useState(editablePreviewValue)

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

  React.useEffect(() => {
    const cityNameFromStorage = localStorage.getItem('city')
    const cityLatFromStorage = localStorage.getItem('lat')
    const cityLonFromStorage = localStorage.getItem('lon')
    if (
      cityNameFromStorage &&
      cityName !== cityNameFromStorage
    ) {
      setEditablePreviewValue(cityNameFromStorage)
      setCityName(cityNameFromStorage)
    }

    if (
      cityLatFromStorage &&
      coordinate['default'].lat.toString() !== cityLatFromStorage &&
      cityLonFromStorage &&
      coordinate['default'].lon.toString() !== cityLonFromStorage
    ) {
      dispatch(setCoordinate('default', {
        lat: Number(cityLatFromStorage),
        lon: Number(cityLonFromStorage),
      }))
    }

  }, [cityName, coordinate, dispatch])

  const handleChange = (value: string) => {
    setSearchQuery(value)
    setEditablePreviewValue(value)
  }

  const selectLocation = (fullCityName: string, coordinate: Coordinate) => {
    setEditablePreviewValue(fullCityName)
    setCityName(fullCityName)
    dispatch(setCoordinate('default', coordinate))
    localStorage.setItem('city', fullCityName)
    localStorage.setItem('lat', coordinate.lat.toString())
    localStorage.setItem('lon', coordinate.lon.toString())
  }

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
      <List w="100%" zIndex={100}>
        {searchResult.map((location, index) => (
          <Box key={`${index}-${location.name}`}>
            <ListItem>
              <Button
                onClick={() =>
                  selectLocation(`${location.name}, ${location.country}`, {
                    lat: location.lat,
                    lon: location.lon,
                  })
                }
                w="100%"
                textAlign="left"
                variant="unstyled"
              >
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
    const { isEditing, getSubmitButtonProps } = useEditableControls()

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
        {...getSubmitButtonProps()}
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
      value={editablePreviewValue}
      fontSize="md"
      fontWeight="medium"
      isPreviewFocusable={false}
    >
      <EditablePreview noOfLines={1} h={8} />
      <Input
        as={EditableInput}
        size="sm"
        onChange={(e) => handleChange(e.target.value)}
        autoComplete="false"
        name="hidden"
        aria-label="location input"
        _focus={{ borderRadius: 8, bg: 'whiteAlpha.300' }}
      />
      <EditableControls />
      <SearchResultWrapper />
    </Editable>
  )
}
