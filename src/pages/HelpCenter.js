import React from 'react'

import Poster from '../components/pages/help-center/Poster';
import HowToUse from '../components/pages/help-center/HowToUse';
import NeedHelp from '../components/pages/help-center/NeedHelp';
import PopularGuide from '../components/pages/help-center/PopularGuide';
import MarginBottom from '../components/shared/spacing/MarginBottom';
import Footer from "./../components/shared/navigation/Footer";

const HelpCenter = () => {
  return (
    <div>
      <div className="relative z-30">
        <Poster />
      </div>
      <MarginBottom margin={16} />
      <HowToUse />
      <MarginBottom margin={16} />
      <PopularGuide />
      <MarginBottom margin={16} />
      <NeedHelp />
      <MarginBottom margin={16} />
      <Footer />
    </div>
  )
}

export default HelpCenter