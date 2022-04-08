import React from "react";

import Container from "../../ui/Container";
import HeaderWithPoster from '../../../components/shared/navigation/HeaderWithPoster'
import Banner from "../../../assets/images/pages/newsroom/poster.png";


const Poster = () => {
  return (
    <div className="relative">
      <div className="relative z-30 border-b border-lightGray">
        <HeaderWithPoster background="white" textColor="primary" isAbsolute={false} />
      </div>
      <div className="hidden lg:block absolute top-0 right-0 w-3/5 h-80 lg:h-52 rounded-ellipseCurve bg-lightPink z-10"></div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2 flex items-center">
            <div>
              <p className="text-darkGray text-xs font-medium">
                February 24, 2022
              </p>
              <h1 className="text-primary text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl md:w-3/4 font-bold mt-2">
                How to find local professionals for pretty much anything.
              </h1>
              <button className="bg-secondary text-base md:text-xs lg:text-base text-white font-bold md:font-medium lg:font-bold mt-8 py-3 px-6 rounded-full inline-flex items-center">
                Read more
                <svg
                  width="23"
                  height="16"
                  className="ml-4"
                  viewBox="0 0 23 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1992 2L21.1992 8L15.1992 14"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.2 8H2"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 pt-10">
            <div className="flex justify-center">
              <img src={Banner} alt="Poster" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Poster;
