import { FC } from 'react'
import Head from 'next/head'
import { Text } from '@chakra-ui/react'
import Header from '../../components/Header'
import { Container } from '../../components/Container'
import { Footer } from '../../components/Footer'

const InternasionalBussiness: FC = () => {
  return (
    <>
      <Head>
        <title>Internasional Bussiness | IKBP</title>
      </Head>
      <Header />
      <Container minH="100vh">
        <Text>Internasional Bussiness</Text>
      </Container>
      <Footer />
    </>
  )
}

export default InternasionalBussiness
