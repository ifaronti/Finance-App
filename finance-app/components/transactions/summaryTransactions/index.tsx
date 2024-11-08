"use client";

import SectionH3 from "../../sectionHeader";
import OneTransaction from "./transactionWrap";
import { formatAmount, formatDate } from "./formatStrings";
import useGetSummary from "@/hooks/getSummary";

export default function SummaryTransactions() {
  const { data:responseData, isLoading } = useGetSummary()
  const data = responseData?.data?.transactionsSummary;

  const transactions = data?.map((item, index) => {
    return (
      <div key={index + 1}>
        <OneTransaction
          amount={formatAmount(item.amount)}
          name={item.name}
          profilePic={item.avatar.substring(1)}
          date={formatDate(item.date)}
        />
        {index + 1 === data.length ? (
          ""
        ) : (
          <hr className="mt-5 h-[1px] bg-gray-100 mb-5" />
        )}
      </div>
    );
  });

  return (
    <section className={`flex w-[343px] ${isLoading? 'animate-pulse':''} gap-8 md:w-[688px] rounded-lg bg-white xl:w-[608px] flex-col sm:p-8 p-5`}>
      <SectionH3
        text="Transactions"
        location="/dashboard/transactions?skip=0&sort=Latest&category=All+Transactions&name="
        linkText="View All"
      />
      <span>{transactions}</span>
    </section>
  );
}
