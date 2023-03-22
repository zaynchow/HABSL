import React from "react";
import { P, H4 } from "../Typography";

const InfoBox = () => {
  return (
    <div className="border-2 border-solid border-black pt-[40px] pb-[130px] px-[20px]">
      <H4 className="!font-jakarta !text-left underline text-[28px] mb-4">
        Banani
      </H4>
      <P className="!block">
        <span className="font-semibold">Address: </span>
        Uday Tower (6th floor) 57-57/A Gulshan Avenue, Circle-1, Dhaka-1212
      </P>

      <P className="!block">
        <span className="font-semibold">Phone: </span>
        +88 01844485506
      </P>
    </div>
  );
};

export default InfoBox;
