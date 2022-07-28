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
      <Link href="/">
        <a className="text-xl font-bold text-green-700 dark:text-green-200 my-2">Index page</a>
      </Link>
      <a target="_blank" href="https://github.com/bot08/nextJS-example-app" className="block text-xl font-bold text-green-700 dark:text-green-200 my-2">
        Github
      </a>

      <div className="w-72 sm:w-1/2 m-auto mt-4">
        {/* See next.config to set domain */}
        <Image
          //placeholder="blur" (does not work)
          src="/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg"
          alt="Picture of the author"
          width={1600}
          height={1067}
          className="rounded-xl"
        />
      </div>
    </>
  )
}

export default About
