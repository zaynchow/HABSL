import React from "react";
import SectionContainer from "../Utils/SectionContainer";
import Image from "next/image";
import { H3, P } from "../Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PortableText from "react-portable-text";
import urlFor from "@/lib/urlFor";

const SingleServiceSection = ({
  image,
  reverse,
  title,
  desc,
  includeAccordions,
}) => {
  return (
    <SectionContainer
      className={`flex items-center justify-between ${
        reverse && "flex-row-reverse"
      }`}
    >
      <Image
        src={urlFor(image).url()}
        width={500}
        height={400}
        className="max-w-[50%]"
      />
      <div className={`max-w-[50%] ${reverse ? "pr-10" : "pl-10"}`}>
        <H3 className="font-semibold">{title}</H3>
        <div className="mt-4">
          <PortableText
            content={desc}
            serializers={{
              h1: (props) => <h1 style={{ color: "red" }} {...props} />,
              ul: ({ children }) => (
                <ul className="columns-2 mt-3">{children}</ul>
              ),
              break: (props) => <br />,
              li: ({ children }) => (
                <li className="before:content-['-'] leading-[28px]">
                  {children}
                </li>
              ),
            }}
          />
        </div>

        {includeAccordions && (
          <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              expandIcon={<ExpandMoreIcon />}
            >
              <P>Accordion 1</P>
            </AccordionSummary>
            <AccordionDetails>
              <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </P>
            </AccordionDetails>
          </Accordion>
        )}
      </div>
    </SectionContainer>
  );
};

export default SingleServiceSection;
