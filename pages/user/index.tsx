
import type { NextPage } from 'next'
import Head from 'next/head'
import Menu from 'components/Menu'
const Home: NextPage = () => {
  return (
   <div>
      <Head>
        <title>Công Nguyễn Developer </title>
      </Head>
      <Menu />
      <main>
       đây là nội dung user index
      </main>
    </div>
  )
}

export default Home
