import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Container from "../../ui/Container";
import LanguageCurrency from "./modal/LanguageCurrency";

import Logo from "../../../assets/images/logo.png";
import Globe from "../../../assets/images/pages/homepage/globe.svg";
import GlobeBlack from "../../../assets/images/pages/homepage/globe-black.svg";

const Header = ({ isSearching, background, textColor, isAbsolute }) => {
    const [isMenu, setIsMenu] = useState(false);
    const [showLanguages, setShowLanguages] = useState(false);

    const toggleOptions = () => {
        setIsMenu(false);
        setShowLanguages(true);
    };

    const handleShowLangauges = (value) => {
        setShowLanguages(value);
    };

    return (
        <div
            className={`w-full ${isAbsolute && "absolute top-0 left-0"
                } bg-${background} ${isSearching ? "z - 20" : "z-40"}`}
        >
            <Container>
                <div className="relative w-full flex sm:flex-row flex-row-reverse justify-between items-center py-5 text-white">
                    {/* Hamburger */}
                    <div
                        className="lg:hidden transform sm:rotate-0 rotate-180 flex flex-col gap-1 sm:gap-1.5"
                        onClick={() => setIsMenu(!isMenu)}
                    >
                        <div
                            className={`h-1 sm:w-7 w-6 rounded-full bg-${textColor}`}
                        ></div>
                        <div
                            className={`h-1 sm:w-9 w-7 rounded-full bg-${textColor}`}
                        ></div>
                        <div
                            className={`h-1 sm:w-5 w-5 rounded-full bg-${textColor}`}
                        ></div>
                    </div>
                    <div>
                        <div>
                            <Link to="/">
                                <div className="flex items-center gap-3">
                                    <img src={Logo} alt="logo" className="w-auto h-12" />
                                    {/* <h1 className="sm:text-2xl text-xl font-bold">Serviceklick</h1> */}
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* Search */}
                    <div className="hidden xl:block">
                        <div className="border h-full rounded-3xl py-0.5 pl-4 pr-1">
                            <div className="flex h-full gap-4">
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        placeholder="Search for help articles"
                                        className="outline-none w-full h-full text-xs text-primary"
                                    />
                                </div>
                                <div className="w-32">
                                    <button className="bg-secondary w-full h-full rounded-full text-white font-bold text-xs py-2">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Nav */}
                    <div className="hidden sm:flex items-center gap-7">
                        <p className={`hidden lg:block text-${textColor}`}>
                            <Link to="/blog-post">Blog</Link>
                        </p>
                        <p className={`hidden lg:block text-${textColor}`}>
                            <Link to="/about-us">Contact Us</Link>
                        </p>
                        <div className="cursor-pointer" onClick={() => toggleOptions()}>
                            <img
                                src={textColor === "white" ? Globe : GlobeBlack}
                                alt="Globe"
                            />
                        </div>
                        <button
                            className={`py-2 px-6 rounded-full font-bold ${textColor === "white"
                                    ? "text-primary bg-white"
                                    : `text-white bg-primary`
                                }`}
                        >
                            Join
                        </button>
                    </div>
                    {/* Mobile Nav */}
                    <div
                        className={`lg:hidden flex flex-col justify-center items-center gap-2 absolute top-full left-0 w-full h-0 text-secondary bg-white font-medium rounded-lg transition-all duration-200 ease-linear overflow-hidden shadow-2xl z-30 ${isMenu && "sm:h-44 h-48 p-5"
                            }`}
                    >
                        <p className="cursor-pointer">
                            <Link to="/blog-post">Blog</Link>
                        </p>
                        <p className="cursor-pointer">
                            <Link to="/about-us">Contact Us</Link>
                        </p>
                        <div
                            className="sm:hidden cursor-pointer"
                            onClick={() => toggleOptions()}
                        >
                            <img
                                src={textColor === "white" ? Globe : GlobeBlack}
                                alt="Globe"
                            />
                        </div>
                        <button
                            className={`sm:hidden py-2 px-6 rounded-full font-bold ${textColor === "white"
                                    ? "text-primary bg-white"
                                    : `text-white bg-primary`
                                }`}
                        >
                            Join
                        </button>
                    </div>
                    {/* Show language and payments Modal */}
                    {showLanguages && (
                        <LanguageCurrency handleShowLangauges={handleShowLangauges} />
                    )}
                </div>
            </Container>
        </div>
    );
};

export default Header;
