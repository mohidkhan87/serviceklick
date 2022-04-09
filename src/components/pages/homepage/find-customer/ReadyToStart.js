import React from "react";

import Container from "../../../ui/Container";

import PlayStore from "../../../../assets/images/pages/homepage/play-store.svg";
import AppStore from "../../../../assets/images/pages/homepage/app-store.svg";
import QrCode from "../../../../assets/images/pages/homepage/qr-code.svg";
import PosterImage from "../../../../assets/images/pages/help-center/need-help.png";

const ReadyToStart = () => {
    return (
        <div className="mt-44">
            <Container>
                <div className="bg-skyBlue flex">
                    <div className="flex-1">
                        <div className="px-5 md:px-16 mx-auto py-16 md:py-24">
                            <h2 className="text-primary font-bold text-4xl">Ready to Start?</h2>
                            <p className="text-darkGray font-medium text-lg 2xl:text-xl mt-5">
                                Download the app today and start earning. Completely makes finding local customers free and easy for you.
                            </p>
                            <div className="flex flex-row flex-wrap gap-2 mt-5">
                                <div className="cursor-pointer">
                                    <img src={PlayStore} alt="" className="w-32" />
                                </div>
                                <div className="cursor-pointer">
                                    <img src={AppStore} alt="" className="w-32" />
                                </div>
                                <div className="cursor-pointer">
                                    <img src={QrCode} alt="" className="w-32" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden xl:flex justify-center flex-1">
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
