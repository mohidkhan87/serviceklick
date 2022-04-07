import React from 'react'

import HeaderWithPoster from '../../../components/shared/navigation/HeaderWithPoster';
import Container from '../../ui/Container'
import PlayStore from "../../../assets/images/pages/homepage/play-store.svg";
import AppStore from "../../../assets/images/pages/homepage/app-store.svg";
import QrCode from "../../../assets/images/pages/homepage/qr-code.svg";
import Rating from '../../../assets/images/pages/completly-business/ratings.png'

const Poster = () => {
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
                <div className='lg:block w-full rounded-ellipseCurveCenter bg-skyBlue py-20 z-10'>
                    <Container>
                        <div className='flex'>
                            <div>
                                <h1 className='text-primary font-bold text-4xl'>
                                    Work when you want,<br /> doing whatever you<br /> want.
                                </h1>
                                <p className='text-darkGray font-medium mt-4'>Dowload our App and Sign-Up to start growing your business.</p>
                                <div className="flex flex-row flex-wrap gap-2 mt-5">
                                    <img src={PlayStore} alt="" className="w-40" />
                                    <img src={AppStore} alt="" className="w-40" />
                                    <img src={QrCode} alt="" className="w-40" />
                                </div>
                                <div className='mt-5'>
                                    <img src={Rating} alt="" className="w-full" />
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Poster