'use client'
import SortComponent from "./sort";
import { categoryList, sortList } from "../svgAssets";
import { buttonEvent } from "../types";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Sort() {
  const pathName = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const querySort = searchParams.get('sort')
  const queryCategory = searchParams.get('category')

  const theSort = (e: buttonEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams)
    const {name, value} = e.currentTarget
    if (name === "Sort by") {
      params.set('sort', value)
    }
    else {
      if (queryCategory) {
        params.set('category', value)
      }
    }
    router.replace(`${pathName}?${params}`)
    return 
  };

  return (
      <div className="flex relative gap-10 px-5 md:px-[unset] md:gap-6">
      <SortComponent
        valueArr={sortList}
        sortName="Sort by"
        theSort={theSort}
        //@ts-expect-error params type
        currentSort={querySort?.toString()}
      />
    { pathName.includes('transactions') && <SortComponent
        valueArr={categoryList.map((item) => item.category)}
        sortName="Category"
        theSort={theSort}
        //@ts-expect-error params type
        currentSort={queryCategory?.toString()}
      />}
    </div>
  )
}