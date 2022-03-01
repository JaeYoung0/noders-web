//  _document -> only rendered on the server
// client side render styles ~ server side render styles 일치여부 체크
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { extractCritical } from '@emotion/server'

export default class MyDocument extends Document<{ css: string; ids: unknown[] }> {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const page = await ctx.renderPage()
    const styles = extractCritical(page.html)
    return { ...initialProps, ...page, ...styles }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
