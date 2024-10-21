'use client'

import { closeModal } from "../svgAssets"
import { useContext } from "react"
import { showBarContext } from "@/app/dashboard/layout"

export default function FrameHeader({ text, event, bigFont }: {event:()=>void, text: string, bigFont?:string }) {

    const { setShowModal } = useContext(showBarContext)
    
    const modalClose = () => {
        setShowModal(false)
        event()
    }

    return (
        <div className="w-full flex justify-between items-center">
            <h1 className={`text-gray-900 font-bold ${bigFont?'text-[2rem]':'text-[20px]'} `}>{text}</h1>
            <button onClick={modalClose} className="w-[25.5px] bg-none border border-gray-500 h-[25.5px] rounded-full">
                {closeModal}
            </button>
        </div>
    )
}