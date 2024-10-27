import { useState } from "react";
import { themeCollection } from "../svgAssets";
import SelectBTN from "./selectButton";
import { buttonEvent } from "./input1";

type props = {
  array: string[]|undefined;
  value: string|number;
  handleChange: (e: buttonEvent) => void;
};

type theme = {
  name: string
  theme:string
}

export default function ThemeSelect({array, handleChange }: props) {
  const [showTheme, setShowTheme] = useState(false);
  const [theme, setTheme] = useState({name:themeCollection[0].name, theme:themeCollection[0].theme})

  const changeTheme = (theme:theme, e:buttonEvent) => {
    setTheme(theme)
    handleChange(e)
  }

  const selectBox = themeCollection.map((item, index) => {
    return (
      <div key={index + 1} className="flex w-full flex-col gap-3">
        <button
          disabled={array?.some(theme=>item.theme === theme) ? true : false}
          value={item.theme}
          name="theme"
          onClick={(e)=>changeTheme(item, e)}
          className=" w-full bg-none border-none flex items-center justify-between"
        >
          <span
            className={`flex ${
              array?.some(theme=>item.theme === theme) ? "text-gray-500" : "text-gray-900"
            } text-[14px] items-center gap-3`}
          >
            <span style={{background:item.theme}} className={`w-4 h-4 rounded-full`}></span>
            <span>{item.name}</span>
          </span>
          {array?.some(theme=>item.theme === theme)&&<span className="text-gray-500 text-[12px]">
            Already used
          </span>}
        </button>
        {index+1 === themeCollection.length? '':<hr className="w-full h-[1px] bg-gray-500"/>}
      </div>
    );
  });

  return (
    <div className="w-full relative flex flex-col">
      <div className="flex flex-col gap-1">
        <p className="text-[12px] text-gray-500 font-bold">Theme</p>
        <SelectBTN theme={theme.theme} categoryShow={() => setShowTheme(!showTheme)} value={theme.name} />
      </div>
      <div className={`w-full ${showTheme? 'flex':'hidden'} shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] absolute h-[300px] top-[5rem] rounded-lg px-5 py-3 no-scrollbar gap-3 overflow-y-scroll bg-white flex-col`}>
        {selectBox}
      </div>
    </div>
  );
}
