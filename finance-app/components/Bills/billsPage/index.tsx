"use client";

import Search from "@/components/searchInput";
import Sort from "@/components/sort/sortCompoent";
import { useState } from "react";
import { transaction } from "@/components/types";
import OneBill from "./oneBill";
import { sortList } from "@/components/svgAssets";
import { btnEvent } from "@/components/sort/sortCompoent";
import { inputEvent } from "@/components/types";

export default function Bills({bills}:{bills:transaction[]}) {
  const [sortBy, setSortBy] = useState(sortList[0]);
  const [searchParam, setSearchParam] = useState("");


  const renderBills = bills.map((item, index) => {
    return (
      <div key={index + 1} className="w-full flex gap-5 flex-col">
        <OneBill transaction={item} all={bills} />
        {index + 1 === bills.length ? (
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

  const searchSet = (e: inputEvent) => {
    setSearchParam(e.target.value);
  };

  return (
    <div className="w-[343px] md:w-[688px] xl:w-[699px] flex realtive rounded-lg flex-col gap-6 bg-white px-5 py-5 md:px-8 md:py-8">
      <div className="w-full flex justify-between items-center">
        <Search
          handleChange={searchSet}
          searchParam={searchParam}
          placeholder="Search bills"
          handleSubmit={() => console.log("submit")}
        />
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
