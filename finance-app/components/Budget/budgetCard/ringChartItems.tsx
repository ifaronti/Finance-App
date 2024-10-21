
type chartItems = {
  theme: string
  category: string
  spent: string
  maximum:string
}

export default function ChartItems({theme,category,spent,maximum,}:chartItems) {
  return (
    <div className="w-full flex text-right items-center justify-between">
      <div className="flex gap-4">
        <div className='w-1 h-[21px] rounded-[25%]' style={{background:theme}}></div>
        <p className="text-[14px] text-gray-500">{category}</p>
      </div>

      <p className="flex items-center gap-2">
        <span className="text-gray-900 font-bold text-[1rem]">${spent}</span>

        <span className="text-gray-500 text-[12px]">of ${maximum}</span>
      </p>
    </div>
  );
}
