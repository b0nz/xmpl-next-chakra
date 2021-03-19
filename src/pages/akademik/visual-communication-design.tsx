import Head from 'next/head'
import {Text} from '@chakra-ui/react'
import Header from '../../components/Header'
import { Container } from '../../components/Container'
import { Footer } from '../../components/Footer'

export default function VisualComunicationDesign() {
  return (
    <>
      <Head>
        <title>Visual Communication Design | IKBP</title>
      </Head>
      <Header />
      <Container minH="100vh">
        <Text>Visual Communication Design</Text>
      </Container>
      <Footer />
    </>
  )
}