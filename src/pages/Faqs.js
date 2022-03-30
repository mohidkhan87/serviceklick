import React from 'react'

import FaqsQuestions from '../components/pages/faqs/Faqs';
import DiscoverBenefits from '../components/pages/faqs/DiscoverBenefits';
import Posts from '../components/shared/Posts';
import ServiceAd from '../components/shared/ServiceAd'
import MarginBottom from '../components/shared/spacing/MarginBottom';
import Footer from "./../components/shared/navigation/Footer";
import Poster from '../components/pages/faqs/Poster';

const Faqs = () => {
  const postsData = [
    { title: 'Getting Started with Completely', category: 'Using Completly' },
    { title: 'Providing clear job instructions', category: 'General' },
    { title: 'Get help with payments', category: 'Payments' },
    // { title: 'Manage your account', category: 'Using Completly' },
  ];
  return (
    <div>
      <div className="relative z-30">
        <Poster />
      </div>
      <MarginBottom margin={16} />
      <FaqsQuestions />
      <MarginBottom margin={16} />
      <DiscoverBenefits title="Discover the Benefits of Completely" description="A world-leading platform for professionals." />
      <MarginBottom margin={16} />
      <Posts title="More Help articles" postsData={postsData} />
      <ServiceAd />
      <Footer />
    </div>
  )
}

export default Faqs