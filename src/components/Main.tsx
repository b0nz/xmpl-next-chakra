import { Stack, Flex, Text, Link, Grid } from '@chakra-ui/react'
import { NewsCard } from './NewsCard/NewsCard'
import { EventCard } from './EventCard/EventCard'

export const Main = () => {
  return (
    <Stack direction="column" spacing={10} p="10">
      <Flex w="full" direction="column" >
        <Flex justify="space-between" align="center" marginBottom="3">
          <Text fontSize={['md', 'lg']} fontWeight="bold" >IKBP News</Text>
          <Link color="darkPurple.900" href="#">
            View All
          </Link>
        </Flex>
        <Stack direction={["column", "row"]}>
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </Stack>
      </Flex>
      <Flex w="full" direction="column" >
        <Flex justify="space-between" align="center" marginBottom="3">
          <Text fontSize={['md', 'lg']} fontWeight="bold" >Event</Text>
          <Link color="darkPurple.900" href="#">
            View All
          </Link>
        </Flex>
        <Grid templateColumns={["1fr", "repeat(2, 1fr)"]} gap={3}>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </Grid>
      </Flex>
    </Stack>
  )
}
