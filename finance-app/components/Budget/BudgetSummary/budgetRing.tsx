import useGetBudgets from "@/hooks/getBudgets"
import useGetSummary from "@/hooks/getSummary"

type obj = { theme: string, percentage: number }
type arr =obj[]

export default function RingChart() {
    const { data } = useGetSummary()
    const {data:budget} = useGetBudgets({skip:0})
    const spent = data?.data?.budgetSummary?.summary?._sum?.spent
    const maximum = data?.data.budgetSummary.summary._sum.maximum

    const percentage = budget?.data.map(item => {
        return {theme:item.theme, percentage:((item.spent)/Number(spent)*100)}
    }).sort((a, b)=>Number(a.percentage) - Number(b.percentage))
    
    function gradient(arr:arr) {
        let bg = `conic-gradient(`
        let stop = 0
        for (let i = 0; i < arr?.length; i++){
            bg += arr[i]?.theme + ' ' +stop+'% '  + (arr[i+1] ==arr[arr.length]?stop+arr[i].percentage+'%':(stop+arr[i].percentage+ '%,'))
            stop+=arr[i].percentage
        }
        return bg+= ')'
    }
    //@ts-expect-error expected due to swr's undefined init state of response data
    const conicGradient = gradient(percentage)    
    
    const chart = (
            <figure className="flex border-none relative items-center justify-center ">
                <div className="w-[240px] z-[3] items-center flex relative justify-center h-[240px] rounded-full" style={{
                        background:`${conicGradient}`
                }}>

                </div>
                 <div className="h-[177.5px] z-[20] flex items-center justify-center absolute w-[177.5px] rounded-full bg-white/30">
                        <div className="w-[150px] h-[150px] flex flex-col items-center justify-center bg-white rounded-full">
                            <p className="text-[2rem] text-gray-900 font-bold">${spent}</p>
                            <p className="text-[13px] text-gray-500">Of ${maximum} Limit</p>
                        </div>
                </div> 
            </figure>
    )

    return chart
}