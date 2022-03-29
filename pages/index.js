import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../component/header'
import styles from '../styles/Home.module.css'
import Link from 'next/dist/client/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home title</title>
      </Head>

      <h1>Home page</h1>
      <Link href="/element">Element Listing</Link>
    </div>
  )
}
