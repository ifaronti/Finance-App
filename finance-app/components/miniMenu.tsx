
import { usePathname } from "next/navigation"
import { buttonEvent } from "./modalFrames/input1"
import { useContext } from "react"
import { showBarContext } from "@/app/dashboard/layout"
type props = {
    event1: (e:buttonEvent)=>void
    event2:(e:buttonEvent)=>void
}

export default function MiniMenu({ event1, event2 }: props) {
    const pathName = usePathname()
    const isBudget = pathName.includes("budgets") ? true : false;
    const text1 = isBudget ? "Edit Budget" : "Edit Pot";
    const text2 = isBudget ? "Delete Budget" : "Delete Pot";
    const { setShowModal } = useContext(showBarContext)
    
    const firstEvent = (e: buttonEvent) => {
        setShowModal(true)
        event1(e)
    }

    const secondEvent = (e: buttonEvent) => {
        setShowModal(true)
        event2(e)
    }

    return (
        <div className="rounded-lg w-[134px] flex flex-col gap-3 px-5 py-3 h-[91px] bg-white z-[8] shadow-[0_0_5px_2px_rgba(0,0,0,0.1)]">
            <button name="edit" onClick={(e)=>firstEvent(e)} className="bg-none text-left text-[14px] text-gray-900 border-none">{text1}</button>
            <hr className="w-full h-[1px] bg-gray-100"/>
            <button name="delete" onClick={(e)=>secondEvent(e)} className="bg-none text-left text-[14px] text-red-900 border-none">{text2}</button>
        </div>
    )
}