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

interface ArtikelProps {
  articles?: any
  loading?: boolean
}

const Artikel: FC<ArtikelProps> = ({ articles, loading }) => {
  return (
    <>
      <Head>
        <title>Artikel | IKBP</title>
      </Head>
      <Header />
      <Container minH="100vh">
        <Flex w="full" direction="column" justify="start" mb={3} mt={5}>
          <Text fontSize={['md', 'lg']} fontWeight="bold">
            Artikel Terbaru
          </Text>
        </Flex>
        {loading ? (
          <Grid gap={6} templateColumns={{ md: 'repeat(3, 1fr)' }}>
            <ArticleCard loading={loading} />
            <ArticleCard loading={loading} />
            <ArticleCard loading={loading} />
          </Grid>
        ) : (
          <Grid gap={6} templateColumns={{ md: 'repeat(3, 1fr)' }}>
            {articles &&
              articles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  title={article.title}
                  image={article.image.url}
                  description={article.description}
                  slug={article.slug}
                />
              ))}
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
      query Artikel {
        articles(sort: "publishedAt:DESC") {
          title
          description
          slug
          publishedAt
          image {
            url
          }
        }
      }
    `,
  })

  return {
    props: {
      articles: data.articles,
      loading,
    },
    revalidate: 1,
  }
}

export default Artikel
