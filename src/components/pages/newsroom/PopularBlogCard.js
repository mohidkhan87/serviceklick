import React from "react";
import { Link } from "react-router-dom";

import Post1 from '../../../assets/images/pages/newsroom/post-1.png'

const BlogCard = ({item}) => {
  return (
    <div>
      <Link to='/blog-post'>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
              <div className="relative">
                  <img src={Post1} alt={item.title} className="w-full"/>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex flex-col md:flex-row md:gap-4 md:items-center">
                      <button className="bg-white rounded-full text-secondary font-medium text-sm px-4 py-1">{item.category}</button>
                      <p className="flex-1 text-white font-medium text-sm mt-1 md:mt-0">by Completly</p>
                    </div>
                  </div>
              </div>
          </div>
          <div className="flex-1">
            <p className="text-darkGray font-medium text-xs">{item.date}</p>
            <h2 className="text-primary font-bold text-lg md:text-base xl:text-xl mt-2">{item.title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
