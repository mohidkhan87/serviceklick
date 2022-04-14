import React from "react";
import { useState, useEffect } from "react";

import StarRatings from "react-star-ratings";

import Container from "../../ui/Container";
import HeaderWithPoster from "../../shared/navigation/HeaderWithPoster";

import PosterImage from "../../../assets/images/pages/homepage/poster-img.svg";
import Location from "../../../assets/images/pages/homepage/location.svg";
import Service from "../../../assets/images/pages/homepage/service.svg";

const Poster = ({ view, handleSetView }) => {
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
    {
      image: PosterImage,
      rating: 5,
      name: "Sandra",
      category: "Airbnb Cleaning",
      jobs: null,
    },
    {
      image: PosterImage,
      rating: 4.9,
      name: "Marta",
      category: "Arbnb Cleaning",
      jobs: "148",
    },
    {
      image: PosterImage,
      rating: 4.9,
      name: "Pascal",
      category: "Painter",
      jobs: "148",
    },
    {
      image: PosterImage,
      rating: 4.9,
      name: "Peter",
      category: "Chef",
      jobs: "148",
    },
    {
      image: PosterImage,
      rating: 4.9,
      name: "Maria",
      category: "Home Cleaner",
      jobs: "148",
    },
  ];
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
      className={`${backgroundColors[currentIndex]} relative bg-cover bg-bottom bg-no-repeat w-full lg:pt-40 md:pb-0 pb-20 md:pt-36 pt-24`}
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
        isAbsolute={true}
        view={view}
      />

      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-0 gap-8 text-white">
          <div>
            <div className="overflow-x-scroll scrollbar-none">
              <div className="flex gap-5 border-b-2 border-darkGray border-opacity-50 w-max ">
                <h1
                  className={`transition duration-200 ease-linear sm:text-base text-sm sm:font-bold font-semibold -mb-0.5 cursor-pointer pb-1 border-b-2 border-white `}
                >
                  Hire a Professional
                </h1>

                <h1
                  className={`transition duration-200 ease-linear sm:text-base text-sm sm:font-bold font-semibold -mb-0.5 cursor-pointer pb-1 opacity-60 hover:opacity-100`}
                  onClick={() => handleSetView("customer")}
                >
                  Find Customers
                </h1>
              </div>
            </div>
            <div className="my-5">
              <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl font-bold">
                Find local Professionals for pretty much anything.
              </h1>
            </div>

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
                      <div className="flex items-center gap-3 my-2" key={index}>
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
          </div>
          <div className="hidden md:flex justify-end overflow-hidden">
            <div className="w-max relative">
              <img
                src={backgroundImages[currentIndex].image}
                alt="poster"
                style={{ width: "450px" }}
                className="rounded-b-3xl transform -translate-x-3.5"
              />
              <div className="absolute w-full bottom-5">
                <div className="w-52 mx-auto bg-white text-primary rounded-lg px-4 py-3">
                  <div className="flex flex-row gap-2">
                    <div className="flex justify-start">
                      <StarRatings
                        rating={backgroundImages[currentIndex].rating}
                        starRatedColor="#F8C40C"
                        starDimension="14px"
                        starSpacing="2px"
                        numberOfStars={5}
                        name="rating"
                      />
                    </div>
                    <div className="flex justify-start items-center mt-2">
                      <p className="text-xxs">
                        {backgroundImages[currentIndex].rating}
                      </p>
                      {backgroundImages[currentIndex].jobs && (
                        <p className="text-xxs">
                          &nbsp;|&nbsp;{backgroundImages[currentIndex].jobs}{" "}
                          Jobs
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center mt-1">
                    <p className="text-sm">
                      {backgroundImages[currentIndex].name},
                    </p>
                    <p className="text-sm font-bold">
                      &nbsp;{backgroundImages[currentIndex].category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
