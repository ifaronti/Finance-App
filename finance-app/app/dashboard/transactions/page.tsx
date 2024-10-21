"use client";

import Header from "@/components/PageHeader";
import Search from "@/components/searchInput";
import Sort from "@/components/sort/sort";
import { sortList, categoryList } from "@/components/svgAssets";
import Transactions from "@/components/transactions/transactionPage";
import { useContext } from "react";
import { transactionContext } from "@/providers/transactionsContext";
import { buttonEvent } from "@/components/types";

export default function Page() {
  const {orderBy,searchKey,handleChange,handleSubmit,setOrderBy,category,
    setCategory,
  } = useContext(transactionContext);

  const theSort = async (e: buttonEvent) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    return name === "Sort by" ? setOrderBy(value) : setCategory(value);
  };

  return (
    <section className="flex flex-shrink-0 w-[343px] flex-col mx-auto py-6 md:py-8 md:w-[688px] xl:w-[1060px] gap-8">
      <Header text="Transactions" />
      <section className="flex w-full flex-shrink-0 flex-col bg-white py-5 md:py-8 px-5 md:px-8 rounded-lg gap-9">
        <div className="w-full flex items-center justify-between">
          <Search
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            searchParam={searchKey}
            placeholder="Search transactions"
          />

          <div className="flex relative gap-10 px-5 md:px-[unset] md:gap-6">
            <Sort
              valueArr={sortList}
              sortName="Sort by"
              theSort={theSort}
              currentSort={orderBy}
            />
            <Sort
              valueArr={categoryList.map((item) => item.category)}
              sortName="Category"
              theSort={theSort}
              currentSort={category}
            />
          </div>
        </div>
        <Transactions />
      </section>
    </section>
  );
}