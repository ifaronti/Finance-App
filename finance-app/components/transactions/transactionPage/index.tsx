import SingleTransaction from "./oneTransaction";
import { useContext} from "react";
import { formatAmount, formatDate } from "../summaryTransactions/formatStrings";
import Pagination from "./pagination";
import { transactionContext } from "@/providers/transactionsContext";
import useGetTransactions from "@/hooks/getTransactions";

export default function Transactions() {
  const { category, skip, orderBy, name } = useContext(transactionContext)
  
  const { data } = useGetTransactions({
    skip: skip,
    orderBy: orderBy,
    category: category,
    name:name
  })
  
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
      
      <Pagination />
    </section>
  );
}
