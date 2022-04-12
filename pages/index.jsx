import Head from 'next/head'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <Head>
        <title>NextJS example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200 my-2">
        Hello world <br/>
        This is NextJS
      </h1>
      <Link href="/about" class="text-xl font-bold text-green-700 dark:text-green-200 my-2">
        <a className="text-xl font-bold text-green-700 dark:text-green-200 my-2">About page</a>
      </Link>
      <hr className="my-2 border-gray-300 dark:border-gray-500"/>
      <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200 my-2">
        123
      </h1>
    </>
  )
}

export default Home
