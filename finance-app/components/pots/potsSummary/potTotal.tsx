import { potsSVG } from "../../svgAssets";

type props = {total:number|undefined, isLoading:boolean}

export default function PotsTotal({total, isLoading}:props) {
  return (
    <div className={`pl-[22px] ${isLoading? 'animate-pulse':''} w-[303px] h-[110px] md:w-[247px] rounded-lg bg-[#F8F4F0]`}>
      <div className="flex h-full gap-4 my-auto items-center">
        {potsSVG}
        <div className="flex flex-col gap-[11px]">
          <p className="text-gray-500 text-[14px]">Total Saved</p>
          <p className="text-gray-900 text-[2rem] font-bold">${total}</p>
        </div>
      </div>
    </div>
  );
}
