'use client'

import Bills from "@/components/Bills/billsPage"
import Header from "@/components/PageHeader"
import SummaryCards from "@/components/Bills/billsPage/summaryCards"
import { useState, useEffect } from "react"
import { transaction } from "@/components/types"
import AddBill from "./addBill"

export default function Page() {  
    const [transacs, setTransacs] = useState<transaction[]>([]);
    const bills = transacs.filter((item) => item.recurring)

    useEffect(() => {
      fetch("/data.json")
        .then((res) => res.json())
        .then((json) => setTransacs(json.transactions));
    }, []);
    return (
        <section className="flex-shrink-0 flex flex-col w-fit md:w-[unset] gap-8 md:mx-unset mx-auto py-8">
           <div className="flex items-center justify-between">
            <Header text="Recurring Bills"/>
            <AddBill/>
           </div>
            <div className="flex flex-col gap-6 xl:flex-row">
                <SummaryCards transactions={transacs}/>
                <Bills bills={bills} />
            </div>
        </section>
    )
}