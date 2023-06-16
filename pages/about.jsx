import Head from 'next/head'
import Link from 'next/link'


const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200 my-2">
        About page
      </h1>
      <Link href="/" className="text-xl font-bold text-green-700 dark:text-green-200 my-2">
        Index page
      </Link>
      <a target="_blank" href="https://github.com/bot08/nextJS-example-app" className="block text-xl font-bold text-green-700 dark:text-green-200 my-2">
        Github
      </a>
    </>
  )
}

export default About
