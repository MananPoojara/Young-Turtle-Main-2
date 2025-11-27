import { Footer } from '@/components/footer'
import HeroSection from '@/components/HeroSection'
import Header from '@/components/navigation'
import ServiceSection from '@/components/ServiceSection'
import React from 'react'

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ServiceSection />
      <Footer />
    </>
  )
}

export default Home
