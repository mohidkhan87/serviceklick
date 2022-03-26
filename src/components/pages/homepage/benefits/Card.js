import React from "react";
import BenefitImage from "../../../../assets/images/pages/homepage/benefit.png";
import TickCircle from "../../../../assets/images/pages/homepage/tick-circle.svg";

const Card = (props) => {
  const content = props.benefits.map((benefit) => (
    <div className="flex items-center gap-3 mt-1.5" key={benefit.id}>
      <div className="flex-shrink-0">
        <img src={TickCircle} alt="tick" className="md:w-auto w-5" />
      </div>
      <div>
        <p className="text-darkGray text-sm md:text-base font-medium">
          {benefit.text}
        </p>
      </div>
    </div>
  ));
  return (
    <div className="mb-5 md:mb-0">
      <div className="flex flex-col">
        <div>
          <img src={BenefitImage} alt="benefit" className="w-full" />
        </div>
        <div className="mt-4">
          <p className="text-primary md:text-lg font-semibold md:leading-5">
            Professional and qualified employees
          </p>
        </div>
        <div className="mt-2">{content}</div>
      </div>
    </div>
  );
};

export default Card;
