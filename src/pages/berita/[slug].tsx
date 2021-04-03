import Head from 'next/head'
import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { Footer } from '../../components/Footer'
import Header from '../../components/Header'
import { Container } from '../../components/Container'
import { gql } from '@apollo/client'
import client from '../../lib/ApolloClient'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Flex, Heading, Text } from '@chakra-ui/layout'
import ChakraUIRenderer, { defaults } from 'chakra-ui-markdown-renderer'
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
        <title>Berita | IKBP</title>
      </Head>
      <Header />
      {/* <Hero /> */}
      <div
        style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
            process.env.NEXT_PUBLIC_BASE_URL + article[0].image.url
          })`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: 400,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        <Heading as="h1" size="3xl" color="white" isTruncated>
          {article[0].title}
        </Heading>
      </div>
      <Container minH="100vh">
        <Flex w="full" direction="column" justify="start" mb={3} mt={8}>
          <div>
            <ReactMarkdown
              plugins={[gfm]}
              source={article[0].content}
              escapeHtml={false}
              renderers={ChakraUIRenderer(newTheme)}
            />
          </div>
        </Flex>
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
