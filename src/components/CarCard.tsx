'use client'

import {
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Badge,
  Flex,
  Divider,
  HStack,
  Icon,
} from '@chakra-ui/react'
import { Car } from '@/types/car'

interface CarCardProps {
  car: Car
}

export default function CarCard({ car }: CarCardProps) {

  return (
    <Card maxW="sm" borderRadius="lg" overflow="hidden" shadow="lg" transition="all 0.3s" _hover={{ transform: 'translateY(-4px)', shadow: 'xl' }}>
      <Box position="relative">
        <Image
          src={car.image}
          alt={`${car.make} ${car.model}`}
          height="200px"
          width="100%"
          objectFit="cover"
        />
        <Badge
          position="absolute"
          top="2"
          right="2"
          colorScheme="blue"
          variant="solid"
          borderRadius="md"
        >
          {car.year}
        </Badge>
        <Badge
          position="absolute"
          top="2"
          left="2"
          colorScheme="green"
          variant="solid"
          borderRadius="md"
          fontSize="xs"
        >
          {car.plateNumber}
        </Badge>
      </Box>
      
      <CardBody>
        <Stack spacing="3">
          <Heading size="md" color="gray.700">
            {car.make} {car.model}
          </Heading>
          
          {car.description && (
            <Text color="gray.600" fontSize="sm" noOfLines={2}>
              {car.description}
            </Text>
          )}
          
          <Divider />
          
          <Stack spacing="2">
            <Box>
              <Text fontSize="sm" fontWeight="semibold" color="gray.700">
                Owner
              </Text>
              <Text fontSize="sm" color="gray.600">
                {car.ownerName}
              </Text>
            </Box>
            
            <Box>
              <Text fontSize="sm" fontWeight="semibold" color="gray.700">
                Phone
              </Text>
              <Text fontSize="sm" color="gray.600">
                {car.phoneNumber}
              </Text>
            </Box>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  )
}
