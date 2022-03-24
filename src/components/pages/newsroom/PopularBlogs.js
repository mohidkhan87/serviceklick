import React from "react";

import Container from "../../ui/Container";
import PopularBlogCard from "./PopularBlogCard";

const Services = () => {
  const blogCards = [
    { title: 'How to find local professionals for pretty much anything.', date: 'February 24, 2022', category: 'News' },
    { title: 'How to find local professionals for pretty much anything.', date: 'February 24, 2022', category: 'News' },
    { title: 'How to find local professionals for pretty much anything.', date: 'February 24, 2022', category: 'News' },
    { title: 'How to find local professionals for pretty much anything.', date: 'February 24, 2022', category: 'News' },
  ];

  return (
    <div className="mt-10">
      <Container>
        <h2 className="text-primary font-bold text-3xl">Most popular</h2>
        <div className="pb-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              {
                blogCards.map((item, index) =>
                  <div key={index}>
                    <PopularBlogCard item={item} />
                  </div>
                )
              }
            </div>
          </div>
      </Container>
    </div>
  );
};

export default Services;
