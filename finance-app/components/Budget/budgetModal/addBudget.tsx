import FrameHeader from "@/components/modalFrames/frameHeader";
import FrameDescription from "@/components/modalFrames/frameDescription";
import Input1 from "@/components/modalFrames/input1";
import { inputEvent, budget } from "@/components/types";
import { buttonEvent } from "@/components/modalFrames/input1";
import Input2 from "@/components/modalFrames/input2";
import { useContext } from "react";
import { budgetContexts } from "@/providers/budgetContext/budgetContext";
import ThemeSelect from "@/components/modalFrames/themeSelect";
import AddEditBTN from "@/components/modalFrames/modalbutton";
import { createbudget } from "@/components/API-Calls/budgets";
//import { showBarContext } from "@/app/dashboard/layout";
import useGetBudgets from "@/hooks/getBudgets";
import { mutate } from "swr";

type props = {
  handleChange: (e: inputEvent | buttonEvent) => void;
};

export default function AddBudget({ handleChange }: props) {
  const { setModal2, currentBudget, skip } = useContext(budgetContexts);
  //const { setShowModal } = useContext(showBarContext)
  const { data } = useGetBudgets({ skip: skip })
  const usedThemes = data?.data?.map(item=>item.theme)

  async function newBudget(body: budget) {
    const { category, maximum, theme, categoryId } = currentBudget;
    if (!category || !maximum || !theme || !categoryId) {
      return console.log('check the values')
    }
    await createbudget(body);
    await mutate(["/budgets"])
    return
  }

  const falseModal = () => {
    setModal2({ add: false, edit: false, delete: false })
    //setShowModal(false)
  }

  const description = `Choose a category to set a spending budget. 
                        These categories can help you monitor spending.`
  return (
    <div className="bg-white flex flex-col px-5 py-6 md:px-8 md:py-8 gap-5 w-[335px] md:w-[560px] rounded-lg">
      <FrameHeader bigFont="Yup" event={falseModal} text="Add New Budget" />
      <FrameDescription text={description} />
      <Input1 value={currentBudget.category} handleChange={handleChange} />
      <Input2 handleChange={handleChange} value={currentBudget.maximum} />
      <ThemeSelect
        value={currentBudget.theme}
        array={usedThemes}
        handleChange={handleChange}
      />
      <AddEditBTN event={() => newBudget(currentBudget)} text="Add Budget" />
    </div>
  );
}
