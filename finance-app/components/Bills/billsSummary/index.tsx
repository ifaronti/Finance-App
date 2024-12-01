'use client'
import BillCard from "./billCard";
import SectionH3 from "@/components/sectionHeader";
import BillStatus from "../billsPage/billStatus";
import useGetSummary from "@/hooks/getSummary";
import { useShowbar } from "@/providers/showBarContext";

export default function BillsSummary() {
  const { showBar } = useShowbar();
  const { data: responseData, isLoading } = useGetSummary()
  const bills = responseData?.data.billsSummary
  
  const Paidbills = bills?.filter((bill) => BillStatus({ bill }).status === "paid")
    .map(item => Number(item.amount.toString().replace('-', '')))

  const DueSoon = bills?.filter((bill) => BillStatus({ bill }).status === "Due Soon")
    .map(item => Number(item.amount.toString().replace('-', '')))

  const upcoming = bills?.filter((bill) => BillStatus({ bill }).status === "Upcoming")
    .map(item => Number(item.amount.toString().replace('-', '')))

  const totalPaid = Number(Paidbills?.reduce((a, b) => a + b, 0).toFixed(2))
  const totalUpcoming = Number(upcoming?.reduce((a, b) => a + b, 0).toFixed(2))
  const totalDue = Number(DueSoon?.reduce((a, b) => a + b, 0).toFixed(2))

  const renderData = [
    { type: "Paid Bills", amount: totalPaid },
    { type: "Total Upcoming", amount: totalUpcoming },
    { type: "Due Soon", amount: totalDue, },
  ];
 
  const billsRender = renderData.map((item, index) => {
    return (
      <BillCard
        key={index + 1}
        type={item.type}
        amount={item.amount.toFixed(2)}
        isLoading={isLoading}
      />
    );
  });

  return (
    <section
      className={`w-[343px] flex-shrink-0 flex flex-col p-5 md:p-8 transition-all duration-700 gap-8 bg-white rounded-lg ${showBar
          ? "2xl:w-[428px] transition-all duration-700"
          : "2xl:w-[640px] transition-all duration-700"
        }  md:w-[688px]`}
    >
      <SectionH3
        text="Recurring Bills"
        linkText="See Details"
        location="/dashboard/bills?skip=0&sort=Latest&name="
      />
      <div className="w-full flex flex-col gap-3">{billsRender}</div>
    </section>
  );
}
