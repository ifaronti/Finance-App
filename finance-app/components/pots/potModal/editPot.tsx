import Input1 from "@/components/modalFrames/input1";
import Input2 from "@/components/modalFrames/input2";
import FrameHeader from "@/components/modalFrames/frameHeader";
import FrameDescription from "@/components/modalFrames/frameDescription";
import AddEditBTN from "@/components/modalFrames/modalbutton";
import ThemeSelect from "@/components/modalFrames/themeSelect";
import { useState } from "react";
import { buttonEvent, inputEvent } from "@/components/types";
import { pot } from "@/components/types";
import { editPot } from "@/components/API-Calls/pots";
import useGetPots from "@/hooks/getPots";
import { mutate } from "swr";

type props = {
    falseModal: () => void
    potId:number
}

export default function EditPot({ falseModal, potId }: props) {
    const { data: pots } = useGetPots({ skip: 0 })
    const targetPot = pots?.data.find(item => item.potId === potId)
    const [reqBody, setReqBody] = useState<pot>({
        name: String(targetPot?.name),
        potId: targetPot?.potId,
        target: Number(targetPot?.target),
        total: Number(targetPot?.total),
        theme: String(targetPot?.theme)
    })
    const description = 'If your saving targets change, feel free to update your pots.'

    const handleChange = (e: buttonEvent | inputEvent) => {
        const { name, value } = e.currentTarget || e.target
        setReqBody(prev => {
            return {
                ...prev,
                [name]:value
            }
        })
    }

    async function potEdit(data: pot) {
        if (pots?.names?.some(item => item === data.name && data.name !== reqBody.name)) {
            return alert('Name conflict')
        }
        await editPot(data)
        await mutate(['/pots'])
        return
    }

    return (
        <div className="bg-white flex flex-col px-5 py-6 md:px-8 md:py-8 gap-5 w-[335px] md:w-[560px] rounded-lg">
            <FrameHeader text="Edit Pot" shutModal={falseModal} />
            <FrameDescription text={description} />
            <Input1 value={reqBody.name} handleChange={handleChange} />
            <Input2 value={reqBody.target} handleChange={handleChange} />
            <ThemeSelect handleChange={handleChange} value={reqBody.theme} array={[reqBody.name]} />
            <AddEditBTN text="Save changes" event={()=>potEdit(reqBody)} />
        </div>
    )
}