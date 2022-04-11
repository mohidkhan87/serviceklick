import React, { useState, useRef, useEffect } from 'react'

import Container from '../../../ui/Container'
import './steps.css'

const Steps = () => {
    const [state, setState] = useState(0)
    const currentStep = useRef(0)
    const isElementVisible = useRef()
    const [elementVisible, setElementVisible] = useState()
    const Empty = 'border-dashed border-secondary bg-white text-primary'
    const Green = 'border-timelineGreen bg-timelineGreen'
    const Red = 'border-secondary bg-secondary text-white'
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const animation = () => {
        if (currentStep.current < 4) {
            currentStep.current += 1
            const timer = setTimeout(() => {
                setState(state + 1)
            }, 1000)
            return () => clearTimeout(timer)
        }
    }

    useEffect(() => {
        if (elementVisible) {
            animation()
        }
    }, [animation, elementVisible]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setElementVisible(entry.isIntersecting)
        })
        observer.observe(isElementVisible.current)
    }, []);

    return (
        <div>
            <Container>
                <h3 className="text-primary text-2xl md:text-3xl 2xl:text-4xl mb-4 font-bold mt-16">
                    Start earning with Completely in four steps
                </h3>
                <div ref={isElementVisible} className="grid grid-cols-1 md:grid-cols-4 gap-x-5">
                    <div>
                        <div>
                            <div className='flex gap-4'>
                                <div>
                                    <p className={`w-7 h-7 border rounded-full flex justify-center items-center transition duration-300 ease-in-out ${currentStep.current === 0 ? Empty : currentStep.current === 1 ? Green : Red}`}>
                                        {currentStep.current !== 1 && 1}
                                        {currentStep.current === 1 &&
                                            (
                                                <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.54247 10.29C5.26974 10.29 5.01065 10.1799 4.81974 9.98736L0.960653 6.09463C0.565199 5.69572 0.565199 5.03547 0.960653 4.63657C1.35611 4.23767 2.01065 4.23767 2.40611 4.63657L4.41313 6.42269C4.47094 6.47414 4.52433 6.53035 4.57274 6.59073C5.08948 7.23526 6.05232 7.28598 6.63392 6.69931L12.5516 0.730085C12.947 0.331183 13.6016 0.331183 13.997 0.730085C14.3925 1.12899 14.3925 1.78924 13.997 2.18814L6.2652 9.98736C6.07429 10.1799 5.8152 10.29 5.54247 10.29Z" fill="white" />
                                                </svg>
                                            )
                                        }
                                    </p>
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
                                    <p className={`w-7 h-7 border rounded-full flex justify-center items-center transition duration-300 ease-in-out ${currentStep.current === 0 || currentStep.current === 1 ? Empty : currentStep.current === 2 ? Green : Red}`}>
                                        {currentStep.current !== 2 && 2}
                                        {currentStep.current === 2 &&
                                            (
                                                <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.54247 10.29C5.26974 10.29 5.01065 10.1799 4.81974 9.98736L0.960653 6.09463C0.565199 5.69572 0.565199 5.03547 0.960653 4.63657C1.35611 4.23767 2.01065 4.23767 2.40611 4.63657L4.41313 6.42269C4.47094 6.47414 4.52433 6.53035 4.57274 6.59073C5.08948 7.23526 6.05232 7.28598 6.63392 6.69931L12.5516 0.730085C12.947 0.331183 13.6016 0.331183 13.997 0.730085C14.3925 1.12899 14.3925 1.78924 13.997 2.18814L6.2652 9.98736C6.07429 10.1799 5.8152 10.29 5.54247 10.29Z" fill="white" />
                                                </svg>
                                            )
                                        }
                                    </p>
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
                                    <p className={`w-7 h-7 border rounded-full flex justify-center items-center transition duration-300 ease-in-out ${currentStep.current === 0 || currentStep.current === 1 || currentStep.current === 2 ? Empty : currentStep.current === 3 ? Green : Red}`}>
                                        {currentStep.current !== 3 && 3}
                                        {currentStep.current === 3 &&
                                            (
                                                <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.54247 10.29C5.26974 10.29 5.01065 10.1799 4.81974 9.98736L0.960653 6.09463C0.565199 5.69572 0.565199 5.03547 0.960653 4.63657C1.35611 4.23767 2.01065 4.23767 2.40611 4.63657L4.41313 6.42269C4.47094 6.47414 4.52433 6.53035 4.57274 6.59073C5.08948 7.23526 6.05232 7.28598 6.63392 6.69931L12.5516 0.730085C12.947 0.331183 13.6016 0.331183 13.997 0.730085C14.3925 1.12899 14.3925 1.78924 13.997 2.18814L6.2652 9.98736C6.07429 10.1799 5.8152 10.29 5.54247 10.29Z" fill="white" />
                                                </svg>
                                            )
                                        }
                                    </p>
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
                                    <p className={`w-7 h-7 border rounded-full flex justify-center items-center transition duration-300 ease-in-out ${currentStep.current === 0 || currentStep.current === 1 || currentStep.current === 2 || currentStep.current === 3 ? Empty : currentStep.current === 4 && Green}`}>
                                        {currentStep.current !== 4 && 4}
                                        {currentStep.current === 4 &&
                                            (
                                                <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.54247 10.29C5.26974 10.29 5.01065 10.1799 4.81974 9.98736L0.960653 6.09463C0.565199 5.69572 0.565199 5.03547 0.960653 4.63657C1.35611 4.23767 2.01065 4.23767 2.40611 4.63657L4.41313 6.42269C4.47094 6.47414 4.52433 6.53035 4.57274 6.59073C5.08948 7.23526 6.05232 7.28598 6.63392 6.69931L12.5516 0.730085C12.947 0.331183 13.6016 0.331183 13.997 0.730085C14.3925 1.12899 14.3925 1.78924 13.997 2.18814L6.2652 9.98736C6.07429 10.1799 5.8152 10.29 5.54247 10.29Z" fill="white" />
                                                </svg>
                                            )
                                        }
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