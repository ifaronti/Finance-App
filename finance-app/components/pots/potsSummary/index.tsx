'use client'

import SectionH3 from "../../sectionHeader";
import ColorBars from "../../colorBars";
import PotsTotal from "./potTotal";
import { useContext } from "react";
import { showBarContext } from "@/app/dashboard/layout";

export default function PotsSummary() {
  const { responseData } = useContext(showBarContext)
  const potBars = responseData?.potSummary?.summaryItems
  const total = responseData?.potSummary?.totalSaved?._sum.total
  const bars = potBars?.map((item, index) => {
    return (
      <ColorBars
        key={index + 1}
        name={item.name}
        amount={item.total.toString()}
        color={item?.theme}
      />
    );
  });
  return (
    <section className="relative w-[343px] rounded-lg p-6 flex flex-col gap-5 md:p-8 bg-white xl:w-[608px] h-[324px] md:w-[688px] md:h-[218px]">
        <SectionH3 text="Pots" linkText="See Details" location="/pots" />
        <div className="flex gap-5 flex-col md:flex-row">
          <PotsTotal total={total} />
          <div className="grid grid-cols-2 relative gap-4">{bars}</div>
        </div>
    </section>
  );
}
