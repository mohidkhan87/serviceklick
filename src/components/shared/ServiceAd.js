import React, { useState } from "react";
import { Link } from "react-router-dom";

import Container from "../ui/Container";

import PlayStore from "../../assets/images/pages/homepage/play-store.svg";
import AppStore from "../../assets/images/pages/homepage/app-store.svg";
import QrCode from "../../assets/images/pages/homepage/qr-code.svg";
import AdBackground from "../../assets/images/pages/homepage/ad-bg.svg";
import LowerAd from "../../assets/images/shared/service-ad/lower-ad.png";
import UpperAd from "../../assets/images/shared/service-ad/upper-ad.png";


import QRcode from "../../assets/images/pages/homepage/qr.png";
import PosterImage from "../../assets/images/pages/homepage/poster-img.svg";

const ServiceAd = () => {
  const [isScanQR, setIsScanQR] = useState(false);
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-0 md:gap-12 gap-20">
          <div className="flex flex-col justify-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-xl xl:text-4xl 2xl:text-6xl font-bold lg:leading-loose">
                When you need to hire someone - a Painter, a Cleaner, anyone - &nbsp;
                <span className="inline-block">
                  <div>
                    <p>Serviceklick</p>
                    <p className="h-1.5 rounded-full bg-gradient-to-r from-gradientBlue to-gradientPink"></p>
                  </div>
                </span>{" "}
                finds them for you for free.
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
              <div onClick={() => setIsScanQR(true)} className="cursor-pointer">
                <img src={QrCode} alt="" className="w-40" />
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

      {/* QR Code Modal */}

      {isScanQR && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-60 z-40">
          <div
            className="fixed top-0 left-0 w-full h-full cursor-pointer z=40"
            onClick={() => setIsScanQR(false)}
          ></div>
          {/* Close modal */}
          <div className="QR-code_modal w-3/4 xl:w-full bg-skyBlue relative rounded-lg z-50">
            <div
              className="absolute sm:top-4 top-2 sm:right-6 right-4 sm:text-base text-sm cursor-pointer"
              onClick={() => setIsScanQR(false)}
            >
              &#9587;
            </div>
            <div className="px-5 lg:px-20 py-10 rounded-lg lg:mt-10 relative">
              <div className="lg:w-2/3">
                <h1 className="text-xl lg:text-4xl md:text-3xl xl:text-3xl 2xl:text-5xl font-bold text-secondary">
                  Scan QR code and get the Completely App
                </h1>
                <p className="md:w-2/3 text-xs text-darkGray font-medium mt-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, maxime quidem sunt nisi id fugiat vitae laborum
                  temporibus a quam!
                </p>
                <div className="w-max flex justify-between mt-8 mx-auto lg:mx-0">
                  <img
                    src={QRcode}
                    alt="QR code"
                    style={{ maxWidth: '200px' }}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="absolute right-10 bottom-0 hidden lg:flex justify-end items-end">
                <img
                  src={PosterImage}
                  alt="poster"
                  className="w-80"
                />
              </div>
            </div>
            {/* <div className="grid md:grid-cols-2 grid-cols-1">
              <div>
                <p className="text-xs text-darkGray font-medium mt-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, maxime quidem sunt nisi id fugiat vitae laborum
                  temporibus a quam!
                </p>
                <div className="flex justify-between md:mt-0 mt-5">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNqcA-dpxvU3NQ4_TxsyJArzUaPA151j8tSQ&usqp=CAU"
                    alt="QR code"
                    className="md:w-8/12 w-1/3"
                  />
                  <img
                    src={PosterImage}
                    alt="poster"
                    className="md:hidden block w-1/3 object-contain"
                  />
                </div>
              </div>
              <div className="hidden md:flex justify-end items-end">
                <img
                  src={PosterImage}
                  alt="poster"
                  className="w-3/4 object-contain"
                />
              </div>
            </div> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceAd;
