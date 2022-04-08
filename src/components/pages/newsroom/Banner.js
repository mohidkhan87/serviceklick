import React from 'react'
import { Link } from 'react-router-dom'

import Container from '../../ui/Container'
import BannerImage from '../../../assets/images/pages/newsroom/banner-image.png'

const Banner = () => {
    return (
        <div>
            <Container>
                <div className='flex bg-darkYellow rounded-lg'>
                    <div className='flex-1'>
                        <div className='flex flex-col justify-center items-center h-full w-2/3 mx-auto py-16'>
                            <h3 className='text-primary font-bold text-3xl'>
                                How to get a Private Chef for your event.
                            </h3>
                            <p className='w-full mt-4'>
                                <Link to="/" className='pb-1 border-b border-primary'>Learn more</Link>
                            </p>
                        </div>
                    </div>
                    <div className='flex-1 hidden xl:flex'>
                        <div>
                            <img src={BannerImage} alt="banner-post" className='rounded-r-lg' />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner