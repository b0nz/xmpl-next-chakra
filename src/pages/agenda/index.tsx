import Head from 'next/head'
import { FC } from 'react'
import { Footer } from '../../components/Footer'
import Header from '../../components/Header'
import { Container } from '../../components/Container'
import { Flex, Grid, Text } from '@chakra-ui/layout'
import ArticleCard from '../../components/Card/ArticleCard'
import { gql } from '@apollo/client'
import client from '../../lib/ApolloClient'
import { GetStaticProps } from 'next'
import dayjs from 'dayjs'
import { EventCard } from '../../components/Card/EventCard'

interface AgendaProps {
  calendars?: any
  loading?: boolean
}

const Agenda: FC<AgendaProps> = ({ calendars, loading }) => {
  const calendarFilter =
    calendars && calendars.filter((f) => dayjs().isBefore(f.startDate))
  
  return (
    <>
      <Head>
        <title>Agenda | IKBP</title>
      </Head>
      <Header />
      <Container minH="100vh">
        <Flex w="full" direction="column" justify="start" mb={3} mt={5}>
          <Text fontSize={['md', 'lg']} fontWeight="bold">
            Agenda
          </Text>
        </Flex>
        {loading ? (
          <Flex justify="center" align="center">
            <Text>loading...</Text>
          </Flex>
        ) : (
          <Grid gap={6} templateColumns="repeat(2, 1fr)">
            {calendarFilter ? (
                calendarFilter.map((calendar) => (
                  <EventCard
                    key={calendar.id}
                    title={calendar.title}
                    startDate={calendar.startDate}
                    endDate={calendar.endDate}
                    description={calendar.description}
                    slug={calendar.slug}
                  />
                ))
              ) : (
                <Flex justify="center" align="center">
                  <Text>-</Text>
                </Flex>
              )}
          </Grid>
        )}
      </Container>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data, loading } = await client.query({
    query: gql`
      query Agenda {
        calendars(sort: "endDate:ASC") {
          id
          title
          description
          startDate
          endDate
          slug
        }
      }
    `,
  })

  return {
    props: {
      calendars: data.calendars,
      loading,
    },
    revalidate: 1,
  }
}

export default Agenda
