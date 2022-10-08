import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import News from '../components/News'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [showNav, setShowNav] = useState<boolean>(false)
  return (
    <React.Fragment>
      <Head>
        <title>START</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header page='home' showNav={showNav} setShowNav={setShowNav}/>
      <Hero/>
      <News/>
      <Services/>
      <Footer/>
    </React.Fragment>
  )
}

export default Home
