"use client";
import React, { useState } from "react";
import SectionContainer from "../Utils/SectionContainer";
import { H2, Subtitle } from "../Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import SingleTestimonialSlider from "./SingleTestimonialSlider";
import SwiperButtonNext from "./SwiperButtonNext";
import SwiperButtonPrev from "./SwiperButtonPrev";

const Testimonial = () => {
  const [progressBar, setProgressBar] = useState(0);
  return (
    <SectionContainer>
      <H2>Trusted by over 50,000 investors</H2>
      <Subtitle>See why people love us</Subtitle>
      <Swiper
        slidesPerView={2}
        spaceBetween={150}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper  mt-16"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        onSlideChange={(swiperCore) => {
          const { realIndex } = swiperCore;
          console.log(swiperCore);
          setProgressBar((realIndex + 1) / 8);
        }}
      >
        {[...Array(8)].map((data, i) => (
          <SwiperSlide>
            <SingleTestimonialSlider
              name="Zayn Chowdhury"
              designation="UI Dev, Jostle"
            >
              HABSL provides a reliable and professional service. I receive
              quick responses and honest intent that helps us to direct our
              clientele in quick easy steps. Having HABSL as our partner really
              gives us seamless trading operation.
            </SingleTestimonialSlider>
          </SwiperSlide>
        ))}

        <SwiperButtonNext progress={progressBar} />
      </Swiper>
    </SectionContainer>
  );
};

export default Testimonial;
