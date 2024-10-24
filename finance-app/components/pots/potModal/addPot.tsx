import FrameHeader from "@/components/modalFrames/frameHeader"
import { inputEvent, buttonEvent } from "@/components/types"
import FrameDescription from "@/components/modalFrames/frameDescription"
import Input1 from "@/components/modalFrames/input1"
import Input2 from "@/components/modalFrames/input2"
import ThemeSelect from "@/components/modalFrames/themeSelect"
import { potContext } from "@/providers/potsContext"
import { useContext } from "react"
//import { showBarContext } from "@/app/dashboard/layout"
import AddEditBTN from "@/components/modalFrames/modalbutton"
import { createPot } from "@/components/API-Calls/pots"
import { pot } from "@/components/types"
import { mutate } from "swr"
import useGetPots from "@/hooks/getPots"

type props = {
    handleChange: (e: inputEvent|buttonEvent) => void
}

export default function AddPot({ handleChange }: props) {
    const { setModal, skip, currentPot } = useContext(potContext)
    //const { setShowModal } = useContext(showBarContext)
    const {data:pots} = useGetPots({skip:Number(skip)})
    const description = 'Create a pot to set savings targets. These can help keep you on track as you save for special purchases.'
    const names = pots?.names
    const falseModal = () => {
      //  setShowModal(false)
        setModal({add:false, edit:false, delete:false, addMoney:false, withdraw:false})
    }

    async function createThePot(data: pot) {
        if (names?.some(item => item.toLowerCase() === data.name.toLowerCase())) {
            return
        }
        await createPot(data)
        await mutate(["/pots"])
        return
    }

    return (
        <div className="bg-white flex flex-col px-5 py-6 md:px-8 md:py-8 gap-5 w-[335px] md:w-[560px] rounded-lg">
            <FrameHeader event={falseModal} text="Add New Pot" />
            <FrameDescription text={description} />
            <Input1 handleChange={handleChange} value={currentPot.name} />
            <Input2 value={currentPot.target} handleChange={handleChange} />
            <ThemeSelect value={currentPot.theme} array={[currentPot.name]} handleChange={handleChange} />
            <AddEditBTN text="Add Pot" event={()=>createThePot(currentPot)}/>
        </div>
    )
}