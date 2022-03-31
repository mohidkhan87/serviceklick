import React from "react";

import Container from "../../ui/Container";

import PosterImage from "../../../assets/images/pages/homepage/poster-img.svg";

const NeedHelp = () => {
    return (
        <div className="mt-40">
            <Container>
                <div className="bg-skyBlue flex">
                    <div className="flex-1">
                        <div className="px-16 mx-auto py-36">
                            <h2 className="text-primary font-bold text-4xl">Still Need help?</h2>
                            <p className="text-darkGray font-medium text-lg 2xl:text-xl mt-5">
                                If you are still stuck, we can help. Get in
                                touch with our support team below after answering a few
                                questions. Contact Us
                            </p>
                            <button className="bg-secondary rounded-full px-4 py-2 text-white mt-5 text-sm">Contact Us</button>
                        </div>
                    </div>
                    <div className="hidden xl:block flex-1">
                        <div className="absolute bottom-0 2xl:px-16 flex justify-center">
                            <img src={PosterImage} alt="Help" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NeedHelp;