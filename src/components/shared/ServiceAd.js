import React from "react";
import { Link } from "react-router-dom";

import Container from "../ui/Container";

import PlayStore from "../../assets/images/pages/homepage/play-store.svg";
import AppStore from "../../assets/images/pages/homepage/app-store.svg";
import QrCode from "../../assets/images/pages/homepage/qr-code.svg";
import AdBackground from "../../assets/images/pages/homepage/ad-bg.svg";
import LowerAd from "../../assets/images/shared/service-ad/lower-ad.png";
import UpperAd from "../../assets/images/shared/service-ad/upper-ad.png";

const ServiceAd = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-0 md:gap-12 gap-20">
          <div className="flex flex-col justify-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-xl xl:text-5xl 2xl:text-6xl font-bold lg:leading-loose">
                When you need to hire someone - a Painter, a Cleaner, anyone -
                <span className="inline-block"><div><p>Serviceklick</p><p className="h-1.5 rounded-full bg-gradient-to-r from-gradientBlue to-gradientPink"></p></div></span> finds them for you for free.
              </h2>
            </div>
            <p className="my-5 2xl:text-lg text-base font-medium text-darkGray">
              See price estimates, read reviews and chat with pros, all in the
              app.
            </p>
            <div className="flex flex-row flex-wrap gap-2">
              <div>
                <Link to="/">
                  <img src={PlayStore} alt="" className="w-40" />
                </Link>
              </div>
              <div>
                <Link to="/">
                  <img src={AppStore} alt="" className="w-40" />
                </Link>
              </div>
              <div>
                <Link to="/">
                  <img src={QrCode} alt="" className="w-40" />
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden xl:flex justify-end">
            <div className="relative xl:w-auto w-11/12 text-right">
              <img src={AdBackground} alt="bg" />
              <div className="absolute top-0 left-0 h-full w-full flex justify-end">
                <img
                  src={LowerAd}
                  alt="lower-img"
                  className="w-auto h-full mr-8"
                />
              </div>
              <div className="absolute -top-8 left-8 w-full flex justify-start">
                <img
                  src={UpperAd}
                  alt="lower-img"
                  className="w-auto h-full mr-8"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceAd;
