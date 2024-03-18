import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import * as Sentry from '@sentry/react';
import Features from './components/Features';
import HowItWorks from './components/HowitWorks';
import Footer from './components/Footer';


const App = () => {
  return (
    <main className='bg-black'>

      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />



    </main>
  )
}

export default Sentry.withProfiler(App);