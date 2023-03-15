import { groq } from "next-sanity";
import React from "react";
import Hero from "@/components/Home/Hero";
import Counter from "@/components/Home/Counter";
import LogoGrid from "@/components/LogoGrid";
import CommissionBanner from "@/components/Home/CommissionBanner";
import Services from "@/components/Home/Services";
import ValueAddedServices from "@/components/Home/ValueAddedServices";
import Testimonial from "@/components/Home/Testimonial";
import ContactUsBanner from "@/components/ContactUsBanner";

const HomePage = async () => {
  return (
    <main>
      <Hero />
      <Counter />
      <LogoGrid />
      <CommissionBanner />
      <Services />
      <ValueAddedServices />
      <Testimonial />
      <ContactUsBanner />
    </main>
  );
};

export default HomePage;
