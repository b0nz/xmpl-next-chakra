import React from 'react'
import { chakra, Box, Flex, Text } from '@chakra-ui/react'

export const Footer = () => {

  return (
    <chakra.footer bg="darkPurple.900" left="0" right="0" bottom="0" width="full">
      <Flex direction="column" maxW="1000px" marginX="auto" p="5" color="white">
      <Flex direction={["column", "row"]} justifyContent="space-between">
        <Box>
          <Text fontSize={['xs', 'sm', 'md']} fontWeight="bold" >INSTITUT KRISTEN BUKIT PENGHARAPAN</Text>
          <Text fontSize={['xs', 'sm', 'md']} >Kalisoro - Tawangmangu, Karanganyar, Jawa Tengah.</Text>
          <Text fontSize={['xs', 'sm', 'md']} >Indonesia 57792.</Text>
          <Text fontSize={['xs', 'sm', 'md']} >Telp. 081246953030 | info@bukitpengharapan.ac.id</Text>
        </Box>
        <Flex>
          <Text fontSize={['xs', 'sm', 'md']} >Faq</Text>
          <Text fontSize={['xs', 'sm', 'md']} marginX="2" >Career</Text>
          <Text fontSize={['xs', 'sm', 'md']} >Contact</Text>
        </Flex>
      </Flex>
      <Text marginTop="10" alignSelf="center" fontSize={['xx-small', 'xs', 'sm']} >&copy; 2021  INSTITUT KRISTEN BUKIT PENGHARAPAN</Text>
      </Flex>
    </chakra.footer>
  )
}
