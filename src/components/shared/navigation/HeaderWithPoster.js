import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Container from "../../ui/Container";
import LanguageCurrency from "./modal/LanguageCurrency";

import Logo from "../../../assets/images/logo.png";
import LogoWhite from "../../../assets/images/logo-white.png";
import Globe from "../../../assets/images/pages/homepage/globe.svg";
import GlobeBlack from "../../../assets/images/pages/homepage/globe-black.svg";

const Header = ({ isSearching, background, textColor, isAbsolute }) => {
  const [isMenu, setIsMenu] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [isOnTop, setIsOnTop] = useState(false)
  
  const handleScroll = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 0 ? setIsOnTop(false) : setIsOnTop(true);
    }
  }
  useEffect(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  const toggleOptions = () => {
    setIsMenu(false);
    setShowLanguages(true);
  };

  const handleShowLangauges = (value) => {
    setShowLanguages(value);
  }

  // ${isAbsolute && isOnTop && "absolute top-0 left-0"} = If absolute and is on top
  return (
    <div
      className={`w-full ${isAbsolute && isOnTop && "absolute top-0 left-0"} ${isAbsolute && !isOnTop && "top-0 left-0 bg-white"} ${!isOnTop ? 'fixed border-b-2' : ''} bg-${background} ${isSearching ? "z-20" : "z-40"
        }`}
    >
      <Container>
        <div className="relative w-full flex sm:flex-row flex-row-reverse justify-between items-center py-5 text-white">
          <div
            className="lg:hidden transform sm:rotate-0 rotate-180 flex flex-col gap-1 sm:gap-1.5"
            onClick={() => setIsMenu(!isMenu)}
          >
            <div className={`h-1 sm:w-7 w-6 rounded-full ${isOnTop ? `bg-${textColor}`:'bg-primary'}`}></div>
            <div className={`h-1 sm:w-9 w-7 rounded-full ${isOnTop ? `bg-${textColor}`:'bg-primary'}`}></div>
            <div className={`h-1 sm:w-5 w-5 rounded-full ${isOnTop ? `bg-${textColor}`:'bg-primary'}`}></div>
          </div>
          <div>
            <div>
              <Link to="/">
                <div className="flex items-center gap-3">
                  <img src={isAbsolute && isOnTop ? LogoWhite:Logo} alt="logo" className="w-auto h-12" />
                  {/* <h1 className="sm:text-2xl text-xl font-bold">Serviceklick</h1> */}
                </div>
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-7">
            <p className={`hidden lg:block ${isOnTop ? `text-${textColor}`:'text-primary'}`}><Link to='/how-it-works'>How it Works</Link></p>
            <p className={`hidden lg:block ${isOnTop ? `text-${textColor}`:'text-primary'}`}><Link to='/about-us'>Abouts Us</Link></p>
            <p className={`hidden lg:block ${isOnTop ? `text-${textColor}`:'text-primary'}`}><Link to='/newsroom'>Newsroom</Link></p>
            <div className="cursor-pointer" onClick={() => toggleOptions()}>
              <img src={`${isOnTop && textColor === "white" ? Globe:GlobeBlack}`} alt="Globe" />
            </div>
            <button className={`py-2 px-6 rounded-full font-bold ${textColor === "white" ? "text-primary bg-white" : `text-white bg-primary`}`}>
              Join
            </button>
          </div>
          {/* Mobile Nav */}
          <div
            className={`lg:hidden flex flex-col justify-center items-center gap-2 absolute top-full left-0 w-full h-0 text-secondary bg-white font-medium rounded-lg transition-all duration-200 ease-linear overflow-hidden shadow-2xl z-30 ${isMenu && "sm:h-44 h-48 p-5"
              }`}
          >
            <p className="cursor-pointer"><Link to='/how-it-works'>How it Works</Link></p>
            <p className="cursor-pointer"><Link to='/about-us'>Abouts Us</Link></p>
            <p className="cursor-pointer"><Link to='/newsroom'>Newsroom</Link></p>
            <p
              className="sm:hidden cursor-pointer"
              onClick={() => toggleOptions()}
            >
              Language
            </p>
            <p className="sm:hidden cursor-pointer">Join</p>
          </div>
          {/* Show language and payments Modal */}
          {showLanguages && <LanguageCurrency handleShowLangauges={handleShowLangauges} />}
        </div>
      </Container>
    </div>
  );
};

export default Header;
