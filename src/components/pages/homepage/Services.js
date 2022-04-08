import { useState } from "react";
import React from "react";

import Container from "../../ui/Container";
import SliderDetail from "./SliderDetail";

import CleaningPoster from "../../../assets/images/pages/homepage/cleaning/banner.png";
import Slide1 from "../../../assets/images/pages/homepage/cleaning/slide-1.png";
import Slide2 from "../../../assets/images/pages/homepage/cleaning/slide-2.png";
import Slide3 from "../../../assets/images/pages/homepage/cleaning/slide-3.png";
import Slide4 from "../../../assets/images/pages/homepage/cleaning/slide-4.png";
import HandymanPoster from "../../../assets/images/pages/homepage/handyman/banner.png";
import HospitalPoster from "../../../assets/images/pages/homepage/hospitality/banner.png";
import WellnessPoster from "../../../assets/images/pages/homepage/wellness/banner.png";

import WellnessSlide1 from "../../../assets/images/pages/homepage/wellness/slide-1.png";
import WellnessSlide2 from "../../../assets/images/pages/homepage/wellness/slide-2.png";
import WellnessSlide3 from "../../../assets/images/pages/homepage/wellness/slide-3.png";
import WellnessSlide4 from "../../../assets/images/pages/homepage/wellness/slide-4.png";

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
  //   Slider Images
  const sliderData = [
    {
      id: 1,
      title: Slide1,
    },
    {
      id: 2,
      title: Slide2,
    },
    {
      id: 3,
      title: Slide3,
    },
    {
      id: 4,
      title: Slide4,
    },
    {
      id: 5,
      title: Slide1,
    }
  ];
  const sliderData2 = [
    {
      id: 1,
      title: Slide1,
    },
    {
      id: 2,
      title: Slide2,
    },
    {
      id: 3,
      title: Slide3,
    },
    {
      id: 4,
      title: Slide4,
    },
    {
      id: 5,
      title: Slide1,
    }
  ];
  const sliderData3 = [
    {
      id: 1,
      title: Slide1,
    },
    {
      id: 2,
      title: Slide2,
    },
    {
      id: 3,
      title: Slide3,
    }
  ];
  const sliderData4 = [
    {
      id: 1,
      title: WellnessSlide1,
    },
    {
      id: 2,
      title: WellnessSlide2,
    },
    {
      id: 3,
      title: WellnessSlide3,
    },
    {
      id: 4,
      title: WellnessSlide4,
    }
  ];

  return (
    <div className="mb-16">
      <Container>
        <div className="mb-4 border-b border-darkGray overflow-x-scroll scrollbar-none border-opacity-50">
          <ul className="flex">
            {tabs.map((item, index) => (
              <li
                className="cursor-pointer"
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
                  <div
                    className={"inline-block pb-1 px-2 md:text-xl text-sm font-semibold text-darkGray text-center border-b-2 transition-colors duration-200 ease-in-out " +
                      (openTab === index
                        ? "border-secondary"
                        : "border-transparent")
                    }
                    onClick={() => handleTab(index)}>
                    {item.title}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className={openTab === 0 ? "block" : "hidden"}>
            <SliderDetail showSearch={false} banner={CleaningPoster} bannerTitle="Get Best Deal On Home Cleaning" bannerDesc="See how the swiss household letclean their home in just few clicks." sliderData={sliderData} />
          </div>
          <div className={openTab === 1 ? "block" : "hidden"}>
            <SliderDetail showSearch={false} banner={HandymanPoster} bannerTitle="These annoying chores used to eat up your entire weekend. Not anymore" bannerDesc="See how the swiss household letclean their home in just few clicks." sliderData={sliderData2} />
          </div>
          <div className={openTab === 2 ? "block" : "hidden"}>
            <SliderDetail showSearch={false} banner={HospitalPoster} bannerTitle="Throwing a great party takes a lot of planing/cooking.Or just a great Chef Start for all your events. " bannerDesc="See how the swiss household letclean their home in just few clicks." sliderData={sliderData3} />
          </div>
          <div className={openTab === 3 ? "block" : "hidden"}>
            <SliderDetail showSearch={true} banner={WellnessPoster} bannerTitle="Coming soon !" bannerDesc="enter your email below and as soon as your area is covered you will receive an email notification with a welcome credit of CHF 20.- for your 1st Wellness." sliderData={sliderData4} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
