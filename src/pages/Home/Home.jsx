import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import About from './About/About'
import OurServices from './OurServices/OurServices'
import CallToAction from './CallToAction/CallToAction'
import WorkingProgress from './WorkingProgress/WorkingProgress'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import FrequentAskQuestion from './FrequentAskQuestion/FrequentAskQuestion'

function Home() {


  return (
    <>
    <HeroSection/>
    <About/>
    <OurServices/>
    <CallToAction/>
    <WorkingProgress/>
    <WhyChooseUs/>
    <FrequentAskQuestion/>
    </>
  )
}

export default Home
