import React from "react";
const P = ({ className, children, onClick }) => {
  return (
    <p
      className={` font-jakarta text-[16px] font-regular leading-[24px] inline-block ${className}`}
      onClick={onClick}
      style={{ "word-spacing": "3px" }}
    >
      {children}
    </p>
  );
};

export default P;
