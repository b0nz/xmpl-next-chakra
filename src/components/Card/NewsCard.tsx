import { FC } from 'react'
import { chakra, Box, Image, useColorModeValue, Link } from '@chakra-ui/react'

export const NewsCard: FC = () => {
  return (
    <Box
      mx="auto"
      rounded="lg"
      shadow="md"
      bg={useColorModeValue('white', 'gray.800')}
      maxW="2xl"
    >
      <Image
        roundedTop="lg"
        w="full"
        h={64}
        fit="cover"
        src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Article"
      />

      <Box p={6}>
        <Box mb={4}>
          <Link
            display="block"
            color={useColorModeValue('gray.800', 'white')}
            fontWeight="bold"
            fontSize="2xl"
            mt={2}
            _hover={{ color: 'gray.600', textDecor: 'underline' }}
            href="#"
          >
            Fox jumps over the lazy dog
          </Link>
          <chakra.p
            mt={2}
            fontSize="sm"
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
            parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
            egestas quam volutpat viverra. In pretium nec senectus erat. Et
            malesuada lobortis.
          </chakra.p>
        </Box>
      </Box>
    </Box>
  )
}
