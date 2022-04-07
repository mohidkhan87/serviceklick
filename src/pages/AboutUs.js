import React from 'react'

import MarginBottom from '../components/shared/spacing/MarginBottom';
import Poster from '../components/pages/about-us/Poster';
import Details from '../components/pages/about-us/Details';
import TeamSlider from '../components/pages/about-us/TeamSlider';
import Mission from '../components/pages/about-us/Mission';
import Team from '../components/pages/about-us/Team';
import Posts from '../components/shared/Posts';
import ServiceAd from '../components/shared/ServiceAd'
import Footer from "./../components/shared/navigation/Footer";

const AboutUs = () => {
  const postsData = [
    { title: 'Getting Started with Completely', date: "February 24, 2022", category: 'Using Completly' },
    { title: 'Providing clear job instructions', date: "February 24, 2022", category: 'General' },
    { title: 'Get help with payments', date: "February 24, 2022", category: 'Payments' },
  ];
  return (
    <>
      <Poster />
      <MarginBottom margin={16} />
      <Details />
      <MarginBottom margin={16} />
      <TeamSlider />
      <MarginBottom margin={16} />
      <Mission />
      <MarginBottom margin={16} />
      <Team />
      <MarginBottom margin={16} />
      <Posts title="News &amp; Resources" postsData={postsData} postsPerRow={3} />
      <MarginBottom margin={16} />
      <ServiceAd />
      <MarginBottom margin={16} />
      <Footer />
    </>
  )
}

export default AboutUs