"use client";

import { useContext } from "react";
import SectionH3 from "../../sectionHeader";
import OneTransaction from "./transactionWrap";
import { formatAmount, formatDate } from "./formatStrings";
import { showBarContext } from "@/app/dashboard/layout";

export default function SummaryTransactions() {
  const { responseData } = useContext(showBarContext);
  const data = responseData?.transactionsSummary;

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
    <section className="flex w-[343px] gap-8 md:w-[688px] rounded-lg bg-white xl:w-[608px] flex-col sm:p-8 p-5">
      <SectionH3
        text="Transactions"
        location="/dashboard/transactions"
        linkText="View All"
      />
      <span>{transactions}</span>
    </section>
  );
}
