'use client'

import {
  Input,
  InputGroup,
  InputLeftElement,
  Box,
} from '@chakra-ui/react'

interface SearchBarProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  placeholder?: string
}

export default function SearchBar({ 
  searchTerm, 
  onSearchChange, 
  placeholder = "Search by plate number..." 
}: SearchBarProps) {
  return (
    <Box maxW="md" mx="auto" mb={8}>
      <InputGroup size="lg">
        <InputLeftElement pointerEvents="none">
          <Box color="gray.400" fontSize="lg">
            🔍
          </Box>
        </InputLeftElement>
        <Input
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          borderRadius="full"
          bg="white"
          shadow="md"
          _focus={{
            shadow: "lg",
            borderColor: "blue.400",
          }}
          _hover={{
            shadow: "lg",
          }}
        />
      </InputGroup>
    </Box>
  )
}
