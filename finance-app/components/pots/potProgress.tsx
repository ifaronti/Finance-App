import { pot } from "../types";

export type prop = {
  pot: pot;
};

export default function PotProgress({ pot }: prop) {
  const renderPercent = (pot.total / pot.target) * 100 ;
  const progressPercent = renderPercent >= 100? 100+'%': (renderPercent).toFixed(2)+'%'

  const progressHeader = (
    <div className="w-full flex justify-between items-center">
      <p className="text-gray-500 text-[14px]">Total Saved</p>
      <p className="text-gray-900 font-bold text-[2rem]">${(pot.total)}</p>
    </div>
  );

  const progressFooter = (
    <div className="w-full text-gray-500 text-[12px] flex items-center justify-between">
      <p>{progressPercent}</p>
      <p>Target of ${pot.target}</p>
    </div>
  );

  const progress = (
    <div className="w-full rounded-xl pl-[2px] h-2 bg-[#F8F4F0]">
      <div
        className={`w-[${progressPercent}] rounded-xl h-full bg-[${pot.theme}]`}
              style={{ background: pot.theme, width:progressPercent}}
      ></div>
    </div>
  );

  return (
    <div className="w-full flex flex-col gap-4">
      {progressHeader}
      <span className="flex flex-col gap-3">
        {progress}
        {progressFooter}
      </span>
    </div>
  );
}
