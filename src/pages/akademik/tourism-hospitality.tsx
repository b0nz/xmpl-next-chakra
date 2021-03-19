import Head from 'next/head'
import {Text} from '@chakra-ui/react'
import Header from '../../components/Header'
import { Container } from '../../components/Container'
import { Footer } from '../../components/Footer'

export default function TourismHospitality() {
  return (
    <>
      <Head>
        <title>Tourism & Hospitality | IKBP</title>
      </Head>
      <Header />
      <Container minH="100vh">
        <Text>Tourism & Hospitality</Text>
      </Container>
      <Footer />
    </>
  )
}