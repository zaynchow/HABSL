import React from "react";
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"], weight: ["500", "600"] });

const Display2 = ({ children }) => {
  return (
    <h2
      className={`${lora.className} text-[40px] font-medium tracking-[0.5px] leading-[48px]  text-center`}
    >
      {children}
    </h2>
  );
};

export default Display2;
