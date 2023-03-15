import React from "react";

const Display1 = ({ children, className }) => {
  return (
    <h1
      className={`font-lora text-[64px] font-semibold tracking-[0.5px] leading-[64px] text-center antialiased hover:subpixel-antialiased ${className}`}
    >
      {children}
    </h1>
  );
};

export default Display1;
