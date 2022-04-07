import React from 'react'

import HeaderWithPoster from '../../../components/shared/navigation/HeaderWithPoster';

import Banner from '../../../assets/images/pages/about-us/poster.png'

const Poster = () => {
    return (
        <div className='relative'>
            <div className='relative z-30'>
                <HeaderWithPoster background="white" textColor="primary" isAbsolute={false} />
            </div>
            <div className='relative'>
                <div className='w-full'>
                    <div className='relative'>
                        <img src={Banner} alt="Banner" className='w-full' />
                        <div className='absolute right-20 top-20'>
                            <h1 className='text-6xl font-bold text-white'>About Us</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poster