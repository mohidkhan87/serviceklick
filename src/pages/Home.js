import React from "react";
import "../App.css";
import HeaderWithPoster from "../components/shared/navigation/HeaderWithPoster";
import Footer from "./../components/shared/navigation/Footer";
import Poster from "../components/pages/homepage/Poster";
import Services from "../components/pages/homepage/Services";
import Satisfaction from "../components/pages/homepage/Satisfaction";
import Benefits from "../components/pages/homepage/Benefits";
import News from "../components/pages/homepage/News";
import ServiceAd from "../components/pages/homepage/ServiceAd";

const Home = () => {
  return (
    <div>
      <HeaderWithPoster />
      <Poster />
      <ServiceAd />
      <Services />
      <Satisfaction />
      <Benefits />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
