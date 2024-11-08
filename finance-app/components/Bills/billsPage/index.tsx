"use client";

import Sort from "@/components/sort";
import { useState } from "react";
import OneBill from "./oneBill";
import useGetBills from "@/hooks/getBills";
import DeleteItem from "@/components/modalFrames/deleteItem";
import { useSearchParams } from "next/navigation";
import Search from "@/components/searchInput";
import { useShowbar } from "@/providers/showBarContext";

export default function Bills() {
  const [currBillId, setCurrBillId] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const searchParams = useSearchParams()
  const querySort = searchParams.get('sort')?.toString()
  const querySkip = Number(searchParams.get('skip'))
  const queryName = searchParams.get('name')?.toString()
  const {showBar} = useShowbar()
  const { data: bills, isLoading } = useGetBills({ skip:querySkip, sort:querySort, name:queryName })

  const deleteItemModal = (id:number) => {
    setShowModal(true)
    setCurrBillId(id)
    return
  }

  const falseModal = () => {
    setShowModal(false)
    setCurrBillId(0)
    return
  }

  const renderBills = bills?.data?.map((item, index) => {
    return (
      <div key={index + 1} className="w-full flex gap-5 flex-col">
        <OneBill bill={item} deleteItemModal={()=>deleteItemModal(item?.BillId)} />
        {index + 1 === bills?.data?.length ? (
          ""
        ) : (
          <hr className="w-full h-[1px] bg-gray-500" />
        )}
      </div>
    );
  });

  return (
    <div className={`w-[343px] ${isLoading? 'animate-pulse':''} flex-grow-1 md:w-[688px] ${showBar?'2xl:w-[699px] transition-all duration-700':'2xl:w-[911px] transition-all duration-700'} flex realtive rounded-lg flex-col gap-6 bg-white px-5 py-5 md:px-8 md:py-8`}>
      
      <div className="w-full flex justify-between items-center">
        <Search />
        <Sort/>
      </div>
      
      <div className="w-full hidden text-left text-gray-500 text-[12px] md:flex items-center justify-between">
        <span className="w-[70%] flex justify-between">
          <p className="text-left">Bill Title</p>
          <p className="w-[25%] text-left">Due Date</p>
        </span>
        <p>Amount</p>
      </div>
      <hr className="w-full hidden md:block h-[1px] bg-gray-500" />
      
      <div className="w-full flex flex-col gap-5">{renderBills}</div>
      
      {showModal &&<div className="z-[200] flex items-center justify-center top-0 left-0 fixed w-full h-full">
        <DeleteItem falseModal={falseModal} id={currBillId} nameCategory="bill" />
        <div className="bg-black z-[120] top-0 left-0 fixed opacity-50 w-full h-full"></div>
      </div>}
    </div>
  );
}
