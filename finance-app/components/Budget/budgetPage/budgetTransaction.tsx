import OneTransaction from "@/components/transactions/summaryTransactions/transactionWrap";
import SectionH3 from "@/components/sectionHeader";

import {
  formatDate,
  formatAmount,
} from "@/components/transactions/summaryTransactions/formatStrings";
import { budget } from "@/components/types";

export default function BudgetTransaction({ budget, category }:{budget:budget, category:string}) {

  const renderTrn = budget?.transactions?.map((item, index) => {
    return (
      <div key={index + 1} className="flex flex-col gap-3">
        <OneTransaction
          amount={formatAmount(item.amount)}
          name={item.name}
          profilePic={item.avatar.substring(1)}
          date={formatDate(item.date)}
        />
        {index + 1 === budget?.transactions.length ? (
          ""
        ) : (
          <hr className="w-full bg-gray-500 h-[1px]" />
        )}
      </div>
    );
  });

  return (
    <div className="w-full flex flex-col px-5 py-[17.5px] gap-5 rounded-lg bg-[#F8F4F0]">
      <SectionH3
        text="Latest Spending"
        linkText="See Details"
        location={`/dashboard/transactions?skip=0&sort=Latest&category=${category}&name=`}
      />
      <span className="flex flex-col gap-3">{renderTrn}</span>
    </div>
  );
}
