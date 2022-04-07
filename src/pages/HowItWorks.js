import React from 'react'

import MarginBottom from '../components/shared/spacing/MarginBottom';
import WhyCompletly from '../components/shared/WhyCompletly'
import Posts from '../components/shared/Posts';
import ServiceAd from "../components/shared/ServiceAd";
import Footer from '../components/shared/navigation/Footer'
import Poster from '../components/pages/how-it-works/Poster';
import Flow from '../components/pages/how-it-works/Flow';

const HowItWorks = () => {
  const postsData = [
    { title: 'Getting Started with Completely',date:'February 20, 2022', category: 'Using Completly' },
    { title: 'Providing clear job instructions',date:'February 20, 2022', category: 'General' },
    { title: 'Get help with payments',date:'February 20, 2022', category: 'Payments' }
  ];
  return (
    <div>
      <div className="relative z-30">
        <Poster />
      </div>
      <MarginBottom margin={16} />
      <WhyCompletly />
      <MarginBottom margin={16} />
      <Flow />
      <MarginBottom margin={16} />
      <Posts title="Useful Resources &amp; Tips for Buyers" postsData={postsData} />
      <ServiceAd />
      <Footer />
    </div>
  )
}

export default HowItWorks