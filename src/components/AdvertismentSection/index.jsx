import React from "react";
import { isTemplateExpression } from "typescript";
import { CONTAINER_PADDING } from "../../constants/index.js";

const AdvertismentSection = (props) => {
  return (
    <>
      <div className={`${CONTAINER_PADDING} bg-black`}>
        <div className="text-white flex flex-col lg:flex-row justify-center lg:h-[400px] items-center lg:gap-8 py-[50px] smd:py-[70px]">
          <div className="border-red-800 flex flex-col justify-center gap-2 lg:w-[500px]">
            <h1 className="text-center text-2xl lg:text-left smd:text-4xl lg:text-5xl font-bold font-[netflix-san]">
              {props.heading}
            </h1>
            <h2 className="text-center lg:text-left text-sm smd:text-lg lg:text-xl font-bold">
              {props.content}
            </h2>
          </div>
          <div className="h-[60vw] lg:h-[30vw] lg:max-h-[300px] overflow-hidden flex justify-center items-center">
            <img src={props.imgSrc} alt={"loading..."} className="h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvertismentSection;
