import React from 'react'

import Container from '../../../ui/Container'
import './steps.css'

const Steps = () => {
    return (
        <div>
            <Container>
                <h3 className="text-primary text-2xl md:text-3xl 2xl:text-4xl mb-4 font-bold mt-16">
                    Start earning with Completely in four steps
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-x-5">
                    <div>
                        <div>
                            <div className='flex gap-4'>
                                <div>
                                    <p className='w-7 h-7 bg-secondary text-white rounded-full flex justify-center items-center'>1</p>
                                </div>
                                <div className='w-full h-7 flex items-center'>
                                    <div className='block w-full h-0.5 bg-customGray' />
                                </div>
                            </div>
                            <div className='mt-2'>
                                <h3 className='text-primary font-bold'>Apply online</h3>
                                <p className='text-primary font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='flex gap-4'>
                                <div>
                                    <p className='w-7 h-7 bg-secondary text-white rounded-full flex justify-center items-center'>2</p>
                                </div>
                                <div className='w-full h-7 flex items-center'>
                                    <div className='block w-full h-0.5 bg-customGray' />
                                </div>
                            </div>
                            <div className='mt-2'>
                                <h3 className='text-primary font-bold'>Phone interview</h3>
                                <p className='text-primary font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='flex gap-4'>
                                <div>
                                    <p className='w-7 h-7 bg-secondary text-white rounded-full flex justify-center items-center'>3</p>
                                </div>
                                <div className='w-full h-7 flex items-center'>
                                    <div className='block w-full h-0.5 bg-customGray' />
                                </div>
                            </div>
                            <div className='mt-2'>
                                <h3 className='text-primary font-bold'>Complete onboarding</h3>
                                <p className='text-primary font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='flex gap-4'>
                                <div>
                                    <p className='w-7 h-7 text-white rounded-full flex justify-center items-center' style={ { background: '#27A325' } }>
                                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.54247 10.29C5.26974 10.29 5.01065 10.1799 4.81974 9.98736L0.960653 6.09463C0.565199 5.69572 0.565199 5.03547 0.960653 4.63657C1.35611 4.23767 2.01065 4.23767 2.40611 4.63657L4.41313 6.42269C4.47094 6.47414 4.52433 6.53035 4.57274 6.59073C5.08948 7.23526 6.05232 7.28598 6.63392 6.69931L12.5516 0.730085C12.947 0.331183 13.6016 0.331183 13.997 0.730085C14.3925 1.12899 14.3925 1.78924 13.997 2.18814L6.2652 9.98736C6.07429 10.1799 5.8152 10.29 5.54247 10.29Z" fill="white" />
                                        </svg>
                                    </p>
                                </div>
                                <div className='w-full h-7 flex items-center'>
                                    <div className='block w-full h-0.5 bg-customGray' />
                                </div>
                            </div>
                            <div className='mt-2'>
                                <h3 className='text-primary font-bold'>Start working</h3>
                                <p className='text-primary font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Steps