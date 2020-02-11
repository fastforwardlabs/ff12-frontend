import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    let title = 'Blip'
    let description =
      'Blip visualizes how four different anomaly detection algorithms perform at detecting network attacks. It is built to accompany the Cloudera Fast Forward report on Deep Learning for Anomaly Detection.'
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta
            property="og:image"
            content="https://blip.fastforwardlabs.com/blip-share.png"
          />
          <meta property="og:url" content="https://blip.fastforwardlabs.com" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-140718127-3"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-140718127-3');`}
        </script>
      </Html>
    )
  }
}

export default MyDocument
