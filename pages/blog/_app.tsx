import 'styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import Menu from 'components/blog/Menu'
function MyApp({ Component, pageProps }: AppProps) {

  return
  <>
   <Menu />
   <Component {...pageProps} />
   </>
}

export default MyApp
