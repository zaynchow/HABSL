import React from "react";
import SectionContainer from "../Utils/SectionContainer";
import Image from "next/image";
import { H3, P } from "../Typography";

const SingleServiceSection = ({ children, reverse }) => {
  return (
    <SectionContainer
      className={`flex items-center justify-between ${
        reverse && "flex-row-reverse"
      }`}
    >
      <Image src="/DSE.png" width={500} height={400} className="max-w-[50%]" />
      <div className={`max-w-[50%] ${reverse ? "pr-10" : "pl-10"}`}>
        <H3>Full DP Services</H3>
        {children}
      </div>
    </SectionContainer>
  );
};

export default SingleServiceSection;
