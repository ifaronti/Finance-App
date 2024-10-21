type barsProps = { name: string; amount: string; color: string };

export default function ColorBars({ name, amount, color }: barsProps) {

  return (
    <div className="flex text-left w-36 md:w-[170.5px] xl:w-[130.5px] h-[43px] gap-4 relative">
      <div
        className={`w-[4px] rounded-[5rem] h-full `}
        style={{ backgroundColor: color }}
      ></div>
      <div className=" flex flex-col gap-1">
        <p className="text-[12px] text-gray-500">{name}</p>
        <p className="text-[14px] text-gray-900 font-bold">${amount}</p>
      </div>
    </div>
  );
}
