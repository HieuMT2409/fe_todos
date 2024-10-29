import { useState } from "react";
import { CiCloudSun } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import images from "../../assets/images";

function LightMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isClickDarkMode, setIsClickDarkMode] = useState(false);

  return (
    <button className="relative flex items-center overflow-hidden border shadow-xl justify-between text-avatar text-xl rounded-full w-18 bg-[#F6F5F8]">
      {isClickDarkMode ? (
        <img className="absolute rounded-full z-10" src={images.moon} alt="sun" />
      ) : (
        <img className="absolute rounded-full z-10" src={images.sun} alt="moon" />
      )}

      <span
        onClick={() => {
          setIsClickDarkMode(!isClickDarkMode);
          setIsDarkMode(!isDarkMode);
        }}
        className={`${
          isClickDarkMode
            ? "bg-[#F6F5F8] translate-x-full z-0"
            : "bg-white shadow-xl z-30"
        } hover:bg-zinc-800 rounded-full p-2 duration-100`}
      >
        {isDarkMode ? <IoMoonOutline /> : <CiCloudSun />}
      </span>
      <span
        onClick={() => {
          setIsClickDarkMode(!isClickDarkMode);
          setIsDarkMode(!isDarkMode);
        }}
        className={`${
          isClickDarkMode
            ? "bg-zinc-800 shadow-xl z-30"
            : "bg-[#F6F5F8] -translate-x-full z-0"
        } rounded-full p-2 hover:bg-white duration-100`}
      >
        {isDarkMode ? <IoMoonOutline /> : <CiCloudSun />}
      </span>
    </button>
  );
}

export default LightMode;
