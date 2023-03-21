"use client";
import React, { useState } from "react";
import SectionContainer from "../Utils/SectionContainer";
import H2 from "../Typography/H2";
import P from "../Typography/P";
import H3 from "../Typography/H3";
import Button from "../Button/Button";
import Image from "next/image";
import urlFor from "@/lib/urlFor";

const Services = ({ data }) => {
  const [option, setOption] = useState(data[0]);

  return (
    <SectionContainer className="bg-blue pt-9 px-[80px] pb-16">
      <H2 className="text-white">Services to maximize your investments</H2>

      <div className="flex w-full justify-between text-center mt-9">
        {data.map((obj, index) => (
          <div className="flex flex-col w-full">
            <P
              className={"font-regular text-white cursor-pointer"}
              onClick={() => {
                setOption(obj);
              }}
            >
              {obj.service_name}
            </P>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-between mt-2">
        {data.map((obj, index) => (
          <hr
            className={`${
              obj.service_name == option.service_name
                ? "text-yellow"
                : "text-white"
            } w-1/4 border-solid border-2 transition`}
          />
        ))}
      </div>
      <div className="flex items-center pt-10 relative">
        <div className="w-1/2 ">
          <H3 className=" text-left text-white ">{option.service_name}</H3>
          <P className={"text-white py-6 pr-8"}>
            {option.service_short_desc[0].children[0].text}
          </P>
          <Button className={"bg-yellow "} link="/" arrow>
            Learn More
          </Button>
        </div>
        <div className="w-1/2 relative">
          <Image
            className="!relative"
            src={urlFor(option.service_img).url()}
            fill
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Services;




