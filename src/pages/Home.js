import React from "react";

import "../App.css";

import MarginBottom from "../components/shared/spacing/MarginBottom"
import Poster from "../components/pages/homepage/Poster";
import ServiceAd from "../components/shared/ServiceAd";
import Services from "../components/pages/homepage/Services";
import Satisfaction from "../components/pages/homepage/Satisfaction";
import Benefits from "../components/pages/homepage/Benefits";
import News from "../components/pages/homepage/News";
import Reviews from "../components/pages/homepage/Reviews";
import Footer from "./../components/shared/navigation/Footer";

const Home = () => {
  return (
    <div>
      <div className="relative z-30">
        <Poster />
      </div>
      <MarginBottom margin={24} />
      <ServiceAd />
      <MarginBottom margin={16} />
      <Services />
      <Satisfaction />
      <Benefits />
      <News />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
