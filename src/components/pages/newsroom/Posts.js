import React from "react";
import { Link } from "react-router-dom";

import Container from "../../ui/Container";

import news1 from '../../../assets/images/pages/about-us/news-1.png'
import news2 from '../../../assets/images/pages/about-us/news-2.png'

const Posts = () => {
    return (
        <section>
            <Container>
                <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-10`}>
                    <div>
                        <Link to="/blog-post">
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
                        <Link to="/blog-post">
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
                        <Link to="/blog-post">
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
                <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-10 mt-16`}>
                    <div>
                        <Link to="/blog-post">
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
                        <Link to="/blog-post">
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
                        <Link to="/blog-post">
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
                    <div>
                        <Link to="/blog-post">
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
                <div>
                    <div className="flex justify-center mt-8">
                        <button className="border rounded-full px-5 py-2.5 border-darkGray inline-flex items-center">
                            Load more
                            <svg
                                width="14"
                                height="16"
                                className="ml-4"
                                viewBox="0 0 14 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13 10.5L7 15.5L1 10.5"
                                    stroke="#818799"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7 15.5L7 0.5"
                                    stroke="#818799"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Posts;
