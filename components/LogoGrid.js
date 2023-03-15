import React from "react";
import SectionContainer from "./Utils/SectionContainer";

const LogoGrid = () => {
  return (
    <SectionContainer className="pb-[50px]">
      <div className="flex justify-between gap-x-4 items-center">
        {[...Array(3)].map((e, i) => (
          <img
            className="saturate-0 hover:saturate-100 h-fit max-h-[100px]"
            src={`/logos/logo-${i}.png`}
            alt=""
            width={250}
            height="fit-content"
            key={i}
          />
        ))}
      </div>
      <div className="flex justify-between mt-12 gap-x-4 items-center">
        {[...Array(3)].map((e, i) => (
          <img
            className="saturate-0 hover:saturate-100 h-fit max-h-[100px]"
            src={`/logos/logo-${i + 3}.png`}
            alt=""
            width={250}
            height="fit-content"
            key={i}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default LogoGrid;
