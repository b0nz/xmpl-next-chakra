import { FC } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import { Hero } from '../components/Hero/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import PMB from '../components/PMB'

const Index: FC = () => (
  <>
    <Head>
      <title>Home | IKBP</title>
    </Head>
    <Header />
    <Hero />
    <Container minH="100vh">
      <Main />
    </Container>
    <PMB />
    <Footer />
  </>
)

export default Index
