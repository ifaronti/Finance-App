'use client'
import BillCard from "./billCard";
import SectionH3 from "@/components/sectionHeader";
import useGetSummary from "@/hooks/getSummary";
import { useShowbar } from "@/providers/showBarContext";

export default function BillsSummary() {
  const { showBar } = useShowbar();
  const { data: responseData, isLoading } = useGetSummary()
  
  const renderData = [
    { type: "Paid Bills", amount: String(responseData?.data.paid_bills).replace(/-/, "") },
    { type: "Total Upcoming", amount: (String(responseData?.data.upcoming_bills).replace(/-/, "")) },
    { type: "Due Soon", amount: String(responseData?.data.due_soon).replace(/-/, ""), },
  ];
 
  const billsRender = renderData.map((item, index) => {
    return (
      <BillCard
        key={index + 1}
        type={item.type}
        amount={Number(item?.amount)}
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
