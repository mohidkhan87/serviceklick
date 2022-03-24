import React from "react";
import "../App.css";
import Header from './../components/shared/navigation/Header';
import Footer from './../components/shared/navigation/Footer';

import Poster from "../components/pages/homepage/Poster";
import Services from "../components/pages/homepage/Services";
import Satisfaction from "../components/pages/homepage/Satisfaction";
import Benefits from "../components/pages/homepage/Benefits";
import News from "../components/pages/homepage/News";

const Home = () => {
  return (
    <div>
      <Header />
      <Poster />
      <Services />
      <Satisfaction />
      <Benefits />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
