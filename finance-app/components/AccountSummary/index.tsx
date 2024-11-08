'use client'

import Summary from "@/components/AccountSummary/summary";
import useGetSummary from "@/hooks/getSummary";

export default function AccountSummary() {
    const { data:responseData, isLoading } = useGetSummary()
    const data = responseData?.data?.accountSummary;
    
    return (
    <section className="flex gap-3 sm:gap-6 flex-col mx-auto md:flex-row">
        <Summary isLoading={isLoading} value={Number(isLoading? 0:data?.balance)} description="Current Balance" />
        <Summary isLoading={isLoading} value={Number(isLoading? 0:data?.income)} description="Income" />
        <Summary isLoading={isLoading} value={Number(isLoading? 0:data?.expenses)} description="Expenses" />
    </section>
    )
}