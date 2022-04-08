import React from "react";

import Container from "../../ui/Container";

import Trustpilot from "../../../assets/images/pages/homepage/trustpilot.png";
import GoogleReviews from "../../../assets/images/pages/homepage/google-reviews.png";

const ReviewPlatform = () => {
  return (
    <div>
      <Container>
        <div className="w-max flex flex-col gap-5 md:flex-row mx-auto">
          <div className="flex items-center">
            <p className="text-darkGray 2xl:text-lg break-words">
              What customers say about our services on
            </p>
          </div>
          <div>
            <div className="flex flex-wrap gap-5">
              <div className="w-max">
                <img
                  src={GoogleReviews}
                  alt="Google Reviews"
                  className="w-full"
                />
              </div>
              <div className="w-max">
                <img src={Trustpilot} alt="Trustpilot" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReviewPlatform;
