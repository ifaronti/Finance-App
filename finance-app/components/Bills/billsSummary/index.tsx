"use client";

import { useContext } from "react";
import { showBarContext } from "@/app/dashboard/layout";
import BillCard from "./billCard";
import SectionH3 from "@/components/sectionHeader";
import BillStatus from "../billsPage/billStatus";


export default function BillsSummary() {
  const { showBar, responseData } = useContext(showBarContext);
  const somePaid = responseData?.billsSummary
  const Paidbills = somePaid?.filter(
    (transaction) => BillStatus({ transaction, somePaid }).status === "paid"
  ).map(item => Number(item.amount.toString().replace('-', '')))
  
  const DueSoon = somePaid?.filter(
    (transaction) => BillStatus({ transaction, somePaid }).status === "Due Soon"
  ).map(item => Number(item.amount.toString().replace('-', '')))
  
  const upcoming = somePaid?.filter(
    (transaction) => BillStatus({ transaction, somePaid }).status === "Upcoming"
  ).map(item=>Number(item.amount.toString().replace('-', '')))

  const totalPaid = Number(Paidbills?.reduce((a, b)=> a+b,0).toFixed(2))
  const totalUpcoming = Number(upcoming?.reduce((a, b)=> a+b,0).toFixed(2))
  const totalDue = Number(DueSoon?.reduce((a, b)=> a+b,0).toFixed(2))

  const renderData = [
    { type: "Paid Bills", amount: totalPaid },
    { type: "Total Upcoming", amount: totalUpcoming },
    { type: "Due Soon", amount: totalDue,  },
  ];

  const billsRender = renderData.map((item, index) => {
    return (
      <BillCard
        key={index + 1}
        type={item.type}
        amount={item.amount.toFixed(2)}
      />
    );
  });

  return (
    <section
      className={`w-[343px] flex-shrink-0 flex flex-col p-5 md:p-8 transition-all duration-700 gap-8 bg-white rounded-lg ${
        showBar
          ? "2xl:w-[428px] transition-all duration-700"
          : "2xl:w-[640px] transition-all duration-700"
      }  md:w-[688px]`}
    >
      <SectionH3
        text="Recurring Bills"
        linkText="See Details"
        location="/recurring"
      />
      <div className="w-full flex flex-col gap-3">{billsRender}</div>
    </section>
  );
}
