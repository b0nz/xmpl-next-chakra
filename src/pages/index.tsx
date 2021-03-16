import Head from 'next/head';
import Header from '../components/Header';

import { Hero } from '../components/Hero/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'


const Index = () => (
  <>
    <Head>
      <title>Bukit Pengharapan</title>
    </Head>
    <Header />
    <Hero />
    <Container minH="100vh">
      <Main />
    </Container>
    <Footer />
  </>
)

export default Index
