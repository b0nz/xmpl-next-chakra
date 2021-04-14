import { FC } from 'react'
import { chakra, Box, Flex, Text, Grid } from '@chakra-ui/react'
import dayjs from 'dayjs'
import Link from 'next/link'

interface EventCardProps {
  title?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  slug?: string;
}

export const EventCard: FC<EventCardProps> = ({
  title,
  startDate,
  endDate,
  description,
  slug,
}) => {
  const date = dayjs(startDate);
  return (
    <Link href={`/agenda/${date.format('YYYY')}/${date.format('MM')}/${date.format('DD')}/${slug}`}>
      <a>
        <Flex
          bg="white"
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          flexDirection={['column', 'column', 'row']}
          p={4}
          _hover={{opacity: 0.8}}
        >
          {startDate !== endDate ? (
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
                    {dayjs(startDate).format('D')}
                  </Text>
                  <Text color="white" fontWeight="600" fontSize="sm">
                    {dayjs(startDate).format('MMM').toUpperCase()}
                  </Text>
                  <Text color="white" fontWeight="600" fontSize="xs">
                    {dayjs(startDate).format('YYYY').toUpperCase()}
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
                    {dayjs(endDate).format('D')}
                  </Text>
                  <Text color="white" fontWeight="600" fontSize="sm">
                    {dayjs(endDate).format('MMM').toUpperCase()}
                  </Text>
                  <Text color="white" fontWeight="600" fontSize="xs">
                    {dayjs(endDate).format('YYYY').toUpperCase()}
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
              >
                <Text color="white" fontWeight="600" fontSize="3xl">
                  {dayjs(startDate).format('D')}
                </Text>
                <Text color="white" fontWeight="600" fontSize="xl">
                  {dayjs(startDate).format('MMM YYYY').toUpperCase()}
                </Text>
              </Box>
            </Box>
          )}

          <Box flex={2} ml={[0, 0, 5]} mt={[4, 4, 0]}>
            <chakra.h1 fontSize="2xl" fontWeight="bold" color="gray.800">
              {title}
            </chakra.h1>

            <chakra.p mt={2} mb={3} fontSize="sm" color="gray.600">
              {description && description.length > 32 ? `${description.slice(0,80)}...`: description}
            </chakra.p>
          </Box>
        </Flex>
      </a>
    </Link>
  )
}
