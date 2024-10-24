'use client'

import { closeModal } from "../svgAssets"

type props = { shutModal: () => void, text: string, bigFont?: string }

export default function FrameHeader({ text, shutModal, bigFont }:props) {

    //const { setShowModal } = useContext(showBarContext)
    
    const modalClose = () => {
        //setShowModal(false)
        shutModal()
    }

    return (
        <div className="w-full flex justify-between items-center">
            <h1 className={`text-gray-900 font-bold ${bigFont?'text-[2rem]':'text-[20px]'} `}>{text}</h1>
            <button onClick={modalClose} className="w-[25.5px] bg-none">
                {closeModal}
            </button>
        </div>
    )
}