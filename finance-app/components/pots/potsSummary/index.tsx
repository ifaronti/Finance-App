'use client'

import SectionH3 from "../../sectionHeader";
import ColorBars from "../../colorBars";
import PotsTotal from "./potTotal";
import useGetSummary from "@/hooks/getSummary";

export default function PotsSummary() {
  const { data:responseData, isLoading } = useGetSummary()
  const potBars = responseData?.data.potSummary?.summaryItems
  const total = responseData?.data.potSummary?.totalSaved?._sum.total
  const bars = potBars?.map((item, index) => {
    return (
      <ColorBars
        key={index + 1}
        name={item.name}
        amount={item.total}
        color={item?.theme}
      />
    );
  });
  return (
    <section className="relative w-[343px] rounded-lg p-6 flex flex-col gap-5 md:p-8 bg-white xl:w-[608px] h-[324px] md:w-[688px] md:h-[218px]">
        <SectionH3 text="Pots" linkText="See Details" location="dashboard/pots" />
        <div className="flex gap-5 flex-col md:flex-row">
          <PotsTotal isLoading={isLoading} total={total} />
          <div className="grid grid-cols-2 relative gap-4">{bars}</div>
        </div>
    </section>
  );
}
