import React, {useState} from "react";

import Container from "../ui/Container";

import Why1 from '../../assets/images/shared/why-completly/why-1.png'
import Why2 from '../../assets/images/shared/why-completly/why-2.png'
import Why3 from '../../assets/images/shared/why-completly/why-3.png'
import Why4 from '../../assets/images/shared/why-completly/why-4.png'
const WhyCompletly = ({title}) => {
  const [activeWhy, setActiveWhy] = useState(1)

  return (
    <Container>
      <div className="grid xl:grid-cols-2 grid-cols-1 xl:gap-8 md:gap-12 gap-20 xl:my-32">
        <div className="flex flex-col justify-start md:mb-20 xl:mb-0">
          <div className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
            {title}
          </div>
          <div className={`cursor-pointer mt-8 ${activeWhy === 1 ? 'opacity-100' : 'opacity-30'}`} onMouseOver={() => setActiveWhy(1)}>
            <h3 className={`${activeWhy === 1 ? 'text-secondary' : 'text-primary'} font-bold text-lg`}>Step one: select the type of cleaning service</h3>
            <p className="text-primary text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus morbi ut cursus dui pharetra, fusce. Pharetra risus urna, vitae diam.
            </p>
          </div>
          <div className={`cursor-pointer mt-8 ${activeWhy === 2 ? 'opacity-100' : 'opacity-30'}`} onMouseOver={() => setActiveWhy(2)}>
            <h3 className={`${activeWhy === 2 ? 'text-secondary' : 'text-primary'} font-bold text-lg`}>Step two: specify your requirements</h3>
            <p className="text-primary text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus morbi ut cursus dui pharetra, fusce. Pharetra risus urna, vitae diam.
            </p>
          </div>
          <div className={`cursor-pointer mt-8 ${activeWhy === 3 ? 'opacity-100' : 'opacity-30'}`} onMouseOver={() => setActiveWhy(3)}>
            <h3 className={`${activeWhy === 3 ? 'text-secondary' : 'text-primary'} font-bold text-lg`}>Step three: hire professionals</h3>
            <p className="text-primary text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus morbi ut cursus dui pharetra, fusce. Pharetra risus urna, vitae diam.
            </p>
          </div>
          <div className={`cursor-pointer mt-8 ${activeWhy === 4 ? 'opacity-100' : 'opacity-30'}`} onMouseOver={() => setActiveWhy(4)}>
            <h3 className={`${activeWhy === 4 ? 'text-secondary' : 'text-primary'} font-bold text-lg`}>Final step: leave a review!</h3>
            <p className="text-primary text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus morbi ut cursus dui pharetra, fusce. Pharetra risus urna, vitae diam.
            </p>
          </div>
        </div>
        <div className="flex justify-center mb-10 md:mb-20 xl:mb-0 mt-24 xl:mt-0">
          <div className="relative flex justify-center items-center">
            <img
              src={activeWhy === 1 ? Why1 : activeWhy === 2 ? Why2 : activeWhy === 3 ? Why3 : Why4 }
              alt="upper-img"
              className="relative z-10"
              style={{width: '350px'}}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyCompletly;
