import React from 'react'
import { chakra, Box, Flex, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

export const Footer = () => {
  return (
    <chakra.footer bg="darkPurple.900" left="0" right="0" bottom="0" width="full">
      <Flex direction="column" maxW="1110px" mx="auto" py="5" px={{ base: 5, md: 0 }} color="white">
      <Flex direction={["column", "row"]} justifyContent="space-between">
        <Box>
          <Text fontSize={['xs', 'sm']} fontWeight="bold" >INSTITUT KRISTEN BUKIT PENGHARAPAN</Text>
          <Text fontSize={['xx-small', 'xs']} >Kalisoro - Tawangmangu, Karanganyar, Jawa Tengah.</Text>
          <Text fontSize={['xx-small', 'xs']} >Indonesia 57792.</Text>
          <Text fontSize={['xx-small', 'xs']} >Telp. 081246953030 | info@bukitpengharapan.ac.id</Text>
        </Box>
        <Flex direction="column" marginTop={["5", "0"]} >
          <Wrap justify={["flex-start", "flex-end"]}>
            <WrapItem><a href="https://www.twitter.com"><FaTwitter /></a></WrapItem>
            <WrapItem><a href="https://www.facebook.com"><FaFacebookF /></a></WrapItem>
            <WrapItem><a href="https://www.instagram.com"><FaInstagram /></a></WrapItem>
          </Wrap>
          <Wrap marginTop="2">
            <WrapItem fontSize={['xx-small', 'sm']} >FaQ</WrapItem>
            <WrapItem fontSize={['xx-small', 'sm']} >|</WrapItem>
            <WrapItem fontSize={['xx-small', 'sm']} >Career</WrapItem>
            <WrapItem fontSize={['xx-small', 'sm']} >|</WrapItem>
            <WrapItem fontSize={['xx-small', 'sm']} >Contact</WrapItem>
          </Wrap>
        </Flex>
      </Flex>
      <Text marginTop="10" alignSelf="center" fontSize={['xx-small', 'xs']} >&copy; 2021  INSTITUT KRISTEN BUKIT PENGHARAPAN</Text>
      </Flex>
    </chakra.footer>
  )
}
