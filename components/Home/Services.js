"use client";
import React, { useState } from "react";
import SectionContainer from "../Utils/SectionContainer";
import H2 from "../Typography/H2";
import P from "../Typography/P";
import H3 from "../Typography/H3";
import Button from "../Button/Button";

const Services = () => {
  const options = [
    {
      name: "Full DP Service",
      desc: "We provide full depository services that consist of opening and maintenance of BO account, dematerialization and re-materialization, transfer and transmission, unpledging services through CDBL.",
    },
    {
      name: "Research Service",
      desc: "We provide full depository services that consist of opening and maintenance of BO account, dematerialization and re-materialization, transfer and transmission, unpledging services through CDBL.",
    },
    {
      name: "Margin Loan Facility",
      desc: "We provide full depository services that consist of opening and maintenance of BO account, dematerialization and re-materialization, transfer and transmission, unpledging services through CDBL.",
    },
  ];
  const [option, setOption] = useState(options[0]);

  return (
    <SectionContainer className="bg-blue pt-9 px-[80px] pb-16">
      <H2 className="text-white">Services to maximize your investments</H2>

      <div className="flex w-full justify-around mt-9">
        {options.map((data, index) => (
          <P
            className={"font-regular text-white cursor-pointer"}
            onClick={() => {
              setOption(data);
            }}
          >
            {data.name}
          </P>
        ))}
      </div>
      <div className="flex w-full justify-around mt-2">
        {options.map((data, index) => (
          <hr
            className={`${
              data.name == option.name ? "text-yellow" : "text-white"
            } w-1/3 border-solid border-2 transition`}
          />
        ))}
      </div>
      <div className="flex items-center pt-10">
        <div className="w-1/2 ">
          <H3 className=" text-left text-white ">{option.name}</H3>
          <P className={"text-white py-6 pr-8"}>{option.desc}</P>
          <Button className={"bg-yellow "} link="/" arrow>
            Learn More
          </Button>
        </div>
        <img className="w-1/2 " src="/DSE.png" alt="" />
      </div>
    </SectionContainer>
  );
};

export default Services;
