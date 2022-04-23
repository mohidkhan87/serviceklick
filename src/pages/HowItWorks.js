import React from 'react'

import MarginBottom from '../components/shared/spacing/MarginBottom';
import WhyCompletly from '../components/shared/WhyCompletly'
import Posts from '../components/pages/how-it-works/Posts';
import ServiceAd from "../components/shared/ServiceAd";
import Footer from '../components/shared/navigation/Footer'
import Poster from '../components/pages/how-it-works/Poster';
import Flow from '../components/pages/how-it-works/Flow';
import Reviews from '../components/pages/homepage/Reviews'

const HowItWorks = () => {
  return (
    <div>
      <div className="relative z-30">
        <Poster />
      </div>
      <MarginBottom margin={16} />
      <WhyCompletly title="Why Completely?" />
      <MarginBottom margin={24} />
      <Flow />
      <MarginBottom margin={16} />
      <Reviews />
      <MarginBottom margin={16} />
      <Posts />
      <MarginBottom margin={24} />
      <ServiceAd />
      <MarginBottom margin={24} />
      <Footer />
    </div>
  )
}

export default HowItWorks