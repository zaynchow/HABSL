import React from "react";
import PriceInfoRow from "../Utils/PriceInfoRow";
import SectionContainer from "../Utils/SectionContainer";
import { H2, Subtitle } from "../Typography";

const Fees = () => {
  return (
    <SectionContainer>
      <H2>Fees and Charges</H2>
      <Subtitle>
        Empowering Investors to Achieve Greater Returns through Professional
        Securities Brokerage
      </Subtitle>
      <div className="mt-16">
        <PriceInfoRow title={"BO Account Opening"} />
        <PriceInfoRow title={"Annual Account Maintenance"} />
        <PriceInfoRow title={" Account Closing Fee"} />
        <PriceInfoRow title={"Other Services"} priceFixed />
      </div>
    </SectionContainer>
  );
};

export default Fees;
