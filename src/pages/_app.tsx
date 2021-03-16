import { ChakraProvider } from '@chakra-ui/react'
import Router from 'next/router';

import { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import theme from '../theme'
import NProgress from "nprogress"
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: true });

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
