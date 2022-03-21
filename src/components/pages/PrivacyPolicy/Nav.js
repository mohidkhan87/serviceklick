import React from "react";
import ScrollTo from "react-scroll-into-view";
import { Link } from "react-router-dom";

const Nav = ({ currentActive, changeCurrentActive }) => {
    return (
        <div>
            <div className="w-full">
                <h1 className="text-primary text-lg font-bold">On this page</h1>
                <div className="flex flex-col my-8">
                    <ScrollTo selector={`#section${1}`} onClick={() => changeCurrentActive(1)}>
                        <div className={"p-4 font-medium text-primary cursor-pointer hover:bg-skyBlue hover:rounded-lg text-base 2xl:text-lg " + (currentActive === 1 && "bg-skyBlue rounded-lg")}>
                            <p>Heading</p>
                        </div>
                    </ScrollTo>
                    <ScrollTo selector={`#section${2}`} onClick={() => changeCurrentActive(2)}>
                        <div className={"p-4 font-medium text-primary cursor-pointer hover:bg-skyBlue hover:rounded-lg text-base 2xl:text-lg " + (currentActive === 2 && "bg-skyBlue rounded-lg")}>
                            <p>Heading 2</p>
                        </div>
                    </ScrollTo>
                    <ScrollTo selector={`#section${3}`} onClick={() => changeCurrentActive(3)}>
                        <div className={"p-4 font-medium text-primary cursor-pointer hover:bg-skyBlue hover:rounded-lg text-base 2xl:text-lg " + (currentActive === 3 && "bg-skyBlue rounded-lg")}>
                            <p>Heading 3</p>
                        </div>
                    </ScrollTo>
                    <ScrollTo selector={`#section${4}`} onClick={() => changeCurrentActive(4)}>
                        <div className={"p-4 font-medium text-primary cursor-pointer hover:bg-skyBlue hover:rounded-lg text-base 2xl:text-lg " + (currentActive === 4 && "bg-skyBlue rounded-lg")}>
                            <p>Heading 4</p>
                        </div>
                    </ScrollTo>
                    <ScrollTo selector={`#section${5}`} onClick={() => changeCurrentActive(5)}>
                        <div className={"p-4 font-medium text-primary cursor-pointer hover:bg-skyBlue hover:rounded-lg text-base 2xl:text-lg " + (currentActive === 5 && "bg-skyBlue rounded-lg")}>
                            <p>Heading 5</p>
                        </div>
                    </ScrollTo>
                </div>
                <h1 className="text-primary text-lg font-bold">Related Content</h1>
                <div className="p-4 font-medium text-primary text-base 2xl:text-lg">
                    <p>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Nav;
