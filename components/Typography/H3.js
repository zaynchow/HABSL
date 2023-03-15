import React from "react";

const H3 = ({ children, className }) => {
  return (
    <h3
      className={`font-jakarta text-[24px] font-medium tracking-[0.5px] leading-[32px] antialiased ${className}`}
    >
      {children}
    </h3>
  );
};

export default H3;
