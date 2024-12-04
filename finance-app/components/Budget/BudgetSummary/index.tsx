"use client";

import ColorBars from "@/components/colorBars";
import RingChart from "./budgetRing";
import SectionH3 from "@/components/sectionHeader";
import useGetSummary from "@/hooks/getSummary";
import { useShowbar } from "@/providers/showBarContext";

export default function BudgetSummary() {
  const { data: responseData, isLoading } = useGetSummary()
  const { showBar } = useShowbar()
  const data = responseData?.data.budgets.filter((item, index)=> index <=3)

  const indicators = data?.map((item, index) => {
    return (
      <ColorBars
        key={index + 1}
        name={item.category}
        amount={item.maximum}
        color={item.theme}
      />
    );
  });

  return (
    <section
      className={`w-[343px] ${isLoading? 'animate-pulse':''} relative flex-shrink-0 gap-8 flex flex-col p-5 md:p-8 transition-all duration-700 bg-white rounded-lg ${
        showBar
          ? "2xl:w-[428px] transition-all duration-700"
          : "2xl:w-[640px] transition-all duration-700"
      }  md:w-[688px]`}
    >
      <SectionH3 text="Budget" location="/dashboard/budgets" linkText="See Details" />
      <div className={`flex relative flex-col md:flex-row mb-[58px] w-full items-center gap-4`}>
        <span className={"mx-auto"}>
          {isLoading? 'loading':<RingChart />}
        </span>
        <div className="relative md:grid-cols-1  grid grid-cols-2 gap-4">{indicators}</div>
      </div>
    </section>
  );
}
