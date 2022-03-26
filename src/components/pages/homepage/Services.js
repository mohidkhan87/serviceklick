import { useState } from "react";
import React from "react";
import Container from "../../ui/Container";
import CleaningPoster from "../../../assets/images/pages/homepage/cleaning-poster.svg";
import sliderArrow from "../../../assets/images/pages/homepage/slider/slider-arrow.svg";
import Image1 from "../../../assets/images/pages/homepage/slider/slide-1.svg";
import Image2 from "../../../assets/images/pages/homepage/slider/slide-2.svg";
import Image3 from "../../../assets/images/pages/homepage/slider/slide-3.svg";
// Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Services = () => {
  const [openTab, setOpenTab] = useState(0);
  const tabsData = [
    { isDisabled: false, title: "Cleaning" },
    { isDisabled: false, title: "Handyman" },
    { isDisabled: false, title: "Hospitality" },
    { isDisabled: true, title: "Wellness" },
  ];
  const [tabs] = useState(tabsData);
  const [sliderRef, setSliderRef] = useState(null); // set the slider
  let [slideBack, setSlideBack] = useState(0);

  //
  const handleTab = (tabNumber) => {
    setOpenTab(tabNumber);
  };
  //   Slider Options
  let showSlides = 5;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    swipe: false,
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
          slidesToShow: 2,
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
      title: Image1,
    },
    {
      id: 2,
      title: Image2,
    },
    {
      id: 3,
      title: Image3,
    },
    {
      id: 4,
      title: Image1,
    },
    {
      id: 5,
      title: Image2,
    },
    {
      id: 6,
      title: Image3,
    },
    {
      id: 7,
      title: Image1,
    },
  ];

  return (
    <div className="mb-16">
      <Container>
        <div className="mb-4 border-b border-darkGray overflow-x-scroll scrollbar-none border-opacity-50">
          <ul className="flex">
            {tabs.map((item, index) => (
              <li
                className={
                  !item.isDisabled ? "cursor-pointer" : "cursor-not-allowed"
                }
                key={index}
              >
                <div className="h-8 flex items-end">
                  {item.isDisabled && (
                    <span className="block w-max mx-auto text-xs text-center text-darkGray">
                      Coming Soon
                    </span>
                  )}
                  {!item.isDisabled && (
                    <span className="block text-xs text-center w-full text-darkGray">
                      &nbsp;
                    </span>
                  )}
                </div>
                {!item.isDisabled && (
                  <div
                    className={
                      "inline-block pb-1 pl-2 pr-4 md:text-xl text-sm font-semibold text-center hover:text-secondary border-b-2 hover:border-secondary transition-colors duration-200 ease-in-out " +
                      (openTab === index
                        ? "text-secondary border-secondary"
                        : "text-primary border-transparent")
                    }
                    onClick={() => handleTab(index)}
                  >
                    {item.title}
                  </div>
                )}
                {item.isDisabled && (
                  <div className="inline-block pb-1 px-2 md:text-xl text-sm font-semibold text-darkGray border-transparent text-center border-b-2 transition-colors duration-200 ease-in-out">
                    {item.title}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className={openTab === 0 ? "block" : "hidden"}>
            <div className="w-full">
              <img
                src={CleaningPoster}
                alt="poster-service"
                className="w-full"
              />
            </div>
            {/* Slider */}
            <div className="relative mt-3">
              <Slider ref={setSliderRef} {...settings}>
                {sliderData.map((arr, index) => (
                  <div className="outline-none sm:pr-3 pr-2" key={index}>
                    <img src={arr.title} alt="" />
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
          <div className={openTab === 1 ? "block" : "hidden"}>2</div>
          <div className={openTab === 2 ? "block" : "hidden"}>3</div>
          <div className={openTab === 3 ? "block" : "hidden"}>4</div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
