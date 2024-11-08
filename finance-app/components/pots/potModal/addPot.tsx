import FrameHeader from "@/components/modalFrames/frameHeader"
import { inputEvent, buttonEvent } from "@/components/types"
import FrameDescription from "@/components/modalFrames/frameDescription"
import Input1 from "@/components/modalFrames/input1"
import Input2 from "@/components/modalFrames/input2"
import ThemeSelect from "@/components/modalFrames/themeSelect"
import AddEditBTN from "@/components/modalFrames/modalbutton"
import { createPot } from "@/components/API-Calls/pots"
import { pot } from "@/components/types"
import { mutate } from "swr"
import useGetPots from "@/hooks/getPots"
import { useState } from "react"
import { useRef } from "react"
import useClickOutside from "@/hooks/useClickOutside"

type props = {
    falseModal: ()=>void
}

export default function AddPot({falseModal}:props) {
    const [reqBody, setReqBody] = useState<pot>({name:'', target:0, total:0, theme:''})
    const [loading, setLoading] = useState(false)
    const {data:pots} = useGetPots({skip:0})
    const description = 'Create a pot to set savings targets. These can help keep you on track as you save for special purchases.'
    const names = pots?.names
    const addPotRef = useRef(null)
    useClickOutside({ref:addPotRef, falseModal})

    const handleChange = (e: buttonEvent | inputEvent) => {
        const { name, value } = e.currentTarget || e.target
        setReqBody(prev => {
            return {
                ...prev,
                [name]:value
            }
        })
    }

    async function createThePot() {
        setLoading(true)
        const { name, target, theme } = reqBody
        if (!name || !target || !theme || target===0) {
            return
        }
        if (names?.some(item => item === reqBody.name)) {
            return
        }
        await createPot(reqBody)
        await mutate(["/pots"])
        setLoading(false)
        falseModal()
        return
    }    

    return (
        <div ref={addPotRef} className="bg-white flex flex-col px-5 py-6 md:px-8 md:py-8 gap-5 w-[335px] md:w-[560px] rounded-lg">
            <FrameHeader shutModal={falseModal} text="Add New Pot" />
            <FrameDescription text={description} />
            <Input1 handleChange={handleChange} value={reqBody.name} />
            <Input2 value={reqBody.target} handleChange={handleChange} />
            <ThemeSelect value={reqBody.theme} array={[reqBody.name]} handleChange={handleChange} />
            <AddEditBTN isLoading={loading} text="Add Pot" event={createThePot}/>
        </div>
    )
}