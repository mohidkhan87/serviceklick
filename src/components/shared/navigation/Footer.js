import React from "react";
import { Link } from "react-router-dom";

import Container from "../../ui/Container";

import ReceiptText from "../../../assets/images/shared/footer/receipt-text.png";
import Global from "../../../assets/images/shared/footer/global.png";
import YoutubeIcon from "../../../assets/images/shared/footer/youtube.svg";
import LinkedinIcon from "../../../assets/images/shared/footer/linkedin.svg";
import TwitterIcon from "../../../assets/images/shared/footer/twitter.svg";
import FacebookIcon from "../../../assets/images/shared/footer/facebook.svg";
import InstagramIcon from "../../../assets/images/shared/footer/instagram.svg";
import Plus from "../../../assets/images/shared/footer/switzerland.png";

const Footer = () => {
  return (
    <footer className="bg-lightGray pt-16 pb-8">
      <Container>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-72">
            <h4 className="text-primary text-lg 2xl:text-xl font-bold">Adresse Contact Center</h4>
            <div className="mt-4">
              <h5 className="text-primary text-base font-bold">Completely AG</h5>
              <div className="flex gap-1">
                <div className="flex items-center">
                  <img src={Plus} alt="Plus" className="w-3 h-3" />
                </div>
                <div>
                  <p className="font-bold text-secondary text-sm 2xl:text-base">Das Schweizer Original seit 2019</p>
                </div>
              </div>
              <p className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-sm 2xl:text-base mt-0">
                <Link to="/">Weiermatstrasse 22, 4653 Obergösgen CH-Solothurn </Link>
              </p>
            </div>
            <div className="mt-4">
              <h5 className="text-primary text-base font-bold">+41 848 88 81 81</h5>
              <p className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-sm 2xl:text-base mt-0">
                <Link to="/">CHF 0.08/Min. vom Schweizer Festnetz</Link>
              </p>
            </div>
            <div className="mt-4">
              <h5 className="text-primary text-base font-bold">Montag bis Freitag</h5>
              <p className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-sm 2xl:text-base mt-0">
                <Link to="/">Support 9.00-18.00 Uhr</Link>
              </p>
            </div>
            <div className="mt-4">
              <h5 className="text-primary text-base font-bold">Samstag bis Sonntag</h5>
              <p className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-sm 2xl:text-base mt-0">
                <Link to="/">Livechat Support 9.00-16.00</Link>
              </p>
            </div>
            <div className="mt-4">
              <h5 className="text-primary text-base font-bold">@ Contact</h5>
              <p className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-sm 2xl:text-base mt-0">
                <Link to="/">hello@completely.ch</Link>
              </p>
            </div>
            <div className="mt-4">
              <h5 className="text-primary text-base font-bold">Folgen Sie uns</h5>
              <div className="w-full grid grid-cols-5 gap-4 mt-5">
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
            <div className="mt-8">
              <h5 className="text-primary text-base font-bold">© Completely AG <sub>2022</sub></h5>
              <p className="text-textRed text-xs font-light mt-0">
                <Link to="/">swiss made software +swiss hosting</Link>
              </p>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-8">
            <div className="col-span-1">
              <h4 className="text-primary text-lg 2xl:text-xl font-bold">Customer's</h4>
              <div className="mt-4">
                <ul>
                  <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-sm 2xl:text-base mt-2">
                    <Link to="/">How to use completly</Link>
                  </li>
                  <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-sm 2xl:text-base mt-2">
                    <Link to="/">Community Guidelines</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-1">
              <h4 className="text-primary text-lg 2xl:text-xl font-bold">Community</h4>
              <div className="mt-4">
                <ul>
                  <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-sm 2xl:text-base mt-2">
                    <Link to="/">Against discrimination</Link>
                  </li>
                  <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-sm 2xl:text-base mt-2">
                    <Link to="/">Fightblackmarket</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-1">
              <h4 className="text-primary text-lg 2xl:text-xl font-bold">Company</h4>
              <div className="mt-4">
                <ul>
                  <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-sm 2xl:text-base mt-2">
                    <Link to="/">About us</Link>
                  </li>
                  <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-sm 2xl:text-base mt-2">
                    <Link to="/">Learn about new features</Link>
                  </li>
                  <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-sm 2xl:text-base mt-2">
                    <Link to="/">Message from our founders</Link>
                  </li>
                  <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-sm 2xl:text-base mt-2">
                    <Link to="/">Newsroom</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-1">
              <h4 className="text-primary text-lg 2xl:text-xl font-bold">Support</h4>
              <div className="mt-4">
                <ul>
                  <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-sm 2xl:text-base mt-2">
                    <Link to="/">Help Center</Link>
                  </li>
                  <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-sm 2xl:text-base mt-2">
                    <Link to="/">Safety information</Link>
                  </li>
                  <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-sm 2xl:text-base mt-2">
                    <Link to="/">Cancellation options</Link>
                  </li>
                  <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-sm 2xl:text-base mt-2">
                    <Link to="/">Our COVID-19 Response</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-2 xl:col-span-4">
              <h4 className="text-primary text-lg 2xl:text-xl font-bold">Business</h4>
              <div className="mt-4">
                <ul>
                  <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-sm 2xl:text-base mt-2">
                    <Link to="/">Completly for Service Providers</Link>
                  </li>
                  <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-sm 2xl:text-base mt-2">
                    <Link to="/">Community Guidelines</Link>
                  </li>
                  <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-sm 2xl:text-base mt-2">
                    <Link to="/">Providers-principles</Link>
                  </li>
                  <li className="text-footerTextGray hover:text-secondary transition duration-300 ease-in-out text-sm 2xl:text-base mt-2">
                    <Link to="/">Responsible service provider</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-2 xl:col-span-4">
              <h4 className="text-primary text-lg 2xl:text-xl font-bold">Serving in</h4>
              <div>
                <p className="text-footerTextGray text-sm mt-4">
                  <span className="font-bold text-primary">Switzerland </span><span className="inline-block"><img src={Plus} alt="Plus" className="w-3 h-3" /></span> Aarau, Baden, Basel, Bern, Biel-Bienne, Brienz, Brugg, Langenthal, Dietlikon, Dietikon, Dübendorf, Friebourg, Gstaad, Grindelwald, Horgen, Interlalken, Kloten, Köniz, Küssnacht, Lausanne, lauterbrunnen, Lucerne, Lugano, Meiringen, Neuchatel, Nidwalden, Nyon, Obwalden, Oerlikon, Olten, Rapperswill-Jona, Schwyz, Solothurn, St-Gallen, Thun, Uster, Wallisellen, Winterthur, Zollikon, Zug, Zürich  Coming soon in Davos, Geneva, Montreux, St. Moritz ...and whole Switzerland!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-0 mt-5 lg:mt-8">
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
          <div className="flex gap-8 w-max">
            <div className="flex gap-2">
              <div>
                <img src={Global} alt="Global" />
              </div>
              <div>
                <p className="text-footerTextGray font-semibold">English</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <img src={ReceiptText} alt="Receipt Text" />
              </div>
              <div>
                <p className="text-footerTextGray font-semibold">Payment</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
