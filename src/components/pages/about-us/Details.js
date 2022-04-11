import React, { useEffect, useRef, useState } from "react";
import Container from "../../ui/Container";

const Details = () => {
    const [state, setState] = useState(0)
    const currentStep = useRef(0)
    const isElementVisible = useRef()
    const [elementVisible, setElementVisible] = useState()
    const Empty = 'border-dashed border-secondary bg-white'
    const Green = 'border-timelineGreen bg-timelineGreen'
    const Red = 'border-secondary bg-secondary'

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const animation = () => {
        if (currentStep.current < 6) {
            currentStep.current += 1
            const timer = setTimeout(() => {
                setState(state + 1)
            }, 700)
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
                <div className="mb-24">
                    <div className="w-full lg:w-2/3 mx-auto">
                        <h3 className="text-primary text-2xl">
                            We believe your weekends weren’t made for housework.
                        </h3>
                        <p className="text-primary text-base mt-5">
                            Serviceklick is the technology leader developing the modern home
                            management platform.
                        </p>
                        <p className="mt-4">
                            In an age where everything in our lives is increasingly connected,
                            we set out to bring your home and home services - a $500 billion
                            industry - into the 22nd century. Today, +6000 of people use
                            Serviceklick to safely manage their homes. We help you know what
                            to do, when to do it, and who to hire.
                        </p>
                        <p className="text-primary text-base mt-4">
                            At Serviceklick, we’re not just creating a new era of
                            homeownership. We’re supporting local economies and building
                            stronger communities. Each day, we connect local professionals
                            with busy homeowners, helping small businesses across the country
                            thrive. By leveling the playing field for businesses of all sizes,
                            we aim to give everyone a fair shot at success.
                        </p>
                    </div>
                </div>

                <div ref={isElementVisible} className="hidden lg:block w-full mx-auto mb-52">
                    <div className="bg-darkGray h-0.5 flex items-start justify-start">
                        <div className="w-3/12 bg-darkGray h-0.5 flex justify-center items-center">
                            <div className={`h-6 w-6 rounded-full shadow flex items-center justify-center relative border transition duration-300 ease-in-out ${currentStep.current === 0 ? Empty : currentStep.current === 1 ? Green : Red}`}>
                                {currentStep.current === 1 &&
                                    (
                                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.54247 10.29C5.26974 10.29 5.01065 10.1799 4.81974 9.98736L0.960653 6.09463C0.565199 5.69572 0.565199 5.03547 0.960653 4.63657C1.35611 4.23767 2.01065 4.23767 2.40611 4.63657L4.41313 6.42269C4.47094 6.47414 4.52433 6.53035 4.57274 6.59073C5.08948 7.23526 6.05232 7.28598 6.63392 6.69931L12.5516 0.730085C12.947 0.331183 13.6016 0.331183 13.997 0.730085C14.3925 1.12899 14.3925 1.78924 13.997 2.18814L6.2652 9.98736C6.07429 10.1799 5.8152 10.29 5.54247 10.29Z" fill="white" />
                                        </svg>
                                    )
                                }

                                <div className="absolute top-10 flex flex-col w-64 px-5">
                                    <p className="text-center text-darkGray">2022</p>
                                    <p className="text-center text-primary font-bold text-xl my-2">
                                        Timeline Event
                                    </p>
                                    <p className="text-center text-primary font-medium text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-3/12 bg-darkGray h-0.5 flex justify-center items-center">
                            <div className={`h-6 w-6 rounded-full shadow flex items-center justify-center relative border transition duration-300 ease-in-out ${currentStep.current === 0 || currentStep.current === 1 ? Empty : currentStep.current === 2 ? Green : Red}`}>
                                {currentStep.current === 2 &&
                                    (
                                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.54247 10.29C5.26974 10.29 5.01065 10.1799 4.81974 9.98736L0.960653 6.09463C0.565199 5.69572 0.565199 5.03547 0.960653 4.63657C1.35611 4.23767 2.01065 4.23767 2.40611 4.63657L4.41313 6.42269C4.47094 6.47414 4.52433 6.53035 4.57274 6.59073C5.08948 7.23526 6.05232 7.28598 6.63392 6.69931L12.5516 0.730085C12.947 0.331183 13.6016 0.331183 13.997 0.730085C14.3925 1.12899 14.3925 1.78924 13.997 2.18814L6.2652 9.98736C6.07429 10.1799 5.8152 10.29 5.54247 10.29Z" fill="white" />
                                        </svg>
                                    )
                                }
                                <div className="absolute top-10 flex flex-col w-64 px-5">
                                    <p className="text-center text-darkGray">2022</p>
                                    <p className="text-center text-primary font-bold text-xl my-2">
                                        Timeline Event
                                    </p>
                                    <p className="text-center text-primary font-medium text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-3/12 bg-darkGray h-0.5 flex justify-center items-center">
                            <div className={`h-6 w-6 rounded-full shadow flex items-center justify-center relative border transition duration-300 ease-in-out ${currentStep.current === 0 || currentStep.current === 1 || currentStep.current === 2 || currentStep.current === 3 ? Empty : currentStep.current === 4 ? Green : Red}`}>
                                {currentStep.current === 4 &&
                                    (
                                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.54247 10.29C5.26974 10.29 5.01065 10.1799 4.81974 9.98736L0.960653 6.09463C0.565199 5.69572 0.565199 5.03547 0.960653 4.63657C1.35611 4.23767 2.01065 4.23767 2.40611 4.63657L4.41313 6.42269C4.47094 6.47414 4.52433 6.53035 4.57274 6.59073C5.08948 7.23526 6.05232 7.28598 6.63392 6.69931L12.5516 0.730085C12.947 0.331183 13.6016 0.331183 13.997 0.730085C14.3925 1.12899 14.3925 1.78924 13.997 2.18814L6.2652 9.98736C6.07429 10.1799 5.8152 10.29 5.54247 10.29Z" fill="white" />
                                        </svg>
                                    )
                                }
                                <div className="absolute top-10 flex flex-col w-64 px-5">
                                    <p className="text-center text-darkGray">2022</p>
                                    <p className="text-center text-primary font-bold text-xl my-2">
                                        Timeline Event
                                    </p>
                                    <p className="text-center text-primary font-medium text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-3/12 bg-transparent h-0.5 flex justify-center items-center">
                            <div className={`h-6 w-6 rounded-full shadow flex items-center justify-center relative border transition duration-300 ease-in-out ${currentStep.current === 0 || currentStep.current === 1 || currentStep.current === 2 || currentStep.current === 3 || currentStep.current === 4 || currentStep.current === 5 ? Empty : currentStep.current === 6 && Green}`}>
                                {currentStep.current === 6 &&
                                    (
                                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.54247 10.29C5.26974 10.29 5.01065 10.1799 4.81974 9.98736L0.960653 6.09463C0.565199 5.69572 0.565199 5.03547 0.960653 4.63657C1.35611 4.23767 2.01065 4.23767 2.40611 4.63657L4.41313 6.42269C4.47094 6.47414 4.52433 6.53035 4.57274 6.59073C5.08948 7.23526 6.05232 7.28598 6.63392 6.69931L12.5516 0.730085C12.947 0.331183 13.6016 0.331183 13.997 0.730085C14.3925 1.12899 14.3925 1.78924 13.997 2.18814L6.2652 9.98736C6.07429 10.1799 5.8152 10.29 5.54247 10.29Z" fill="white" />
                                        </svg>
                                    )
                                }
                                <div className="absolute top-10 flex flex-col w-64 px-5">
                                    <p className="text-center text-darkGray">2022</p>
                                    <p className="text-center text-primary font-bold text-xl my-2">
                                        Timeline Event
                                    </p>
                                    <p className="text-center text-primary font-medium text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5">
                    <div className="bg-skyBlue py-5 px-8">
                        <div>
                            <h2 className="text-primary font-bold text-6xl">18</h2>
                            <p className="text-lg font-semibold">Team Members</p>
                            <p className="text-darkGray">As of december 2022</p>
                        </div>
                    </div>
                    <div className="bg-skyBlue py-5 px-8">
                        <div>
                            <h2 className="text-primary font-bold text-6xl">+2000</h2>
                            <p className="text-lg font-semibold">Active Jobbers</p>
                            <p className="text-darkGray">As of december 2022</p>
                        </div>
                    </div>
                    <div className="bg-skyBlue py-5 px-8">
                        <div>
                            <h2 className="text-primary font-bold text-6xl">6'850</h2>
                            <p className="text-lg font-semibold">Jobs done</p>
                            <p className="text-darkGray">As of december 2022</p>
                        </div>
                    </div>
                    <div className="bg-skyBlue py-5 px-8">
                        <div>
                            <h2 className="text-primary font-bold text-6xl">4.9/5</h2>
                            <p className="text-lg font-semibold">Average rating of jobbers</p>
                            <p className="text-darkGray">As of december 2022</p>
                        </div>
                    </div>
                    <div className="bg-skyBlue py-5 px-8">
                        <div>
                            <h2 className="text-primary font-bold text-6xl">23 Min</h2>
                            <p className="text-lg font-semibold">
                                A service is brought every
                            </p>
                            <p className="text-darkGray">As of december 2022</p>
                        </div>
                    </div>
                    <div className="bg-skyBlue py-5 px-8">
                        <div>
                            <h2 className="text-primary font-bold text-6xl">98</h2>
                            <p className="text-lg font-semibold">Team Members</p>
                            <p className="text-darkGray">As of december 2022</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Details;
