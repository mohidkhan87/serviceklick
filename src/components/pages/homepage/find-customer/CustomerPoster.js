import React from "react";
import { useState, useEffect } from "react";

import Container from "../../../ui/Container";
import HeaderWithPoster from "../../../shared/navigation/HeaderWithPoster";

import PosterImage1 from "../../../../assets/images/pages/homepage/find-customer/poster-1.png"
import PosterImage2 from "../../../../assets/images/pages/homepage/find-customer/poster-2.png"

const CustomerPoster = ({ handleSetView }) => {
    const backgroundColors = [
        "bg-primary",
        "bg-CustomerYellow",
        "bg-CustomerGreen",
        "bg-CustomerRed",
    ];
    const backgroundImages = [
        {
            image: PosterImage1
        },
        {
            image: PosterImage2
        },
        {
            image: PosterImage1
        },
        {
            image: PosterImage1
        }
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
                                    className={`transition duration-200 ease-linear sm:text-base text-sm sm:font-bold font-semibold -mb-0.5 cursor-pointer pb-1 opacity-60 hover:opacity-100`}
                                    onClick={() => handleSetView("professional")}
                                >
                                    Hire a Professional
                                </h1>

                                <h1
                                    className={`transition duration-200 ease-linear sm:text-base text-sm sm:font-bold font-semibold -mb-0.5 cursor-pointer pb-1 border-b-2 border-white`}
                                >
                                    Find Customers
                                </h1>
                            </div>
                        </div>
                        <div className="my-5">
                            <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl font-bold">
                                Work when you want, doing whatever you want.
                            </h1>
                            <p className="text-sm mt-5">Dowload our App and Sign-Up to start growing your business.</p>
                            <button className="bg-white rounded-full font-bold text-lg px-8 py-4 text-primary mt-5 flex items-center">
                                Get Started
                                <span className="inline-block ml-2 mb-1">
                                    <svg width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.0508 2.11816L26.6394 9.70681L19.0508 17.2955" stroke="#2B2D33" strokeWidth="3.16193" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M26.6391 9.70605H2.35547" stroke="#2B2D33" strokeWidth="3.16193" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
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

export default CustomerPoster;
