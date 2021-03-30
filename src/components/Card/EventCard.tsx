import { FC } from 'react'
import { chakra, Box, Flex, useColorModeValue } from '@chakra-ui/react'

export const EventCard: FC = () => {
  return (
    <Flex
      bg={useColorModeValue('white', 'gray.800')}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
    >
      <Box
        w={1 / 3}
        bgSize="cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')",
        }}
      ></Box>

      <Box w={2 / 3} p={{ base: 4, md: 4 }}>
        <chakra.h1
          fontSize="2xl"
          fontWeight="bold"
          color={useColorModeValue('gray.800', 'white')}
        >
          Fox jumps over the lazy dog
        </chakra.h1>

        <chakra.p
          mt={2}
          mb={3}
          fontSize="sm"
          color={useColorModeValue('gray.600', 'gray.400')}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
        </chakra.p>
      </Box>
    </Flex>
  )
}
