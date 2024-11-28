import Profile from "@/components/transactions/summaryTransactions/summaryProfiles";
import { bill } from "@/components/types";
import BillStatus from "./billStatus";
import { dueSVG, paidSVG } from "@/components/svgAssets";
import { closeModal } from "@/components/svgAssets";
import { formatAmount } from "@/components/transactions/summaryTransactions/formatStrings";
import useGetBills from "@/hooks/getBills";

type props = {
  bill: bill;
  deleteItemModal:()=>void
};

export default function OneBill({ bill, deleteItemModal }: props) {
  const { data } = useGetBills({ skip: 0 })
  const paymentTransaction = data?.paidBills
  //@ts-expect-error swr undefined initial state
  const dateAndStatus = BillStatus({ bill, paymentTransaction });

  return (
    <div className="w-full group relative flex items-center justify-between">
      <div className="md:w-[70%] gap-1 md:gap-[unset] flex md:items-center md:justify-between flex-col md:flex-row">
        <Profile name={bill?.name} profilePic={bill?.avatar.substring(1)} />
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
        {formatAmount(bill?.amount)}
      </p>
      <button onClick={deleteItemModal} className="absolute block md:hidden group-hover:block right-14">{closeModal}</button>
    </div>
  );
}
