import React from "react";
import { Link } from "react-router-dom";

import Container from "../../ui/Container";

import FooterLogo from "../../../assets/images/shared/footer/footer-logo.png";
import YoutubeIcon from "../../../assets/images/shared/footer/youtube.svg";
import LinkedinIcon from "../../../assets/images/shared/footer/linkedin.svg";
import TwitterIcon from "../../../assets/images/shared/footer/twitter.svg";
import FacebookIcon from "../../../assets/images/shared/footer/facebook.svg";
import InstagramIcon from "../../../assets/images/shared/footer/instagram.svg";
import TrustPilot from "../../../assets/images/shared/footer/trustpilot.png";

const Footer = () => {
  return (
    <footer className="bg-lightGray py-16">
      <Container>
        <div className="border-b border-borderGray pb-8">
          <div>
            <Link to="/">
              <div className="w-max flex gap-3">
                <div>
                  <img src={FooterLogo} alt="logo" className="w-full" />
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-primary font-bold text-2xl">
                    Serviceklick
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-72 mt-4">
            <p className="text-darkGray text-sm">
              Lorem ipsum dolor sit amet conse ctetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
          <div className="w-72 grid grid-cols-5 gap-8 mt-12">
            <div className="w-max">
              <Link to="/">
                <img src={YoutubeIcon} alt="youtube" className="w-full" />
              </Link>
            </div>
            <div className="w-max">
              <Link to="/">
                <img src={LinkedinIcon} alt="linked" className="w-full" />
              </Link>
            </div>
            <div className="w-max">
              <Link to="/">
                <img src={TwitterIcon} alt="twitter" className="w-full" />
              </Link>
            </div>
            <div className="w-max">
              <Link to="/">
                <img src={FacebookIcon} alt="facebook" className="w-full" />
              </Link>
            </div>
            <div className="w-max">
              <Link to="/">
                <img src={InstagramIcon} alt="instagram" className="w-full" />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-7 mt-8">
          <div>
            <h4 className="text-primary text-xl font-bold">Company</h4>
            <div className="mt-4 lg:mt-8">
              <ul>
                <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-base mt-2">
                  <Link to="/">About us</Link>
                </li>
                <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-base mt-2">
                  <Link to="/">Learn about new features</Link>
                </li>
                <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-base mt-2">
                  <Link to="/">Message from our founders</Link>
                </li>
                <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-base mt-2">
                  <Link to="/">Newsroom</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-primary text-xl font-bold">Provider</h4>
            <div className="mt-4 lg:mt-8">
              <ul>
                <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-base mt-2">
                  <Link to="/">Completly for Service Providers</Link>
                </li>
                <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-base mt-2">
                  <Link to="/">Community Guidelines</Link>
                </li>
                <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-base mt-2">
                  <Link to="/">Providers-principles</Link>
                </li>
                <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-base mt-2">
                  <Link to="/">Responsible service provider</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-primary text-xl font-bold">Customer's</h4>
            <div className="mt-4 lg:mt-8">
              <ul>
                <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-base mt-2">
                  <Link to="/">How to use completly</Link>
                </li>
                <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-base mt-2">
                  <Link to="/">Community Guidelines</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-primary text-xl font-bold">Community</h4>
            <div className="mt-4 lg:mt-8">
              <ul>
                <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-base mt-2">
                  <Link to="/">Against discrimination</Link>
                </li>
                <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-base mt-2">
                  <Link to="/">Fightblackmarket</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-primary text-xl font-bold">Support</h4>
            <div className="mt-4 lg:mt-8">
              <ul>
                <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-base mt-2">
                  <Link to="/">Help Center</Link>
                </li>
                <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-base mt-2">
                  <Link to="/">Safety information</Link>
                </li>
                <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-base mt-2">
                  <Link to="/">Cancellation options</Link>
                </li>
                <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-base mt-2">
                  <Link to="/">Our COVID-19 Response</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="my-8">
          <h4 className="text-primary text-xl font-bold">Serving in</h4>
          <p className="text-footerTextGray text-sm mt-4 font-medium">
            Aarau, Baden, Basel, Bern, Biel-Bienne, Brienz, Brugg, Langenthal,
            Dietlikon, Dietikon, Dübendorf, Friebourg, Gstaad, Grindelwald,
            Horgen, Interlalken, Kloten, Köniz, Küssnacht, Lausanne,
            lauterbrunnen, Lucerne, Lugano, Meiringen, Neuchatel, Nidwalden,
            Nyon, Obwalden, Oerlikon, Olten, Rapperswill-Jona, Schwyz,
            Solothurn, St-Gallen, Thun, Uster, Wallisellen, Winterthur,
            Zollikon, Zug, Zürich
          </p>
          <p className="text-footerTextGray text-sm mt-4 font-medium">
            Coming soon in Davos, Geneva, Montreux, St. Moritz ...and whole
            Switzerland!
          </p>
          <div className="flex flex-col lg:flex-row justify-between  gap-5 lg:gap-0 mt-8">
            <div>
              <ul className="flex flex-col lg:flex-row gap-2 lg:gap-4 text-footerTextGray">
                <li className="hover:text-secondary transition duration-300 ease-in-out">
                  <Link to="/">Terms and Conditions</Link>
                </li>
                <li className="hover:text-secondary transition duration-300 ease-in-out">
                  <Link to="/">
                    <span className="hidden lg:inline-block">
                      &#8226;&nbsp;&nbsp;
                    </span>
                    Privacy policy
                  </Link>
                </li>
                <li className="hover:text-secondary transition duration-300 ease-in-out">
                  <Link to="/">
                    <span className="hidden lg:inline-block">
                      &#8226;&nbsp;&nbsp;
                    </span>
                    Impressum
                  </Link>
                </li>
                <li className="hover:text-secondary transition duration-300 ease-in-out">
                  <Link to="/">
                    <span className="hidden lg:inline-block">
                      &#8226;&nbsp;&nbsp;
                    </span>
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-max">
              <img src={TrustPilot} alt="trust pilot" className="w-full" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
