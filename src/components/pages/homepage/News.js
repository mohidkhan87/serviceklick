import React from "react";
import { Link } from "react-router-dom";

import Container from "../../ui/Container";

import news1 from '../../../assets/images/pages/about-us/news-1.png'
import news2 from '../../../assets/images/pages/about-us/news-2.png'

const Posts = () => {
  return (
    <section>
      <Container>
        <h3 className="text-primary text-2xl 2xl:text-3xl mb-4 font-bold">
          News &amp; Resources
        </h3>
        <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-10`}>
          <div>
            <Link to="/">
              <div className="flex flex-col">
                <div className="relative">
                  <img src={news1} alt="News" className="w-full" />
                  <div className="absolute flex items-center gap-2 bottom-4 left-4">
                    <div className="flex gap-4 items-center">
                      <button className="bg-white rounded-full text-secondary font-medium text-xs px-4 py-2">News</button>
                    </div>
                    <p className="text-white text-xs">by Completly</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-primary text-xl md:text-xl 2xl:text-2xl font-bold md:leading-7">
                    How to find local professionals for pretty much anything.
                  </p>
                  <p className="text-darkGray font-medium text-xs mt-4">February 24, 2022</p>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/">
              <div className="flex flex-col">
                <div className="relative">
                  <img src={news2} alt="News" className="w-full" />
                  <div className="absolute flex items-center gap-2 bottom-4 left-4">
                    <div className="flex gap-4 items-center">
                      <button className="bg-white rounded-full text-secondary font-medium text-xs px-4 py-2">Inspiration</button>
                    </div>
                    <p className="text-white text-xs">by Completly</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-primary text-xl md:text-xl 2xl:text-2xl font-bold md:leading-7">
                    How to find local professionals for pretty much anything.
                  </p>
                  <p className="text-darkGray font-medium text-xs mt-4">February 24, 2022</p>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/">
              <div className="flex flex-col">
                <div className="relative">
                  <img src={news1} alt="News" className="w-full" />
                  <div className="absolute flex items-center gap-2 bottom-4 left-4">
                    <div className="flex gap-4 items-center">
                      <button className="bg-white rounded-full text-secondary font-medium text-xs px-4 py-2">Sponsored</button>
                    </div>
                    <p className="text-white text-xs">by Completly</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-primary text-xl md:text-xl 2xl:text-2xl font-bold md:leading-7">
                    How to find local professionals for pretty much anything.
                  </p>
                  <p className="text-darkGray font-medium text-xs mt-4">February 24, 2022</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Posts;
