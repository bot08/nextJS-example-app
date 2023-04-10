import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


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

      {/* https://github.com/vercel/next.js/discussions/26168 */}
      <div className="w-72 sm:w-1/2 m-auto mt-4">
        {/* See next.config to set domain */}
        <Image
          src="https://sushicat.pp.ua/main/dist/sunny-girl-edited.jpg"
          alt="Picture of the author"
          className="rounded-xl"
          width={1542}
          height={2159}
          placeholder="blur"
          blurDataURL={`/_next/image?url=${encodeURIComponent("https://sushicat.pp.ua/main/dist/sunny-girl-edited.jpg")}&w=16&q=1`}
        />
      </div>
    </>
  )
}

export default About
