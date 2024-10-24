'use client'

import { recurringSVG } from "@/components/svgAssets";
import BillStatus from "./billStatus";
import useGetTransactions from "@/hooks/getTransactions";

export default function SummaryCards() {
  const {data:transactions} = useGetTransactions({skip:0, category:'Bills'})
  const somePaid = transactions?.data?.filter((item) => item.recurring);
  const Paidbills = somePaid?.filter(
    (transaction) => BillStatus({ transaction, somePaid }).status === "paid"
  ).map(item => Number(item.amount.toString().replace('-', '')))
  
  const DueSoon = somePaid?.filter(
    (transaction) => BillStatus({ transaction, somePaid }).status === "Due Soon"
  ).map(item => Number(item.amount.toString().replace('-', '')))
  
  const upcoming = somePaid?.filter(
    (transaction) => BillStatus({ transaction, somePaid }).status === "Upcoming"
  ).map(item=>Number(item.amount.toString().replace('-', '')))

  const totalPaid = Number(Paidbills?.reduce((a, b)=> a+b,0).toFixed(2))
  const totalUpcoming = Number(upcoming?.reduce((a, b)=> a+b,0).toFixed(2))
  const totalDue = Number(DueSoon?.reduce((a, b)=> a+b,0).toFixed(2))

  const card1 = (
    <div className="bg-gray-900 rounded-lg xl:h-[190px] md:h-[204px] h-[118px] items-center md:items-start p-6 gap-5 md:gap-8 md:pt-[38px] flex flex-row md:flex-col w-[343px] xl:w-[337px] md:w-[332px]">
      <span>{recurringSVG}</span>
      <div className="flex text-white flex-col">
        <p className="text-[14px]">Total Bills</p>
        <p className="text-white text-[2rem] font-bold">${(totalUpcoming+totalDue).toFixed(2)}</p>
      </div>
    </div>
  );

  const card2 = (
    <div className="w-[343px] xl:w-[337px] md:w-[332px] h-[204px] p-5 rounded-lg bg-white flex flex-col gap-5">
      <h3 className=" text-gray-900 text-[1rem] font-bold">Summary</h3>
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex items-center justify-between">
          <p className="text-gray-500 text-[12px]">Paid Bills</p>
          <p className="text-gray-900 font-bold  text-[12px]">
            {Paidbills?.length}(${totalPaid.toFixed(2)})
            
          </p>
        </div>
        <hr className="w-full h-[1px] bg-gray-500" />
        <div className="w-full flex items-center justify-between">
          <p className="text-gray-500 text-[12px]">Total Upcoming</p>
          <p className="text-gray-900 font-bold  text-[12px]">{upcoming?.length}(${totalUpcoming.toFixed(2)})</p>
        </div>
        <hr className="w-full h-[1px] bg-gray-500" />
        <div className="w-full text-red-700 flex items-center justify-between">
          <p className="text-[12px]">Due Soon</p>
          <p className="font-bold text-[12px]">{DueSoon?.length}(${totalDue.toFixed(2)})</p>
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