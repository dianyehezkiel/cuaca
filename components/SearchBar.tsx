import { CloseIcon, Search2Icon } from "@chakra-ui/icons"
import { Box, Editable, EditableInput, EditablePreview, IconButton, Input, useEditableControls } from "@chakra-ui/react"

export default function SearchBar() {
  function EditableControls() {
    const {
      isEditing,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls()

    return isEditing ? (
      <Box display='flex' zIndex={10} pos='absolute' right='0' justifyContent='center'>
        <IconButton
          bg='transparent'
          _hover={{bg: 'transparent'}}
          _active={{background: 'blackAlpha.100'}}
          size='sm' icon={<CloseIcon />}
          aria-label='cancel edit location'
          {...getCancelButtonProps()}
        />
      </Box>
    ) : (
      <Box display='flex' pos='absolute' right='0' justifyContent='center'>
        <IconButton
          bg='transparent'
          _hover={{bg: 'transparent'}}
          _active={{background: 'blackAlpha.100'}}
          size='sm'
          icon={<Search2Icon />}
          aria-label='edit location'
          {...getEditButtonProps()}
        />
      </Box>
    )
  }

  return (
    <Editable
      display='flex'
      pos='relative'
      width='100%'
      alignItems='center'
      justifyContent='center'
      gap={2}
      borderRadius={8}
      textAlign='center'
      defaultValue='Kota Medan, ID'
      fontSize='md'
      fontWeight='medium'
      isPreviewFocusable={false}
    >
      <EditablePreview h={8} />
      <Input as={EditableInput} size='sm' />
      <EditableControls />
    </Editable>
  )
}