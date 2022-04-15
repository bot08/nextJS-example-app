import { useTheme } from "next-themes";
import { useState, useEffect } from "react";


const Header = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  // https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  useEffect(() => setMounted(true), [])
  
  // uncomment the code below (theme dont work)
  //if (!mounted) return null

  return (
    <>
      <select value={theme} onChange={e => setTheme(e.target.value)} className="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700">
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
      <button onClick={() => setTheme('dark')} className="items-center m-2 text-center px-7 py-1 shadow-lg text-base font-medium text-white transition ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none">Dark</button>
      <button onClick={() => setTheme('light')} className="items-center m-2 text-center px-7 py-1 shadow-lg text-base font-medium text-white transition ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none">Light</button>
      {/* <button onClick={() => {setTheme(theme === 'light' ? 'dark' : 'light')}} className="items-center m-2 text-center px-7 py-1 shadow-lg text-base font-medium text-white transition ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none">Switch</button> */}
      <hr className="mb-2 border-gray-300 dark:border-gray-500"/>
    </>
  )
}

export default Header