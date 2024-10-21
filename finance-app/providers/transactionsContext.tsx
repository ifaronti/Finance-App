"use client";

import { createContext, useEffect, useState } from "react";
import { formEvent, inputEvent, transactionsContext } from "@/components/types";
import { mutate } from "swr";

const transactionsInit = {
  orderBy: "",
  setOrderBy: () => {},
  category: "",
  setCategory: () => {},
  skip:0,
  setSkip: () => {},
  name: '',
  searchKey: '',
  handleChange: () => {},
  handleSubmit: () => {},
};

export const transactionContext =
  createContext<transactionsContext>(transactionsInit);

export default function TransactionsProvider({ children }: { children: React.ReactNode }) {
  const [orderBy, setOrderBy] = useState("Latest");
  const [category, setCategory] = useState("All Transactions");
  const [skip, setSkip] = useState(0)
  const [name, setName] = useState('')
  const [searchKey, setSearchKey] = useState('')
  
  const handleChange = (e: inputEvent) => {
    return setSearchKey(e.target.value)
  }

  useEffect(() => {
    mutate(["/transactions"])
  },[skip, name, category, orderBy])

  const handleSubmit = (e: formEvent) => {
    e.preventDefault()
    setName(searchKey)
  }

  return (
    <transactionContext.Provider
      value={{name,searchKey,orderBy,setOrderBy,category,setCategory,skip,setSkip,
        handleChange,
        handleSubmit
      }}
    >
      <div>{children}</div>
    </transactionContext.Provider>
  );
}