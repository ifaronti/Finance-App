'use client'
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react"
type contextInit = {
    showBar: boolean
    setShowBar:Dispatch<SetStateAction<boolean>>
}

const init = { showBar: true, setShowBar: () => { } }
export const showBarContext = createContext<contextInit>(init)

export default function ShowbarProvider({children}:{children:React.ReactNode}) {
    const [showBar, setShowBar] = useState(true)

    return (
        <showBarContext.Provider value={{ showBar, setShowBar }}>
            {children}
        </showBarContext.Provider>
    )
}

export function useShowbar() {
    return useContext(showBarContext)
}