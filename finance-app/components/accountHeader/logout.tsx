'use client'

import { logout } from "../API-Calls/logout"
import { useRouter } from "next/navigation"

export default function Logout() {
    const router = useRouter()
    const btnClass = `border-none transition-all w-52 duration-500 rounded-lg h-[60px] hover:bg-gray-500 bg-gray-900 text-white`

    async function navigateTo() {
        router.push('/')
    }

    async function exitAccount(){
        await logout()
        localStorage.removeItem('token')
        await navigateTo()
        return location.reload()
    }
    
    const logoutBTN = <button onClick={exitAccount} className={btnClass}>Log Out</button>

    return logoutBTN
}