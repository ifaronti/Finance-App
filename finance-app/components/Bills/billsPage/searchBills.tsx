'use client'

import { useState } from "react";
import { searchSVG } from "@/components/svgAssets";
import { inputEvent, formEvent } from "@/components/types";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function SearchBills() {
  const [inputValue, setInputValue] = useState('')
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const router = useRouter()
  
  const handleChange = (e: inputEvent) => {
    const { value } = e.currentTarget
    setInputValue(value)
  }

  const handleBlur=() => {
    const params = new URLSearchParams(searchParams)
    params.set('name', '')
    router.replace(`${pathName}?${params}`)
  }

  const handleSubmit = async(e:formEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    params.set('name', inputValue)
    router.replace(`${pathName}?${params}`)
  }

  return (
    <form className="relative w-fit" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Search bills'
        className="xl:w-[320px] md:w-[162px] w-[215px] pl-4 rounded-lg text-[1rem] h-[45px] border-[#98908b] border"
      />
      <button className="absolute top-4 right-4" type="button">
        {searchSVG}
      </button>
    </form>
  );
}
