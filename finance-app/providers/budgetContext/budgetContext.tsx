"use client";

import { useState, createContext } from "react";
import { budgetContext } from "@/components/types";

const contextInit = {
  currentBudget: { category: "", maximum: 0, spent: 0, theme: "", categoryId:0,budgetId:0 },
  setCurrentBudget: () => {},
  skip: 0,
  setSkip: () => { },
   modal2: { add: false, edit: false, delete: false },
  setModal2:()=>{}
};

export const budgetContexts = createContext<budgetContext>(contextInit);

export default function BudgetProvider({ children }: { children: React.ReactNode }) {
  const [skip, setSkip] = useState(0)
  const [modal2, setModal2] = useState({ add: false, edit: false, delete: false })
  const [currentBudget, setCurrentBudget] = useState({
    category: "",
    maximum: 0,
    spent: 0,
    theme: "",
    categoryId: 0,
    budgetId:0
  });

  return (
    <budgetContexts.Provider
      value={{ currentBudget, modal2, setModal2, setSkip, skip, setCurrentBudget }}
    >
      <div>{children}</div>
    </budgetContexts.Provider>
  );
}