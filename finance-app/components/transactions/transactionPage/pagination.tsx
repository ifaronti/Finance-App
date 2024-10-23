'use client'

import { caretLeft } from "@/components/svgAssets";
import { buttonEvent } from "@/components/types";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { mutate } from "swr";

export default function Pagination({isLastPage}:{isLastPage:boolean}){
    const [skip, setSkip] = useState(0)
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const router = useRouter()
    const buttonStyle = `w-10 hover:bg-[#98908b] rounded-lg hover:text-white border-[#98908b] border text-[14px] h-10`
    const singleBTNStyle = "md:w-[93px] flex-shrink-0 w-12 group rounded-lg hover:text-white hover:bg-[#98908b] flex justify-center items-center md:gap-4 border-[#98908b] border h-10"

    const thePage = (e: buttonEvent) => {
        const { value } = e.currentTarget
        setSkip(Number(value))   
    }

    const next = () => {
        return isLastPage? '': setSkip(skip+10)
    }

    const previous = () => {
        return setSkip(prev => {
            return prev===0? 0:skip-10
        })
    }

    async function setQuery() {
        const params = new URLSearchParams(searchParams)
        params.set('skip', '0')
        router.replace(`${pathName}?${params.toString()}`)
        await mutate(["/transactions"])
        return
    }

    useEffect(() => {
        setQuery()
    //eslint-disable-next-line
    },[skip])

    const buttons = <div className="flex gap-1 md:gap-2">
        <button disabled={skip===0} onClick={thePage} value={0} className= {`${buttonStyle} ${skip===0?'bg-gray-900 text-white':'text-gray-900 bg-none'}`}>1</button>
        <button disabled={skip===10} onClick={thePage} value={10} className= {`${buttonStyle} ${skip===10?'bg-gray-900 text-white':'text-gray-900 bg-none'}`}>2</button>
        <button disabled={skip===20} onClick={thePage} value={20} className= {`${buttonStyle} ${skip===20?'bg-gray-900 text-white':'text-gray-900 bg-none'}`}>3</button>
        <button disabled={skip===30} onClick={thePage} value={30} className= {`${buttonStyle} ${skip===30?'bg-gray-900 text-white':'text-gray-900 bg-none'}`}>4</button>
        <button disabled={skip ===40} onClick={thePage} value={40} className= {`${buttonStyle} ${skip===40?'bg-gray-900 text-white':'text-gray-900 bg-none'}`}>5</button>
    </div>

    return (
        <div className="w-full relative justify-center mt-6 flex gap-1 md:gap-[unset] md:items-center md:justify-between">
            <button
                className={singleBTNStyle} onClick={previous}
                disabled={skip ===0? true:false}
            >
                {caretLeft}
                <span className="hidden md:block">Prev</span>
            </button>
            <span>{buttons}</span>
            <button
                className={`flex-row-reverse ${singleBTNStyle}`} onClick={next}
                disabled={isLastPage}
            >
                <span className="rotate-180">{caretLeft}</span>
                <span className="hidden md:block">Next</span>
            </button>
        </div>
    )
}
