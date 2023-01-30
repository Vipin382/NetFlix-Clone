import { FaGlobe } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center smd:pt-6 pt-4 px-4 sm:px-6 smd:px-12">
      <div>
        <img
          src={"netflix.png"}
          alt={"loading..."}
          className="xl:h-12 lg:h-10 smd:h-8 h-6"
        />
      </div>
      <div className="flex justify-between gap-2 smd:gap-8">
        <div className="flex border-btn-sm border-bd-opacity px-1 smd:px-2 py-1 text-white cursor-pointer items-center rounded-btn gap-1 border-opacity-50 smd:p-1.5">
          <FaGlobe className="text-[0.6rem] sm:text-sm" />
          <select
            className="outline-none bg-transparent appearance-none text-[0.6rem] sm:text-sm"
          >
            <option>English</option>
            <option>Hindi</option>
          </select>
          <AiFillCaretDown className="text-[0.6rem] sm:text-sm" />
        </div>
        <button className="bg-red-new text-white px-2 sm:px-4 cursor-pointer rounded-sm font-semibold text-sm sm:text-xl ">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
