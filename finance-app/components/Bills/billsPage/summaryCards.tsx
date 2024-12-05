'use client'

import { recurringSVG } from "@/components/svgAssets";
import useGetBills from "@/hooks/getBills";
import useGetSummary from "@/hooks/getSummary";

export default function SummaryCards() {
  const { data, isLoading } = useGetBills({ skip: 0 })
  const {data:summary} = useGetSummary()
  const bills = data?.data
  const paidBills = bills?.filter(item => item.status === 'paid')
  const upcoming = bills?.filter(item => item.status === 'upcoming')
  const dueSoon = bills?.filter(item => item.status === 'soon')  
  const monthly_total = summary?.data?.total_bills
  
  const card1 = (
    <div className={`bg-gray-900 ${isLoading? 'animate-pulse':''} rounded-lg xl:h-[190px] md:h-[204px] h-[118px] items-center md:items-start p-6 gap-5 md:gap-8 md:pt-[38px] flex flex-row md:flex-col w-[343px] xl:w-[337px] md:w-[332px]`}>
      <span>{recurringSVG}</span>
      <div className="flex text-white flex-col">
        <p className="text-[14px]">Total Bills</p>
        <p className="text-white text-[2rem] font-bold">${String(monthly_total).replace(/-/, "")}</p>
      </div>
    </div>
  );

  const card2 = (
    <div className={`${isLoading? 'animate-pulse':''} w-[343px] xl:w-[337px] md:w-[332px] h-[204px] p-5 rounded-lg bg-white flex flex-col gap-5`}>
      <h3 className=" text-gray-900 text-[1rem] font-bold">Summary</h3>
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex items-center justify-between">
          <p className="text-gray-500 text-[12px]">Paid Bills</p>
          <p className="text-gray-900 font-bold  text-[12px]">
            {paidBills?.length}(${String(summary?.data?.paid_bills).replace(/-/, "")})
            
          </p>
        </div>
        <hr className="w-full h-[1px] bg-gray-500" />
        <div className="w-full flex items-center justify-between">
          <p className="text-gray-500 text-[12px]">Total Upcoming</p>
          <p className="text-gray-900 font-bold  text-[12px]">{upcoming?.length}(${ String(summary?.data?.upcoming_bills).replace(/-/, "")})</p>
        </div>
        <hr className="w-full h-[1px] bg-gray-500" />
        <div className="w-full text-red-700 flex items-center justify-between">
          <p className="text-[12px]">Due Soon</p>
          <p className="font-bold text-[12px]">{dueSoon?.length}(${String(summary?.data?.due_soon).replace(/-/, "")})</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-3 md:gap-6 md:flex-row xl:flex-col">
      {card1}
      {card2}
    </div>
  );
}