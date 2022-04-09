import React from "react";

import Container from "../../ui/Container";
import HeaderWithPoster from "../../shared/navigation/HeaderWithPoster";

import PosterImage from "../../../assets/images/pages/categories/banner-image.png";
import Rating from "../../../assets/images/pages/categories/ratings.png";
import Tick from "../../../assets/images/pages/categories/green-tick.svg";
import PlayStore from "../../../assets/images/pages/homepage/play-store.svg";
import AppStore from "../../../assets/images/pages/homepage/app-store.svg";
import QrCode from "../../../assets/images/pages/homepage/qr-code.svg";

const Poster = () => {
    return (
        <div>
            <div className="relative z-30 border-b border-lightGray">
                <HeaderWithPoster background="white" textColor="primary" isAbsolute={false} />
            </div>
            <div
                className={`bg-CategoriesYellow relative bg-cover bg-bottom bg-no-repeat w-full pt-24 md:pt-36 lg:pt-24 pb-20 md:pb-0`}
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

                <Container>
                    <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-0 gap-8 text-white">
                        <div>
                            <div className="my-5">
                                <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl font-bold">
                                    Find professional local cleaners for free with Completely.
                                </h1>
                                <p className="text-sm mt-5">Dowload our App and Sign-Up to start growing your business.</p>
                                <div className="flex flex-row flex-wrap gap-2 mt-5">
                                    <img src={PlayStore} alt="" className="w-40" />
                                    <img src={AppStore} alt="" className="w-40" />
                                    <img src={QrCode} alt="" className="w-40" />
                                </div>
                                <div className='mt-5 md:w-max mb-60 md:mb-72 relative'>
                                    <img src={Rating} alt="" className="w-auto md:w-full" />
                                    <div className="bg-white absolute top-20 w-full rounded-lg p-5 shadow-lg">
                                        <p className="text-darkGray text-xs">
                                            Finding the best office cleaning services in your area doesn't have to be a chore when you use Serviceklick. Serviceklick has been connecting customers with office cleaning professionals for years, ensuring that your professional space shines and impresses your clients and employees alike. Whether you run a small business or are part of a large corporation, ensuring that your offices are kept clean and tidy helps to create positive first impressions and improves employee morale. From ensuring that the coffee cups are washed and dried to cleaning the bathrooms, Serviceklick can connect you with office cleaning services to handle all your cleaning tasks, large and small.
                                        </p>
                                        <div className="flex flex-col gap-4 mt-8">
                                            <div className="flex gap-3">
                                                <div>
                                                    <img src={Tick} alt="Tick" />
                                                </div>
                                                <div>
                                                    <p className="text-darkGray text-xs">Vetted and screened professionals.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <div>
                                                    <img src={Tick} alt="Tick" />
                                                </div>
                                                <div>
                                                    <p className="text-darkGray text-xs">Friendly 24/7 customer service.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <div>
                                                    <img src={Tick} alt="Tick" />
                                                </div>
                                                <div>
                                                    <p className="text-darkGray text-xs">Backed by the Serviceklick Happiness Guarantee.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <div>
                                                    <img src={Tick} alt="Tick" />
                                                </div>
                                                <div>
                                                    <p className="text-darkGray text-xs">Affordable, upfront pricing.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <div>
                                                    <img src={Tick} alt="Tick" />
                                                </div>
                                                <div>
                                                    <p className="text-darkGray text-xs">No time windows, book when you want.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex justify-end overflow-hidden h-full">
                            <div className="w-max flex items-end">
                                <img
                                    src={PosterImage}
                                    alt="poster"
                                    style={{ width: "450px" }}
                                    className="rounded-b-3xl transform -translate-x-3.5"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Poster;
