import Bills from "@/components/Bills/billsPage"
import Header from "@/components/PageHeader"
import SummaryCards from "@/components/Bills/billsPage/summaryCards"

export default function Page() {  
    return (
        <section className="flex-shrink-0 flex flex-col w-fit md:w-[unset] gap-8 md:mx-unset mx-auto py-8">
           <div className="flex items-center justify-between">
            <Header text="Recurring Bills"/>
           </div>
            <div className="flex flex-col gap-6 xl:flex-row">
                <SummaryCards/>
                <Bills />
            </div>
        </section>
    )
}