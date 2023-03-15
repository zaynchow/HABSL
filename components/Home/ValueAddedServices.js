import React from "react";
import { H2, Subtitle } from "../Typography";
import InfoRow from "../Utils/InfoRow";
import SectionContainer from "../Utils/SectionContainer";

const ValueAddedServices = () => {
  return (
    <SectionContainer>
      <H2>Value added services</H2>
      <Subtitle>
        Empowering investors to achieve greater returns through professional
        brokerage services
      </Subtitle>
      <div className="mt-16">
        <InfoRow title="Online BO Account Opening" button link="/" />
        <InfoRow title="Online BO Account Opening" button link="/" />
        <InfoRow title="Online BO Account Opening" button link="/" />
        <InfoRow title="Online BO Account Opening" button link="/" />
        <InfoRow
          title="Online BO Account Opening"
          button
          link="/"
          className="border-b-2 border-solid border-black"
        />
      </div>
    </SectionContainer>
  );
};

export default ValueAddedServices;
