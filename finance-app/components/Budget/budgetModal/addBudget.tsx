import FrameHeader from "@/components/modalFrames/frameHeader";
import FrameDescription from "@/components/modalFrames/frameDescription";
import Input1 from "@/components/modalFrames/input1";
import { inputEvent } from "@/components/types";
import { buttonEvent } from "@/components/modalFrames/input1";
import Input2 from "@/components/modalFrames/input2";
import { useState } from "react";
import ThemeSelect from "@/components/modalFrames/themeSelect";
import AddEditBTN from "@/components/modalFrames/modalbutton";
import { createbudget } from "@/components/API-Calls/budgets";
import { mutate } from "swr";
import { categories } from "@/components/types";
import useGetBudgets from "@/hooks/getBudgets";

export default function AddBudget({falseModal}:{falseModal:()=>void}) {
  const [reqBody, setReqBody] = useState({category:'', maximum:0, theme:'', categoryId:0})
  const {data} = useGetBudgets({skip:0})
  const usedThemes = data?.data?.map(item => item.theme)

  async function newBudget() {
    const { category, maximum, theme, categoryId } = reqBody;
    if (!category || !maximum || !theme || !categoryId) {
      return console.log('check the values')
    }
    await createbudget({...reqBody, spent:0});
    await mutate(["/budgets"])
    return
  }

  const handleChange = (e: inputEvent | buttonEvent) => {
    const { value, name } = e.currentTarget || e.target
    setReqBody(prev => {
      return name === 'category' ?
      //@ts-expect-error this saying element has type any unexpectedly
      {...prev,[name]: value,categoryId: categories[value]}:{...prev,[name]: value,}
    })
  }  
  const description = `Choose a category to set a spending budget. 
                        These categories can help you monitor spending.`
  return (
    <div className="bg-white flex flex-col px-5 py-6 md:px-8 md:py-8 gap-5 w-[335px] md:w-[560px] rounded-lg">
      <FrameHeader bigFont="Yup" event={falseModal} text="Add New Budget" />
      <FrameDescription text={description} />
      <Input1 value={reqBody.category} handleChange={handleChange} />
      <Input2 handleChange={handleChange} value={reqBody.maximum} />
      <ThemeSelect
        value={reqBody.theme}
        array={usedThemes}
        handleChange={handleChange}
      />
      <AddEditBTN event={() => newBudget()} text="Add Budget" />
    </div>
  );
}
