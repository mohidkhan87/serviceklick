import React, { useRef, useState, useEffect } from "react";

import "../App.css";

import MarginBottom from "../components/shared/spacing/MarginBottom";
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
import WhyCompletly from "../components/shared/WhyCompletly";
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
  const [currentTab, setCurrentTab] = useState('benefits')
  const benefitsRef = useRef();
  const howItWorksRef = useRef();
  const howToJoinRef = useRef();
  const compareRef = useRef();
  const reviewsRef = useRef();
  const earningsRef = useRef();
  const newsRef = useRef();

  const handleSetView = (val) => {
    setView(val);
  };
  const goToSection = (value) => {
    setCurrentTab(value)
    if (value === "benefits") {
      window.scrollTo({
        top: benefitsRef.current.offsetTop - "145",
        left: 0,
        behavior: "smooth",
      });
    } else if (value === "how-it-works") {
      window.scrollTo({
        top: howItWorksRef.current.offsetTop - "145",
        left: 0,
        behavior: "smooth",
      });
    } else if (value === "how-to-join") {
      window.scrollTo({
        top: howToJoinRef.current.offsetTop - "145",
        left: 0,
        behavior: "smooth",
      });
    } else if (value === "compare") {
      window.scrollTo({
        top: compareRef.current.offsetTop - "145",
        left: 0,
        behavior: "smooth",
      });
    } else if (value === "reviews") {
      window.scrollTo({
        top: reviewsRef.current.offsetTop - "145",
        left: 0,
        behavior: "smooth",
      });
    } else if (value === "earnings") {
      window.scrollTo({
        top: earningsRef.current.offsetTop - "145",
        left: 0,
        behavior: "smooth",
      });
    } else if (value === "news") {
      window.scrollTo({
        top: newsRef.current.offsetTop - "145",
        left: 0,
        behavior: "smooth",
      });
    }
  };
  const handleScroll = () => {
    if (window !== undefined) {
      if(benefitsRef.current && benefitsRef.current.getBoundingClientRect().top > 0 && benefitsRef.current.getBoundingClientRect().top < 200){
        setCurrentTab('benefits')
      } else if(howItWorksRef.current && howItWorksRef.current.getBoundingClientRect().top > 0 && howItWorksRef.current.getBoundingClientRect().top < 200){
        setCurrentTab('how-it-works')
      } else if(howToJoinRef.current && howToJoinRef.current.getBoundingClientRect().top > 0 && howToJoinRef.current.getBoundingClientRect().top < 200){
        setCurrentTab('how-to-join')
      } else if(compareRef.current && compareRef.current.getBoundingClientRect().top > 0 && compareRef.current.getBoundingClientRect().top < 200){
        setCurrentTab('compare')
      } else if(reviewsRef.current && reviewsRef.current.getBoundingClientRect().top > 0 && reviewsRef.current.getBoundingClientRect().top < 200){
        setCurrentTab('reviews')
      } else if(earningsRef.current && earningsRef.current.getBoundingClientRect().top > 0 && earningsRef.current.getBoundingClientRect().top < 200){
        setCurrentTab('earnings')
      } else if(newsRef.current && newsRef.current.getBoundingClientRect().top > 0 && newsRef.current.getBoundingClientRect().top < 200){
        setCurrentTab('news')
      }
    }
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {view === "professional" ? (
        <>
          <div className="relative z-30">
            <Poster view={view} handleSetView={handleSetView} />
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
      ) : (
        <>
          <div className="relative z-30">
            <CustomerPoster handleSetView={handleSetView} />
          </div>
          <MarginBottom margin={16} />
          <Figures />
          <MarginBottom margin={16} />
          <div className="sticky z-30" style={{ top: "65px" }}>
            <StickyNav currentTab={currentTab} goToSection={goToSection} />
          </div>
          <MarginBottom margin={16} />
          <DiscoverBenefits
            title="Discover the Benefits of Completely"
            description="A world-leading platform for professionals."
          />
          <MarginBottom margin={16} />
          <div ref={benefitsRef}>
            <Benefits />
          </div>
          <MarginBottom margin={16} />
          <div ref={howItWorksRef}>
            <WhyCompletly title="Why Completely?" />
          </div>
          <MarginBottom margin={16} />
          <div ref={howToJoinRef}>
            <Steps />
          </div>
          <MarginBottom margin={16} />
          <div ref={compareRef} className="hidden md:block">
            <MonthlyEarnings />
            <MarginBottom margin={16} />
          </div>
          <div ref={reviewsRef}>
            <IncredibleProfessionals />
          </div>
          <MarginBottom margin={16} />
          <div ref={earningsRef}>
            <ServicesOffer />
          </div>
          <MarginBottom margin={16} />
          <div ref={newsRef}>
            <Posts />
          </div>
          <MarginBottom margin={16} />
          <Reviews />
          <MarginBottom margin={16} />
          <ReviewPlatform />
          <ReadyToStart />
          <MarginBottom margin={16} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
