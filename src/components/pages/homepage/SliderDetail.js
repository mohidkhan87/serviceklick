import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import sliderArrow from "../../../assets/images/pages/homepage/slider/slider-arrow.svg";
import Location from "../../../assets/images/pages/homepage/location.png"

// Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderDetail = ({ banner, bannerTitle, bannerDesc, sliderData, showSearch }) => {
    let [slideBack, setSlideBack] = useState(0);
    const [sliderRef, setSliderRef] = useState(null);
    let showSlides = 4;
    const settings = {
        centerMode: false,
        dots: false,
        infinite: false,
        speed: 500,
        swipe: true,
        slidesToShow: showSlides,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: false,
                    infinite: true,
                    dots: false,
                    swipe: true,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    infinite: true,
                    dots: false,
                    swipe: true,
                },
            },
        ],
    };
    return (
        <div>
            <div className="w-full">
                <div className='relative'>
                    <img
                        src={banner}
                        alt="poster-service"
                        className="w-full"
                    />
                    <div className='w-full md:w-2/3 h-full top-0 absolute hidden md:flex items-center right-10'>
                        <div className='w-full h-max'>
                            <h2 className='font-bold text-primary text-lg xl:text-4xl text-right'>{bannerTitle}</h2>
                            <p className='font-medium text-primary mt-5 text-right'>{bannerDesc}</p>
                            { showSearch && (
                                <div className='flex justify-end mt-2'>
                                    <div className="w-full md:w-1/2 bg-white">
                                        <div className="border h-full rounded-3xl py-0.5 pl-4 pr-1">
                                            <div className="flex h-full gap-4">
                                                <div className="flex-1">
                                                    <input
                                                        type="text"
                                                        placeholder="Email address"
                                                        className="outline-none w-full h-full text-xs text-primary py-1"
                                                    />
                                                </div>
                                                <div className="w-24">
                                                    <button className="bg-secondary w-full h-full rounded-full text-white font-bold text-xs py-2">
                                                        Search
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* Slider */}
            <div className="relative mt-3">
                <Slider ref={setSliderRef} {...settings}>
                    {sliderData.map((arr, index) => (
                        <div className="outline-none sm:pr-3 pr-2" key={index}>
                            <div className='relative flex justify-start'>
                                <div className='w-full'>
                                    <Link to='/'>
                                        <img src={arr.title} alt="" className='w-full' />
                                    </Link>
                                </div>
                                <div className='absolute bottom-4 px-4 w-full'>

                                    <div className='rounded-full bg-white px-4 py-2'>
                                        <p className='text-primary font-lg text-center font-medium'>Home Cleaning</p>
                                        <div className='flex justify-center'>
                                            <div><img src={Location} alt="Location" /></div>
                                            <div><p className='text-secondary text-sm font-medium'>8005, Zürich</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                {slideBack > 0 && (
                    <div
                        className="absolute top-0 left-0 h-full w-72 bg-gradient-to-l from-transparent to-white hidden md:flex items-center justify-start pl-5"
                        onClick={() => setSlideBack(--slideBack)}
                    >
                        <button
                            className=" flex justify-center items-center h-10 w-10 rounded-full bg-secondary transform -rotate-180 p-2"
                            onClick={sliderRef?.slickPrev}
                        >
                            <img src={sliderArrow} alt="arrow" className="w-4" />
                        </button>
                    </div>
                )}
                {slideBack < sliderData.length - showSlides && (
                    <div
                        className="absolute top-0 right-0 h-full w-72 bg-gradient-to-r from-transparent to-white hidden md:flex items-center justify-end pr-5"
                        onClick={() => setSlideBack(++slideBack)}
                    >
                        <button
                            className=" flex justify-center items-center h-10 w-10 rounded-full bg-secondary p-2"
                            onClick={sliderRef?.slickNext}
                        >
                            <img src={sliderArrow} alt="arrow" className="w-4" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SliderDetail