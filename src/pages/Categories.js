import React from 'react'

import MarginBottom from "../components/shared/spacing/MarginBottom"
import Poster from '../components/pages/categories/Poster';
import WhyCompletly from "../components/shared/WhyCompletly"
import CitiesSlider from '../components/pages/categories/CitiesSlider';
import Reviews from "../components/pages/homepage/Reviews";
import ReviewPlatform from "../components/pages/homepage/ReviewPlatform";
import ServiceAd from "../components/shared/ServiceAd";
import Footer from "./../components/shared/navigation/Footer";

const Categories = () => {
  return (
    <div>
      <div className='relative z-30'>
        <Poster />
      </div>
      <MarginBottom margin={52} />
      <CitiesSlider />
      <MarginBottom margin={16} />
      <WhyCompletly />
      <MarginBottom margin={16} />
      <Reviews />
      <ReviewPlatform />
      <MarginBottom margin={24} />
      <ServiceAd />
      <MarginBottom margin={24} />
      <Footer />
    </div>
  )
}

export default Categories