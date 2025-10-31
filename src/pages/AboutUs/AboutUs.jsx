import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../HeroSection/HeroSection'
import About from '../Home/About/About'
import FrequentAskQuestion from '../Home/FrequentAskQuestion/FrequentAskQuestion'
import WhyChooseUs from '../Home/WhyChooseUs/WhyChooseUs'
import BeforeAfter from './BeforeAfter'
import Testimonials from './Testimonials' 

function AboutUs() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <HeroSection name='About Us' description='At KindHaven, customer satisfaction is our top priority.'/>

      {/* About Section */}
      <About active={true}/>

      {/* Before After Section */}
      <BeforeAfter/>

      {/* Why Choose Us Section */}
      <WhyChooseUs/>

      {/* FAQ Section */}
      <FrequentAskQuestion color={true}/>

      {/* Testimonials Section */}
      <Testimonials/>
    </div>
  )
}

export default AboutUs