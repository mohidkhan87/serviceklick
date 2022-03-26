import React from "react";
import BenefitImage from "../../../../assets/images/pages/homepage/benefit.png";

const Card = (props) => {
  return (
    <div>
      <div className="flex flex-col mdmb-0 mb-6">
        <div>
          <img src={BenefitImage} alt="benefit" className="w-full" />
        </div>
        <div className="my-3">
          <p className="text-primary text-xl md:text-2xl font-bold md:leading-7">
            {props.title}
          </p>
        </div>
        <div>
          <p className="text-darkGray text-xs text-semibold">
            February 24, 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
