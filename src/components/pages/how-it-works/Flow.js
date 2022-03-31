import React from "react";

import Container from "../../ui/Container";

import ellipse1 from "../../../assets/images/pages/how-it-works/ellipse-1.png";
import ellipse2 from "../../../assets/images/pages/how-it-works/ellipse-2.png";
import ellipse3 from "../../../assets/images/pages/how-it-works/ellipse-3.png";
import round1 from "../../../assets/images/pages/how-it-works/round-1.png";
import round2 from "../../../assets/images/pages/how-it-works/round-2.png";
import round3 from "../../../assets/images/pages/how-it-works/round-3.png";

const Flow = () => {
    return (
        <div>
            <Container>
                <div>
                    <div className="flex">
                        <div className="w-1/2">
                            <div className="relative">
                                <img src={ellipse1} alt="ellipse1" />
                                <div className="absolute -top-10">
                                    <div className="flex flex-col justify-center">
                                        <div className="flex justify-center">
                                            <img src={round1} alt="round1" />
                                        </div>
                                        <div className="mt-5">
                                            <h3 className="text-center font-bold text-primary text-2xl">Request a Service</h3>
                                            <p className="text-center mt-5 w-2/3 mx-auto">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Neque habitasse fermentum sociis fames nec dui, venenatis
                                                ut risus.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="w-1/2">
                            <div className="relative">
                                <img src={ellipse2} alt="ellipse2" />
                                <div className="absolute -top-10">
                                    <div className="flex flex-col justify-center">
                                        <div className="flex justify-center">
                                            <img src={round2} alt="round2" />
                                        </div>
                                        <div className="mt-5">
                                            <h3 className="text-center font-bold text-primary text-2xl">Request a Service</h3>
                                            <p className="text-center mt-5 w-2/3 mx-auto">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Neque habitasse fermentum sociis fames nec dui, venenatis
                                                ut risus.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/2">
                            <div className="relative">
                                <img src={ellipse3} alt="ellipse3" />
                                <div className="absolute -top-10">
                                    <div className="flex flex-col justify-center">
                                        <div className="flex justify-center">
                                            <img src={round3} alt="round3" />
                                        </div>
                                        <div className="mt-5">
                                            <h3 className="text-center font-bold text-primary text-2xl">Request a Service</h3>
                                            <p className="text-center mt-5 w-2/3 mx-auto">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Neque habitasse fermentum sociis fames nec dui, venenatis
                                                ut risus.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Flow;
