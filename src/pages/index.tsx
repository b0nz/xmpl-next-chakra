import { FC } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import { Hero } from '../components/Hero/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import PMB from '../components/PMB'
import { GetStaticProps } from 'next'
import { gql } from '@apollo/client'
import client from '../lib/ApolloClient'

interface HomePageProps {
  seo?: any
  calendars?: any
  sliders?: any
  articles?: any
  loading?: boolean
}

const HomePage: FC<HomePageProps> = ({
  seo,
  calendars,
  sliders,
  articles,
  loading,
}) => {
  return (
    <>
      <Head>
        <title>Home | IKBP</title>
        {/* Primary Meta Tags */}
        <meta name="title" content={seo && seo.seo && seo.seo.metaTitle}></meta>
        <meta
          name="description"
          content={seo && seo.seo && seo.seo.metaDescription}
        ></meta>

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content="https://bukitpengharapan.ac.id/"
        ></meta>
        <meta
          property="og:title"
          content={seo && seo.seo && seo.seo.metaTitle}
        ></meta>
        <meta
          property="og:description"
          content={seo && seo.seo && seo.seo.metaDescription}
        ></meta>
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${
            seo && seo.seo && seo.seo.shareImage && seo.seo.shareImage.url
          }`}
        ></meta>

        {/* Twitter */}
        <meta
          property="twitter:card"
          content={seo && seo.seo && seo.seo.metaTitle}
        ></meta>
        <meta
          property="twitter:url"
          content="https://bukitpengharapan.ac.id/"
        ></meta>
        <meta
          property="twitter:title"
          content={seo && seo.seo && seo.seo.metaTitle}
        ></meta>
        <meta
          property="twitter:description"
          content={seo && seo.seo && seo.seo.metaDescription}
        ></meta>
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${
            seo && seo.seo && seo.seo.shareImage && seo.seo.shareImage.url
          }`}
        ></meta>
      </Head>
      <Header />
      <Hero data={sliders} loading={loading} />
      <Container minH="100vh">
        <Main calendars={calendars} articles={articles} loading={loading} />
      </Container>
      <PMB />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data, loading } = await client.query({
    query: gql`
      query HomePage {
        homepage {
          seo {
            metaTitle
            metaDescription
            shareImage {
              url
            }
          }
          hero {
            title
          }
        }
        articles(limit: 6, sort: "publishedAt:DESC") {
          title
          description
          slug
          publishedAt
          image {
            url
          }
        }
        calendars(limit: 9, sort: "published_at:DESC") {
          id
          title
          description
          startDate
          endDate
        }
        sliders {
          id
          title
          image {
            url
          }
        }
      }
    `,
  })

  return {
    props: {
      seo: data.homepage,
      calendars: data.calendars,
      sliders: data.sliders,
      articles: data.articles,
      loading,
    },
    revalidate: 1,
  }
}

export default HomePage
