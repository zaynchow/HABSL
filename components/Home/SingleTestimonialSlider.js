import React from "react";
import Image from "next/image";
import { P } from "../Typography";
import { useSwiper } from "swiper/react";

const SingleTestimonialSlider = ({ children }) => {

  return (
    <div>
      <div className="border-solid border-black border-2  w-[520px] mx-auto mb-[100px] p-7">
        <div className="flex items-center gap-3">
          <Image
            src="/DSE.png"
            width="68"
            height="68"
            className="rounded-[50%] h-[68px]"
          />
          <P>
            Zayn Chowdhury
            <br />
            <span className="font-light">UI Dev, Jostle</span>
          </P>
        </div>
        <div className="mt-4 inline-block before:mr-1 before:block before:content-[''] before:bg-[url('/icons/quotation-mark-upwards.svg')] before:w-[30px] before:h-[20px] before:bg-no-repeat before:float-left after:block after:content-[''] after:bg-[url('/icons/quotation-mark-downwards.svg')] after:w-[30px] after:h-[20px] after:bg-no-repeat after:float-right ">
          {children}
        </div>
      </div>

    </div>
  );
};

export default SingleTestimonialSlider;
