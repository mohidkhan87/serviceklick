import React, { useState } from 'react'
import Container from '../../../ui/Container'
import vector from '../../../../assets/images/pages/homepage/find-customer/vector.png'
import { Range } from 'react-range';

const ServicesOffer = () => {
    const [rangeValue, setRangeValue] = useState([10])
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }
    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2)
    }
    return (
        <div>
            <Container>

                <div className='flex flex-col md:flex-row gap-5'>
                    <div className='flex-1 md:px-8'>
                        <h2 className='text-primary font-bold text-xl xl:text-3xl'>What kind of service do you offer?</h2>
                        <div className="mt-10">
                            <div className="w-max flex gap-2 justify-between cursor-pointer" onClick={() => toggleDropdown()}>
                                <div>
                                    <p className="text-textGray font-bold text-base border-b-2 border-primary">
                                        Cleaning Service
                                    </p>
                                </div>
                                <div className='flex justify-start items-center'>
                                    <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.5067 5.31757C9.72567 6.09862 8.45934 6.09862 7.67829 5.31757L3.33992 0.979199C2.72499 0.364277 1.72801 0.364277 1.11309 0.979199C0.498163 1.59412 0.498164 2.59111 1.11309 3.20603L7.97915 10.0721C8.59407 10.687 9.59106 10.687 10.206 10.0721L11.3194 8.95871C11.3194 8.95869 11.3194 8.95866 11.3194 8.95865C11.3194 8.95863 11.3194 8.9586 11.3194 8.95859L17.0721 3.20588C17.687 2.59096 17.687 1.59397 17.0721 0.979052C16.4571 0.36413 15.4602 0.364129 14.8452 0.979052L10.5067 5.31757Z" fill="#2B2D33" />
                                    </svg>
                                </div>
                            </div>
                            {
                                isOpen &&
                                <div className="mt-5">
                                    <p className="text-textGray">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Dolor facilisis neque eli
                                    </p>
                                </div>
                            }
                        </div>
                        <h2 className='text-primary font-bold text-xl xl:text-2xl mt-8'>
                            How much do you want to work through our plafform?
                        </h2>
                        <div className='bg-lightGray p-4 w-max rounded-lg mt-5'>
                            <p className='text-primary font-bold text-sm'>{rangeValue}% Pensum</p>
                        </div>
                        {/* <div className='my-8 w-full border-2 relative'>
                            <div className='absolute w-4 h-4 bg-secondary rounded-full top-1/2 transform -translate-y-1/2' style={{ left: '10%' }}>
                            </div>
                        </div> */}
                        <div className='my-8 w-full relative'>
                            <Range
                                step={1}
                                min={0}
                                max={100}
                                values={rangeValue}
                                onChange={(values) => setRangeValue(values)}
                                renderTrack={({ props, children }) => (
                                    <div
                                        {...props}
                                        style={{
                                            ...props.style,
                                            height: '4px',
                                            width: '100%',
                                            backgroundColor: '#C0C3CC',
                                            borderRadius: '44px'
                                        }}
                                    >
                                        {children}
                                    </div>
                                )}
                                renderThumb={({ props }) => (
                                    <div
                                        {...props}
                                        style={{
                                            ...props.style,
                                            height: '26px',
                                            width: '26px',
                                            backgroundColor: '#660019',
                                            borderRadius: '44px',
                                            outline: 'none'
                                        }}
                                    />
                                )}
                            />
                        </div>
                        <h2 className='text-primary font-bold text-xl xl:text-2xl'>What kind of service do you offer?</h2>
                        <div className="mt-10">
                            <div className="w-max flex gap-2 justify-between cursor-pointer" onClick={() => toggleDropdown2()}>
                                <div>
                                    <p className="text-textGray font-bold text-base border-b-2 border-primary">
                                        Cleaning Service
                                    </p>
                                </div>
                                <div className='flex justify-start items-center'>
                                    <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.5067 5.31757C9.72567 6.09862 8.45934 6.09862 7.67829 5.31757L3.33992 0.979199C2.72499 0.364277 1.72801 0.364277 1.11309 0.979199C0.498163 1.59412 0.498164 2.59111 1.11309 3.20603L7.97915 10.0721C8.59407 10.687 9.59106 10.687 10.206 10.0721L11.3194 8.95871C11.3194 8.95869 11.3194 8.95866 11.3194 8.95865C11.3194 8.95863 11.3194 8.9586 11.3194 8.95859L17.0721 3.20588C17.687 2.59096 17.687 1.59397 17.0721 0.979052C16.4571 0.36413 15.4602 0.364129 14.8452 0.979052L10.5067 5.31757Z" fill="#2B2D33" />
                                    </svg>
                                </div>
                            </div>
                            {
                                isOpen2 &&
                                <div className="mt-5">
                                    <p className="text-textGray">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Dolor facilisis neque eli
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='w-auto relative'>
                            <img src={vector} alt="background vector" className='w-full' />
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                <h3 className='text-primary font-bold text-xl xl:text-3xl text-center'>Earn up to</h3>
                                <h2 className='text-secondary font-bold text-4xl xl:text-6xl mt-8'>CHF 500</h2>
                                <p className='text-primary font-bold text-xl xl:text-3xl text-center mt-8'>per month*</p>
                            </div>
                        </div>
                        <p className='text-darkGray text-sm text-center mt-4 underline'>How do we calculate your earning potential?</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ServicesOffer