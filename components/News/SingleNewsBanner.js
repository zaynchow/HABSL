import React from "react";
import { H3, P } from "../Typography";
import Button from "../Button/Button";
import PortableText from "react-portable-text";

const SingleNewsBanner = ({ img, title, desc }) => {
  return (
    <div className=" w-full border-solid border-2 border-black">
      <div className="h-[200px] bg-blue">ds</div>
      <div className="h-[55%] p-5 pb-8">
        <div className="mb-6">
          <P className="!text-left text-yellow">Article</P>
          <H3 className="!text-left  mt-3 mb-2 font-semibold !text-[22px] leading-7">
            {title}
          </H3>
          <P className="!text-left !block text-[14px]">
            <PortableText content={"sd"} />
          </P>
        </div>
        <Button
          bgColor="bg-transparent"
          className="text-left !p-0"
          arrow
          link="/"
        >
          Read More
        </Button>
      </div>
    </div>
  );
};

export default SingleNewsBanner;
