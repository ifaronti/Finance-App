import { inputProps } from "./input1";
import { categoryList } from "../svgAssets";
import { useState } from "react";
import SelectBTN from "./selectButton";
import { buttonEvent, inputEvent } from "../types";

type props = inputProps & {array?:string[]}

export default function CategorySelect({ value, handleChange, array }:props) {
  const [showCategory, setShowCategory] = useState(false);

  const categoryShow = () => {
    setShowCategory(prev=>!prev);
  };

  const hideOnSelect = async(e:inputEvent|buttonEvent) => {
    handleChange(e)
    setShowCategory(false)
  }

  const categoryBox = categoryList.map((item, index) => {
    return (
      <div key={index + 1} className="flex flex-col gap-3">
        <button
          className="text-[14px] text-left text-gray-900"
          onClick={hideOnSelect}
          name='category'
          value={item.category}
          disabled={array?.some(category=>item.category === category)? true:false}
        >
          {item.category}
        </button>
        {index + 1 === categoryList.length ? (
          ""
        ) : (
          <hr className="w-full h-[1px] bg-gray-500" />
        )}
      </div>
    );
  });

  return (
    <div className="w-full relative z-[10] flex flex-col gap-5">
      <SelectBTN value={value} categoryShow={categoryShow} />
      <div className={`${showCategory? 'flex':'hidden'} shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] text-left flex-col absolute top-14 rounded-lg px-5 h-[300px] py-3 gap-3 bg-white w-full no-scrollbar overflow-y-scroll`}>
        {categoryBox}
      </div>
    </div>
  );
}
