import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Container from '../../ui/Container'

import Image1 from "../../../assets/images/pages/about-us/team-1.png";
import Image2 from "../../../assets/images/pages/about-us/team-2.png";
import Image3 from "../../../assets/images/pages/about-us/team-3.png";
import sliderArrow from "../../../assets/images/pages/homepage/slider/slider-arrow.svg";


// Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TeamSlider = () => {

    const [sliderRef, setSliderRef] = useState(null); // set the slider
    let [slideBack, setSlideBack] = useState(0);

    const showSlides = 5;
    const settings = {
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
                    centerMode: true,
                    infinite: true,
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
                    infinite: true,
                    dots: false,
                    swipe: true,
                },
            },
        ],
    };

    const sliderData = [
        {
            id: 1,
            img: Image1,
            name: 'Sandro Clemente',
            position: 'CEO & Co-Founder'
        },
        {
            id: 2,
            img: Image2,
            name: 'Flavio Dias',
            position: 'CFO & Co-Founder'
        },
        {
            id: 3,
            img: Image3,
            name: 'Caterina Fadda',
            position: 'Customer Care'
        },
        {
            id: 4,
            img: Image2,
            name: 'Paula Martins',
            position: 'Product Manager'
        },
        {
            id: 5,
            img: Image3,
            name: 'Caterina Fadda',
            position: 'Customer Care'
        },
        {
            id: 6,
            img: Image3,
            name: 'Caterina Fadda',
            position: 'Customer Care'
        }
    ];

    return (
        <div>
            <Container>
                <h2 className='text-primary font-bold text-3xl'>Meet the team</h2>
                {/* Slider */}
                <div className="relative mt-3">
                    <Slider ref={setSliderRef} {...settings}>
                        {sliderData.map((arr, index) => (
                            <div className="outline-none sm:pr-3 pr-2" key={index}>
                                <Link to='/about-us'>
                                    <img src={arr.img} alt="w-full" />
                                </Link>
                                <h2 className='text-primary text-xl font-bold mt-2'>
                                    {arr.name}
                                </h2>
                                <p className='text-darkGray mt-1'>
                                    {arr.position}
                                </p>
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

export default TeamSlider