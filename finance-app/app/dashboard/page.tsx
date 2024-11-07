import HomePots from "@/components/pots/potsSummary";
import SummaryTransactions from "@/components/transactions/summaryTransactions";
import BillsSummary from "@/components/Bills/billsSummary";
import BudgetSummary from "@/components/Budget/BudgetSummary";
import AccountSummary from "@/components/AccountSummary";
import Header from "@/components/PageHeader";

export default function Page() {

  return (
    <section className="relative flex w-fit mx-auto flex-col gap-8 py-10">
      <Header text="Overview"/>
      <AccountSummary/>
      <div className="flex flex-col gap-6 2xl:flex-row">
        <div className="flex flex-col gap-6">
          <HomePots />
          <SummaryTransactions />
        </div>
        <div className="flex flex-col gap-6">
          <BudgetSummary />
          <BillsSummary />
        </div>
      </div>
    </section>
  );
}