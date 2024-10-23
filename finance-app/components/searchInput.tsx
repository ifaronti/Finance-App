'use client'

import { useEffect, useState } from "react";
import { searchSVG } from "./svgAssets";
import { inputEvent, formEvent } from "./types";
import { usePathname } from "next/navigation";
import useGetTransactions from "@/hooks/getTransactions";

export default function Search() {
  const [inputValue, setInputValue] = useState('')
  const [name, setName] = useState('')
  const currentPath = usePathname()
  const placeHolder = currentPath.includes('bills') ? 'Search Bills' : 'Search Transactions'
  const { mutate } = useGetTransactions({ skip: 0, name:name })
  
  const handleChange = (e: inputEvent) => {
    const { value } = e.currentTarget
    setInputValue(value)
  }

  const handleSubmit = (e:formEvent) => {
    e.preventDefault()
    setName(inputValue)
  }

  useEffect(() => {
    mutate()
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
