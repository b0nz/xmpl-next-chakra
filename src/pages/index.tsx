import Head from 'next/head';
import Header from '../components/Header';

import { Hero } from '../components/Hero/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'


const Index = () => (
  <>
    <Head>
      <title>Bukit Pengharapan</title>
    </Head>
    <Header />
    <Container minH="100vh">
      <Hero />
      <Main />
    </Container>
  </>
)

export default Index
