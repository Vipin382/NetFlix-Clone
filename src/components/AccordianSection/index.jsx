import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { AccordianData } from "../../constants/index";
import SearchBar from "../Searchbar";

const AccordianSection = () => {
  return (
    <div className="py-[70px] px-[45px] transition-all duration-200  bg-black grid place-items-center">
      <div className="flex flex-col gap-10 min-w-[200px] max-w-[900px] w-full">
        <h1 className="text-center text-xl sm:text-2xl smd:text-4xl lg:text-6xl">Frequently Asked Questions</h1>
        <Accordion allowToggle className="bg-black">
          {AccordianData.map((item, index) => {
            return (
              <AccordionItem key={index} className="mt-2">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        className="bg-[#303030]"
                        _hover={{
                          background: "[#303030]",
                        }}
                        padding={{md:"0.8em 1.2em 0.8em 1.2em" ,xl:"1.5em 2.2em 1.5em 1.2em",}}
                        // sx={{ padding: "1.5em 2.2em 1.5em 1.2em" }} 
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="lg:text-2xl"
                        >
                          {item.title}
                        </Box>
                        {isExpanded ? (
                          <RxCross2
                            onClick={(e) => {
                              e.currentTarget.style.rotate = "45deg";
                            }}
                            className="text-3xl transition-all duration-100"
                          />
                        ) : (
                          <AiOutlinePlus className="text-3xl transition-all duration-100"/>
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} className="mt-0.5 bg-[#303030]">
                      <p className="lg:text-2xl">{item.content}</p>
                      {item.content2 ? (
                        <p className="lg:text-2xl">
                          <br />
                          {item.content2}
                        </p>
                      ) : (
                        <p></p>
                      )}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>
        <SearchBar />
      </div>
    </div>
  );
};

export default AccordianSection;
