import React, { useState } from 'react'

import HeaderWithPoster from '../../../components/shared/navigation/HeaderWithPoster';
import Container from '../../ui/Container'
import CustomModalVideo from '../../shared/CustomModalVideo';

import SmallBanner from '../../../assets/images/pages/how-it-works/small-banner.png'
import PlayCircle from "../../../assets/images/shared/play-circle.svg";

import Post1 from '../../../assets/images/pages/homepage/benefit.png'

const Poster = () => {
    const [isClient, setIsClient] = useState("buyers");
    const [isOpen, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!isOpen)
    }

    return (
        <div className='relative'>
            <HeaderWithPoster background="white" textColor="primary" isAbsolute={false} />
            <div className='border-t py-1 z-20'>
                <Container>
                    <div className="flex flex-row flex-wrap gap-5">
                        <div>
                            <button className="bg-primary text-white px-4 py-2 border border-primary hover:text-white hover:bg-primary rounded-full cursor-pointer text-xs transition-colors duration-200 ease-in-out">Payment</button>
                        </div>
                        <div>
                            <button className="bg-white text-darkGray px-4 py-2 cursor-pointer text-xs transition-colors duration-200 ease-in-out">Cancellation</button>
                        </div>
                        <div>
                            <button className="bg-white text-darkGray px-4 py-2 cursor-pointer text-xs transition-colors duration-200 ease-in-out">Chef</button>
                        </div>
                        <div>
                            <button className="bg-white text-darkGray px-4 py-2 cursor-pointer text-xs transition-colors duration-200 ease-in-out">Payment</button>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='relative'>
                <div className='lg:block w-full rounded-ellipseCurveCenter bg-gradient-to-b from-gradientPink to-gradientBlue py-32 z-10'>
                    <h1 className='text-primary text-3xl font-bold text-center'>How it Works</h1>
                    <div className='flex justify-center mt-5'>
                        <div className='flex justify-center'>
                            <div className="border-b-2 border-darkGray w-max mb-16">
                                <h1
                                    className={`inline-block mr-2 transition duration-200 ease-linear sm:text-base text-sm sm:font-bold font-semibold -mb-0.5 cursor-pointer pb-2 ${isClient === "buyers"
                                        ? "text-secondary border-secondary border-b-2"
                                        : "opacity-60"
                                        }`}
                                    onClick={() => setIsClient("buyers")}
                                >
                                    Hiring Professionals
                                </h1>

                                <h1
                                    className={`inline-block ml-2 transition duration-200 ease-linear sm:text-base text-sm sm:font-bold font-semibold -mb-0.5 cursor-pointer pb-2 ${isClient === "sellers"
                                        ? "text-secondary border-secondary border-b-2"
                                        : "opacity-60"
                                        }`}
                                    onClick={() => setIsClient("sellers")}
                                >
                                    Finding Customers
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CustomModalVideo isOpen={isOpen} handleOpen={handleOpen} />
            <div className='flex justify-center -mt-32 mb-16'>
                <div className='w-max relative'>
                    <img src={SmallBanner} alt="banner" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" onClick={() => handleOpen()}>
                        <img
                            src={PlayCircle}
                            alt="Video Banner"
                            className="w-16 h-16"
                        />
                    </div>
                </div>
            </div>
            <Container>
                <h2 className="text-primary font-bold text-3xl mb-4">Finding Local Professionals with Completely</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10'>
                    <div>
                        <div className='relative'>
                            <img src={Post1} alt="Post" className='w-full' />
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer' onClick={() => handleOpen()}>
                                <img src={PlayCircle} alt="Circle" className='w-16 h-16' />
                            </div>
                        </div>
                        <h2 className='text-primary font-bold mt-2'>How to find local professionals for pretty much anything.</h2>
                    </div>
                    <div>
                        <div className='relative'>
                            <img src={Post1} alt="Post" className='w-full' />
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer' onClick={() => handleOpen()}>
                                <img src={PlayCircle} alt="Circle" className='w-16 h-16' />
                            </div>
                        </div>
                        <h2 className='text-primary font-bold mt-2'>How to find local professionals for pretty much anything.</h2>
                    </div>
                    <div>
                        <div className='relative'>
                            <img src={Post1} alt="Post" className='w-full' />
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer' onClick={() => handleOpen()}>
                                <img src={PlayCircle} alt="Circle" className='w-16 h-16' />
                            </div>
                        </div>
                        <h2 className='text-primary font-bold mt-2'>How to find local professionals for pretty much anything.</h2>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Poster