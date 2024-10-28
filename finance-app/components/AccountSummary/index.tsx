'use client'

import Summary from "@/components/AccountSummary/summary";
import useGetSummary from "@/hooks/getSummary";

export default function AccountSummary() {
    const { data:responseData } = useGetSummary()
    const data = responseData?.data?.accountSummary;
    
    return (
    <section className="flex gap-3 sm:gap-6 flex-col mx-auto md:flex-row">
        <Summary value={Number(data?.balance)} description="Current Balance" />
        <Summary value={Number(data?.income)} description="Income" />
        <Summary value={Number(data?.expenses)} description="Expenses" />
    </section>
    )
}