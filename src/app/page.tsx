'use client'

import {
  Container,
  Heading,
  Text,
  SimpleGrid,
  Box,
  VStack,
} from '@chakra-ui/react'
import { useState, useMemo } from 'react'
import CarCard from '@/components/CarCard'
import SearchBar from '@/components/SearchBar'
import { cars } from '@/data/cars'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCars = useMemo(() => {
    if (!searchTerm.trim()) {
      return cars
    }
    
    return cars.filter(car =>
      car.plateNumber.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
  }

  return (
    <Container maxW="7xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading
            as="h1"
            size="2xl"
            bgGradient="linear(to-r, blue.400, purple.500)"
            bgClip="text"
            mb={6}
            py={6}
          >
            Dinga
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
            Locate car owner.
          </Text>
        </Box>

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          placeholder="Search by plate number..."
        />

        {filteredCars.length === 0 ? (
          <Box textAlign="center" py={12}>
            <Text fontSize="lg" color="gray.500">
              No cars found matching {searchTerm}
            </Text>
            <Text fontSize="md" color="gray.400" mt={2}>
              Try searching with a different plate number
            </Text>
          </Box>
        ) : (
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            spacing={6}
            w="full"
          >
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </Container>
  )
}
