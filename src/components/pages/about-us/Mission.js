import React from "react";

import Container from "../../ui/Container";

import MissionImage from "../../../assets/images/pages/about-us/mission.png";

const Mission = () => {
    return (
        <div>
            <Container>
                <div>
                    <div>
                        <img src={MissionImage} alt="Mission" className="w-full" />
                    </div>
                    <div className="flex gap-10 bg-skyBlue">
                        <div className="flex-1 p-10">
                            <h2 className="text-primary font-bold text-3xl mb-2">Mission</h2>
                            <p className="text-darkGray text-sm">
                                Homes are complex systems that don’t come with a manual. Once
                                you get the keys, you’re left to manage this giant asset on your
                                own. Faucets leak, walls crack, families grow and needs change.
                                Our goal is simple: to be the only platform homeowners need to
                                fix, maintain and improve their homes. As a long-term partner
                                for homeowners, our promise is to turn what was once confusing
                                and intimidating into something straightforward — and a lot less
                                stressful. Because one thing we know for sure? When all is well
                                in your home, you can have true peace of mind.
                            </p>
                        </div>
                        <div className="flex-1 p-10">
                            <h2 className="text-primary font-bold text-3xl mb-2">Vision</h2>
                            <p className="text-darkGray text-sm">
                                Serviceklick is for everyone. Our customers, pros, and employees
                                come from all walks of life, all across the country. Together,
                                we’re on a mission to help everyone do life’s work with joy and
                                purpose. Our North Star is bright and our ambitions are big.
                                We’ve been at this for over a decade, but the way we see it:
                                we’re just getting started.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Mission;
