import React from "react";

import Post from '../../../assets/images/pages/newsroom/post-2.png'

const BlogCard = ({item}) => {
  return (
    <div>
      <div className="flex gap-4">
        <div className="flex-1">
            <div className="relative">
                <img src={Post} alt={item.title}/>
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
          <h2 className="text-primary font-bold text-lg md:text-2xl mt-2">{item.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
