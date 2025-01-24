import React from 'react'
import Navbar from '../layout/Navbar'
import HeroSection from './HeroSection'
import Tools from './Tools'
import About from './About'
import WhyChoose from './WhyChoose'
import Experience from './Experience'
import MoreInfo from './MoreInfo'
import WhyMts from './WhyMts'
import CounterComponent from './CounterComponent'
import CardComponent from './CardComponent'
import OpenAccountSection from './OpenAccountSection'
import Plans from './Plans'
import Footer from '../layout/Footer'
import WhatsAppButton from './WhatsAppButton'
import TestimonialSlider from './Testimonials'


const Home = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Tools/>
      <About/>
      <WhyChoose/>
      <Experience/>
      <MoreInfo/>
      <WhyMts/>
      <CounterComponent/>
      <CardComponent/>
      <OpenAccountSection/>
      <Plans/>
      <TestimonialSlider/>
      <Footer/>
      <WhatsAppButton/>
    </>
  )
}

export default Home
