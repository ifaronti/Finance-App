'use client'

import Header from "@/components/PageHeader";
import AddButton from "@/components/addButton";
import { useState } from "react";
import AddBill from "./billsModalDisplay/addBill";

export default function BillsPageHeader() {
    const [showModal, setShowModal] = useState(false)
    
    return (
        <div className="flex w-full items-center justify-between">
            <Header text="Recurring Bills" />
            <AddButton event={()=>setShowModal(true)} />
            {showModal && <div className="z-[200] flex items-center justify-center top-0 left-0 fixed w-full h-full">
                <AddBill falseModal={() => setShowModal(false)} />
                <div className=" bg-black z-[120] top-0 left-0 fixed opacity-50 w-full h-full"></div>
            </div>
            }
       </div>
    )
}