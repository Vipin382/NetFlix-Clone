import React from "react";
import { FaGlobe } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { GridData } from "../../constants";

const LandingFooter = () => {
  return (
    <>
      <div className="mt-4 bg-black py-[45px] pt-[70px] flex justify-center text-[#5a5a5a] font-[netflix-san]">
        <div className="flex flex-col justify-evenly w-[70%] gap-6">
          <h1>
            Questions? Call{" "}
            <a href="/#" className="hover:underline">
              000-800-919-1694
            </a>
          </h1>
          <div className="grid grid-cols-[repeat(1,minmax(170px,1fr))] sm:grid-cols-[repeat(2,minmax(170px,1fr))] md:grid-cols-[repeat(3,minmax(170px,1fr))] lg:grid-cols-[repeat(4,minmax(170px,1fr))] gap-1 grid-row-4">
            {GridData.map((item, index) => {
              return <div key={index}>{item.footer}</div>;
            })}
          </div>
          <div className="flex border-btn-sm border-bd-opacity px-1 smd:px-4 py-5 w-[150px]  cursor-pointer items-center rounded-btn gap-1 border-opacity-50 smd:p-1.5">
            <FaGlobe className="text-[0.6rem] sm:text-sm" />
            <select className="outline-none bg-transparent appearance-none text-[0.6rem] sm:text-sm">
              <option>English</option>
              <option>Hindi</option>
            </select>
            <AiFillCaretDown className="text-[0.6rem] sm:text-sm" />
          </div>
          <p>Netflix India</p>
        </div>
      </div>
    </>
  );
};

export default LandingFooter;
