import React, { useState } from 'react'

import Container from '../../ui/Container'
import PostCard from '../../../components/shared/cards/PostCard'

import Post1 from '../../../assets/images/pages/homepage/benefit.png'
import PlayCircle from '../../../assets/images/shared/play-circle.svg'

const HowToUse = () => {
    const [isClient, setIsClient] = useState("buyers");

    return (
        <div>
            <Container>
                
                <div className='flex justify-center'>
                    <div className="border-b-2 border-darkGray w-max mb-16">
                        <h1
                            className={`inline-block mr-2 transition duration-200 ease-linear sm:text-base text-sm sm:font-bold font-semibold -mb-0.5 cursor-pointer pb-2 ${isClient === "buyers"
                                    ? "text-secondary border-secondary border-b-2"
                                    : "opacity-60"
                                }`}
                            onClick={() => setIsClient("buyers")}
                        >
                            Buyers
                        </h1>

                        <h1
                            className={`inline-block ml-2 transition duration-200 ease-linear sm:text-base text-sm sm:font-bold font-semibold -mb-0.5 cursor-pointer pb-2 ${isClient === "sellers"
                                    ? "text-secondary border-secondary border-b-2"
                                    : "opacity-60"
                                }`}
                            onClick={() => setIsClient("sellers")}
                        >
                            Sellers
                        </h1>
                    </div>
                </div>

                <h2 className="text-primary text-3xl 2xl:text-4xl font-bold mb-5">
                    How to use Completely
                </h2>
                <div className="flex flex-row flex-wrap gap-4 mb-5">
                    <div>
                        <button className="bg-primary text-white px-4 py-2 border border-primary hover:text-white hover:bg-primary rounded-full cursor-pointer text-xs transition-colors duration-200 ease-in-out">Payment</button>
                    </div>
                    <div>
                        <button className="bg-white text-primary px-4 py-2 border border-primary hover:text-white hover:bg-primary rounded-full cursor-pointer text-xs transition-colors duration-200 ease-in-out">Cancellation</button>
                    </div>
                    <div>
                        <button className="bg-white text-primary px-4 py-2 border border-primary hover:text-white hover:bg-primary rounded-full cursor-pointer text-xs transition-colors duration-200 ease-in-out">Chef</button>
                    </div>
                    <div>
                        <button className="bg-white text-primary px-4 py-2 border border-primary hover:text-white hover:bg-primary rounded-full cursor-pointer text-xs transition-colors duration-200 ease-in-out">Payment</button>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 mb-16'>
                    <div><PostCard title="Getting Started with Completely" category="General" /></div>
                    <div><PostCard title="Getting Started with Completely" category="General" /></div>
                    <div><PostCard title="Getting Started with Completely" category="General" /></div>
                    <div><PostCard title="Getting Started with Completely" category="General" /></div>
                </div>
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
            </Container>
        </div>
    )
}

export default HowToUse