import React from "react";
import Display2 from "../Typography/Display2";
import P from "../Typography/P";
import SectionContainer from "../Utils/SectionContainer";

const Counter = () => {
  return (
    <SectionContainer className="pb-[50px]">
      <Display2>
        A generation of ownership built <br /> on HABSL
      </Display2>
      <div className="flex justify-center flex-col items-center ">
        <P className="inline-block mt-9 px-6 py-6 text-[40px] font-semibold tracking-[4.5px]  border-2 border-black border-solid">
          <span className="text-yellow">3,500</span>,000,000 +
        </P>
        <P className="mt-1">Current client book size in BDT</P>
        <div className="flex mt-20">
          <div className="flex flex-col  items-center">
            <P className="inline-block font-medium tracking-[0] text-[40px]  ">
              66+
            </P>
            <P className="mt-3">Years in Brokerage</P>
          </div>
          <div className="flex flex-col  items-center">
            <P className="inline-block  text-[40px]  font-medium tracking-[0]  mx-[125px]">
              05
            </P>
            <P className="mt-3">Branches</P>
          </div>
          <div className="flex flex-col  items-center">
            <P className="inline-block font-medium tracking-[0] text-[40px]  ">
              50,000+
            </P>
            <P className="mt-3">Clients served</P>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Counter;
