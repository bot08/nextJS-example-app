import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// todo round
const shimmer = (w, h) => `
  <svg width="${w}" height="${h}"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" rx="15" ry="15"/>
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" rx="15" ry="15"/>
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)


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

      {/* with preloader */}
      <div className="w-72 sm:w-1/2 m-auto mt-4">
        {/* See next.config to set domain */}
        <Image
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1600, 1067))}`}
          src="/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg"
          alt="Picture of the author"
          width={1600}
          height={1067}
          className="rounded-xl"
        />
      </div>

      {/* without */}
      <div className="w-72 sm:w-1/2 m-auto mt-4">
        {/* See next.config to set domain */}
        <Image
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
