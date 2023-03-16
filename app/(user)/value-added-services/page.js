"use client";

import { Display1, P, Subtitle } from "@/components/Typography";
import Button from "@/components/Button/Button";
import SingleServiceSection from "@/components/Services/SingleServiceSection";
import ContactUsBanner from "@/components/ContactUsBanner";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ValueAddedService = () => {
  return (
    <div>
      <div className="py-[150px]">
        <Display1 className={"text-yellow"}>Value Added Services</Display1>
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
      <SingleServiceSection reverse>
        <P className="mt-4">
          Any Bangladeshi national above the age of 18 or any Bangladeshi
          Institutions can invest in the capital market as a qualified Investor.{" "}
          <br />
          <br />
          The services are as follows:
        </P>
        <ul className="columns-2 mt-3">
          <li className="before:content-['-']">sdf</li>
          <li className="before:content-['-']">sdf</li>
        </ul>
      </SingleServiceSection>
      <SingleServiceSection>
        <P className="mt-4">
          Any Bangladeshi national above the age of 18 or any Bangladeshi
          Institutions can invest in the capital market as a qualified Investor.{" "}
          <br />
          <br />
          The services are as follows:
        </P>
        <ul className="columns-2 mt-3">
          <li className="before:content-['-']">sdf</li>
          <li className="before:content-['-']">sdf</li>
        </ul>
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
        <Accordion>
          <AccordionSummary
            aria-controls="panel2a-content"
            id="panel2a-header"
            expandIcon={<ExpandMoreIcon />}
          >
            <P>Accordion 2</P>
          </AccordionSummary>
          <AccordionDetails>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </P>
          </AccordionDetails>
        </Accordion>
      </SingleServiceSection>
      <ContactUsBanner />
    </div>
  );
};

export default ValueAddedService;
