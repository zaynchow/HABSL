"use client";
import HighlightedNews from "@/components/News/HighlightedNews";
import React from "react";
import { Display1, Subtitle } from "@/components/Typography";
import Button from "@/components/Button/Button";
import SingleNewsBanner from "@/components/News/SingleNewsBanner";
import SectionContainer from "@/components/Utils/SectionContainer";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { useState, useEffect } from "react";

const blogQuery = groq`*[_type=="blog_posts"] | order(_createdAt asc)`;

const news = () => {
  const [data, setData] = useState(null);
  async function fetchData() {
    const blogData = await client.fetch(blogQuery);
    const newData = {
      blogData,
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
    <div>
      <div className="py-[150px]">
        <Display1 className={"text-yellow"}>Stay Updated</Display1>
        <Subtitle className="text-xl font-light mt-6 mb-9 tracking-[1.2px]">
          Empowering investors to achieve greater returns through professional
          brokerage services
        </Subtitle>
        <div className="text-center">
          <Button
            link="/contact"
            bgColor="bg-black"
            outline={true}
            className=" text-white"
          >
            Join Us
          </Button>
        </div>
      </div>
      <HighlightedNews />
      <SectionContainer className="grid grid-cols-2 gap-12 ">
        <SingleNewsBanner
          title={data.blogData[0].title}
          desc={data.blogData[0].desc}
          img={data.blogData[0].image}
        />
        {console.log(data)}
        <SingleNewsBanner />
        <SingleNewsBanner />
      </SectionContainer>
    </div>
  );
};

export default news;
