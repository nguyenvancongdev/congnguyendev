import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return
  <>
  đây là thanh menu
  <Component {...pageProps} />
  </>  
}

export default MyApp
