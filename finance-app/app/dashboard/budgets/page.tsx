"use client";
import BudgetCard from "@/components/Budget/budgetPage";
import Header from "@/components/PageHeader";
import ChartCard from "@/components/Budget/budgetCard/chartCard";
import AddButton from "@/components/addButton";
import { useContext } from "react";
import AddBudget from "@/components/Budget/budgetModal/addBudget";
import { inputEvent } from "@/components/types";
import { buttonEvent } from "@/components/modalFrames/input1";
import EditBudget from "@/components/Budget/budgetModal/editBudget";
import { budgetContexts } from "@/providers/budgetContext/budgetContext";
import DeleteItem from "@/components/modalFrames/deleteItem";
import { categories } from "@/components/types";

export default function Page() {
  const { modal2, setModal2, setCurrentBudget} = useContext(budgetContexts)
  const showModal = false
  const handleChange = (e: inputEvent | buttonEvent) => {
    const { value, name } = e.currentTarget || e.target
    setCurrentBudget(prev => {
      return name === 'category' ?
      //@ts-expect-error this saying element has type any unexpectedly
      {...prev,[name]: value,categoryId: categories[value]}:{...prev,[name]: value,}
    })
  }  
  
  const currModal = (e: buttonEvent) => {
    //setShowModal(true)
    const { name } = e.currentTarget || e.target
    return setModal2(prev => {return {...prev,[name]:true}})
  }

  return (
    <section className="py-6 flex gap-8 flex-col">
      <div className="w-full flex items-center justify-between">
        <Header text="Budget" />
        <AddButton event={currModal} />
      </div>
      <div className="flex xl:flex-row gap-6 flex-col">
        <span>
          <ChartCard />
        </span>
        <BudgetCard />
      </div>
      {showModal && (
        <div className={`z-[100] absolute`}>
          {modal2.add && <AddBudget handleChange={handleChange} />}
          {modal2.edit && <EditBudget handleChange={handleChange} />}
          {modal2.delete && <DeleteItem />}
        </div>
      )}
    </section>
  );
}
