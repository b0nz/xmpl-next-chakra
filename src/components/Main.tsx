import { Stack, Flex, Text, Link, Grid } from '@chakra-ui/react'
import { NewsCard } from './NewsCard/NewsCard'
import { EventCard } from './EventCard/EventCard'

export const Main = () => {
  return (
    <Stack direction="column" spacing={10} py={10}>
      <Flex w="full" direction="column" >
        <Flex justify="space-between" align="center" marginBottom="3">
          <Text fontSize={['md', 'lg']} fontWeight="bold">IKBP News</Text>
          <Link color="darkPurple.900" href="#">
            View All
          </Link>
        </Flex>
        <Grid gap={15} templateColumns={{md: "repeat(3, 1fr)"}}>
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </Grid>
      </Flex>
      <Flex w="full" direction="column" >
        <Flex justify="space-between" align="center" marginBottom="3">
          <Text fontSize={['md', 'lg']} fontWeight="bold" >Event</Text>
          <Link color="darkPurple.900" href="#">
            View All
          </Link>
        </Flex>
        <Grid templateColumns={["1fr", "repeat(2, 1fr)"]} gap={15}>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </Grid>
      </Flex>
    </Stack>
  )
}
