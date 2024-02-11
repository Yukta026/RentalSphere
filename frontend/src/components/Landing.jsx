import React from 'react'
import Navbar from './LandingPages/Navbar'
import Banner from './LandingPages/Banner'
import Banner2 from './LandingPages/Banner2'
import Contactform from './LandingPages/Contactform'
import Footer from './LandingPages/Footer'

const Landing = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Banner2 />
      <Contactform />
      <Footer />
    </>
  )
}

export default Landing