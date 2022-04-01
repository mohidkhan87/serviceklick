import React from 'react'

import MarginBottom from '../components/shared/spacing/MarginBottom';
import Poster from '../components/pages/help-center/Poster';
import HowToUse from '../components/pages/help-center/HowToUse';
import PopularGuide from '../components/pages/help-center/PopularGuide';
import NeedHelp from '../components/pages/help-center/NeedHelp';
import Footer from "./../components/shared/navigation/Footer";

const HelpCenter = () => {
  return (
    <div>
      <Poster />
      <MarginBottom margin={16} />
      <HowToUse />
      <MarginBottom margin={16} />
      <PopularGuide />
      <NeedHelp />
      <MarginBottom margin={16} />
      <Footer />
    </div>
  )
}

export default HelpCenter