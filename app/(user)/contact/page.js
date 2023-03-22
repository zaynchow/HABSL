"use client";
import { Display1, Subtitle } from "@/components/Typography";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { useState, useEffect } from "react";
import Locations from "@/components/Contact/Locations";
const contactQuery = groq`*[_type=="fees"] | order(_createdAt asc)`;
const Contact = () => {
  const [data, setData] = useState(null);
  async function fetchData() {
    const feesData = await client.fetch(feesQuery);
    const servicesData = await client.fetch(servicesQuery);
    const newData = {
      feesData,
      servicesData,
    };
    setData(newData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="py-[150px]">
      <Display1 className={"text-yellow"}>Contact</Display1>
      <Subtitle className="text-xl font-light mt-6 mb-9 tracking-[1.2px]">
        Empowering investors to achieve greater returns through professional
        brokerage services
      </Subtitle>
      <Locations />
    </div>
  );
};

export default Contact;
