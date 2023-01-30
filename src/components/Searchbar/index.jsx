import { useRef, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

const SearchBar = () => {
  const refError = useRef();
  const inputRef = useRef();
  const [value, setValue] = useState();

  const checkValue = () => {
    if (!value) {
      refError.current.style.opacity = "1";
    }
    const timer = setTimeout(() => {
      refError.current.style.opacity = "0";
    }, 2000);

    clearTimeout(() => timer);
  };

  return (
    <>
      <div>
        <h3 className="text-center text-xs sm:text-sm md:text-xl mb-2 text-white">
          Ready to watch? Enter your email to create or restart your membership
        </h3>
        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-y-1">
          <label
            className="flex flex-col relative flex-1 min-w-full lg:min-w-fit"
            htmlFor="email"
          >
            <label
              htmlFor="email"
              ref={inputRef}
              className="absolute text-stone-600 mt-[3%] pl-2 transition-all duration-100"
            >
              Email address
            </label>
            <input
              type="text"
              id="email"
              value={value}
              className="sm:h-[50px] h-[40px] smd:h-[60px] lg:h-[72px] outline-none border-none bg-white text-stone-800 pl-2"
              onChange={(e) => {
                setValue(e.currentTarget.value);
              }}
              onFocus={(e) => {
                inputRef.current.setAttribute(
                  "style",
                  "margin-top:1px;font-size:10px;"
                );
              }}
              onBlur={(e) => {
                value
                  ? inputRef.current.setAttribute(
                      "style",
                      "margin-top:1px;font-size:10px;"
                    )
                  : inputRef.current.setAttribute(
                      "style",
                      "margin-top:3%;font-size:1rem;"
                    );
              }}
            />
            <label
              className="text-yellow-600 font-semibold h-5 opacity-0 pl-2"
              ref={refError}
            >
              Email Address
            </label>
          </label>
          <label htmlFor="btn">
            <button
              className="flex bg-red-new items-center text-xs sm:text-lg py-1 px-4 sm:py-2 md:py-4 rounded-sm sm:px-6 md:px-10 lg:py-[22px] lg:px-16 gap-1 text-white"
              type="button"
              id="btn"
              onClick={() => checkValue()}
            >
              <span>Get Started</span>
              <span>
                <AiOutlineRight />
              </span>
            </button>
          </label>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
