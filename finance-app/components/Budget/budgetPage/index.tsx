'use client'

import BudgetHeader from "../budgetCard/budgetHeader";
import ProgressBar from "../budgetCard/progressBar";
import BudgetTransaction from "./budgetTransaction";
import { buttonEvent } from "@/components/modalFrames/input1";
import { budget } from "@/components/types";
import useGetBudgets from "@/hooks/getBudgets";
import EditBudget from "../budgetModal/editBudget";
import DeleteItem from "@/components/modalFrames/deleteItem";
import AddBudget from "../budgetModal/addBudget";
import { useState } from "react";
import { cardProps } from "..";
import { useShowbar } from "@/providers/showBarContext";
import { deleteBudget } from "@/components/API-Calls/budgets";

export default function BudgetCard({ currentModal, budgetModal, falseModal }: cardProps) {
  
  const [currentBudget, setCurrentBudget] = useState({category: "",budgetId:0, categoryId: 0,})
  const { data } = useGetBudgets({ skip: 0 });
  const {showBar} = useShowbar()


  const editBudget = (e: buttonEvent, item: budget) => {
    setCurrentBudget({
      category: item.category,
      categoryId: item?.categoryId,
      budgetId: Number(item?.budgetId),
    });
    currentModal(e);
  };

  const deleteBtnEvent = (e: buttonEvent, item: budget) => {
    setCurrentBudget((prev) => {
      return {
        ...prev,
        category: item.category,
        budgetId: Number(item?.budgetId),
      };
    });
    currentModal(e);
  };

  const renderBudget = data?.data?.map((item, index) => {
    return (
      <div
        key={index + 1}
        className={`w-[343px] p-5 md:p-8 flex flex-col gap-5 rounded-lg bg-white md:w-[688px] ${showBar? '2xl:w-[608px] transition-all duration-700':'2xl:w-[820px] transition-all duration-700'}`}
      >
        <BudgetHeader
          category={item.category}
          theme={item.theme}
          edit={(e: buttonEvent) => editBudget(e, item)}
          del={(e: buttonEvent) => deleteBtnEvent(e, item)}
        />
        <ProgressBar theme={item.theme} max={item.maximum} spent={Number(item.spent)} />
        <BudgetTransaction category={item.category} budget={item} />
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-col gap-6">{renderBudget}</div>
        {budgetModal.showModal && (
          <div className={`z-[500] flex items-center justify-center fixed top-0 left-0 w-full h-[100vh]`}>
            {budgetModal.add && <AddBudget falseModal={falseModal}  />}
            {budgetModal.edit && <EditBudget falseModal={falseModal} id={currentBudget.budgetId} />}
            {budgetModal.delete && <DeleteItem deleteItem={()=>deleteBudget(currentBudget.budgetId)} id={Number(currentBudget.budgetId)} falseModal={falseModal} nameCategory={currentBudget.category} />}
          </div>
      )}
      {budgetModal.showModal &&<div className="bg-black z-[200] top-0 left-0 fixed opacity-50 w-full h-full"></div>  }
    </div>
  )
}
