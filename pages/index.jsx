import Head from 'next/head'
import Link from 'next/link'
import { useState } from "react";

const Home = () => {
  const [counter, setCount] = useState(0)

  return (
    <>
      <Head>
        <title>NextJS example</title>
      </Head>
      <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200 my-2">
        Hello world <br/>
        This is NextJS
      </h1>
      <Link href="/about">
        <a className="text-xl font-bold text-green-700 dark:text-green-200 my-2">About page</a>
      </Link>
      <br/>
      <Link href="/fetch">
        <a className="text-xl font-bold text-green-700 dark:text-green-200 my-2">API fetch page</a>
      </Link>
      <hr className="my-2 border-gray-300 dark:border-gray-500"/>
      <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200 my-2">
        { counter }
      </h1>
      <button onClick={() => setCount(counter + 1)} className="items-center m-2 text-center px-7 py-1 shadow-lg text-base font-medium text-white transition ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none">count ++</button>
    </>
  )
}

export default Home
