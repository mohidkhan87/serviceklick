import React, { useState } from "react";

import "../App.css";

import MarginBottom from "../components/shared/spacing/MarginBottom"
import Poster from "../components/pages/homepage/Poster";
import ServiceAd from "../components/shared/ServiceAd";
import Services from "../components/pages/homepage/Services";
import Satisfaction from "../components/pages/homepage/Satisfaction";
import Benefits from "../components/pages/homepage/Benefits";
import Media from "../components/pages/homepage/Media";
import News from "../components/pages/homepage/News";
import Reviews from "../components/pages/homepage/Reviews";
import ReviewPlatform from "../components/pages/homepage/ReviewPlatform";

import StickyNav from "../components/pages/homepage/find-customer/StickyNav";
import CustomerPoster from "../components/pages/homepage/find-customer/CustomerPoster";
import Figures from "../components/pages/homepage/find-customer/Figures";
import WhyCompletly from "../components/shared/WhyCompletly"
import IncredibleProfessionals from "../components/pages/homepage/find-customer/IncredibleProfessionals";
import Posts from "../components/pages/homepage/find-customer/Posts";
import ReadyToStart from "../components/pages/homepage/find-customer/ReadyToStart";
import DiscoverBenefits from "../components/pages/faqs/DiscoverBenefits";
import MonthlyEarnings from "../components/pages/homepage/find-customer/MonthlyEarnings";
import ServicesOffer from "../components/pages/homepage/find-customer/ServicesOffer";
import Steps from "../components/pages/homepage/find-customer/Steps";

import Footer from "./../components/shared/navigation/Footer";

const Home = () => {
  const [view, setView] = useState("professional");
  const handleSetView = (val) => {
    setView(val)
  }
  return (
    <div>
      {view === "professional" ? (
        <>
          <div className="relative z-30">
            <Poster handleSetView={handleSetView} />
          </div>
          <MarginBottom margin={24} />
          <ServiceAd />
          <MarginBottom margin={16} />
          <Services />
          <Satisfaction />
          <Benefits />
          <MarginBottom margin={16} />
          <Media />
          <News />
          <Reviews />
          <ReviewPlatform />
          <MarginBottom margin={16} />
          <Footer />
        </>
      ) :
        <>
          <div className="relative z-30">
            <CustomerPoster handleSetView={handleSetView} />
          </div>
          <MarginBottom margin={16} />
          <Figures />
          <MarginBottom margin={16} />
          <div className='sticky z-30' style={{top: '90px'}}>
            <StickyNav />
          </div>
          <MarginBottom margin={16} />
          <DiscoverBenefits title="Discover the Benefits of Completely" description="A world-leading platform for professionals." />
          <MarginBottom margin={16} />
          <Benefits />
          <MarginBottom margin={16} />
          <WhyCompletly title="Why Completely?" />
          <MarginBottom margin={16} />
          <Steps />
          <MarginBottom margin={16} />
          <div className="hidden md:block">
            <MonthlyEarnings />
            <MarginBottom margin={16} />
          </div>
          <ServicesOffer />
          <MarginBottom margin={16} />
          <IncredibleProfessionals />
          <MarginBottom margin={16} />
          <Posts />
          <MarginBottom margin={16} />
          <Reviews />
          <MarginBottom margin={16} />
          <ReviewPlatform />
          <ReadyToStart />
          <MarginBottom margin={16} />
          <Footer />
        </>
      }

    </div>
  );
};

export default Home;
