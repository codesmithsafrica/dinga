'use client'

import {
  Box,
  Container,
  Text,
  Flex,
} from '@chakra-ui/react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Box
      bg="gray.50"
      borderTop="1px"
      borderColor="gray.200"
      mt={12}
      py={8}
    >
      <Container maxW="7xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <Text color="gray.600" fontSize="sm">
            © {currentYear} Dinga. All rights reserved.
          </Text>
          <Text color="gray.500" fontSize="sm">
            Car owner location service
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}
