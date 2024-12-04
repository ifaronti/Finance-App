import { usePathname } from "next/navigation"
import { buttonEvent } from "./modalFrames/input1"


type props = {
    editItem: (e:buttonEvent)=>void
    deleteItem:(e:buttonEvent)=>void
}

export default function DeleteEditMenu({ editItem, deleteItem }: props) {
    const pathName = usePathname()
    const isBudget = pathName.includes("budgets") ? true : false;
    const text1 = isBudget ? "Edit Budget" : "Edit Pot";
    const text2 = isBudget ? "Delete Budget" : "Delete Pot";
    
    const toggleEditModal = async (e: buttonEvent) => {
        editItem(e)
    }

    const toggleDeleteModal = (e: buttonEvent) => {
        deleteItem(e)
    }

    return (
        <div className="rounded-lg w-[134px] flex flex-col gap-3 px-5 py-3 h-[91px] bg-white z-[8] shadow-[0_0_5px_2px_rgba(0,0,0,0.1)]">
            <button name="edit" onClick={(e)=>toggleEditModal(e)} className="bg-none text-left text-[14px] text-gray-900 border-none">{text1}</button>
            <hr className="w-full h-[1px] bg-gray-100"/>
            <button name="delete" onClick={(e)=>toggleDeleteModal(e)} className="bg-none text-left text-[14px] text-red-900 border-none">{text2}</button>
        </div>
    )
}