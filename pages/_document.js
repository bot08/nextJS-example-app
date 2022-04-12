import Document, { Html, Head, Main, NextScript } from 'next/document'
import SelectTheme from '../components/SelectTheme.jsx'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="">
        <Head>
          
        </Head>
        <body className="min-h-screen bg-gray-100 dark:bg-gray-800 transition-colors">
          <main className="container mx-auto">
            <SelectTheme/>
            <Main/>
            <NextScript />
          </main>
        </body>
      </Html>
    )
  }
}

export default MyDocument