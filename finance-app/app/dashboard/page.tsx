import Header from "@/components/PageHeader";
import HomePots from "@/components/pots/potsSummary";
import SummaryTransactions from "@/components/transactions/summaryTransactions";
import BillsSummary from "@/components/Bills/billsSummary";
import BudgetSummary from "@/components/Budget/BudgetSummary";
import AccountSummary from "@/components/AccountSummary";

export default function Page() {
  return (
    <div className="relative flex flex-col gap-8 py-10">
      <Header text={"Overview"} />
      <AccountSummary/>
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