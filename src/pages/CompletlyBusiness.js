import React from 'react'

import Business from '../components/pages/completly-business/Business';
import WhyCompletly from '../components/pages/completly-business/WhyCompletly'
import DiscoverBenefits from '../components/pages/faqs/DiscoverBenefits'
import MarginBottom from '../components/shared/spacing/MarginBottom';
import ReadyToStart from '../components/pages/completly-business/ReadyToStart';
import Footer from "./../components/shared/navigation/Footer";
import MonthlyEarnings from '../components/pages/completly-business/MonthlyEarnings';
import OurPartners from '../components/pages/completly-business/OurPartners';
import Poster from '../components/pages/completly-business/Poster';

const CompletlyBusiness = () => {
  return (
    <div>
      <Poster />
      <MarginBottom margin={16} />
      <Business />
      <MarginBottom margin={16} />
      <DiscoverBenefits title="Discover the Benefits of Completely" description="A world-leading platform for professionals." />
      <MarginBottom margin={16} />
      <WhyCompletly />
      <MarginBottom margin={16} />
      <OurPartners />
      <MarginBottom margin={16} />
      <MonthlyEarnings />
      <MarginBottom margin={16} />
      <ReadyToStart />
      <MarginBottom margin={16} />
      <Footer />
    </div>
  )
}

export default CompletlyBusiness