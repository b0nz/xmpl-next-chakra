import { FC, useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import theme from '../theme'
import 'dayjs/locale/id'
import 'nprogress/nprogress.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import * as gtag from '../lib/gtag'

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`,
  cache: new InMemoryCache(),
})

NProgress.configure({ showSpinner: true })

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const Fonts = () => (
  <Global
    styles={`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap');

      body {
        background-color: #F7FAFC;
      }
    `}
  />
)

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ApolloProvider client={client}>
      <ChakraProvider resetCSS theme={theme}>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
