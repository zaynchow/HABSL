import React from "react";

const SectionContainer = (props) => {
  return (
    <div
      className={` box-border max-w-[980px] mx-auto mb-[100px] relative ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default SectionContainer;
