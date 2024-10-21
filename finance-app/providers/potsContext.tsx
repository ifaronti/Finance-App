"use client";

import { createContext, useState } from "react";
import { pot, potsContext } from "@/components/types";

const potsInit = {
  currentPot: { name: "", target: 0, theme: "", total: 0, potId:0 },
  setCurrentPot: () => {},
  modal: { add: false, edit: false, delete: false, addMoney:false, withdraw:false },
  setModal: () => { },
  skip: 0,
  setSkip: () => { },
  newValue: 0,
  setNewValue:()=>{}
};

export const potContext = createContext<potsContext>(potsInit);

export default function PotsProvider({ children }: { children: React.ReactNode }) {
  const [currentPot, setCurrentPot] = useState<pot>({
    name: "",
    target: 0,
    theme: "",
    total: 0,
    potId:0
  });
  const [modal, setModal] = useState({
    add: false,
    edit: false,
    delete: false,
    addMoney: false,
    withdraw:false
  });
  const [skip, setSkip] = useState(0)
  const [newValue, setNewValue] = useState(0)

  return (
    <potContext.Provider
      value={{skip, newValue, setNewValue, setSkip, modal, setModal, currentPot, setCurrentPot }}
    >
      <div>{children}</div>
    </potContext.Provider>
  );
}