import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import Menu from 'components/Menu'
import Blog from 'pages/blog'
const Home: NextPage = () => {
  const router = useRouter()
  return (
   <>
   <Menu />
   <Blog/>
   </>
  )
}

export default Home
