import React from 'react'
import Container from '../../ui/Container'

import YoungMale from '../../../assets/images/pages/homepage/young-male-cleaner.png'

const Satisfaction = () => {
    return (
        <div>
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='flex-1'>
                        <img src={YoungMale} alt="young-male-cleaner-using-vacuum-cleaner" className='w-full' />
                    </div>
                    <div className='bg-lightGray flex-1 flex items-center px-5 lg:px-12 py-4 lg:py-12'>
                        <div>
                            <h2 className='text-primary font-bold text-2xl md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl'>Your satisfaction is, guaranteed.</h2>
                            <p className='text-darkGray text-base md:text-sm lg:text-base 2xl:text-lg mt-6'>
                                Your satisfaction is our goal. If you're not satisfied, we'll work
                                to make it right. Our friendly customer service
                                representatives are available 12 hours a day, 7 days a week.
                                The Serviceklick Satisfaction Guarantee only applies when
                                you book and pay for a service directly through the
                                Serviceklick platform.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Satisfaction