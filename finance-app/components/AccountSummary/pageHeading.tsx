'use client'

import { logout } from "../API-Calls/logout"
import { useRouter } from "next/navigation"
import Header from "../PageHeader"


export default function AccountSummaryHeading() {
    const router = useRouter()

    async function exitAccount(){
        await logout()
        localStorage.removeItem('token')
        router.push('/')
    }
    
    const logoutBTN = (
        <button
            onClick={exitAccount}
            className={`border-none transition-all w-[90px] md:w-[155px] duration-500 rounded-lg h-[53px] hover:bg-gray-500 bg-gray-900 text-white`}
        >
            Log Out
        </button>
    )

    return <header className="w-full flex items-center justify-between">
        <Header text="Overview" />
        {logoutBTN}
    </header>
}