import { FC } from 'react'
import {
  chakra,
  Box,
  Image,
  useColorModeValue,
  Skeleton,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'


interface ArticleCardProps {
  title?: string
  image?: string
  slug?: string
  description?: string
  loading?: boolean
}

const ArticleCard: FC<ArticleCardProps> = ({
  title,
  image = '/',
  slug = '',
  description,
  loading = false,
}) => {
  return (
    <Link href={`/artikel/${slug}`}>
      <a>
        <Box
          h="full"
          mx="auto"
          rounded="lg"
          shadow="md"
          bg={useColorModeValue('white', 'gray.800')}
          maxW="2xl"
          _hover={{opacity: 0.8}}
        >
            <Image
              roundedTop="lg"
              w="full"
              h={64}
              fit="cover"
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${image}`}
              alt={`${process.env.NEXT_PUBLIC_BASE_URL}${title}`}
              fallbackSrc="/blank.jpg"
            />
            <Box p={6}>
              <Box mb={4}>
                <Skeleton isLoaded={!loading}>
                  <Text display="block"
                    color="gray.800"
                    fontWeight="bold"
                    fontSize="2xl"
                    mt={2}
                  >
                    {title}
                  </Text>
                </Skeleton>

                <Skeleton isLoaded={!loading}>
                  <chakra.p
                    mt={2}
                    fontSize="sm"
                    color="gray.600"
                  >
                    {description}
                  </chakra.p>
                </Skeleton>
              </Box>
            </Box>
        </Box>
      </a>
    </Link>
  )
}

export default ArticleCard
