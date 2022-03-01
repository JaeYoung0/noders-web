import '../styles/global.css'
import type { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>noders</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
