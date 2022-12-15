import Head from 'next/head'
import Link from 'next/link'
import useSWR from "swr"

// !!! There is not ssr\ssg see more: https://swr.vercel.app/ru/docs/with-nextjs

const fetcher = (url) => fetch(url).then((res) => res.json());

const Fetch = () => {
  const { data, error, isLoading } = useSWR(
    "https://sushicat.pp.ua/api/genshin/api/collections/get/charactersv2?sort[_id]=-1&fields[name]=1&fields[nameeng]=1&fields[rarity]=1&fields[ico]=1&token=a4191046104f8f3674f788e804c2d0",
    fetcher
  );
  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  return (
    <>
      <Head>
        <title>NextJS example</title>
        {/* todo: fix preload (https://swr.vercel.app/docs/prefetching) */}
      </Head>
 
      {
        data.entries.map(({ name, rarity }) => (
          <div key={name.toString()}>
            { name } { rarity }
          </div>
        ))
      }

      <Link href="/" className="text-xl font-bold text-green-700 dark:text-green-200 my-2">
        Home page
      </Link>
    </>
  )
}

export default Fetch
