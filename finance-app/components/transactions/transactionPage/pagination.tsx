import { caretLeft } from "@/components/svgAssets";
import { useContext } from "react";
import { transactionContext } from "@/providers/transactionsContext";
import { buttonEvent } from "@/components/types";
import useGetTransactions from "@/hooks/getTransactions";

export default function Pagination() {
    const { skip, setSkip,orderBy,category,name } = useContext(transactionContext)
    const { data } = useGetTransactions({
        skip: skip,
        orderBy: orderBy,
        category: category,
        name:name
    })

    const buttonStyle = `w-10 hover:bg-[#98908b] rounded-lg hover:text-white border-[#98908b] border text-[14px] h-10`
    const singleBTNStyle = "md:w-[93px] flex-shrink-0 w-12 group rounded-lg hover:text-white hover:bg-[#98908b] flex justify-center items-center md:gap-4 border-[#98908b] border h-10"

    const thePage = (e: buttonEvent) => {
        const { value } = e.currentTarget
        setSkip(Number(value))    
    }

    const next = () => {
        setSkip(prev => {
            //@ts-expect-error swr
            return data?.data?.length <10? prev: prev+10
        })
    }

    const previous = () => {
        setSkip(prev => {
            return prev === 0? prev: prev -10
        })
    }

    const buttons = <div className="flex gap-1 md:gap-2">
        <button onClick={thePage} value={0} className= {`${buttonStyle} ${skip===0?'bg-gray-900 text-white':'text-gray-900 bg-none'}`}>1</button>
        <button onClick={thePage} value={10} className= {`${buttonStyle} ${skip===10?'bg-gray-900 text-white':'text-gray-900 bg-none'}`}>2</button>
        <button onClick={thePage} value={20} className= {`${buttonStyle} ${skip===20?'bg-gray-900 text-white':'text-gray-900 bg-none'}`}>3</button>
        <button onClick={thePage} value={30} className= {`${buttonStyle} ${skip===30?'bg-gray-900 text-white':'text-gray-900 bg-none'}`}>4</button>
        <button onClick={thePage} value={40} className= {`${buttonStyle} ${skip===40?'bg-gray-900 text-white':'text-gray-900 bg-none'}`}>5</button>
    </div>

    return (
        <div className="w-full relative justify-center mt-6 flex gap-1 md:gap-[unset] md:items-center md:justify-between">
            <button
                className={singleBTNStyle} onClick={previous}
                disabled={skip === 0? true:false}
            >
                {caretLeft}
                <span className="hidden md:block">Prev</span>
            </button>

            <span>{buttons}</span>

            <button
                className={`flex-row-reverse ${singleBTNStyle}`} onClick={next}
                //@ts-expect-error swr
                disabled={data?.data?.length <10? true:false}
            >
                <span className="rotate-180">{caretLeft}</span>
                <span className="hidden md:block">Next</span>
            </button>
        </div>
    )
}
