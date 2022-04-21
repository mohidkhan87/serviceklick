import React, { useState } from "react";
import { Link } from "react-router-dom";

import Container from "../../ui/Container";
import CustomModalVideo from '../../shared/CustomModalVideo'

import BlogPost1 from '../../../assets/images/pages/help-center/blog-post-1.png'
import BlogPost2 from '../../../assets/images/pages/help-center/blog-post-2.png'

import Post1 from "../../../assets/images/pages/help-center/post-1.png";
import Post2 from "../../../assets/images/pages/help-center/post-2.png";
import Post3 from "../../../assets/images/pages/help-center/post-3.png";
import PlayCircle from "../../../assets/images/shared/play-circle.svg";

const HowToUse = () => {
    const [isClient, setIsClient] = useState("buyers");
    const [isOpen, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!isOpen)
    }
    return (
        <div>
            <Container>
                <div className="flex justify-center">
                    <div className="border-b-2 border-darkGray w-max mb-16">
                        <h1
                            className={`inline-block mr-2 transition duration-200 ease-linear sm:text-base text-sm sm:font-bold font-semibold -mb-0.5 cursor-pointer pb-2 ${isClient === "buyers"
                                ? "text-secondary border-secondary border-b-2"
                                : "opacity-60"
                                }`}
                            onClick={() => setIsClient("buyers")}
                        >
                            Buyers
                        </h1>

                        <h1
                            className={`inline-block ml-2 transition duration-200 ease-linear sm:text-base text-sm sm:font-bold font-semibold -mb-0.5 cursor-pointer pb-2 ${isClient === "sellers"
                                ? "text-secondary border-secondary border-b-2"
                                : "opacity-60"
                                }`}
                            onClick={() => setIsClient("sellers")}
                        >
                            Sellers
                        </h1>
                    </div>
                </div>
                <h2 className="text-primary text-3xl 2xl:text-4xl font-bold mb-5">
                    How to use Completely
                </h2>
                <div className="flex flex-row flex-wrap gap-2 mb-5">
                    <div>
                        <button className="bg-primary text-white px-4 py-2 border border-primary hover:text-white hover:bg-primary rounded-full cursor-pointer text-xs transition-colors duration-200 ease-in-out">
                            Payment
                        </button>
                    </div>
                    <div>
                        <button className="bg-white text-primary px-4 py-2 border border-darkGray hover:text-white hover:bg-primary hover:border-primary rounded-full cursor-pointer text-xs transition-colors duration-200 ease-in-out">
                            Cancellation
                        </button>
                    </div>
                    <div>
                        <button className="bg-white text-primary px-4 py-2 border border-darkGray hover:text-white hover:bg-primary hover:border-primary rounded-full cursor-pointer text-xs transition-colors duration-200 ease-in-out">
                            Chef
                        </button>
                    </div>
                    <div>
                        <button className="bg-white text-primary px-4 py-2 border border-darkGray hover:text-white hover:bg-primary hover:border-primary rounded-full cursor-pointer text-xs transition-colors duration-200 ease-in-out">
                            Payment
                        </button>
                    </div>
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-10`}>
                    <div>
                        <Link to="/blog-post">
                            <div className="flex flex-col">
                                <div className="relative">
                                    <img src={BlogPost1} alt="News" className="w-full" />
                                    <div className="absolute flex items-center gap-2 bottom-4 left-4">
                                        <div className="flex gap-4 items-center">
                                            <button className="bg-white rounded-full text-secondary font-medium text-xs px-4 py-2">Using Completely</button>
                                        </div>
                                        <p className="text-white text-xs">by Completly</p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p className="text-primary text-xl md:text-xl 2xl:text-2xl font-bold md:leading-7">
                                        Getting Started with Completely
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/blog-post">
                            <div className="flex flex-col">
                                <div className="relative">
                                    <img src={BlogPost2} alt="News" className="w-full" />
                                    <div className="absolute flex items-center gap-2 bottom-4 left-4">
                                        <div className="flex gap-4 items-center">
                                            <button className="bg-white rounded-full text-secondary font-medium text-xs px-4 py-2">General</button>
                                        </div>
                                        <p className="text-white text-xs">by Completly</p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p className="text-primary text-xl md:text-xl 2xl:text-2xl font-bold md:leading-7">
                                        Providing clear job instructions
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/blog-post">
                            <div className="flex flex-col">
                                <div className="relative">
                                    <img src={BlogPost1} alt="News" className="w-full" />
                                    <div className="absolute flex items-center gap-2 bottom-4 left-4">
                                        <div className="flex gap-4 items-center">
                                            <button className="bg-white rounded-full text-secondary font-medium text-xs px-4 py-2">Payments</button>
                                        </div>
                                        <p className="text-white text-xs">by Completly</p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p className="text-primary text-xl md:text-xl 2xl:text-2xl font-bold md:leading-7">
                                        Get help with payments
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/blog-post">
                            <div className="flex flex-col">
                                <div className="relative">
                                    <img src={BlogPost1} alt="News" className="w-full" />
                                    <div className="absolute flex items-center gap-2 bottom-4 left-4">
                                        <div className="flex gap-4 items-center">
                                            <button className="bg-white rounded-full text-secondary font-medium text-xs px-4 py-2">Using Completely</button>
                                        </div>
                                        <p className="text-white text-xs">by Completly</p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p className="text-primary text-xl md:text-xl 2xl:text-2xl font-bold md:leading-7">
                                        Manage your account
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <CustomModalVideo isOpen={isOpen} handleOpen={handleOpen} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mt-16">
                    <div>
                        <div className="relative">
                            <img src={Post1} alt="Post" className="w-full" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" onClick={() => handleOpen()}>
                                <img src={PlayCircle} alt="Circle" className="w-20 h-20" />
                            </div>
                        </div>
                        <h2 className="text-primary font-bold mt-2">
                            How to find local professionals for pretty much anything.
                        </h2>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={Post2} alt="Post" className="w-full" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" onClick={() => handleOpen()}>
                                <img src={PlayCircle} alt="Circle" className="w-20 h-20" />
                            </div>
                        </div>
                        <h2 className="text-primary font-bold mt-2">
                            How to find local professionals for pretty much anything.
                        </h2>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={Post3} alt="Post" className="w-full" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" onClick={() => handleOpen()}>
                                <img src={PlayCircle} alt="Circle" className="w-20 h-20" />
                            </div>
                        </div>
                        <h2 className="text-primary font-bold mt-2">
                            How to find local professionals for pretty much anything.
                        </h2>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HowToUse;
