import { FC } from 'react'
import Head from 'next/head'
import { Heading } from '@chakra-ui/react'
import Header from '../../components/Header'

import { Container } from '../../components/Container'
import { Footer } from '../../components/Footer'

const Agenda: FC = () => (
  <>
    <Head>
      <title>IKBP</title>
    </Head>
    <Header />
    <Container minH="100vh">
      <Heading>Agenda</Heading>
    </Container>
    <Footer />
  </>
)

export default Agenda