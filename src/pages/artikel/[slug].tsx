import Head from 'next/head'
import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { Footer } from '../../components/Footer'
import Header from '../../components/Header'
import { Container } from '../../components/Container'
import { gql } from '@apollo/client'
import client from '../../lib/ApolloClient'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
  Flex,
  Heading,
  Text,
  Image,
  Tag,
  HStack,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import ChakraUIRenderer, { defaults } from 'chakra-ui-markdown-renderer'
import dayjs from 'dayjs'
import gfm from 'remark-gfm'

interface BeritaProps {
  article?: any
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

const Berita: FC<BeritaProps> = ({ article }) => {
  return (
    <>
      <Head>
        <title>{`${article[0].title} | IKBP`}</title>
      </Head>
      <Header />
      <Container minH="100vh">
        <Flex w="full" direction="column" justify="flex-start" mt={12}>
          <Heading as="h1" size="xl">
            {article[0].title}
          </Heading>
          <Text fontSize="sm" color="gray.500">{`${dayjs(article[0].publishedAt)
            .locale('id')
            .format('dddd, D MMMM YYYY - HH:mm')} • Humas IKBP`}</Text>
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
            <Image
              src={process.env.NEXT_PUBLIC_BASE_URL + article[0].image.url}
              rounded="md"
              mb={8}
              fallbackSrc="/blank.jpg"
            />
            <ReactMarkdown
              plugins={[gfm]}
              source={article[0].content}
              escapeHtml={false}
              renderers={ChakraUIRenderer(newTheme)}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Heading as="h3" size="md">
              Category
            </Heading>
            <HStack spacing={4} mt={3}>
              <Tag variant="solid">{article[0].category.name}</Tag>
            </HStack>
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
      query ArticlesSlug {
        articles {
          slug
        }
      }
    `,
  })

  return {
    paths: data.articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: loading,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: gql`
      query ArticlesBySlug($slug: String!) {
        articles(where: { slug: $slug }) {
          title
          publishedAt
          content
          category {
            name
          }
          image {
            url
          }
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  })

  return {
    props: {
      article: data.articles,
    },
    revalidate: 1,
  }
}

export default Berita
