import React from "react";
import PlayStore from "../../assets/images/pages/homepage/play-store.svg";
import AppStore from "../../assets/images/pages/homepage/app-store.svg";
import QrCode from "../../assets/images/pages/homepage/qr-code.svg";
import UpperAd from "../../assets/images/pages/homepage/upper-ad.svg";
import LowerAd from "../../assets/images/pages/homepage/lower-ad.svg";
import AdBackground from "../../assets/images/pages/homepage/ad-bg.svg";
import Container from "../ui/Container";

const ServiceAd = () => {
  return (
    <section>
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-0 md:gap-12 gap-20 md:mt-24 mt-16 mb-20">
          <div className="flex flex-col justify-center">
            <div className=" 2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-bold">
              When you need to hire someone - a Painter, a Cleaner, anyone -
              Serviceklick finds them for you for free.
            </div>
            <p className="my-5 2xl:text-2xl text-lg text-darkGray">
              See price estimates, read reviews and chat with pros, all in the
              app.
            </p>
            <div className="flex flex-row flex-wrap gap-2">
              <img src={PlayStore} alt="" className="w-40" />
              <img src={AppStore} alt="" className="w-40" />
              <img src={QrCode} alt="" className="w-40" />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="relative xl:w-auto w-11/12 text-right">
              <img src={AdBackground} alt="" />
              <div className="absolute top-0 left-0 h-full xl:w-full w-8/12 flex items-center transform xl:translate-y-0 lg:-translate-y-1 md:-translate-y-2.5 -translate-y-  5">
                <img
                  src={UpperAd}
                  alt="upper-img"
                  className="w-full relative mt-7 z-10"
                />
                <img
                  src={LowerAd}
                  alt="lower-img"
                  className="xl:w-auto w-10/12 transform -translate-x-1/3 -ml-2 mt-5"
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
