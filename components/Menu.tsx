import type { NextPage } from 'next'
import Link from "next/link"

const Menu: NextPage = () => {
  return (
  <div>
     <Link  href=""><a>Home</a></Link>
     <Link  href="/blog"><a>Blog</a></Link>
     <Link href="/hotocnguyenvan"><a>Ho toc nguyen van</a></Link>
     <Link href="/todo"><a>todo</a></Link>
  </div>
  )
}

export default Menu
