import { useState } from "react";
import React from "react";

import Container from "../../ui/Container";
import BlogCard from "./BlogCard";

const Services = () => {
  const [openTab, setOpenTab] = useState(0);
  const tabs = ["Cleaning", "Painter", "Chef"];
  const blogCards = [
    { title: 'How to find local professionals for pretty much anything.', date: 'February 24, 2022', category: 'News' },
    { title: 'How to find local professionals for pretty much anything.', date: 'February 24, 2022', category: 'News' },
    { title: 'How to find local professionals for pretty much anything.', date: 'February 24, 2022', category: 'News' },
  ];
  const blogCards2 = [
    { title: 'How to find local professionals for pretty much anything.', date: 'February 24, 2022', category: 'News' },
    { title: 'How to find local professionals for pretty much anything.', date: 'February 24, 2022', category: 'News' },
    { title: 'How to find local professionals for pretty much anything.', date: 'February 24, 2022', category: 'News' },
    { title: 'How to find local professionals for pretty much anything.', date: 'February 24, 2022', category: 'News' },
  ];
  const handleTab = (tabNumber) => {
    setOpenTab(tabNumber);
  };

  return (
    <div className="mt-20">
      <Container>
        <div>
          <ul className="flex">
            {tabs.map((item, index) => (
              <li key={index} className="mr-4">
                <div
                  className={
                    "cursor-pointer border rounded-full border-customGray inline-block py-2 px-4 text-sm font-medium text-center hover:bg-primary hover:text-white transition ease-in-out duration-500 " +
                    (openTab === index
                      ? "text-white bg-primary"
                      : "text-primary")
                  }
                  onClick={() => handleTab(index)}
                >
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="py-5">
          <div className={openTab === 0 ? "block" : "hidden"}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {
                blogCards.map((item, index) =>
                  <div key={index}>
                    <BlogCard item={item} />
                  </div>
                )
              }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-8">
              {
                blogCards2.map((item, index) =>
                  <div key={index}>
                    <BlogCard item={item} />
                  </div>
                )
              }
            </div>
          </div>
          <div className={openTab === 1 ? "block" : "hidden"}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {
                blogCards.map((item, index) =>
                  <div key={index}>
                    <BlogCard item={item} />
                  </div>
                )
              }
            </div>
          </div>
          <div className={openTab === 2 ? "block" : "hidden"}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {
                blogCards.map((item, index) =>
                  <div key={index}>
                    <BlogCard item={item} />
                  </div>
                )
              }
            </div>
          </div>
          <div className={openTab === 3 ? "block" : "hidden"}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {
              blogCards.map((item, index) =>
                <div key={index}>
                  <BlogCard item={item} />
                </div>
              )
            }
          </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="border rounded-full px-5 py-2.5 border-darkGray inline-flex items-center">
              Load more
              <svg width="14" height="16" className='ml-4' viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 10.5L7 15.5L1 10.5" stroke="#818799" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 15.5L7 0.5" stroke="#818799" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default Services;
