import React from 'react'

import MarginBottom from '../components/shared/spacing/MarginBottom';
import Poster from '../components/pages/faqs/Poster';
import FaqsQuestions from '../components/pages/faqs/Faqs';
import DiscoverBenefits from '../components/pages/faqs/DiscoverBenefits';
import Posts from '../components/shared/Posts';
import ServiceAd from '../components/shared/ServiceAd'
import Footer from "./../components/shared/navigation/Footer";

const Faqs = () => {
  const postsData = [
    { title: 'Getting Started with Completely', category: 'Using Completly' },
    { title: 'Providing clear job instructions', category: 'General' },
    { title: 'Get help with payments', category: 'Payments' },
    { title: 'Manage your account', category: 'Using Completly' },
  ];
  return (
    <>
      <Poster />
      <MarginBottom margin={16} />
      <FaqsQuestions />
      <MarginBottom margin={16} />
      <DiscoverBenefits title="Discover the Benefits of Completely" description="A world-leading platform for professionals." />
      <MarginBottom margin={16} />
      <Posts title="More Help articles" postsData={postsData} postsPerRow={4} />
      <MarginBottom margin={24} />
      <ServiceAd />
      <MarginBottom margin={16} />
      <Footer />
    </>
  )
}

export default Faqs