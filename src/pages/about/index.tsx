import Head from 'next/head';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Header from '../../components/Header';

import { Container } from '../../components/Container'
import { Footer } from '../../components/Footer'

const About = () => (
  <>
    <Head>
      <title>About | IKBP</title>
    </Head>
    <Header />
    <Container minH="100vh">
      <Stack py={10} spacing={10}>
        <Box>
          <Stack spacing={3}>
            <Heading>Vision</Heading>
            <Text>"Being a higher educational institution which creates scientists to become leaders having a holistic capability and character based on Christian values"</Text>
          </Stack>
        </Box>
        <Box>
          <Stack spacing={3}>
            <Heading>Mission</Heading>
            <Box px={5}>
              <ul>
                <li>To organise academic activities on the higher educational level.</li>
                <li>To carry out the Tridharma Perguruan Tinggi (Three pillars of Higher Education comprising Education, Research and Community Service).</li>
                <li>To provide scholars who have competence and character that are prepared to enter the workforce.</li>
              </ul>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
    <Footer />
  </>
)

export default About
