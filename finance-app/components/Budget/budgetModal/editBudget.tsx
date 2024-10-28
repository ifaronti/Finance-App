import FrameHeader from "@/components/modalFrames/frameHeader";
import FrameDescription from "@/components/modalFrames/frameDescription";
import Input1 from "@/components/modalFrames/input1";
import { inputEvent, buttonEvent, budget } from "@/components/types";
import Input2 from "@/components/modalFrames/input2";
import ThemeSelect from "@/components/modalFrames/themeSelect";
import AddEditBTN from "@/components/modalFrames/modalbutton";
import { editBudget } from "@/components/API-Calls/budgets";
import useGetBudgets from "@/hooks/getBudgets";
import { useState } from "react";
import { categories } from "@/components/types";
import { mutate } from "swr";
import { useRef } from "react";
import useClickOutside from "@/hooks/useClickOutside";

type props = {
    id: number
    falseModal: ()=>void
}

export default function EditBudget({falseModal, id}: props) {
    const description = 'As your budgets change, feel free to update your spending limits.'
    const { data } = useGetBudgets({ skip: 0 })
    const usedThemes = data?.data.map(item=>item.theme)
    const targetBudget = data?.data?.find(item => item.budgetId === id)
    const editRef = useRef(null)
    useClickOutside({ref:editRef, falseModal})
    
    const [currentBudget, setCurrentBudget] = useState<budget>({
        category: String(targetBudget?.category),
        maximum: Number(targetBudget?.maximum),
        theme: String(targetBudget?.theme),
        budgetId: targetBudget?.budgetId,
        categoryId: Number(targetBudget?.categoryId),
        spent:Number(targetBudget?.spent)
    })

    const handleChange = (e: inputEvent | buttonEvent) => {
        const { value, name } = e.currentTarget || e.target;
        setCurrentBudget((prev) => {
          return name === "category"
            ? //@ts-expect-error this saying element has type any unexpectedly
              { ...prev, [name]: value, categoryId: categories[value] }
            : { ...prev, [name]: value };
        });
      };
    
    async function editRequest(currentBudget: budget) {
        await editBudget(currentBudget)
        await mutate(["/budgets"])
        falseModal()
        return
    }

    return (
        <div ref={editRef} className="bg-white flex relative flex-col px-5 py-6 md:px-8 md:py-8 gap-5 w-[335px] md:w-[560px] rounded-lg">
            <FrameHeader shutModal={falseModal} text="Edit Budget" />
            <FrameDescription text={description} />
            <Input1 value={currentBudget.category} handleChange={handleChange} />
            <Input2 value={currentBudget.maximum} handleChange={handleChange} />
            <ThemeSelect array={usedThemes} handleChange={handleChange} value={currentBudget.theme} />
            <AddEditBTN text="Save Changes" event={()=>editRequest(currentBudget)}/>
        </div>
    )
}