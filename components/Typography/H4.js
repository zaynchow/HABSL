import React from "react";

const H4 = ({ children, className }) => {
  return (
    <h4
      className={`font-lora text-[36px] font-semibold tracking-[0.5px] leading-[42px] text-center antialiased ${className}`}
    >
      {children}
    </h4>
  );
};

export default H4;
