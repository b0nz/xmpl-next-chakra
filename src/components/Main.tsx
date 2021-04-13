import { FC } from 'react'
import { Stack, Flex, Text, Link, Grid } from '@chakra-ui/react'
import ArticleCard from './Card/ArticleCard'
import { EventCard } from './Card/EventCard'
import dayjs from 'dayjs'

interface MainProps {
  calendars?: any
  articles?: any
  loading?: boolean
}

export const Main: FC<MainProps> = ({ calendars, articles, loading }) => {
  const calendarFilter =
    calendars && calendars.filter((f) => dayjs().isBefore(f.startDate))

  return (
    <Stack direction="column" spacing={10} py={10}>
      <Flex w="full" direction="column">
        <Flex justify="space-between" align="center" marginBottom="3">
          <Text fontSize={['md', 'lg']} fontWeight="bold">
            Artikel Terbaru
          </Text>
          <Link color="darkPurple.900" href="/artikel">
            View All
          </Link>
        </Flex>
        {loading ? (
          <Grid gap={6} templateColumns={{ md: 'repeat(3, 1fr)' }}>
            <ArticleCard loading={loading} />
            <ArticleCard loading={loading} />
            <ArticleCard loading={loading} />
          </Grid>
        ) : (
          <Grid gap={6} templateColumns={{ md: 'repeat(3, 1fr)' }}>
            {articles ? (
              articles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  title={article.title}
                  image={article.image.url}
                  description={article.description}
                  slug={article.slug}
                />
              ))
            ) : (
              <div>no data</div>
            )}
          </Grid>
        )}
      </Flex>
      <Flex w="full" direction="column">
        <Flex justify="space-between" align="center" marginBottom="3">
          <Text fontSize={['md', 'lg']} fontWeight="bold">
            Agenda
          </Text>
          <Link color="darkPurple.900" href="#">
            View All
          </Link>
        </Flex>
        <Grid templateColumns={['1fr', 'repeat(2, 1fr)']} gap={6}>
          {loading ? (
            <div>loading</div>
          ) : (
            <>
              {calendarFilter ? (
                calendarFilter.map((calendar) => (
                  <EventCard
                    key={calendar.id}
                    title={calendar.title}
                    startDate={calendar.startDate}
                    endDate={calendar.endDate}
                    description={calendar.description}
                  />
                ))
              ) : (
                <div>noData</div>
              )}
            </>
          )}
        </Grid>
      </Flex>
    </Stack>
  )
}
