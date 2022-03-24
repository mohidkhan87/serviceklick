import React from "react";

import Post from '../../../assets/images/pages/newsroom/post.png'

const BlogCard = ({item}) => {
  return (
    <div>
      <div>
        <div>
            <div className="relative">
                <img src={Post} alt={item.title} className="w-full"/>
                <div className="absolute bottom-4 left-4">
                  <div className="flex gap-4 items-center">
                    <button className="bg-white rounded-full text-secondary font-medium text-sm px-4 py-1">{item.category}</button>
                    <p className="flex-1 text-white font-medium text-sm">by Completly</p>
                  </div>
                </div>
            </div>
        </div>
        <div className="mt-4">
          <h2 className="text-primary font-bold text-xl">{item.title}</h2>
          <p className="text-darkGray font-medium text-xs mt-2">{item.date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
