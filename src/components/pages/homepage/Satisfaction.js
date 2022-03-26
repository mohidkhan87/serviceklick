import React from "react";
import Container from "../../ui/Container";

import YoungMale from "../../../assets/images/pages/homepage/young-male-cleaner.png";

const Satisfaction = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex-1">
            <img
              src={YoungMale}
              alt="young-male-cleaner-using-vacuum-cleaner"
              className="w-full"
            />
          </div>
          <div className="bg-lightGray flex-1 flex items-center px-5 lg:px-12 py-4 lg:py-12">
            <div>
              <h2 className="text-primary font-bold text-2xl md:text-2xl xl:text-4xl 2xl:text-5xl leading-7 md:leading-7 xl:leading-9 2xl:leading-none">
                Your satisfaction is, guaranteed.
              </h2>
              <p className="text-darkGray text-sm 2xl:text-lg md:mt-6 mt-4">
                Your satisfaction is our goal. If you're not satisfied, we'll
                work to make it right. Our friendly customer service
                representatives are available 12 hours a day, 7 days a week. The
                Serviceklick Satisfaction Guarantee only applies when you book
                and pay for a service directly through the Serviceklick
                platform.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Satisfaction;
