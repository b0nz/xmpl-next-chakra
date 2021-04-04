import Head from 'next/head'
import { FC } from 'react'
import { Footer } from '../../components/Footer'
import Header from '../../components/Header'
import { Container } from '../../components/Container'
// import { Hero } from "../../components/Hero/Hero";
import { Flex, Grid, Text } from '@chakra-ui/layout'
import { NewsCard } from '../../components/Card/NewsCard'
import { useQuery } from '@apollo/client'
import QUERY_ARTICLES from '../../schema/queryArticles.graphql'

const Berita: FC = () => {
  const { data, loading } = useQuery(QUERY_ARTICLES)
  return (
    <>
      <Head>
        <title>Berita | IKBP</title>
      </Head>
      <Header />
      {/* <Hero /> */}
      <Container minH="100vh">
        <Flex w="full" direction="column" justify="start" mb={3} mt={5}>
          <Text fontSize={['md', 'lg']} fontWeight="bold">
            Berita Terbaru
          </Text>
        </Flex>
        {loading ? (
          <Grid gap={6} templateColumns={{ md: 'repeat(3, 1fr)' }}>
            <NewsCard loading={loading} />
            <NewsCard loading={loading} />
            <NewsCard loading={loading} />
          </Grid>
        ) : (
          <Grid gap={6} templateColumns={{ md: 'repeat(3, 1fr)' }}>
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
      </Container>
      <Footer />
    </>
  )
}

export default Berita
