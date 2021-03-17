import Head from 'next/head';
import { Heading } from '@chakra-ui/react';
import Header from '../../components/Header';

import { Container } from '../../components/Container'
import { Footer } from '../../components/Footer'

const Agenda = () => (
  <>
    <Head>
      <title>IKBP</title>
    </Head>
    <Header />
    <Container minH="100vh">
      <Heading>Agenda Page</Heading>
    </Container>
    <Footer />
  </>
)

export default Agenda
