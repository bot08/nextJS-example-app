import '../styles/globals.css'
import '../styles/styles.css'
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} enableSystem={true}  attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
