import { useState } from "react";
import Button from "../Button";
import Tab from "../Tab";
import images from "../../assets/images";

function SideBar({isDarkMode}) {
  const [isClick, setIsClick] = useState(1);
  const [activeBg, setActiveBg] = useState('button');

  // tab list
  const [isClickList, setIsClickList] = useState(null);

  // handle button
  const handleClick = (position) => {
    setIsClick(position);
    setActiveBg('button');
  };

  // handle tab
  const handleClickTab = (position) => {
    setIsClickList(position);
    setActiveBg('tab');
  };

  return (
    <div className={`w-64 bg-white pr-8 ${isDarkMode ? "dark:bg-slate-900 dark:text-white" : ""}`}>
      {/* logo */}
      <div className="-mt-8 -ml-8">
        <img src={images.logo} alt="doingforfuture" />
      </div>

      {/* button */}
      <div className="flex flex-col items-start ml-6">
        <div
          onClick={() => handleClick(1)}
        >
          <Button
            title={"Home"}
            icon={true}
            backgroundColor={activeBg === 'button' & isClick === 1}
            isDarkMode={isDarkMode}
          />
        </div>
        <div
          className="mt-2"
          onClick={() => handleClick(2)}
        >
          <Button
            title={"Setting"}
            icon={false}
            backgroundColor={activeBg === 'button' & isClick === 2}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>

      <div className={"w-52 bg-black border ml-6 mt-2"}></div>

      {/* lists */}
      <div className="mt-4 ml-6">
        <div className="text-3xl">Lists</div>
        <div>
          <div
            className="mt-2"
            onClick={() => handleClickTab(0)}
          >
            <Tab
              title={"Work"}
              backgroundColor={activeBg === 'tab' & isClickList === 0}
              isDarkMode={isDarkMode}
            />
          </div>
          <div
            className="mt-2"
            onClick={() => handleClickTab(1)}
          >
            <Tab
              title={"Learning"}
              backgroundColor={activeBg === 'tab' & isClickList === 1}
              isDarkMode={isDarkMode}
            />
          </div>
          <div
            className="mt-2"
            onClick={() => handleClickTab(2)}
          >
            <Tab
              title={"Freelance"}
              backgroundColor={activeBg === 'tab' & isClickList === 2}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
      </div>

      {/* tags */}
      <div className="mt-4 ml-6">
        <div className="text-3xl">Tags</div>
        <div className="min-h-56">
          <Tab title={"work"} isDarkMode={isDarkMode} />
          <Tab title={"daily"} isDarkMode={isDarkMode} />
          <Tab title={"priority"} isDarkMode={isDarkMode} />
        </div>
      </div>

      <div className="my-6 ml-6">
        <Button title={"New Tag"} iconAdd={true} backgroundColor={true} />
      </div>
    </div>
  );
}

export default SideBar;
