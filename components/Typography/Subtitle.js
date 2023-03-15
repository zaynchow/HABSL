import React from "react";

const Subtitle = ({ children, className}) => {
  return (
    <h2
      className={`font-jakarta text-[18px] font-normal tracking-[0.5px] leading-[28px] antialiased text-center mt-3 max-w-[580px] mx-auto ${className}`}
    >
      {children}
    </h2>
  );
};

export default Subtitle;
