import React from "react";
import { Link } from "react-router-dom";

import PostImage from "../../../assets/images/shared/posts/post-1.png";

const Card = (props) => {
    return (
        <div>
            <Link to="/">
                <div className="flex flex-col">
                    <div className="relative">
                        <img src={PostImage} alt="benefit" className="w-full" />
                        <div className="absolute bottom-4 left-4">
                            <div className="flex gap-4 items-center">
                                <button className="bg-white rounded-full text-secondary font-medium text-xs px-4 py-2">{props.category}</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-primary text-xl md:text-xl 2xl:text-2xl font-bold md:leading-7">
                            {props.title}
                        </p>
                        { props.date && 
                            <p className="text-darkGray font-medium text-xs mt-2">{props.date}</p>
                        }
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
