import Head from 'next/head'
import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { Footer } from '../../../../../components/Footer'
import Header from '../../../../../components/Header'
import { Container } from '../../../../../components/Container'
import { gql } from '@apollo/client'
import client from '../../../../../lib/ApolloClient'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Flex, Heading, Text, Grid, GridItem, Box } from '@chakra-ui/react'
import ChakraUIRenderer, { defaults } from 'chakra-ui-markdown-renderer'
import dayjs from 'dayjs'
import gfm from 'remark-gfm'

interface AgendaProps {
  calendar?: any
}

const newTheme = {
  ...defaults,
  paragraph: (props) => {
    const { children } = props
    return (
      <Text mb={2} fontSize={'16px'}>
        {children}
      </Text>
    )
  },
}

const Agenda: FC<AgendaProps> = ({ calendar }) => {
  return (
    <>
      <Head>
        <title>{`${calendar[0].title} | IKBP`}</title>
      </Head>
      <Header />
      <Container minH="100vh">
        <Flex
          w="full"
          direction={['column', 'row']}
          justify="flex-start"
          align="center"
          mt={12}
        >
          <Box>
            {calendar[0].startDate !== calendar[0].endDate ? (
              <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                <Box flex={1}>
                  <Box
                    h="full"
                    d="flex"
                    borderRadius="md"
                    flexDirection="column"
                    bgGradient="linear(to-b, lightPurple.900, darkPurple.900)"
                    justifyContent="center"
                    alignItems="center"
                    py={3}
                    px={5}
                  >
                    <Text color="white" fontWeight="600" fontSize="xl">
                      {dayjs(calendar[0].startDate).format('D')}
                    </Text>
                    <Text color="white" fontWeight="600" fontSize="sm">
                      {dayjs(calendar[0].startDate).format('MMM').toUpperCase()}
                    </Text>
                    <Text color="white" fontWeight="600" fontSize="xs">
                      {dayjs(calendar[0].startDate)
                        .format('YYYY')
                        .toUpperCase()}
                    </Text>
                  </Box>
                </Box>
                <Box flex={1}>
                  <Box
                    h="full"
                    d="flex"
                    borderRadius="md"
                    flexDirection="column"
                    bgGradient="linear(to-b, lightPurple.900, darkPurple.900)"
                    justifyContent="center"
                    alignItems="center"
                    py={3}
                    px={5}
                  >
                    <Text color="white" fontWeight="600" fontSize="xl">
                      {dayjs(calendar[0].endDate).format('D')}
                    </Text>
                    <Text color="white" fontWeight="600" fontSize="sm">
                      {dayjs(calendar[0].endDate).format('MMM').toUpperCase()}
                    </Text>
                    <Text color="white" fontWeight="600" fontSize="xs">
                      {dayjs(calendar[0].endDate).format('YYYY').toUpperCase()}
                    </Text>
                  </Box>
                </Box>
              </Grid>
            ) : (
              <Box flex={1}>
                <Box
                  h="full"
                  d="flex"
                  borderRadius="md"
                  flexDirection="column"
                  bgGradient="linear(to-b, lightPurple.900, darkPurple.900)"
                  justifyContent="center"
                  alignItems="center"
                  py={3}
                  px={2}
                >
                  <Text color="white" fontWeight="600" fontSize="3xl">
                    {dayjs(calendar[0].startDate).format('D')}
                  </Text>
                  <Text color="white" fontWeight="600" fontSize="xl">
                    {dayjs(calendar[0].startDate)
                      .format('MMM YYYY')
                      .toUpperCase()}
                  </Text>
                </Box>
              </Box>
            )}
          </Box>
          <Box flex={2} ml={7} mt={[5, 0]}>
            <Heading as="h1" size="xl">
              {calendar[0].title}
            </Heading>
          </Box>
        </Flex>
        <Grid
          mb={3}
          mt={10}
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(4, 1fr)',
          ]}
          gap={12}
        >
          <GridItem colSpan={[1, 1, 3]}>
            <ReactMarkdown
              plugins={[gfm]}
              source={calendar[0].content}
              escapeHtml={false}
              renderers={ChakraUIRenderer(newTheme)}
            />
          </GridItem>
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data, loading } = await client.query({
    query: gql`
      query CalendarSlug {
        calendars {
          startDate
          slug
        }
      }
    `,
  })

  return {
    paths: data.calendars.map((calendar) => ({
      params: {
        year: dayjs(calendar.startDate).format('YYYY'),
        month: dayjs(calendar.startDate).format('MM'),
        day: dayjs(calendar.startDate).format('DD'),
        slug: calendar.slug,
      },
    })),
    fallback: loading,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: gql`
      query CalendarBySlug($date: String!, $slug: String!) {
        calendars(where: { slug: $slug, startDate: $date }) {
          title
          description
          startDate
          endDate
          slug
          content
        }
      }
    `,
    variables: {
      date: `${params.year}-${params.month}-${params.day}`,
      slug: params.slug,
    },
  })

  return {
    props: {
      calendar: data.calendars,
    },
    revalidate: 1,
  }
}

export default Agenda
