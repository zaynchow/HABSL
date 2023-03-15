import { Display1, P, H3, Subtitle } from "@/components/Typography";
import Button from "@/components/Button/Button";
import SingleServiceSection from "@/components/Services/SingleServiceSection";
import Image from "next/image";
import ContactUsBanner from "@/components/ContactUsBanner";

const ServicesPage = () => {
  return (
    <div>
      <div className="py-[150px]">
        <Display1 className={"text-yellow"}>Services</Display1>
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
        </ul>{" "}
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
        </ul>{" "}
      </SingleServiceSection>
      <ContactUsBanner />
    </div>
  );
};

export default ServicesPage;
