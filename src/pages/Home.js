import React, { useState } from "react";

import "../App.css";

import MarginBottom from "../components/shared/spacing/MarginBottom"
import Poster from "../components/pages/homepage/Poster";
import ServiceAd from "../components/shared/ServiceAd";
import Services from "../components/pages/homepage/Services";
import Satisfaction from "../components/pages/homepage/Satisfaction";
import Benefits from "../components/pages/homepage/Benefits";
import News from "../components/pages/homepage/News";
import Reviews from "../components/pages/homepage/Reviews";
import ReviewPlatform from "../components/pages/homepage/ReviewPlatform";

import Posts from "../components/shared/Posts";
import ReadyToStart from "../components/pages/homepage/find-customer/ReadyToStart";

import Footer from "./../components/shared/navigation/Footer";

const Home = () => {
  const [view, setView] = useState("professional");
  const handleSetView = (val) => {
    setView(val)
  }
  const postsData = [
    { title: 'How to find local professionals for pretty much anything.', date:"February 24, 2022", category: 'News' },
    { title: 'How to find local professionals for pretty much anything.', date:"February 24, 2022", category: 'Inspiration' },
    { title: 'How to find local professionals for pretty much anything.', date:"February 24, 2022", category: 'Sponsored' },
  ];

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
          <News />
          <Reviews />
          <ReviewPlatform />
          <MarginBottom margin={16} />
          <Footer />
        </>
      ) :
        <>
          <Posts title="More Help articles" postsData={postsData} postsPerRow={3} />
          <MarginBottom margin={16} />
          <Reviews />
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
