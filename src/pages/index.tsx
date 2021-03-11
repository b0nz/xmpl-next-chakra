import NextLink from 'next/link'
import { Box, Flex, Image, Link } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Text } from '@chakra-ui/layout'
import { Container } from '../components/Container'

const Index = () => (
  <Container overflowX="hidden">
    <Header bg="#49469d" w="100vw" direction="column" alignItems="center" >
      <Image m="4" src="/IKBP2.png" w="225px"/>
      <Flex as="nav" w="100vw" bg="darkPurple.900" justifyContent="center" p="2">
        <NextLink href="/"><Link marginRight="4" color="white">Home</Link></NextLink>
        <NextLink href="/programs"><Link marginRight="4" color="white">Programs</Link></NextLink>
        <NextLink href="/event"><Link marginRight="4" color="white">Event</Link></NextLink>
        <NextLink href="/about"><Link color="white">About</Link></NextLink>
      </Flex>
    </Header>
    <main>
      <Box w="100vw" h="75vh" bg="gray.400"/>
      <Box w="100vw" h="75vh" bg="white"/>
    </main>
    <Footer p="5" w="100vw" bg="darkPurple.900" color="white">
      <Flex direction="column" maxW="1000px" marginX="auto">
      <Box>
        <Text fontSize={['xs', 'sm', 'md']} fontWeight="bold" >INSTITUT KRISTEN BUKIT PENGHARAPAN</Text>
        <Text fontSize={['xs', 'sm', 'md']} >Kalisoro - Tawangmangu, Karanganyar, Jawa Tengah.</Text>
        <Text fontSize={['xs', 'sm', 'md']} >Indonesia 57792.</Text>
        <Text fontSize={['xs', 'sm', 'md']} >Telp. 081246953030 | info@bukitpengharapan.ac.id</Text>
      </Box>
      <Text marginTop="10" alignSelf="center" fontSize={['xx-small', 'xs', 'sm']} >&copy; 2021  INSTITUT KRISTEN BUKIT PENGHARAPAN</Text>
      </Flex>
    </Footer>
  </Container>
)

export default Index
