import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Menu from '../components/Menu'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     <Head>
          <title>hello moi nguoi</title>
          <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
      </Head>
    <Menu />
    <Component {...pageProps} />
    </> 
   )
}

export default MyApp
