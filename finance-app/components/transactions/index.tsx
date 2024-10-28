'use client'

import Header from "@/components/PageHeader";
import Search from "@/components/searchInput";
import Sort from "@/components/sort";
import Transactions from "@/components/transactions/transactionPage";
import { useShowbar } from "@/providers/showBarContext";

export default function TransactionPage() {
  const {showBar} = useShowbar()
  
  return (
    <section className={`flex flex-shrink-0 w-[343px] flex-col mx-auto py-6 md:py-8 md:w-[688px] ${showBar?'2xl:w-[1060px] transition-all duration-700':'2xl:w-[1272px] transition-all duration-700'} gap-8`}>
      <Header text="Transactions" />
      <section className="flex w-full flex-shrink-0 flex-col bg-white py-5 md:py-8 px-5 md:px-8 rounded-lg gap-9">
        <div className="w-full flex items-center justify-between">
          <Search />
          <Sort/>
        </div>
        <Transactions />
      </section>
    </section>
  );
}