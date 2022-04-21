import React from 'react'

import MarginBottom from '../components/shared/spacing/MarginBottom';
import Poster from '../components/pages/about-us/Poster';
import Details from '../components/pages/about-us/Details';
import TeamSlider from '../components/pages/about-us/TeamSlider';
import Mission from '../components/pages/about-us/Mission';
import Team from '../components/pages/about-us/Team';
import Posts from '../components/pages/about-us/Posts';
import ServiceAd from '../components/shared/ServiceAd'
import Footer from "./../components/shared/navigation/Footer";

const AboutUs = () => {
  
  return (
    <>
      <Poster />
      <MarginBottom margin={16} />
      <Details />
      <MarginBottom margin={16} />
      <TeamSlider />
      <MarginBottom margin={24} />
      <Mission />
      <MarginBottom margin={24} />
      <Team />
      <MarginBottom margin={24} />
      <Posts />
      <MarginBottom margin={24} />
      <ServiceAd />
      <MarginBottom margin={24} />
      <Footer />
    </>
  )
}

export default AboutUs