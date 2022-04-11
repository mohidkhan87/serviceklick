import React from 'react'

import MarginBottom from "../components/shared/spacing/MarginBottom"
import Poster from '../components/pages/categories/Poster';
import WhyCompletly from "../components/shared/WhyCompletly"
import CitiesSlider from '../components/pages/categories/CitiesSlider';
import TrustSlider from '../components/pages/categories/TrustSlider';
import PopularProducts from '../components/pages/categories/PopularProducts';
import Reviews from "../components/pages/homepage/Reviews";
import ReviewPlatform from "../components/pages/homepage/ReviewPlatform";
import ServiceAd from "../components/shared/ServiceAd";
import RecentJobRequests from '../components/pages/categories/RecentJobRequests';
import VideoReviews from '../components/pages/categories/VideoReviews';
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
      <TrustSlider />
      <MarginBottom margin={16} />
      <PopularProducts />
      <MarginBottom margin={16} />
      <WhyCompletly />
      <MarginBottom margin={16} />
      <Reviews />
      <ReviewPlatform />
      <MarginBottom margin={16} />
      <RecentJobRequests />
      <MarginBottom margin={16} />
      <VideoReviews />
      <MarginBottom margin={24} />
      <ServiceAd />
      <MarginBottom margin={24} />
      <Footer />
    </div>
  )
}

export default Categories