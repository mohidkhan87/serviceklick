import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container mx-auto px-5 sm:px-10 lg:px-24 relative z-20">
      {children}
    </div>
  );
};

export default Container;
