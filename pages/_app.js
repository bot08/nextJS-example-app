import '../styles/globals.css'
import '../styles/styles.css'
import { ThemeProvider } from "next-themes";
import SelectTheme from '../components/SelectTheme.jsx'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} defaultTheme="system" enableSystem={true}  attribute="class">
      <SelectTheme/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
