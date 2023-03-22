"ues client";
import { useState } from "react";
import SectionContainer from "../Utils/SectionContainer";
import { H2, Subtitle, P } from "../Typography";
import InfoBox from "../Utils/InfoBox";

const Locations = () => {
  const [option, setOption] = useState();
  return (
    <SectionContainer className="max-w-[1200px]">
      <H2>Our Locations</H2>
      <Subtitle>
        Empowering investors to achieve greater returns through professional
        brokerage services
      </Subtitle>

      <div className="flex justify-center mt-9 mb-14">
        <P
          className={
            "text-center px-[50px] pb-2 border-b-4 border-solid border-yellow"
          }
        >
          Dhaka
        </P>
        <P
          className={
            "text-center px-[50px] pb-2 border-b-4 border-solid border-black"
          }
        >
          Chittagong
        </P>
      </div>
      <div className="flex gap-3 ">
        <InfoBox />
        <InfoBox />
        <InfoBox />
        <InfoBox />
      </div>
    </SectionContainer>
  );
};

export default Locations;
