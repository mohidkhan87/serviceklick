import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Container from "../../ui/Container";
import LanguageCurrency from "./modal/LanguageCurrency";

import Logo from "../../../assets/images/logo.png";
import LogoWhite from "../../../assets/images/logo-white.png";
import Globe from "../../../assets/images/pages/homepage/globe.svg";
import GlobeBlack from "../../../assets/images/pages/homepage/globe-black.svg";
import Service from "../../../assets/images/pages/homepage/service.svg";

const Header = ({ view, isSearching, isAbsolute }) => {
  const location = useLocation();

  const [isMenu, setIsMenu] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [isOnTop, setIsOnTop] = useState(false);
  const [isMegaMenu, setIsMegaMenu] = useState(false);

  const handleScroll = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 0 ? setIsOnTop(false) : setIsOnTop(true);
      windowHeight > 1300 ? setIsMegaMenu(true) : setIsMegaMenu(false);
    }
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleOptions = () => {
    setIsMenu(false);
    setShowLanguages(true);
  };

  const handleShowLangauges = (value) => {
    setShowLanguages(value);
  };

  const options = [
    {
      id: 1,
      title: "Home Cleaning",
    },
    {
      id: 2,
      title: "End of Lease Cleaning",
    },
    {
      id: 3,
      title: "Airbnb Cleaning",
    },
  ];

  // ${isAbsolute && isOnTop && "absolute top-0 left-0"} = If absolute and is on top
  return (
    <div
      className={`w-full ${
        isAbsolute && isOnTop && "absolute top-0 left-0 bg-transparent"
      } ${isAbsolute && !isOnTop && "top-0 left-0 bg-white"} ${
        !isAbsolute && "bg-white"
      } ${!isOnTop ? "fixed border-b-2" : ""} ${isSearching ? "z-20" : "z-40"}`}
    >
      <Container>
        <div className="relative w-full flex sm:flex-row flex-row-reverse justify-between items-center py-2 text-white">
          <div
            className="lg:hidden transform sm:rotate-0 rotate-180 flex flex-col gap-1 sm:gap-1.5"
            onClick={() => setIsMenu(!isMenu)}
          >
            <div
              className={`h-1 sm:w-7 w-6 rounded-full ${
                isAbsolute && isOnTop
                  ? `bg-white`
                  : isAbsolute && !isOnTop
                  ? "bg-primary"
                  : !isAbsolute && "bg-primary"
              }`}
            ></div>
            <div
              className={`h-1 sm:w-9 w-7 rounded-full ${
                isAbsolute && isOnTop
                  ? `bg-white`
                  : isAbsolute && !isOnTop
                  ? "bg-primary"
                  : !isAbsolute && "bg-primary"
              }`}
            ></div>
            <div
              className={`h-1 sm:w-5 w-5 rounded-full ${
                isAbsolute && isOnTop
                  ? `bg-white`
                  : isAbsolute && !isOnTop
                  ? "bg-primary"
                  : !isAbsolute && "bg-primary"
              }`}
            ></div>
          </div>
          <div>
            <div>
              <Link to="/">
                <div className="flex items-center gap-3">
                  <img
                    src={isAbsolute && isOnTop ? LogoWhite : Logo}
                    alt="logo"
                    className="w-auto h-12"
                  />
                  {/* <h1 className="sm:text-2xl text-xl font-bold">Serviceklick</h1> */}
                </div>
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-7">
            <p
              className={`hidden lg:block ${
                isAbsolute && isOnTop
                  ? `text-white`
                  : isAbsolute && !isOnTop
                  ? "text-primary"
                  : !isAbsolute && "text-primary"
              }`}
            >
              <Link to="/how-it-works">How it Works</Link>
            </p>
            <p
              className={`hidden lg:block ${
                isAbsolute && isOnTop
                  ? `text-white`
                  : isAbsolute && !isOnTop
                  ? "text-primary"
                  : !isAbsolute && "text-primary"
              }`}
            >
              <Link to="/about-us">Abouts Us</Link>
            </p>
            <p
              className={`hidden lg:block ${
                isAbsolute && isOnTop
                  ? `text-white`
                  : isAbsolute && !isOnTop
                  ? "text-primary"
                  : !isAbsolute && "text-primary"
              }`}
            >
              <Link to="/newsroom">Newsroom</Link>
            </p>
            <div className="cursor-pointer" onClick={() => toggleOptions()}>
              <img
                src={`${
                  isAbsolute && isOnTop
                    ? Globe
                    : isAbsolute && !isOnTop
                    ? GlobeBlack
                    : !isAbsolute && GlobeBlack
                }`}
                alt="Globe"
              />
            </div>
            <button
              className={`py-2 px-6 rounded-full font-bold ${
                isAbsolute && isOnTop
                  ? `text-primary bg-white`
                  : isAbsolute && !isOnTop
                  ? "bg-primary text-white"
                  : !isAbsolute && "bg-primary text-white"
              }`}
            >
              Join
            </button>
          </div>
          {/* Mobile Nav */}
          <div
            className={`lg:hidden flex flex-col justify-center items-center gap-2 absolute top-full left-0 w-full h-0 text-secondary bg-white font-medium rounded-lg transition-all duration-200 ease-linear overflow-hidden shadow-2xl z-30 ${
              isMenu && "sm:h-44 h-48 p-5"
            }`}
          >
            <p className="cursor-pointer">
              <Link to="/how-it-works">How it Works</Link>
            </p>
            <p className="cursor-pointer">
              <Link to="/about-us">Abouts Us</Link>
            </p>
            <p className="cursor-pointer">
              <Link to="/newsroom">Newsroom</Link>
            </p>
            <p
              className="sm:hidden cursor-pointer"
              onClick={() => toggleOptions()}
            >
              Language
            </p>
            <p className="sm:hidden cursor-pointer">Join</p>
          </div>
          {/* Show language and payments Modal */}
          {showLanguages && (
            <LanguageCurrency handleShowLangauges={handleShowLangauges} />
          )}
        </div>
      </Container>
      {/* MEGA MENU */}
      {isMegaMenu && location.pathname === "/" && view === "professional" && (
        <div className="mega-container relative md:block hidden bg-white border-t py-0.5 z-0">
          <Container>
            <div className="flex items-center gap-2 py-1">
              <div className="relative mega-heading font-medium hover:bg-primary transition-all duration-300 ease-linear cursor-default py-1 px-5 rounded-full hover:text-white">
                <p className="cursor-pointer">Cleaning</p>
                <div className="mega-menu hidden absolute top-full left-0 pt-2">
                  <div className="w-max bg-white shadow-fade rounded-tl-none rounded-3xl px-5 py-4">
                    <h1 className="text-sm font-bold text-primary">Cleaning</h1>
                    {options.map((option, index) => (
                      <div className="flex items-center gap-3 my-2" key={index}>
                        <img src={Service} alt="" className="w-12" />
                        <p className="font-semibold text-xs text-red-800">
                          {option.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative mega-heading font-medium hover:bg-primary transition-all duration-300 ease-linear cursor-default py-1 px-5 rounded-full hover:text-white">
                <p className="cursor-pointer">Handyman</p>
                <div className="mega-menu hidden absolute top-full left-0 pt-2">
                  <div className="w-max bg-white shadow-fade rounded-tl-none rounded-3xl px-5 py-4">
                    <h1 className="text-sm font-bold text-primary">Handyman</h1>
                    {options.map((option, index) => (
                      <div className="flex items-center gap-3 my-2" key={index}>
                        <img src={Service} alt="" className="w-12" />
                        <p className="font-semibold text-xs text-red-800">
                          {option.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative mega-heading font-medium hover:bg-primary transition-all duration-300 ease-linear cursor-default py-1 px-5 rounded-full hover:text-white">
              <p className="cursor-pointer">Hospitality</p>
                <div className="mega-menu hidden absolute top-full left-0 pt-2">
                  <div className="w-max bg-white shadow-fade rounded-tl-none rounded-3xl px-5 py-4">
                    <h1 className="text-sm font-bold text-primary">
                      Hospitality
                    </h1>
                    {options.map((option, index) => (
                      <div className="flex items-center gap-3 my-2" key={index}>
                        <img src={Service} alt="" className="w-12" />
                        <p className="font-semibold text-xs text-red-800">
                          {option.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative mega-heading font-medium hover:bg-primary transition-all duration-300 ease-linear cursor-default py-1 px-5 rounded-full hover:text-white">
                <p className="cursor-pointer text-darkGray hover:text-white">Wellness (Coming Soon)</p>
                <div className="mega-menu hidden absolute top-full left-0 pt-2">
                  <div className="w-max bg-white shadow-fade rounded-tl-none rounded-3xl px-5 py-4">
                    <h1 className="text-sm font-bold text-primary">Wellness</h1>
                    {options.map((option, index) => (
                      <div className="flex items-center gap-3 my-2" key={index}>
                        <img src={Service} alt="" className="w-12" />
                        <p className="font-semibold text-xs text-red-800">
                          {option.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Header;
