import useGetBudgets from "@/hooks/getBudgets";
import RingChart from "../BudgetSummary/budgetRing";
import ChartItems from "./ringChartItems";

export default function ChartCard() {
  const { data } = useGetBudgets({ skip: 0 })

  const summaryBudget = data?.chartItems.map((item, index) => {
    return (
      <div key={index + 1} className="flex flex-col gap-4">  
        <ChartItems
            maximum={item.maximum.toFixed(2)}
            spent={item.spent.toFixed(2)}
            category={item.category}
            theme={item.theme}
        />
        {index +1 === data?.chartItems.length? '': <hr className="w-full bg-gray-100 h-[1px]"/>}
      </div>
    )
  });
    
    return (
      <section className="w-[343px] relative p-5 md:p-8 items-center rounded-lg bg-white flex flex-col md:flex-row xl:flex-col xl:w-[428px] gap-8 md:w-[688px]">
        <span className="py-5"><RingChart /></span>
        <div className="flex w-full flex-col gap-6">
            <h3 className="text-gray-900 text-[20px] font-bold">Spending Summary</h3>
            <span className="w-full flex gap-4 flex-col">{summaryBudget}</span>
        </div>
      </section>
  )
}
