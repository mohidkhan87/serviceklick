import React from "react";
import ScrollTo from "react-scroll-into-view";
import { Link } from "react-router-dom";

const Nav = ({ currentActive, changeCurrentActive }) => {
    return (
        <div>
            <div className="w-full">
                <h1 className="text-primary text-lg font-bold">Article Block/Section Title</h1>
                <div className="flex flex-col my-8">
                    <ScrollTo selector={`#section${1}`} onClick={() => changeCurrentActive(1)}>
                        <div className={"p-4 font-medium text-primary cursor-pointer hover:bg-skyBlue hover:rounded-lg text-base 2xl:text-lg " + (currentActive === 1 && "bg-skyBlue rounded-lg")}>
                            <p>Article Heading</p>
                        </div>
                    </ScrollTo>
                    <ScrollTo selector={`#section${2}`} onClick={() => changeCurrentActive(2)}>
                        <div className={"p-4 font-medium text-primary cursor-pointer hover:bg-skyBlue hover:rounded-lg text-base 2xl:text-lg " + (currentActive === 2 && "bg-skyBlue rounded-lg")}>
                            <p>Making a payment</p>
                        </div>
                    </ScrollTo>
                    <ScrollTo selector={`#section${3}`} onClick={() => changeCurrentActive(3)}>
                        <div className={"p-4 font-medium text-primary cursor-pointer hover:bg-skyBlue hover:rounded-lg text-base 2xl:text-lg " + (currentActive === 3 && "bg-skyBlue rounded-lg")}>
                            <p>Finding a handyman</p>
                        </div>
                    </ScrollTo>
                    <ScrollTo selector={`#section${4}`} onClick={() => changeCurrentActive(4)}>
                        <div className={"p-4 font-medium text-primary cursor-pointer hover:bg-skyBlue hover:rounded-lg text-base 2xl:text-lg " + (currentActive === 4 && "bg-skyBlue rounded-lg")}>
                            <p>Best Practices</p>
                        </div>
                    </ScrollTo>
                    <ScrollTo selector={`#section${5}`} onClick={() => changeCurrentActive(5)}>
                        <div className={"p-4 font-medium text-primary cursor-pointer hover:bg-skyBlue hover:rounded-lg text-base 2xl:text-lg " + (currentActive === 5 && "bg-skyBlue rounded-lg")}>
                            <p>Staying dafe online</p>
                        </div>
                    </ScrollTo>
                    <ScrollTo selector={`#section${5}`} onClick={() => changeCurrentActive(6)}>
                        <div className={"p-4 font-medium text-primary cursor-pointer hover:bg-skyBlue hover:rounded-lg text-base 2xl:text-lg " + (currentActive === 5 && "bg-skyBlue rounded-lg")}>
                            <p>Leaving a review</p>
                        </div>
                    </ScrollTo>
                </div>
                <h1 className="text-primary text-lg font-bold">Related Content</h1>
                <div className="flex flex-col gap-5 p-4 font-medium text-primary text-base 2xl:text-lg">
                    <p>
                        <Link to="/privacy-policy">How to provide the best experience when providing a service</Link>
                    </p>
                    <p>
                        <Link to="/privacy-policy">Setting up your seller profile</Link>
                    </p>
                    <p>
                        <Link to="/privacy-policy">Manage your account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Nav;
