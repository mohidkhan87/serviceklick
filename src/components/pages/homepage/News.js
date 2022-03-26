import React from "react";
import Container from "../../ui/Container";
import Card from "./news/Card";

const News = () => {
  return (
    <div>
      <Container>
        <h3 className="text-primary text-2xl 2xl:text-3xl sm:mb-0 mb-3 font-bold">
          News &amp; Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
          <Card title="How to find local professionals for pretty much anything." />
          <Card title="How to find local professionals for pretty much anything." />
          <Card title="How to find local professionals for pretty much anything." />
        </div>
      </Container>
    </div>
  );
};

export default News;
