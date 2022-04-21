import React from "react";

const Headline = ({ id, title, text }) => {
    return (
        <div id={`section${id}`}>
            <h3 className="text-primary text-xl 2xl:text-2xl font-bold pt-10">{title}</h3>
            <p className="text-primary text-base 2xl:text-lg font-light mt-5">{text}</p>
        </div>
    );
};

export default Headline;
