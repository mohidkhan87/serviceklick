import React from "react";
import Container from "../../ui/Container";

import Card from "./benefits/Card";
const Benefits = () => {
  const card1Benefits = [
    {
      id: 1,
      text: "Experienced cleaning agents",
    },
    {
      id: 2,
      text: "Close attention to detail",
    },
    {
      id: 3,
      text: "Employed by Completly",
    },
  ];
  const card2Benefits = [
    {
      id: 1,
      text: "Personalised services",
    },
    {
      id: 2,
      text: "Free cancellation up to 48h before your cleaning",
    },
    {
      id: 3,
      text: "Non-binding contract",
    },
  ];
  const card3Benefits = [
    {
      id: 1,
      text: "Personalised follow-up",
    },
    {
      id: 2,
      text: "Processing of requests within 48h",
    },
    {
      id: 3,
      text: "Reactivity and flexibility assured",
    },
  ];
  return (
    <div className="my-16">
      <Container>
        <h3 className="text-primary text-xl 2xl:text-3xl font-bold">
          What do you benefit from Completly?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:mt-2 mt-3">
          <Card benefits={card1Benefits} />
          <Card benefits={card2Benefits} />
          <Card benefits={card3Benefits} />
        </div>
      </Container>
    </div>
  );
};

export default Benefits;
