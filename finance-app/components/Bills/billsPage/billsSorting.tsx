import { usePathname, useRouter, useSearchParams } from "next/navigation"
import SortComponent from "@/components/sort/sort"
import { sortList } from "@/components/svgAssets"
import { buttonEvent } from "@/components/types"

export default function SortBills() {
    const pathName = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()
    const querySort = searchParams.get('sort')


    const sortParam = (e: buttonEvent) => {
        const params = new URLSearchParams(searchParams)
        const { value} = e.currentTarget
        params.set('sort', value)
        router.replace(`${pathName}?${params}`)
        return ;
      };
    
    return (
        <SortComponent
            sortName="Sort by"
            theSort={sortParam}
            valueArr={sortList}
            currentSort={String(querySort)}
        />
      )
}