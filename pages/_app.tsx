import type { AppProps } from 'next/app'
import Head from 'next/head'
import '@/styles/reset.css'
import GlobalFont from '@/styles/GlobalFont'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NODERS</title>
      </Head>
      <GlobalFont />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
