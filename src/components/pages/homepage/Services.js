import { useState } from "react";
import React from "react";
import Container from "../../ui/Container";
import CleaningPoster from "../../../assets/images/pages/homepage/cleaning-poster.svg";
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
  const handleTab = (tabNumber) => {
    setOpenTab(tabNumber);
  };
  //   Slider Options
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
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
        <div className="mb-4 border-b border-darkGray border-opacity-50">
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
                    <span className="block text -xs text-center w-full text-darkGray">
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
                      "inline-block pb-2 pl-2 pr-4 text-xl font-semibold text-center hover:text-secondary border-b-2 hover:border-secondary transition-all duration-200 ease-in-out " +
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
                  <div className="inline-block pb-2 px-2 text-xl font-medium text-darkGray border-transparent text-center border-b-2 transition-all duration-200 ease-in-out">
                    {item.title}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className={openTab === 0 ? "block" : "hidden"}>
            <div>
              <img src={CleaningPoster} alt="" />
            </div>
            {/* Slider */}
            <div className="mt-4">
              <Slider {...settings}>
                {sliderData.map((arr) => (
                  <div className="pr-4 pl-0">
                    <img src={arr.title} alt="" />
                  </div>
                ))}
              </Slider>
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
