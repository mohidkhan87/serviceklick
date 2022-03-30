import React from "react";
import "../App.css";
import Footer from "./../components/shared/navigation/Footer";
import Poster from "../components/pages/homepage/Poster";
import Services from "../components/pages/homepage/Services";
import Satisfaction from "../components/pages/homepage/Satisfaction";
import Benefits from "../components/pages/homepage/Benefits";
import News from "../components/pages/homepage/News";
import ServiceAd from "../components/shared/ServiceAd";
import Reviews from "../components/pages/homepage/Reviews";

const Home = () => {
  return (
    <div>
      <div className="relative z-30">
        <Poster />
      </div>
      <ServiceAd />
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
