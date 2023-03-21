import React from "react";
import Display1 from "../Typography/Display1";
import Button from "../Button/Button";
import { Subtitle } from "../Typography";

const Hero = () => {
  return (
    <div className="py-[150px]">
      {/* TODO: Adjust images */}
      {/* <Image
        src={"/jatiyo.png"}
        height={350}
        width={250}
        className="absolute"
      />
      <Image
        src={"/bull.png"}
        height={280}
        width={280}
        className="absolute right-0"
      /> */}
      <Display1>
        Achieving financial <br />
        <span className="text-yellow">success</span>
      </Display1>
      <Subtitle className=" text-xl font-light mt-6 mb-9 tracking-[1.2px]">
        Your trusted investment partner since 1956
      </Subtitle>
      <div className="text-center ">
        <Button
          link="/"
          bgColor="bg-black"
          outline={true}
          className="mr-4 text-white "
        >
          Join Us
        </Button>
        <Button
          link="/"
          bgColor="transparent"
          outline={true}
          className={"px-9"}
        >
          See Services
        </Button>
      </div>
    </div>
  );
};

export default Hero;

