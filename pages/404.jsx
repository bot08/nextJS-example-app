import Head from 'next/head'
import Link from 'next/link'

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 - Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200 my-2">
          404
      </h1>
      <Link href="/">
        <a className="text-xl font-bold text-green-700 dark:text-green-200 my-2">To home</a>
      </Link>
    </>
  )
}

export default NotFound