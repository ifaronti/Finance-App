import FrameHeader from "@/components/modalFrames/frameHeader";
import FrameDescription from "@/components/modalFrames/frameDescription";
import Input1 from "@/components/modalFrames/input1";
import { buttonEvent } from "@/components/modalFrames/input1";
import { inputEvent } from "@/components/types";
import Input2 from "@/components/modalFrames/input2";
import ThemeSelect from "@/components/modalFrames/themeSelect";
import { useContext } from "react";
import { budgetContexts } from "@/providers/budgetContext/budgetContext";
import AddEditBTN from "@/components/modalFrames/modalbutton";
import { editBudget } from "@/components/API-Calls/budgets";
import { budget } from "@/components/types";
//import { showBarContext } from "@/app/dashboard/layout";
import useGetBudgets from "@/hooks/getBudgets";
import { mutate } from "swr";

type props = {
    handleChange: (e: inputEvent | buttonEvent) => void
}

export default function EditBudget({ handleChange}:props) {
    const description = 'As your budgets change, feel free to update your spending limits.'
    const {currentBudget, setModal2, skip } = useContext(budgetContexts)
    //const { setShowModal } = useContext(showBarContext)
    const {data} = useGetBudgets({skip:skip})
    async function editRequest(currentBudget: budget) {
        await editBudget(currentBudget)
        await mutate(['/budgets'])
        return
    }

    const usedThemes = data?.data.map(item=>item.theme)
    const falseModal = () => {
        setModal2({ add: false, edit: false, delete: false })
       // setShowModal(false)
      }

    return (
        <div className="bg-white flex relative flex-col px-5 py-6 md:px-8 md:py-8 gap-5 w-[335px] md:w-[560px] rounded-lg">
            <FrameHeader event={falseModal} text="Edit Budget" />
            <FrameDescription text={description} />
            <Input1 value={currentBudget.category} handleChange={handleChange} />
            <Input2 value={currentBudget.maximum} handleChange={handleChange} />
            <ThemeSelect array={usedThemes} handleChange={handleChange} value={currentBudget.theme} />
            <AddEditBTN text="Save Changes" event={()=>editRequest(currentBudget)}/>
        </div>
    )
}