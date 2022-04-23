import React from "react";

import Container from "../../ui/Container";

import girl1 from '../../../assets/images/pages/categories/girl-1.png'
import girl2 from '../../../assets/images/pages/categories/girl-2.png'
import Location from "../../../assets/images/pages/homepage/location.png"


const RecentJobRequests = () => {
    return (
        <section>
            <Container>
                <h3 className="text-primary text-2xl md:text-3xl 2xl:text-4xl mb-4 font-bold">
                    Recent Job Requests
                </h3>
                <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-10`}>
                    <div className="bg-skyBlue p-8">
                        <div className="flex flex-col">
                            <div>
                                <div className="w-max">
                                    <img src={girl1} alt="Girl 1" className="w-full" />
                                </div>
                            </div>
                            <p className="text-darkGray font-medium text-lg mt-4">Created 21 mins ago</p>
                            <div className='flex justify-start gap-2 mt-2'>
                                <div><img src={Location} alt="Location" /></div>
                                <div><p className='text-secondary text-sm font-medium'>8005, Zürich</p></div>
                            </div>
                            <p className="text-primary font-medium text-lg mt-2">Helen Gomez <span>, Zürich</span></p>
                            <p className="text-primary font-bold text-sm">Home cleaning service</p>
                            <p className="text-darkGray font-medium text-base mt-2">Requires 1 provider for 2hrs</p>
                            <p className="text-darkGray font-medium text-base mt-2">Ordered 7 products</p>
                        </div>
                    </div>
                    <div className="bg-skyBlue p-8">
                        <div className="flex flex-col">
                            <div>
                                <div className="w-max">
                                    <img src={girl2} alt="Girl 2" className="w-full" />
                                </div>
                            </div>
                            <p className="text-darkGray font-medium text-lg mt-4">Created 21 mins ago</p>
                            <div className='flex justify-start gap-2 mt-2'>
                                <div><img src={Location} alt="Location" /></div>
                                <div><p className='text-secondary text-sm font-medium'>8005, Zürich</p></div>
                            </div>
                            <p className="text-primary font-medium text-lg mt-2">Helen Gomez <span>, Zürich</span></p>
                            <p className="text-primary font-bold text-sm">Home cleaning service</p>
                            <p className="text-darkGray font-medium text-base mt-2">Requires 1 provider for 2hrs</p>
                            <p className="text-darkGray font-medium text-base mt-2">Ordered 7 products</p>
                        </div>
                    </div>
                    <div className="bg-skyBlue p-8">
                        <div className="flex flex-col">
                            <div>
                                <div className="w-max">
                                    <img src={girl1} alt="Girl 1" className="w-full" />
                                </div>
                            </div>
                            <p className="text-darkGray font-medium text-lg mt-4">Created 21 mins ago</p>
                            <div className='flex justify-start gap-2 mt-2'>
                                <div><img src={Location} alt="Location" /></div>
                                <div><p className='text-secondary text-sm font-medium'>8005, Zürich</p></div>
                            </div>
                            <p className="text-primary font-medium text-lg mt-2">Helen Gomez <span>, Zürich</span></p>
                            <p className="text-primary font-bold text-sm">Home cleaning service</p>
                            <p className="text-darkGray font-medium text-base mt-2">Requires 1 provider for 2hrs</p>
                            <p className="text-darkGray font-medium text-base mt-2">Ordered 7 products</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default RecentJobRequests;
