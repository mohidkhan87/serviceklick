import React from "react";

import Container from "../../ui/Container";

import Team1 from "../../../assets/images/pages/about-us/team-1.png";
import VideoImage from "../../../assets/images/pages/about-us/video.png";
import EllipseGirl from "../../../assets/images/pages/about-us/ellipse-girl.png";
import PlayCircle from "../../../assets/images/shared/play-circle.svg";
import sliderArrow from "../../../assets/images/pages/about-us/arrow-right.svg";

const Team = () => {
    return (
        <div>
            <Container>
                <h3 className="text-primary text-2xl 2xl:text-3xl mb-4 font-bold">
                    Our team about serviceklick
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-10">
                    <div>
                        <div className="flex flex-col">
                            <div className="relative">
                                <img src={Team1} alt="benefit" className="w-full" />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                    <img
                                        src={PlayCircle}
                                        alt="Video Banner"
                                        className="w-16 h-16"
                                    />
                                </div>
                            </div>
                            <div className="mt-2">
                                <p className="text-darkGray font-medium text-xs mb-3">
                                    Marketing &amp; Communication
                                </p>
                                <p className="text-primary text-xl md:text-2xl 2xl:text-3xl font-bold md:leading-7">
                                    asdasd
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col">
                            <div className="relative">
                                <img src={Team1} alt="benefit" className="w-full" />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                    <img
                                        src={PlayCircle}
                                        alt="Video Banner"
                                        className="w-16 h-16"
                                    />
                                </div>
                            </div>
                            <div className="mt-2">
                                <p className="text-darkGray font-medium text-xs mb-3">
                                    Marketing &amp; Communication
                                </p>
                                <p className="text-primary text-xl md:text-2xl 2xl:text-3xl font-bold md:leading-7">
                                    asdasd
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col">
                            <div className="relative">
                                <img src={Team1} alt="benefit" className="w-full" />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                    <img
                                        src={PlayCircle}
                                        alt="Video Banner"
                                        className="w-16 h-16"
                                    />
                                </div>
                            </div>
                            <div className="mt-2">
                                <p className="text-darkGray font-medium text-xs mb-3">
                                    Marketing &amp; Communication
                                </p>
                                <p className="text-primary text-xl md:text-2xl 2xl:text-3xl font-bold md:leading-7">
                                    asdasd
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col">
                            <div className="relative">
                                <img src={Team1} alt="benefit" className="w-full" />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                    <img
                                        src={PlayCircle}
                                        alt="Video Banner"
                                        className="w-16 h-16"
                                    />
                                </div>
                            </div>
                            <div className="mt-2">
                                <p className="text-darkGray font-medium text-xs mb-3">
                                    Marketing &amp; Communication
                                </p>
                                <p className="text-primary text-xl md:text-2xl 2xl:text-3xl font-bold md:leading-7">
                                    asdasd
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="text-primary text-2xl 2xl:text-3xl mb-4 font-bold mt-16">
                    Our incredible Partners
                </h3>
                <div className="flex">
                    <div className="relative flex-1">
                        <img src={VideoImage} alt="video" className="w-full" />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
                            <img src={PlayCircle} alt="Video Banner" className='w-16 h-16' />
                        </div>
                    </div>
                    <div className="flex-1 bg-skyBlue py-16 px-10">
                        <h2 className="text-primary font-bold text-2xl">
                            The extra jobs allowed me to become an entrepreneur and laid down
                            a path to financial freedom.
                        </h2>
                        <div className="flex gap-2 mt-5">
                            <div>
                                <img src={EllipseGirl} alt="ellipse" />
                            </div>
                            <div className="flex-1 flex justify-start items-center">
                                <p className="text-primary w-full">Julia Gomez, Cleaner Zürich <span className="inline-block text-darkGray w-full">Delivered 100+ Jobs on Completly</span> </p>

                            </div>
                        </div>
                        <div className="flex justify-end mt-8">
                            <div className="w-max opacity-50 mr-4">
                                <button
                                    className="flex justify-center items-center h-10 w-10 rounded-full bg-white transform -rotate-180 p-2"
                                >
                                    <img src={sliderArrow} alt="arrow" className="w-4" />
                                </button>
                            </div>
                            <div className="w-max">
                                <button
                                    className="flex justify-center items-center h-10 w-10 rounded-full bg-white p-2"
                                >
                                    <img src={sliderArrow} alt="arrow" className="w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Team;
