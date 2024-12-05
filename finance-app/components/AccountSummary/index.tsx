'use client'

import Summary from "@/components/AccountSummary/summary";
import useGetSummary from "@/hooks/getSummary";

export default function BalanceSummary() {
    const { data: responseData, isLoading } = useGetSummary()
    const balance = responseData?.data?.balance
    const expenses = responseData?.data?.expenses
    const income = responseData?.data?.income
    
    return (
    <section className="flex gap-3 sm:gap-6 flex-col mx-auto md:flex-row">
        <Summary
            isLoading={isLoading}
            value={Number(isLoading ? 0 : balance)}
            description="Current Balance"
        />
        <Summary 
            isLoading={isLoading} 
            value={Number(isLoading? 0:income)} 
            description="Income" 
        />
        <Summary 
            isLoading={isLoading} 
            value={Number(isLoading? 0:expenses)} 
            description="Expenses" 
        />
    </section>
    )
}