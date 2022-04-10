import React, { useState } from 'react'

import Container from '../../ui/Container'

import CalendarTick from "../../../assets/images/pages/categories/calendar-tick.png";
import sliderArrow from "../../../assets/images/pages/homepage/slider/slider-arrow.svg";

// Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./trustslider.css"
const CitiesSlider = () => {

    const [sliderRef, setSliderRef] = useState(null); // set the slider
    let [slideBack, setSlideBack] = useState(0);

    const showSlides = 2;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        swipe: true,
        centerMode: true,
        centerPadding: '5%',
        slidesToScroll: 1,
        slidesToShow: showSlides,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '5%',
                    infinite: false,
                    dots: false,
                    swipe: true,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '5%',
                    infinite: false,
                    dots: false,
                    swipe: true,
                },
            },
        ],
    };

    const sliderData = [
        {
            id: 1,
            title: 'Experienced',
            desc: 'When you book office cleaning services through Serviceklick, you’re booking much more than just mops and dusters. The best office cleaning professionals come with a wealth of experience and expertise behind them. While you might know how to keep your workplace ordered, a professional office cleaner will know the best ways to properly clean, dust and sanitize. When you use Serviceklick to find office cleaning services, you can be sure that your office will always look its best. Not only will it boost the general mood of employees, but it could even reduce the potential for sick days, as allergens and dust are dealt with in short order. ',
        },
        {
            id: 2,
            title: 'Experienced',
            desc: 'When you book office cleaning services through Serviceklick, you’re booking much more than just mops and dusters. The best office cleaning professionals come with a wealth of experience and expertise behind them. While you might know how to keep your workplace ordered, a professional office cleaner will know the best ways to properly clean, dust and sanitize. When you use Serviceklick to find office cleaning services, you can be sure that your office will always look its best. Not only will it boost the general mood of employees, but it could even reduce the potential for sick days, as allergens and dust are dealt with in short order. ',
        },
        {
            id: 3,
            title: 'Experienced',
            desc: 'When you book office cleaning services through Serviceklick, you’re booking much more than just mops and dusters. The best office cleaning professionals come with a wealth of experience and expertise behind them. While you might know how to keep your workplace ordered, a professional office cleaner will know the best ways to properly clean, dust and sanitize. When you use Serviceklick to find office cleaning services, you can be sure that your office will always look its best. Not only will it boost the general mood of employees, but it could even reduce the potential for sick days, as allergens and dust are dealt with in short order. ',
        },
    ];

    return (
        <div>
            <Container>
                <h2 className='text-primary font-bold text-3xl'>The Trusted Name in Office Cleaning</h2>
                {/* Slider */}
                <div className="relative mt-3">
                    <Slider ref={setSliderRef} {...settings}>
                        {sliderData.map((arr, index) => (
                            <div className="outline-none sm:pr-5 pr-2" key={index}>
                                <div className='bg-skyBlue p-8'>
                                    <div className='flex justify-center mb-5'>
                                        <div className='w-max'>
                                            <img src={CalendarTick} alt="w-full" />
                                        </div>
                                    </div>

                                    <h2 className='text-primary text-center text-xl md:text-4xl font-bold mb-2 md:mb-8'>
                                        {arr.title}
                                    </h2>
                                    <p className='text-primary text-xs md:text-base text-center font-medium'>
                                        {arr.desc}
                                    </p>
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
            </Container>
        </div>
    )
}

export default CitiesSlider