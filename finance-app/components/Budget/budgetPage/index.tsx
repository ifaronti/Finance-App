import BudgetHeader from "../budgetCard/budgetHeader";
import ProgressBar from "../budgetCard/progressBar";
import BudgetTransaction from "./budgetTransaction";
import {useContext } from "react";
import { budgetContexts } from "@/providers/budgetContext/budgetContext";
import { buttonEvent } from "@/components/modalFrames/input1";
import { budget } from "@/components/types";
import useGetBudgets from "@/hooks/getBudgets";
//import { showBarContext } from "@/app/dashboard/layout";

export default function BudgetCard() {
  const { setCurrentBudget, skip, setModal2 } = useContext(budgetContexts);
  //const {setShowModal} = useContext(showBarContext)
  
  const { data } = useGetBudgets({ skip: skip })
  
  const currModal = (e: buttonEvent) => {
    //setShowModal(true)
    const { name } = e.currentTarget || e.target
    return setModal2(prev => {return {...prev,[name]:true}})
  }
  
  const editBudget = (e: buttonEvent, item: budget) => {
    setCurrentBudget({
      category: item.category,
      spent: item.spent,
      maximum: Number(item.maximum),
      theme: item.theme,
      categoryId: item?.categoryId,
      budgetId:Number(item?.budgetId)
    });
    currModal(e)
  };

  

  const deleteBudget=(e: buttonEvent, item: budget)=> {
    setCurrentBudget(prev=>{
      return {
        ...prev,
        category: item.category,
        budgetId:Number(item?.budgetId)
      }
    });
    currModal(e)
  }

  const renderBudget = data?.data.map((item, index) => {
    return (
      <div
        key={index + 1}
        className="w-[343px] p-5 md:p-8 flex flex-col gap-5 rounded-lg bg-white md:w-[688px] xl:w-[608px]"
      >
        <BudgetHeader
          category={item.category}
          theme={item.theme}
          edit={(e: buttonEvent) => editBudget(e, item)}
          del={(e: buttonEvent) => deleteBudget(e, item)}
        />
        <ProgressBar theme={item.theme} max={item.maximum} spent={item.spent} />
        <BudgetTransaction  budget={item} />
      </div>
    );
  });

  return <div className="flex flex-col gap-6">{renderBudget}</div>;
}
