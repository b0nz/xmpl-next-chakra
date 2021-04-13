import { FC } from 'react'
import {
  chakra,
  Box,
  Image,
  useColorModeValue,
  Link,
  Skeleton,
} from '@chakra-ui/react'

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
    <Box
      mx="auto"
      rounded="lg"
      shadow="md"
      bg={useColorModeValue('white', 'gray.800')}
      maxW="2xl"
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
            <Link
              display="block"
              color={useColorModeValue('gray.800', 'white')}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: 'gray.600', textDecor: 'underline' }}
              href={`/artikel/${slug}`}
            >
              {title}
            </Link>
          </Skeleton>

          <Skeleton isLoaded={!loading}>
            <chakra.p
              mt={2}
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              {description}
            </chakra.p>
          </Skeleton>
        </Box>
      </Box>
    </Box>
  )
}

export default ArticleCard
