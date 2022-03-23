import React from "react";
import { useState } from "react";
import Container from "../../ui/Container";
import PosterImage from "../../../assets/images/pages/homepage/poster-img.svg";
import CustomerImage from "../../../assets/images/pages/homepage/customer-poster-img.svg";
import Location from "../../../assets/images/pages/homepage/location.svg";
import ArrowRight from "../../../assets/images/pages/homepage/arrow-right.svg";
import Service from "../../../assets/images/pages/homepage/service.svg";

const Poster = () => {
  const [isClient, setIsClient] = useState("professional");
  const [isSearching, setIsSearching] = useState(false);
  // Mock API's
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
  // ____________________________________________________

  return (
    <div
      className={`${
        isClient === "professional" ? "bg-professional-bg" : "bg-customer-bg"
      } bg-cover bg-bottom bg-no-repeat w-full md:pt-40 pt-36`}
    >
      <Container>
        <div className="grid grid-cols-2 text-white">
          <div>
            <div className="flex gap-5 border-b-2 border-darkGray border-opacity-50 w-max">
              <h1
                className={`transition duration-200 ease-linear font-bold -mb-0.5 cursor-pointer pb-1 ${
                  isClient === "professional"
                    ? "border-b-2 border-white"
                    : "opacity-60"
                }`}
                onClick={() => setIsClient("professional")}
              >
                Hire a Professional
              </h1>

              <h1
                className={`transition duration-200 ease-linear font-bold -mb-0.5 cursor-pointer pb-1 ${
                  isClient === "customer"
                    ? "border-b-2 border-white"
                    : "opacity-60"
                }`}
                onClick={() => setIsClient("customer")}
              >
                Find Customers
              </h1>
            </div>
            <div className="my-5">
              {isClient === "professional" ? (
                <h1 className="text-5xl font-bold">
                  Find local <br /> Professionals for <br /> pretty much
                  anything.
                </h1>
              ) : (
                <h1 className="text-5xl font-bold">
                  Find local customers <br /> and start earning <br /> today
                  with Completely.
                </h1>
              )}
            </div>
            {isClient === "professional" ? (
              <>
                <div className="w-full relative flex justify-between items-stretch gap-2 bg-white text-black rounded-full p-1 mt-7 z-10">
                  <div className="relative w-64 ">
                    <input
                      type="text"
                      placeholder="What's on your to-do list?"
                      className="w-full rounded-full py-2 px-4 outline-none"
                      onFocus={() => setIsSearching(true)}
                      onBlur={() => setIsSearching(false)}
                    />
                    {/* ====================== */}
                    {/*     Search Results     */}
                    {/* ====================== */}
                    {isSearching && (
                      <div className="absolute top-full left-0 w-full transform translate-y-2 rounded-3xl rounded-tr-none bg-white overflow-y-scroll scrollbar-none py-5 px-6">
                        <h1 className="font-bold">Services</h1>
                        {services.map((service) => (
                          <div className="flex items-center gap-3 my-2">
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
                    <img src={Location} alt="" />
                    <p className="flex items-center text-darkGray">8006</p>
                    <button className=" font-semibold text-sm text-white bg-secondary py-2.5 px-7 ml-4 rounded-full">
                      Search
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-6 font-bold">
                  Popular:
                  {popularSearches.map((search) => (
                    <p className="flex-shrink-0 border border-white text-sm py-px px-3 font-normal rounded-full">
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
                <button className="py-2 px-5 rounded-full flex items-center gap-3 font-bold text-black bg-white mt-4">
                  Get Started
                  <img src={ArrowRight} alt="arrow" className="w-5" />
                </button>
              </>
            )}
          </div>
          <div className=" pl-28 pb-px border-red-700 overflow-hidden">
            <img
              src={isClient === "professional" ? PosterImage : CustomerImage}
              alt="poster"
              style={{ width: "450px" }}
              className=""
            />
          </div>
        </div>
        {isSearching && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
        )}
      </Container>
    </div>
  );
};

export default Poster;
