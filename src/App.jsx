import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Pricong from './components/Pricong'
import Testimnials from './components/Testimnials'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-8'>
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricong />
        <Testimnials />
        <Footer />
      </div>

    </>
  )
}

export default App
