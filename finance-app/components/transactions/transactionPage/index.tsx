'use client'

import SingleTransaction from "./oneTransaction";
import { formatAmount, formatDate } from "../summaryTransactions/formatStrings";
import Pagination from "./pagination";
import useGetTransactions from "@/hooks/getTransactions";
import { useSearchParams } from "next/navigation";

export default function Transactions() {
  const params = useSearchParams()
  const sort = params.get('sort')?.toString()
  const skip = Number(params.get('skip'))
  const name = (params.get('name'))?.toString()
  const category = params.get('category')?.toString()
  const { data} = useGetTransactions({skip, sort, category, name})
console.log(data);

  const allTransactions = data?.data?.map((item, index) => {
    return (
      <div className="w-full" key={index + 1}>
        <SingleTransaction
          avatar={item.avatar.substring(1)}
          amount={formatAmount(item.amount)}
          date={formatDate(item.date)}
          category={item.category}
          name={item.name}
        />
        {index + 1 === data.data.length ? (
          ""
        ) : (
          <hr className="w-full my-4 h-[1px] bg-gray-500" />
        )}
      </div>
    );
  });

  return (
    <section className="w-full flex-shrink-0 relative flex flex-col gap-4 md:gap-6">
      <div className="w-full hidden md:flex relative items-center justify-between">

        <p className="text-gray-500 text-[12px]">Reciever/Sender</p>

        <span className="flex gap-8 items-center w-[272px] justify-end">
          <p className="text-gray-500 text-[12px]">Category</p>
          <p className="text-gray-500 text-[12px]">Transaction Date</p>
        </span>

        <p className="text-gray-500 text-[12px]">Amount</p>
      </div>
      <hr className="w-full h-[1px] bg-gray-500" />

      <div>{allTransactions}</div>
      
      <Pagination isLastPage={Boolean(data?.isLastPage)} />
    </section>
  );
}
