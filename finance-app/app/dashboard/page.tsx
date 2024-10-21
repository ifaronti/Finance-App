"use client";

import Header from "@/components/PageHeader";
import Summary from "@/components/transactions/summaryTransactions/summary";
import HomePots from "@/components/pots/potsSummary";
import SummaryTransactions from "@/components/transactions/summaryTransactions";
import BillsSummary from "@/components/Bills/billsSummary";
import BudgetSummary from "@/components/Budget/BudgetSummary";
import { showBarContext } from "./layout";
import { useContext } from "react";

export default function Page() {
  const { responseData } = useContext(showBarContext);
  const data = responseData?.accountSummary;

  return (
    <div className="relative flex flex-col gap-8 py-10">
      <Header text={"Overview"} />
      <section className="flex gap-3 sm:gap-6 flex-col sm:flex-row">
        <Summary value={data?.balance.toString()} description="Current Balance" />
        <Summary value={data?.income.toString()} description="Income" />
        <Summary value={data?.expenses.toString()} description="Expenses" />
      </section>
      <section className="flex flex-col gap-6 2xl:flex-row">
        <div className="flex flex-col gap-6">
          <HomePots />
          <SummaryTransactions />
        </div>
        <div className="flex flex-col gap-6">
          <BudgetSummary />
          <BillsSummary />
        </div>
      </section>
    </div>
  );
}
