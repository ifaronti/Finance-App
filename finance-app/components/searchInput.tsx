'use client'

import { useEffect, useState } from "react";
import { searchSVG } from "./svgAssets";
import { inputEvent, formEvent } from "./types";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { mutate } from "swr";

export default function Search() {
  const [inputValue, setInputValue] = useState('')
  const [name, setName] = useState('')
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const router = useRouter()
  const currentPath = usePathname()
  const placeHolder = currentPath.includes('bills') ? 'Search Bills' : 'Search Transactions'
  
  const handleChange = (e: inputEvent) => {
    const { value } = e.currentTarget
    setInputValue(value)
  }

  const handleSubmit = async(e:formEvent) => {
    e.preventDefault()
    setName(inputValue)
  }

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    params.set('name', name.toString())
    router.replace(`${pathName}?${params}`)
    mutate(["/transactions"])
    //eslint-disable-next-line
  },[name])

  return (
    <form className="relative w-fit" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeHolder}
        className="xl:w-[320px] md:w-[162px] w-[215px] pl-4 rounded-lg text-[1rem] h-[45px] border-[#98908b] border"
      />
      <button className="absolute top-4 right-4" type="button">
        {searchSVG}
      </button>
    </form>
  );
}
