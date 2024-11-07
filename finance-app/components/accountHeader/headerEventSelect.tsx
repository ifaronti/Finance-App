import { useRef, useState } from "react"
import { buttonEvent } from "../types"
import Logout from "./logout"
import { caretDown } from "../svgAssets"
import useClickOutside from "@/hooks/useClickOutside"

type props = {
    handleChange: (e: buttonEvent) => void
}

export default function SelectHeaderEvent({ handleChange }: props) {
    const [showButtons, setShowButtons] = useState(false)
    const ref = useRef(null)
    useClickOutside({ref:ref, falseModal:()=>setShowButtons(false)})

    const updateButton = (
        <button
            onClick={handleChange}
            name="updateDetails"
            className="w-52 border-none hover:bg-gray-500 rounded-lg h-[60px] bg-gray-900 text-white"
        >
            Update Details
        </button>
    )
    const deleteButton = (
        <button
            onClick={handleChange}
            name="deleteUser"
            className="w-52 border-none hover:bg-red-400 rounded-lg h-[60px] bg-red-500 text-white"
        >
            Delete Account
        </button>
    )

    const buttonsContainer = (
        <div className="absolute z-[150] shadow-2xl flex flex-col gap-5 p-5 bg-white rounded-lg" >
            {updateButton}
            <Logout />
            {deleteButton}
        </div>
    )

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setShowButtons(!showButtons)}
                className="w-[15.6rem] transition-all duration-500 hover:bg-gray-500 mb-2 flex items-center justify-between p-5 border rounded-lg h-[60px] bg-white text-bg-gray-900"
            >   
                <span>Do What You Want</span>
                <span
                    className={`${showButtons ? 'rotate-180 transition-all duration-200' : 'transition-all duration-200'}`}
                >{caretDown}
                </span>
            </button>
            {showButtons && buttonsContainer}
        </div>
    )
}