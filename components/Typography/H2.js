import React from "react";

const H2 = ({ children, className }) => {
  return (
    <h2
      className={`font-lora text-[36px] font-semibold tracking-[0.5px] leading-[42px] text-center antialiased ${className}`}
    >
      {children}
    </h2>
  );
};

export default H2;
