import React from "react";
import Container from "../../ui/Container";

const Details = () => {
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

                <div className="hidden lg:block w-full mx-auto mb-52">
                    <div className="bg-darkGray h-0.5 flex items-start justify-start">
                        <div className="w-3/12 bg-darkGray h-0.5 flex justify-center items-center">
                            <div className="bg-secondary h-6 w-6 rounded-full shadow flex items-center justify-center relative">
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
                            <div className="bg-secondary h-6 w-6 rounded-full shadow flex items-center justify-center relative">
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
                            <div className="bg-secondary h-6 w-6 rounded-full shadow flex items-center justify-center relative">
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
                            <div className="bg-white h-6 w-6 border border-dashed border-secondary rounded-full shadow flex items-center justify-center relative">
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
