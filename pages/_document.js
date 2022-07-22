import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="min-h-screen bg-gray-100 dark:bg-gray-800 transition-colors">
          <main className="container mx-auto">
            <Main/>
            <NextScript />
          </main>
        </body>
      </Html>
    )
  }
}

export default MyDocument