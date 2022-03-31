import React from 'react'

import HeaderWithPoster from '../../../components/shared/navigation/HeaderWithPoster';
import Container from '../../ui/Container'

const Poster = () => {
    return (
        <div className='relative'>
            <HeaderWithPoster background="transparent" textColor="primary" isAbsolute={true} />
            <div className='relative'>
                <div className='lg:block w-full rounded-ellipseCurveCenter bg-gradient-to-b from-gradientPink to-gradientBlue py-20 z-10'>
                    <h1 className='text-primary text-3xl font-bold text-center mt-16'>How can we help</h1>
                    <div className='flex justify-center mt-5'>
                        <div className='border h-full rounded-3xl mx-8 md:mx-0 py-1 pl-4 pr-1 w-full md:w-96 bg-white'>
                            <div className='flex h-full gap-4'>
                                <div className='flex-1'><input type='text' placeholder='Search for help articles' className='outline-none w-full h-full text-sm py-2' /></div>
                                <div className='w-32 h-full'><button className='bg-secondary w-full h-full rounded-full text-white font-bold text-xs py-2'>Search</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poster