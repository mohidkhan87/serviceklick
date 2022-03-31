import React from "react";

import Container from "../ui/Container";

import Post1 from '../../assets/images/pages/homepage/benefit.png'
import PlayCircle from '../../assets/images/shared/play-circle.svg'
import AdBackground from "../../assets/images/shared/ellipse-gray.png";
import UpperAd from "../../assets/images/pages/how-it-works/ad.png";

const ServiceAd = () => {
  return (
    <Container>
      <h2 className="text-primary font-bold text-3xl mb-4">Finding Local Professionals with Completely</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10'>
        <div>
          <div className='relative'>
            <img src={Post1} alt="Post" className='w-full' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
              <img src={PlayCircle} alt="Circle" className='w-16 h-16' />
            </div>
          </div>
          <h2 className='text-primary font-bold mt-2'>How to find local professionals for pretty much anything.</h2>
        </div>
        <div>
          <div className='relative'>
            <img src={Post1} alt="Post" className='w-full' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
              <img src={PlayCircle} alt="Circle" className='w-16 h-16' />
            </div>
          </div>
          <h2 className='text-primary font-bold mt-2'>How to find local professionals for pretty much anything.</h2>
        </div>
        <div>
          <div className='relative'>
            <img src={Post1} alt="Post" className='w-full' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
              <img src={PlayCircle} alt="Circle" className='w-16 h-16' />
            </div>
          </div>
          <h2 className='text-primary font-bold mt-2'>How to find local professionals for pretty much anything.</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-0 md:gap-12 gap-20 my-16">
        <div className="flex flex-col justify-start">
          <div className=" 2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-bold">
            Why Completely
          </div>
          <div className="mt-8">
            <h3 className="text-secondary font-bold text-2xl">Completely app benefit #1</h3>
            <p className="text-primary text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              morbi ut cursus dui pharetra, fusce. Pharetra risus urna, vitae
              diam.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-secondary font-bold text-2xl">Completely app benefit #2</h3>
            <p className="text-primary text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              morbi ut cursus dui pharetra, fusce. Pharetra risus urna, vitae
              diam.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-secondary font-bold text-2xl">Completely app benefit #3</h3>
            <p className="text-primary text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              morbi ut cursus dui pharetra, fusce. Pharetra risus urna, vitae
              diam.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-secondary font-bold text-2xl">Completely app benefit #4</h3>
            <p className="text-primary text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              morbi ut cursus dui pharetra, fusce. Pharetra risus urna, vitae
              diam.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="relative flex items-end pb-20">
            <img src={AdBackground} alt="background ellipse" />
            <div className="absolute top-0 left-0 h-full xl:w-full w-8/12 flex justify-center items-center transform xl:translate-y-0 lg:-translate-y-1 md:-translate-y-2.5 -translate-y-  5">
              <img
                src={UpperAd}
                alt="upper-img"
                className="w-2/3 relative mt-7 z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServiceAd;
