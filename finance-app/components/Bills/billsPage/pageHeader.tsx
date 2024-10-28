'use client'

import Header from "@/components/PageHeader";
import { useState } from "react";
import AddBill from "./billsModalDisplay/addBill";

export default function BillsPageHeader() {
    const [showModal, setShowModal] = useState(false)

    const addBillBtn = (
        <button
            onClick={()=>setShowModal(true)}
            className={`border-none transition-all w-[90px] md:w-[155px] duration-500 rounded-lg h-[53px] hover:bg-gray-500 bg-gray-900 text-white`}
        >
            + Add Bill
        </button>
    )
    
    return (
        <div className="flex items-center justify-between">
            <Header text="Recurring Bills" />
            {addBillBtn}
            {showModal && <div className="z-[200] flex items-center justify-center top-0 left-0 fixed w-full h-full">
                <AddBill falseModal={() => setShowModal(false)} />
                <div className=" bg-black z-[120] top-0 left-0 fixed opacity-50 w-full h-full"></div>
            </div>
            }
       </div>
    )
}