'use client'

import { useState, useEffect, createContext, Dispatch } from "react";
import { usePathname } from "next/navigation";


type init = {
    showBar: boolean
    showModal: boolean
    setShowModal: Dispatch<React.SetStateAction<boolean>>
    current: string
    setShowBar: Dispatch<React.SetStateAction<boolean>>
    setCurrent:Dispatch<React.SetStateAction<string>>
}
const contextInit = {
    showBar: true,
    showModal: false,
    setShowModal: () => { },
    current: '',
    setShowBar: () => { },
    setCurrent:()=>{}
};
  
export const newContext = createContext<init>(contextInit)

export default function ShowBarContext({ children }: { children: React.ReactNode }) {
    const [current, setCurrent] = useState<string>("");
    const [showBar, setShowBar] = useState<boolean>(true);
    const [showModal, setShowModal] = useState(false);
    const pathName = usePathname();
  
    useEffect(() => {
      const thePath = pathName.includes("dashboard/")
        ? pathName.split("/")[2]
        : "dashboard";
      setCurrent(thePath);
    }, [pathName]);

    return <newContext.Provider value={{ showBar, setCurrent, current, setShowBar, showModal, setShowModal }}>
        {children}
    </newContext.Provider>
}