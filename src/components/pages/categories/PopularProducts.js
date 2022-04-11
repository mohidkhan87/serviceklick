import React from "react";
import { Link } from "react-router-dom";

import Container from "../../ui/Container";

import news1 from "../../../assets/images/pages/about-us/news-1.png";
import news2 from "../../../assets/images/pages/about-us/news-2.png";

const PopularProducts = () => {
    return (
        <section>
            <Container>
                <h3 className="text-primary text-2xl 2xl:text-3xl mb-4 font-bold">
                    The most popular Cleaning Products
                </h3>
                <div className="mb-4">
                    <div>
                        <ul className="flex">
                            <li className="mr-4">
                                <div
                                    className={"cursor-pointer border rounded-full border-customGray inline-block py-2 px-4 text-sm font-medium text-center hover:bg-primary text-white transition ease-in-out duration-500 bg-primary"}
                                >
                                    Basic Cleaning
                                </div>
                            </li>
                            <li className="mr-4">
                                <div
                                    className={"cursor-pointer border rounded-full border-customGray inline-block py-2 px-4 text-sm font-medium text-center hover:bg-primary hover:text-white transition ease-in-out duration-500 "}
                                >
                                    Intens Cleaning
                                </div>
                            </li>
                            <li className="mr-4">
                                <div
                                    className={"cursor-pointer border rounded-full border-customGray inline-block py-2 px-4 text-sm font-medium text-center hover:bg-primary hover:text-white transition ease-in-out duration-500 "}
                                >
                                    +Adds on
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-10`}
                >
                    <div>
                        <Link to="/">
                            <div className="flex flex-col">
                                <div className="relative">
                                    <img src={news1} alt="News" className="w-full" />
                                    <div className="absolute flex items-center gap-2 bottom-4 left-4">
                                        <div className="flex gap-4 items-center">
                                            <button className="bg-white rounded-full text-secondary font-medium text-xs px-4 py-2">
                                                Popular
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-primary text-xl md:text-xl 2xl:text-2xl font-bold md:leading-7">
                                        Bedroom
                                    </p>
                                    <p className="text-primary">
                                        How to find local professionals for pretty much anything.
                                    </p>
                                    <p className="text-darkGray font-medium text-xs mt-4 underline">
                                        Discover more
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/">
                            <div className="flex flex-col">
                                <div className="relative">
                                    <img src={news2} alt="News" className="w-full" />
                                    <div className="absolute flex items-center gap-2 bottom-4 left-4">
                                        <div className="flex gap-4 items-center">
                                            <button className="bg-white rounded-full text-secondary font-medium text-xs px-4 py-2">
                                                News
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-primary text-xl md:text-xl 2xl:text-2xl font-bold md:leading-7">
                                        Bathroom
                                    </p>
                                    <p className="text-primary">
                                        How to find local professionals for pretty much anything.
                                    </p>
                                    <p className="text-darkGray font-medium text-xs mt-4 underline">
                                        Discover more
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/">
                            <div className="flex flex-col">
                                <div className="relative">
                                    <img src={news1} alt="News" className="w-full" />
                                    <div className="absolute flex items-center gap-2 bottom-4 left-4">
                                        <div className="flex gap-4 items-center">
                                            <button className="bg-white rounded-full text-secondary font-medium text-xs px-4 py-2">
                                                News
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-primary text-xl md:text-xl 2xl:text-2xl font-bold md:leading-7">
                                        Livingroom
                                    </p>
                                    <p className="text-primary">
                                        How to find local professionals for pretty much anything.
                                    </p>
                                    <p className="text-darkGray font-medium text-xs mt-4 underline">
                                        Discover more
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/">
                            <div className="flex flex-col">
                                <div className="relative">
                                    <img src={news1} alt="News" className="w-full" />
                                    <div className="absolute flex items-center gap-2 bottom-4 left-4">
                                        <div className="flex gap-4 items-center">
                                            <button className="bg-white rounded-full text-secondary font-medium text-xs px-4 py-2">
                                                News
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-primary text-xl md:text-xl 2xl:text-2xl font-bold md:leading-7">
                                        Kitchen
                                    </p>
                                    <p className="text-primary">
                                        How to find local professionals for pretty much anything.
                                    </p>
                                    <p className="text-darkGray font-medium text-xs mt-4 underline">
                                        Discover more
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PopularProducts;
