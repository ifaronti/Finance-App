"use client";
import BudgetCard from "@/components/Budget/budgetPage";
import Header from "@/components/PageHeader";
import ChartCard from "@/components/Budget/budgetCard/chartCard";
import AddButton from "@/components/addButton";
import { buttonEvent } from "@/components/modalFrames/input1";
import { useState } from "react";

export type cardProps = {
  currentModal: (e:buttonEvent)=>void
  falseModal: () => void
  budgetModal: { showModal: boolean, add: boolean, edit: boolean, delete: boolean }
}

export default function Budgets() {
  const [budgetModal, setBudgetModal] = useState({
    showModal: false,
    add: false,
    edit: false,
    delete: false,
  });

  const currModal = (e: buttonEvent) => {
    const { name } = e.currentTarget
    return setBudgetModal((prev) => {
      return { ...prev, [name]: true, showModal: true };
    });
  };

  const falseModal = () => {
    setBudgetModal({
      add: false,
      edit: false,
      delete: false,
      showModal: false,
    });
  };

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
        <BudgetCard
          currentModal={currModal}
          falseModal={falseModal}
          budgetModal={budgetModal}
        />
      </div>
    </section>
  );
}
