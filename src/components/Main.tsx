import { FC } from 'react'
import { Stack, Flex, Text, Link, Grid } from '@chakra-ui/react'
import { NewsCard } from './Card/NewsCard'
import { EventCard } from './Card/EventCard'
import { useQuery } from '@apollo/client'
import QUERY_ARTICLES from '../schema/queryArticlesLimit3.graphql'

export const Main: FC = () => {
  const { data, loading } = useQuery(QUERY_ARTICLES)

  return (
    <Stack direction="column" spacing={10} py={10}>
      <Flex w="full" direction="column">
        <Flex justify="space-between" align="center" marginBottom="3">
          <Text fontSize={['md', 'lg']} fontWeight="bold">
            Berita Terbaru
          </Text>
          <Link color="darkPurple.900" href="/berita">
            View All
          </Link>
        </Flex>
        {loading ? (
          <Grid gap={15} templateColumns={{ md: 'repeat(3, 1fr)' }}>
            <NewsCard loading={loading} />
            <NewsCard loading={loading} />
            <NewsCard loading={loading} />
          </Grid>
        ) : (
          <Grid gap={15} templateColumns={{ md: 'repeat(3, 1fr)' }}>
            {data &&
              data.articles &&
              data.articles.map((article) => (
                <NewsCard
                  key={article.slug}
                  title={article.title}
                  image={article.image.url}
                  description={article.description}
                  slug={article.slug}
                />
              ))}
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
        <Grid templateColumns={['1fr', 'repeat(2, 1fr)']} gap={15}>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </Grid>
      </Flex>
    </Stack>
  )
}
