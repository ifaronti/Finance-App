'use client'

import Input1 from "@/components/modalFrames/input1";
import Input2 from "@/components/modalFrames/input2";
import FrameHeader from "@/components/modalFrames/frameHeader";
import FrameDescription from "@/components/modalFrames/frameDescription";
import AddEditBTN from "@/components/modalFrames/modalbutton";
import ThemeSelect from "@/components/modalFrames/themeSelect";
import { showBarContext } from "@/app/dashboard/layout";
import { potContext } from "@/providers/potsContext";
import { useContext } from "react";
import { buttonEvent, inputEvent } from "@/components/types";
import { pot } from "@/components/types";
import { editPot } from "@/components/API-Calls/pots";
import useGetPots from "@/hooks/getPots";
import { mutate } from "swr";

type props = {
    handleChange: (e: inputEvent|buttonEvent) => void
}

export default function EditPot({handleChange }:props) {
    const { setModal, currentPot, skip } = useContext(potContext)
    const { setShowModal } = useContext(showBarContext)
    const {data:pots} = useGetPots({skip:Number(skip)})
    const description = 'If your saving targets change, feel free to update your pots.'

    const falseModal = () => {
        setShowModal(false)
        setModal({add:false, addMoney:false, withdraw:false, edit:false, delete:false})
    }

    async function potEdit(data: pot) {
        if (pots?.names?.some(item => item === data.name && data.name !== currentPot.name)) {
            return alert('Naming conflict')
        }
        await editPot(data)
        await mutate(['/pots'])
        return
    }

    return (
        <div className="bg-white flex flex-col px-5 py-6 md:px-8 md:py-8 gap-5 w-[335px] md:w-[560px] rounded-lg">
            <FrameHeader text="Edit Pot" event={falseModal} />
            <FrameDescription text={description} />
            <Input1 value={currentPot.name} handleChange={handleChange} />
            <Input2 value={currentPot.target} handleChange={handleChange} />
            <ThemeSelect handleChange={handleChange} value={currentPot.theme} array={[currentPot.name]} />
            <AddEditBTN text="Save changes" event={()=>potEdit(currentPot)} />
        </div>
    )
}