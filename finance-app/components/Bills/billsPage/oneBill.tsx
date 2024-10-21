import Profile from "@/components/transactions/summaryTransactions/summaryProfiles";
import { transaction } from "@/components/types";
import BillStatus from "./billStatus";
import { dueSVG, paidSVG } from "@/components/svgAssets";
import { formatAmount } from "@/components/transactions/summaryTransactions/formatStrings";

type props = {
  transaction: transaction;
  all: transaction[];
};

export default function OneBill({ transaction, all }: props) {
  const somePaid = all.filter((item) => item.recurring);
  const dateAndStatus = BillStatus({ transaction, somePaid });

  return (
    <div className="w-full flex items-center justify-between">
      <div className="md:w-[70%] gap-1 md:gap-[unset] flex md:items-center md:justify-between flex-col md:flex-row">
        <Profile name={transaction.name} profilePic={transaction.avatar.substring(1)} />
        <p
          className={`flex gap-2 items-center md:w-[25%] text-left ${
            dateAndStatus.status === "paid" ? "text-green-900" : "text-gray-500"
          }`}
        >
          Monthly-{dateAndStatus.date}
          {dateAndStatus.status === "Due Soon" && dueSVG}
          {dateAndStatus.status === "paid" && paidSVG}
        </p>
      </div>
      <p
        className={`font-bold ${
          dateAndStatus.status === "Due Soon" ? "text-red-500" : "text-gray-900"
        } text-[14px]`}
      >
        {formatAmount(transaction.amount)}
      </p>
    </div>
  );
}
