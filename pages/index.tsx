import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect} from 'react';
import Blog from 'pages/blog'
const Home: NextPage = () => {
  const router = useRouter()
  return (
   <>
   <Blog/>
   </>
  )
}

export default Home
