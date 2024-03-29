import React from 'react'

import Container from "../../../ui/Container"

const StickyNav = ({currentTab, goToSection}) => {
    const handleClick = (val) => {
        goToSection(val)
    }
    return (
        <div className='bg-white py-2'>
            <Container>
                <div>
                    <div className='flex flex-wrap gap-4'>
                        <div>
                            <button onClick={() => handleClick('benefits')} className={`${currentTab === 'benefits' ? 'bg-secondary text-white':'bg-transparent text-darkGray'} rounded-full px-4 py-1`}>Benefits</button>
                        </div>
                        <div>
                            <button onClick={() => handleClick('how-it-works')} className={`${currentTab === 'how-it-works' ? 'bg-secondary text-white':'bg-transparent text-darkGray'} transition duration-300 ease-in-out rounded-full px-4 py-1`}>Hows it works</button>
                        </div>
                        <div>
                            <button onClick={() => handleClick('how-to-join')} className={`${currentTab === 'how-to-join' ? 'bg-secondary text-white':'bg-transparent text-darkGray'} transition duration-300 ease-in-out rounded-full px-4 py-1`}>How to join</button>
                        </div>
                        <div>
                            <button onClick={() => handleClick('compare')} className={`${currentTab === 'compare' ? 'bg-secondary text-white':'bg-transparent text-darkGray'} transition duration-300 ease-in-out rounded-full px-4 py-1`}>Compare</button>
                        </div>
                        <div>
                            <button onClick={() => handleClick('reviews')} className={`${currentTab === 'reviews' ? 'bg-secondary text-white':'bg-transparent text-darkGray'} transition duration-300 ease-in-out rounded-full px-4 py-1`}>Reviews</button>
                        </div>
                        <div>
                            <button onClick={() => handleClick('earnings')} className={`${currentTab === 'earnings' ? 'bg-secondary text-white':'bg-transparent text-darkGray'} transition duration-300 ease-in-out rounded-full px-4 py-1`}>Earnings</button>
                        </div>
                        <div>
                            <button onClick={() => handleClick('news')} className={`${currentTab === 'news' ? 'bg-secondary text-white':'bg-transparent text-darkGray'} transition duration-300 ease-in-out rounded-full px-4 py-1`}>News</button>
                        </div>
                        <div>
                            <button className="bg-secondary rounded-full font-medium px-5 text-sm py-2 text-white flex items-center">
                                Start Earning Today
                                <span className="inline-block ml-2 mb-1">
                                    <svg width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.0508 1.61816L26.6394 9.20681L19.0508 16.7955" stroke="white" strokeWidth="3.16193" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M26.6391 9.20605H2.35547" stroke="white" strokeWidth="3.16193" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default StickyNav