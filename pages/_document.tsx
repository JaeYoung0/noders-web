//  _document -> only rendered on the server
// client side render styles ~ server side render styles 일치여부 체크
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { extractCritical } from '@emotion/server'
import Meta from '@/components/Meta'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    const critical = extractCritical(initialProps.html)
    initialProps.html = critical.html
    initialProps.styles = (
      <>
        {initialProps.styles}
        <style
          data-emotion-css={critical.ids.join(' ')}
          dangerouslySetInnerHTML={{ __html: critical.css }}
        />
      </>
    )

    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <Meta />
          <link rel="icon" href="favicon.ico" />
          <link rel="preload" href="/fonts/SUIT-Bold.woff2" as="font" />
          <link rel="preload" href="/fonts/SUIT-Regular.woff2" as="font" />
          <link href="/fonts.css" rel="stylesheet" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
