import "../../styles/index.css";
import { CONTAINER_PADDING } from "../../constants/index.js";
import SearchBar from "../Searchbar";

const LandingSection = () => {
  return (
    <div
      className={`smd:h-[88vh] font-[netflix-san] h-[500px] sm:h-[90vw] justify-center items-center flex  ${CONTAINER_PADDING}`}
    >
      <div className="transition-all duration-200 min-w-[200px] max-w-[750px] w-[100%] h-[70%] smd:h-[50%] md:h-[60%] text-white flex justify-evenly flex-col">
        <div>
          <h1 className="text-center text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
            Unlimited movies, TV shows and more.
          </h1>
        </div>
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2">
          Watch anywhere. Cancel anytime
        </h2>
        <SearchBar/>
      </div>
    </div>
  );
};

export default LandingSection;
