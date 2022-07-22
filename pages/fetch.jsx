import Head from 'next/head'
import Link from 'next/link'
import useSWR from "swr"

// !!! There is not ssr\ssg see more: https://swr.vercel.app/ru/docs/with-nextjs

const fetcher = (url) => fetch(url).then((res) => res.json());

const Fetch = () => {
  const { data, error } = useSWR(
    "https://api-genshin.herokuapp.com/api/characters",
    fetcher
  );
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  return (
    <>
      <Head>
        <title>NextJS example</title>
        {/* todo: fix warn */}
        <link rel="preload" href="https://api-genshin.herokuapp.com/api/characters" as="fetch" crossorigin="anonymous"/>
      </Head>
 
      {
        data.map(({ name, rarity }) => (
          <div key={name.toString()}>
            { name } { rarity }
          </div>
        ))
      }

      <Link href="/">
        <a className="text-xl font-bold text-green-700 dark:text-green-200 my-2">Home page</a>
      </Link>
    </>
  )
}

export default Fetch
