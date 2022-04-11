import React from 'react'

import HeaderWithPoster from '../../../components/shared/navigation/HeaderWithPoster';
import Container from '../../ui/Container'

const Poster = () => {
    return (
        <section className='relative'>
            <div className='relative z-30'>
                <HeaderWithPoster isAbsolute={false} />
            </div>
            <div className='border-t py-1 z-20'>
                <Container>
                    <div className="flex flex-row flex-wrap gap-2">
                        <div>
                            <button className="bg-primary text-white px-2.5 sm:px-4 py-2 border border-primary hover:text-white hover:bg-primary rounded-full cursor-pointer text-xs transition-colors duration-200 ease-in-out">Payment</button>
                        </div>
                        <div>
                            <button className="bg-white text-darkGray px-2.5 sm:px-4 py-2 cursor-pointer text-xs transition-colors duration-200 ease-in-out">Cancellation</button>
                        </div>
                        <div>
                            <button className="bg-white text-darkGray px-2.5 sm:px-4 py-2 cursor-pointer text-xs transition-colors duration-200 ease-in-out">Chef</button>
                        </div>
                        <div>
                            <button className="bg-white text-darkGray px-2.5 sm:px-4 py-2 cursor-pointer text-xs transition-colors duration-200 ease-in-out">Payment</button>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='relative'>
                <div className='lg:block w-full rounded-ellipseCurveCenter bg-gradient-to-b from-gradientPink to-gradientBlue py-20 z-10 relative'>
                    <div className='absolute w-full h-full bg-white top-0 left-0 bg-opacity-40'></div>
                    <h1 className='text-primary text-3xl font-bold text-center relative'>How can we help</h1>
                    <div className='flex justify-center mt-5 relative'>
                        <div className='border h-full rounded-3xl mx-8 md:mx-0 py-1 pl-4 pr-1 w-full md:w-96 bg-white'>
                            <div className='flex h-full gap-4'>
                                <div className='flex-1'><input type='text' placeholder='Search for help articles' className='outline-none w-full h-full text-sm py-2' /></div>
                                <div className='w-32 h-full'><button className='bg-secondary w-full h-full rounded-full text-white font-bold text-xs py-2'>Search</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Poster