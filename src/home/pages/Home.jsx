import React from 'react'
import Nav from '../components/Nav'
import Intro from '../components/Intro'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Partner from '../components/Partner'
import Testimonials from '../components/Testimonials'
import Hero3 from '../components/Hero3'
import Hero2 from '../components/Hero2'
import StatsCard from '../components/StatsCard'

function Home() {
  return (
    <>
      <Nav />
      <Intro />
      <Hero3/>
      <Hero2/>
      <Hero />
      <Testimonials />
      <StatsCard/>
      <Partner />
      <Contact />
    </>
  )
}

export default Home
