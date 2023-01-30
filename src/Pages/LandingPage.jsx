import React from "react";
import { LandingSection, Navbar } from "../components";
import AdvertismentSection from "../components/AdvertismentSection";
import { sectionData } from "../constants";
import { ChakraProvider } from "@chakra-ui/react";
import AccordianSection from "../components/AccordianSection";
import { extendTheme } from "@chakra-ui/react";
import LandingFooter from "../components/Footer";

const breakpoints = {
  xsm: "280px",
  sm: "480px",
  md: "550px",
  lg: "768px",
  xl: "950px",
  "2xl": "1440px",
};

const theme = extendTheme({ breakpoints });

const LandingPage = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <div className="bg-responsive-texture md:bg-landing-texture bg-no-repeat bg-cover bg-center">
          <Navbar />
          <LandingSection />
        </div>
        <div className="bg-[#222222] flex flex-col gap-4 py-3">
          {sectionData.map((item, index) => {
            return (
              <AdvertismentSection
                key={index}
                heading={item.heading}
                content={item.content}
                imgSrc={item.imgSrc}
              />
            );
          })}
        </div>
        <AccordianSection />
        <LandingFooter />
      </ChakraProvider>
    </>
  );
};

export default LandingPage;
