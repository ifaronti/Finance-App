'use client'

import Pots from "@/components/pots"
import Header from "@/components/PageHeader"
import AddButton from "@/components/addButton"
import { showBarContext } from "../layout"
import { useContext} from "react"
import { potContext } from "@/providers/potsContext"
import AddPot from "@/components/pots/potModal/addPot"
import { inputEvent, buttonEvent } from "@/components/types"
import EditPot from "@/components/pots/potModal/editPot"
import DeleteItem from "@/components/modalFrames/deleteItem"
import AddWithdraw from "@/components/pots/potAddWithdraw"

export default function Page() {
    const {setModal, modal, setCurrentPot} = useContext(potContext)
    const { showModal, setShowModal } = useContext(showBarContext)
    
    const currModal = (e:buttonEvent) => {
        const { name } = e.currentTarget || e.target
        setShowModal(true)
        setModal(prev => {
            return {
                ...prev,
                [name]:true
            }
        })
    }

    const editChange = (e: buttonEvent | inputEvent) => {
        const { name, value } = e.currentTarget || e.target
        setCurrentPot(prev => {
            return {
                ...prev,
                [name]:value
            }
        })
    }

    return (
        <section className="flex mx-auto py-8 flex-col gap-8">
            <header className="w-full flex items-center justify-between">
                <Header text="Pots" />
                <AddButton event={currModal} />
            </header>
            <Pots />
            {showModal &&
                <div className="z-[100] absolute">
                    {modal.add && <AddPot handleChange={editChange} />}
                    {modal.edit && <EditPot handleChange={editChange} />}
                    {modal.delete && <DeleteItem />}
                    {(modal.addMoney||modal.withdraw) && <AddWithdraw/>}
                </div>
            }
        </section>
    )
}