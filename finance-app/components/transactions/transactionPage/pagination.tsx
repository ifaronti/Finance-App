import { caretLeft } from "@/components/svgAssets";
import { buttonEvent } from "@/components/types";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Pagination({isLastPage}:{isLastPage:boolean}){
    const searchParams = useSearchParams()
    const querySkip = searchParams.get('skip')
    const pathName = usePathname()
    const router = useRouter()
    const buttonStyle = `w-10 hover:bg-[#98908b] rounded-lg hover:text-white border-[#98908b] border text-[14px] h-10`
    const singleBTNStyle = "md:w-[93px] flex-shrink-0 w-12 group rounded-lg hover:text-white hover:bg-[#98908b] flex justify-center items-center md:gap-4 border-[#98908b] border h-10"

    const setSkip = (e: buttonEvent) => {
        const { value } = e.currentTarget
        const params = new URLSearchParams(searchParams)
        params.set('skip', value)
        router.replace(`${pathName}?${params}`)
        return
    }

    const next = () => {
        const params = new URLSearchParams(searchParams)
        const skip = Number(params.get('skip'))
        if (!isLastPage) {
            params.set('skip', (skip+10).toString())
        }
        router.replace(`${pathName}?${params}`)
    }

    const previous = () => {
        const params = new URLSearchParams(searchParams)
        const skip = Number(params.get('skip'))
        if (skip !== 0) {
            params.set('skip', (skip-10).toString())
        }
        router.replace(`${pathName}?${params}`)
    }

    const buttons = <div className="flex gap-1 md:gap-2">
        <button disabled={Number(querySkip)===0} onClick={setSkip} value={0} className= {`${buttonStyle} ${Number(querySkip)===0?'bg-gray-900 text-white':'text-gray-900 bg-none'}`}>1</button>
        <button disabled={Number(querySkip)===10} onClick={setSkip} value={10} className= {`${buttonStyle} ${Number(querySkip)===10?'bg-gray-900 text-white':'text-gray-900 bg-none'}`}>2</button>
        <button disabled={Number(querySkip)===20} onClick={setSkip} value={20} className= {`${buttonStyle} ${Number(querySkip)===20?'bg-gray-900 text-white':'text-gray-900 bg-none'}`}>3</button>
        <button disabled={Number(querySkip)===30} onClick={setSkip} value={30} className= {`${buttonStyle} ${Number(querySkip)===30?'bg-gray-900 text-white':'text-gray-900 bg-none'}`}>4</button>
        <button disabled={Number(querySkip) ===40} onClick={setSkip} value={40} className= {`${buttonStyle} ${Number(querySkip)===40?'bg-gray-900 text-white':'text-gray-900 bg-none'}`}>5</button>
    </div>

    return (
        <div className="w-full relative justify-center mt-6 flex gap-1 md:gap-[unset] md:items-center md:justify-between">
            <button
                className={singleBTNStyle} onClick={previous}
                disabled={Number(querySkip) ===0? true:false}
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
