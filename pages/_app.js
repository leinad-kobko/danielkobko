import '../styles/globals.css'
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className='text-black dark:text-white font-[Inter]'>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp
