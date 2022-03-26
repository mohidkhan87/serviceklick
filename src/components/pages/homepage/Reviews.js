import React from "react";
import Container from "../../ui/Container";
import profileEllipse from "../../../assets/images/pages/homepage/profile-ellipse.svg";
import profileImage from "../../../assets/images/pages/homepage/profile-img.svg";
import smallEllipse from "../../../assets/images/pages/homepage/small-ellipse.svg";
import largeEllipse from "../../../assets/images/pages/homepage/large-ellipse.svg";
import Ellipse1 from "../../../assets/images/pages/homepage/Ellipse1.svg";
import Ellipse2 from "../../../assets/images/pages/homepage/Ellipse2.svg";
import Ellipse3 from "../../../assets/images/pages/homepage/Ellipse3.svg";
import Ellipse4 from "../../../assets/images/pages/homepage/Ellipse4.svg";
import Ellipse5 from "../../../assets/images/pages/homepage/Ellipse5.svg";
import innerEllipse1 from "../../../assets/images/pages/homepage/inner-ellipse1.svg";
import innerEllipse2 from "../../../assets/images/pages/homepage/inner-ellipse2.svg";
import innerEllipse3 from "../../../assets/images/pages/homepage/inner-ellipse3.svg";
import innerEllipse4 from "../../../assets/images/pages/homepage/inner-ellipse4.svg";
import star from "../../../assets/images/pages/homepage/star.svg";

const Reviews = () => {
  return (
    <div className="w-full mb-28 sm:-mt-28 mt-6">
      <Container>
        <div className="relative w-full flex justify-center items-center">
          <div className="absolute sm:top-1/2 top-0 left-1/2 w-full transform -translate-x-1/2 sm:-translate-y-2/3 flex flex-col items-center px-2 z-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl transform scale-110  text-primary font-bold text-center mt-4">
              We’re Backed by You!
            </h1>
            <p className="text-xs 2xl:text-base text-center text-darkGray mt-1">
              Our Clients send us bunch of smilies with our services and we love
              them
            </p>
            <div className="relative sm:h-32 h-28 sm:w-32 w-28 transform scale-75 md:scale-100 2xl:scale-125 mt-2 sm:mt-5 2xl:mt-8">
              <img src={profileEllipse} alt="" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:h-28 h-24 sm:w-28 w-24 rounded-full">
                <img src={profileImage} alt="" />
              </div>
              {/* profile detail */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-6 ">
                <div className="absolute top-0 left-1/2 transform translate-y-2/3 -translate-x-1/2  rotate-45 h-6 w-6 bg-white rounded-br-full z-10"></div>
                <div className="profile-detail relative bg-white sm:p-6 p-3 rounded-md shadow-fade">
                  <p className="text-xs font-semibold text-center leading-5 sm:h-auto h-10 overflow-hidden">
                    "We are very pleased with the way Besnik handled our
                    purchase of a lake home. He was prompt, friendly, and very
                    knowledgeable. He followed up on any and all concerns.
                  </p>
                  <h1 className="mt-3 text-base sm:text-lg text-center font-bold">
                    Becky Nelson
                  </h1>
                  <div className="flex justify-center items-center font-semibold text-sm gap-1">
                    {[...Array(5)].map((arr, index) => (
                      <img src={star} key={index} alt="" className="w-3" />
                    ))}
                    5.0
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inner Circle */}
          <div className="inner-ellipse absolute top-1/2 left-1/2 xl:w-5/12 sm:w-8/12 w-7/12 rounded-full transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative transform -rotate-6">
              <img src={smallEllipse} alt="ellipse" className="w-full" />
              {/*  */}
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 scale-75 md:scale-100 2xl:scale-125 h-14 w-14 bg-gray-300 rounded-full">
                <img src={innerEllipse1} alt="" />
              </div>
              {/*  */}
              <div className="inner-ellipse-circle-2 absolute h-10 w-10 bg-gray-300 rounded-full transform scale-75 md:scale-100 2xl:scale-125">
                <img src={innerEllipse2} alt="" />
              </div>
              {/*  */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 scale-75 md:scale-100 2xl:scale-125 h-16 w-16 bg-gray-300 rounded-full">
                <img src={innerEllipse3} alt="" />
              </div>
              {/*  */}
              <div className="inner-ellipse-circle-4 absolute h-14 w-14 bg-gray-300 rounded-full transform scale-75 md:scale-100 2xl:scale-125">
                <img src={innerEllipse4} alt="" />
              </div>
            </div>
          </div>

          {/* Outer Circle */}
          <div className="relative xl:w-8/12 sm:w-11/12 w-10/12 transform rounded-full -rotate-6 sm:mt-0 mt-12">
            <img src={largeEllipse} alt="ellipse" className="m-0 w-full" />
            {/*  */}
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 scale-75 md:scale-100 2xl:scale-125 h-10 w-10 bg-gray-300 rounded-full">
              <img src={Ellipse1} alt="" />
            </div>
            {/*  */}
            <div className="ellipse-circle-2 absolute h-20 w-20 bg-gray-300 rounded-full transform scale-75 md:scale-100 2xl:scale-125">
              <img src={Ellipse2} alt="" />
            </div>
            {/*  */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 scale-75 md:scale-100 2xl:scale-125 h-14 w-14 bg-gray-300 rounded-full">
              <img src={Ellipse3} alt="" />
            </div>
            {/*  */}
            <div className="ellipse-circle-4 absolute sm:h-24 h-20 sm:w-24 w-20 bg-gray-300 rounded-full transform scale-75 md:scale-100 2xl:scale-125">
              <img src={Ellipse4} alt="" />
            </div>
            {/*  */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 scale-75 md:scale-100 2xl:scale-125 h-14 w-14 bg-gray-300 rounded-full">
              <img src={Ellipse5} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
