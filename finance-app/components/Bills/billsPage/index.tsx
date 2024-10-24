"use client";

import Search from "@/components/searchInput";
import Sort from "@/components/sort/sort";
import { useState } from "react";
import OneBill from "./oneBill";
import { sortList } from "@/components/svgAssets";
import { btnEvent } from "@/components/sort/sort";
import useGetTransactions from "@/hooks/getTransactions";

export default function Bills() {
  const [sortBy, setSortBy] = useState(sortList[0]);
  const {data:bills} = useGetTransactions({skip:0, category:'Bills'})

  const renderBills = bills?.data?.map((item, index) => {
    return (
      <div key={index + 1} className="w-full flex gap-5 flex-col">
        <OneBill transaction={item} all={bills?.data} />
        {index + 1 === bills?.data?.length ? (
          ""
        ) : (
          <hr className="w-full h-[1px] bg-gray-500" />
        )}
      </div>
    );
  });

  const sortParam = (e: btnEvent) => {
    const { value } = e.currentTarget;
    setSortBy(value);
  };

  return (
    <div className="w-[343px] md:w-[688px] xl:w-[699px] flex realtive rounded-lg flex-col gap-6 bg-white px-5 py-5 md:px-8 md:py-8">
      <div className="w-full flex justify-between items-center">
        <Search/>
        <Sort
          sortName="Sort by"
          theSort={sortParam}
          valueArr={sortList}
          currentSort={sortBy}
        />
      </div>
      <div className="w-full flex-shrink-0 hidden text-left text-gray-500 text-[12px] md:flex items-center justify-between">
        <span className="w-[70%] flex justify-between">
          <p className="text-left">Bill Title</p>
          <p className="w-[25%] text-left">Due Date</p>
        </span>
        <p>Amount</p>
      </div>
      <hr className="w-full hidden md:block h-[1px] bg-gray-500" />
      <div className="w-full flex flex-col gap-5">{renderBills}</div>
    </div>
  );
}
