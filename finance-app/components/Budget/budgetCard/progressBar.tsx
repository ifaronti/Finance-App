import ColorBars from "@/components/colorBars";

export type barProps = {
    theme: string
    max: number
    spent:number
}

export default function ProgressBar({ theme, max, spent }:barProps) {
  const bgPercent = (spent / max) * 100;
  const barWidth = bgPercent > 100? 100+'%' : bgPercent+'%'
  const remaining = max - spent;
  return (
    <article className="flex flex-col gap-4">
      <h3 className="text-[14px] text-gray-500">Maximum of ${max.toFixed(2)}</h3>
      <div className="w-full px-[2px] rounded-r-lg h-8 bg-[#F8F4F0] flex items-center">
        <div
          className={`h-6 rounded-lg`}
          style={{backgroundColor:theme, width:barWidth}}
        ></div>
      </div>
      <div className="w-full gap-4 flex">
        <span className="w-[48.5295%]">
            <ColorBars name="Spent" amount={String(spent)} color={theme} />
        </span>
        <span className="w-[48.5295%]">
        <ColorBars name="Remaining" amount={remaining.toFixed(2)} color="#F8F4F0"/>
        </span>
      </div>
    </article>
  );
}
