'use client'

import { useEffect, useState } from "react"
import UpdateUserDetails from "./detailsUpdate"
import Header from "../PageHeader"
import DeleteItem from "../modalFrames/deleteItem"
import { buttonEvent } from "../types"
import SelectHeaderEvent from "./headerEventSelect"
import { deleteUser } from "../API-Calls/user"
import React from "react"

export default function MainHeader() {
    const [showModal, setShowModal] = useState({ main: false, deleteUser: false, updateDetails: false })
    const [accountName, setAccountName] = useState('')

    function displayModal(e: buttonEvent) {
        e.preventDefault()
        const { name } = e.currentTarget
        setShowModal(prev => {
            return {
                ...prev,
                main: true,
                [name]:true
            }
        })
        return
    }

    useEffect(() => {
        const name = localStorage.getItem('name')?.split(' ')[0]
        setAccountName(String(name))
    },[])

    function shutModal() {
       return  setShowModal({main:false, deleteUser:false, updateDetails:false})
    }

    return (
        <header className="w-full flex flex-col gap-5 md:gap-[unset] md:flex-row-reverse items-center justify-between">
            <Header text={`${accountName}'s Account`}/>
            {
                showModal.main && (
                    <div className="fixed left-0 top-0 z-[250] w-full h-[100vh] flex items-center justify-center">
                        {showModal.updateDetails && <UpdateUserDetails shutModal={shutModal} />}
                        
                        {showModal.deleteUser && <DeleteItem deleteItem={()=>deleteUser()} nameCategory="Account" falseModal={shutModal}/>}
                        <div className="bg-black z-20 opacity-50 fixed w-full h-[100vh]"></div>
                    </div>
                )
            }
            <SelectHeaderEvent handleChange={displayModal}/>
        </header>
    )
}