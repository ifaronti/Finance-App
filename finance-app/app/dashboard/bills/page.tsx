import Bills from "@/components/Bills/billsPage"
import SummaryCards from "@/components/Bills/billsPage/summaryCards"
import BillsPageHeader from "@/components/Bills/billsPage/pageHeader"

export default function Page() {  
    return (
        <section className="flex-shrink-0 mx-a flex flex-col w-fit 2xl:w-[unset] gap-8 mx-auto py-8">
           <BillsPageHeader/>
            <div className="flex flex-col w-fit mx-auto gap-6 xl:flex-row">
                <SummaryCards/>
                <Bills />
            </div>
        </section>
    )
}