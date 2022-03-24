import React from "react";
import PlayStore from "../../../assets/images/pages/homepage/play-store.svg";
import AppStore from "../../../assets/images/pages/homepage/app-store.svg";
import QrCode from "../../../assets/images/pages/homepage/qr-code.svg";
import UpperAd from "../../../assets/images/pages/homepage/upper-ad.svg";
import LowerAd from "../../../assets/images/pages/homepage/lower-ad.svg";
import AdBackground from "../../../assets/images/pages/homepage/ad-bg.svg";
import Underline from "../../../assets/images/pages/homepage/underline.svg";
import Container from "../../ui/Container";

const ServiceAd = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 mt-24 mb-20">
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap text-4xl font-bold">
            When you need to hire someone - a Painter, a Cleaner, anyone -
            <div className="flex items-top">
              <div className="w-min mr-2">
                Serviceklick
                <img src={Underline} alt="" />
              </div>
              <h1 className="flex-grow whitespace-nowrap">finds them for</h1>
            </div>
            you for free.
          </div>
          <p className="my-5 text-lg text-darkGray">
            See price estimates, read reviews and chat with pros, all in the
            app.
          </p>
          <div className="flex items-center gap-2">
            <img src={PlayStore} alt="" />
            <img src={AppStore} alt="" />
            <img src={QrCode} alt="" />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="relative text-right">
            <img src={AdBackground} alt="" />
            <div className="absolute top-0 left-0 h-full w-full flex items-center">
              <img
                src={UpperAd}
                alt="upper-img"
                className="relative mt-7 z-10"
              />
              <img
                src={LowerAd}
                alt="lower-img"
                className="transform -translate-x-1/3 -ml-2 mt-5"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServiceAd;
