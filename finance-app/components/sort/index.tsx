'use client'
import { useEffect, useState } from "react";
import SortComponent from "./sortCompoent";
import { categoryList, sortList } from "../svgAssets";
import { buttonEvent } from "../types";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { mutate } from "swr";

export default function Sort() {
  const [sortBy, setSortBy] = useState(sortList[0])
  const [category, setCategory] = useState(categoryList[0].category)
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const theSort = async (e: buttonEvent) => {
      e.preventDefault();
      const { name, value } = e.currentTarget;
      return name === "Sort by" ? setSortBy(value) : setCategory(value);
  };
  
  async function setQueries() {
    const params = new URLSearchParams(searchParams)
    params.set('sort', sortBy)
    params.set('category', category)
    router.replace(`${pathName}?${params}`)
    await mutate(['/transactions'])
    return
  }
  
  useEffect(() => {
      setQueries()
      //eslint-disable-next-line
  },[sortBy, category])

    return (
        <div className="flex relative gap-10 px-5 md:px-[unset] md:gap-6">
        <SortComponent
          valueArr={sortList}
          sortName="Sort by"
          theSort={theSort}
          currentSort={sortBy}
        />
        <SortComponent
          valueArr={categoryList.map((item) => item.category)}
          sortName="Category"
          theSort={theSort}
          currentSort={category}
        />
      </div>
    )
}