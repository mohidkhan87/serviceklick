import React from "react";
import { useState, useEffect } from "react";
import HeaderWithPoster from "../../shared/navigation/HeaderWithPoster";

import Container from "../../ui/Container";
import PosterImage from "../../../assets/images/pages/homepage/poster-img.svg";
import CustomerImage from "../../../assets/images/pages/homepage/customer-poster-img.svg";
import Location from "../../../assets/images/pages/homepage/location.svg";
import ArrowRight from "../../../assets/images/pages/homepage/arrow-right.svg";
import Service from "../../../assets/images/pages/homepage/service.svg";

const Poster = () => {
  const popularSearches = [
    {
      id: 1,
      name: "Cleaning",
    },
    {
      id: 2,
      name: "Airbnb Cleaning",
    },
    {
      id: 3,
      name: "Painting",
    },
    {
      id: 4,
      name: "IKEA Furniture Assembly",
    },
  ];
  const services = [
    {
      id: 1,
      title: "Home Cleaning",
    },
    {
      id: 2,
      title: "End of Lease Cleaning",
    },
    {
      id: 3,
      title: "Airbnb Cleaning",
    },
  ];
  const backgroundColors = [
    "bg-pinkBlueGradient",
    "bg-magentaGradient",
    "bg-greenGradient",
    "bg-orangeGradient",
    "bg-pinkGradient",
  ];
  const backgroundImages = [
    PosterImage,
    PosterImage,
    PosterImage,
    PosterImage,
    PosterImage,
  ];
  const [isClient, setIsClient] = useState("professional");
  const [isSearching, setIsSearching] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === backgroundColors.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 7000);
    return () => clearInterval(intervalId);
  }, [backgroundColors.length, currentIndex]);

  return (
    <div
      className={`${
        isClient === "professional"
          ? `${backgroundColors[currentIndex]}`
          : "bg-lightBlue"
      } relative bg-cover bg-bottom bg-no-repeat w-full lg:pt-40 md:pb-0 pb-20 md:pt-36 pt-24`}
    >
      <div className="custom-shape-divider-bottom-1649353383 transform md:translate-y-1.5 translate-y-px">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="xl:h-32 lg:h-28 md:h-16 h-10"
        >
          <path
            d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <HeaderWithPoster
        isSearching={isSearching}
        background="transparent"
        textColor="white"
        isAbsolute={true}
      />

      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-0 gap-8 text-white">
          <div>
            <div className="overflow-x-scroll scrollbar-none">
              <div className="flex gap-5 border-b-2 border-darkGray border-opacity-50 w-max ">
                <h1
                  className={`transition duration-200 ease-linear sm:text-base text-sm sm:font-bold font-semibold -mb-0.5 cursor-pointer pb-1 ${
                    isClient === "professional"
                      ? "border-b-2 border-white"
                      : "opacity-60"
                  }`}
                  onClick={() => setIsClient("professional")}
                >
                  Hire a Professional
                </h1>

                <h1
                  className={`transition duration-200 ease-linear sm:text-base text-sm sm:font-bold font-semibold -mb-0.5 cursor-pointer pb-1 ${
                    isClient === "customer"
                      ? "border-b-2 border-white"
                      : "opacity-60"
                  }`}
                  onClick={() => setIsClient("customer")}
                >
                  Find Customers
                </h1>
              </div>
            </div>
            <div className="my-5">
              {isClient === "professional" ? (
                <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl font-bold">
                  Find local Professionals for pretty much anything.
                </h1>
              ) : (
                <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl font-bold">
                  Find local customers and start earning today with Completely.
                </h1>
              )}
            </div>
            {isClient === "professional" ? (
              <>
                <div className="md:w-full sm:w-10/12 w-full relative flex justify-between items-center lg:gap-2 bg-white text-black rounded-full p-1 mt-7 z-50">
                  <div className="relative xl:w-64 w-full z-50">
                    <input
                      type="text"
                      placeholder="What's on your to-do list?"
                      className="w-full rounded-full lg:py-2 md:py-1.5 py-1 text-sm sm:text-base px-4 outline-none"
                      onFocus={() => setIsSearching(true)}
                    />
                    {/* ====================== */}
                    {/*     Search Results     */}
                    {/* ====================== */}
                    {isSearching && (
                      <div className="absolute top-full left-0 w-full transform translate-y-2.5 rounded-3xl rounded-tr-none bg-white overflow-y-scroll scrollbar-none py-5 px-6 z-50">
                        <h1 className="font-bold">Services</h1>
                        {services.map((service, index) => (
                          <div
                            className="flex items-center gap-3 my-2"
                            key={index}
                          >
                            <img src={Service} alt="" className="w-12" />
                            <p className="font-semibold text-sm text-red-800">
                              {service.title}
                            </p>
                          </div>
                        ))}
                        <div className="font-bold mt-3">Recent Searches</div>
                        <div>
                          <p className="text-sm font-semibold underline cursor-pointer text-red-800 mt-1">
                            First search result title
                          </p>
                          <p className="text-sm font-semibold underline cursor-pointer text-red-800 mt-1">
                            Second search result title
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex-shrink-0 flex items-center gap-3">
                    <img src={Location} alt="" className=" hidden xl:block" />
                    <p className="hidden xl:flex items-center text-darkGray">
                      8006
                    </p>
                    <button className="font-medium sm:font-semibold text-sm text-white bg-secondary lg:py-2.5 md:py-2 py-1.5 lg:px-7 px-5 ml-4 rounded-full">
                      Search
                    </button>
                  </div>
                </div>
                <div className="flex items-center flex-wrap gap-3 mt-6 font-bold">
                  Popular:
                  {popularSearches.map((search, index) => (
                    <p
                      className="flex-shrink-0 border border-white text-sm py-0.5 px-3 font-normal rounded-full cursor-pointer"
                      key={index}
                    >
                      {search.name}
                    </p>
                  ))}
                </div>
              </>
            ) : (
              <>
                <p>
                  Dowload our App and Sign-Up to start growing your business.
                </p>
                <button className="py-2 px-5 sm:text-base text-sm rounded-full flex items-center gap-3 font-bold text-black bg-white mt-4">
                  Get Started
                  <img src={ArrowRight} alt="arrow" className="w-5" />
                </button>
              </>
            )}
          </div>
          <div className=" hidden md:flex justify-end overflow-hidden">
            <img
              src={
                isClient === "professional"
                  ? backgroundImages[currentIndex]
                  : CustomerImage
              }
              alt="poster"
              style={{ width: "450px" }}
              className="rounded-b-3xl transform -translate-x-3.5"
            />
          </div>
        </div>
        {isSearching && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-20"
            onClick={() => setIsSearching(false)}
          ></div>
        )}
      </Container>
    </div>
  );
};

export default Poster;
