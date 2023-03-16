import React from "react";
import SectionContainer from "./SectionContainer";
import { H3, P, A } from "../Typography";
import Button from "../Button/Button";

const PriceInfoRow = ({ className, title, priceFixed, desc }) => {
  return (
    <div
      className={`h-24 border-t-2 border-solid border-black font-jakarta flex items-center justify-between max-w-[980px] mx-auto ${className}`}
    >
      <H3>{title}</H3>
      {priceFixed ? (
        <A className="text-[30px] font-medium" href="/contact">
          Contact Us
        </A>
      ) : (
        <P className={"font-medium"}>
          <span className="text-yellow text-3xl">BDT </span>
          <span className="text-3xl">500</span>
          <span className="text-sm"> (one time)</span>
        </P>
      )}
    </div>
  );
};

export default PriceInfoRow;
