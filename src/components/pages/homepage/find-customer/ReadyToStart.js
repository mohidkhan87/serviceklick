import React from "react";

import Container from "../../../ui/Container";

import PosterImage from "../../../../assets/images/pages/homepage/poster-img.svg";

const ReadyToStart = () => {
    return (
        <div className="mt-40">
            <Container>
                <div className="bg-skyBlue flex">
                    <div className="flex-1">
                        <div className="px-16 mx-auto py-36">
                            <h2 className="text-primary font-bold text-4xl">
                                Ready to Start?
                            </h2>
                            <p className="text-darkGray font-medium text-lg 2xl:text-xl mt-5">
                                Download the app today and start earning. Completely makes
                                finding local customers free and easy for you.
                            </p>
                            <button className="bg-secondary rounded-full px-4 py-2 text-white mt-5 text-sm">
                                Contact Us
                            </button>
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

export default ReadyToStart;
