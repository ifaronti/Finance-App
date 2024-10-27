import { ellipsis } from "@/components/svgAssets";
import DeleteEditMenu from "@/components/miniMenu"
import { useState } from "react";
import { buttonEvent } from "@/components/modalFrames/input1";

type props = {
  category: string;
  theme: string;
  edit: (e:buttonEvent) => void;
  del: (e:buttonEvent) => void;
};

export default function BudgetHeader({category,del,edit,theme,}: props){
  const [showMini, setShowMini] = useState(false);

  return (
    <article className="w-full flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <div className={`w-4 rounded-full h-4`} style={{ background: theme }}></div>
        <h2 className="text-[20px] text-gray-900 font-bold">{category}</h2>
      </div>
      <div className="relative flex flex-col gap-3">
        <button className=" border-none bg-none" onClick={()=>setShowMini(!showMini)}>
          {ellipsis}
        </button>
        <span className={`${showMini ? "block right-[0] absolute top-3" : "hidden"}`}>
          <DeleteEditMenu editItem={(e)=>edit(e)} deleteItem={(e)=>del(e)} />
        </span>
      </div>
    </article>
  );
}