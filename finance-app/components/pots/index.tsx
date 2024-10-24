"use client";
import PotCard from "./potCard";
import {  useState } from "react";
import { buttonEvent, pot } from "../types";
import useGetPots from "@/hooks/getPots";
import AddPot from "./potModal/addPot";
import EditPot from "./potModal/editPot";
import DeleteItem from "../modalFrames/deleteItem";
import PotAddWithdraw from "./potAddWithdraw";
import Header from "../PageHeader";
import AddButton from "../addButton";

export default function Pots() {
  const [currentPot, setCurrentPot] = useState({ name: '', target: 0, total: 0, theme: '', potId: 0 })
  const [potModal, setPotModal] = useState({
    add: false,
    edit: false,
    delete: false,
    addMoney: false,
    Withdraw: false,
    showModal:false
  });

  function selectModal(e: buttonEvent) {
    const { name } = e.currentTarget
    if (name === '+ Add Money') {
      setPotModal(prev => {return {...prev,addMoney: true,showModal:true}})
    }
    else {setPotModal(prev => {return {...prev,[name]: true,showModal:true}})}
  }
  
  const { data: pots } = useGetPots({ skip: 0 });

  const potMod = (e: buttonEvent, item: pot) => {
    setCurrentPot({
      name: item.name,
      target: item.target,
      total: item.total,
      theme: item.theme,
      potId: Number(item.potId),
    });
    selectModal(e)
  };

  const renderPots = pots?.data?.map((item, index) => {
    return (
      <PotCard key={index + 1} pot={item}  addWithdrawPot={(e) => potMod(e, item)}
        edit={(e: buttonEvent) => potMod(e, item)}
        del={(e: buttonEvent) => potMod(e, item)}
      />
    );
  });

  function falseModal() {
    setPotModal({add: false,edit: false,delete: false,addMoney: false,Withdraw: false,
      showModal:false
    })
  }

  return (
    <section className="flex mx-auto py-8 flex-col gap-8">
      <header className="w-full flex items-center justify-between">
          <Header text="Pots" />
          <AddButton event={selectModal} />
      </header>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {renderPots}
      </div> 
      {potModal.showModal &&
        <div className="z-[100] flex items-center justify-center fixed top-0 left-0 w-full h-[100vh]">
          {potModal.add && <AddPot falseModal={falseModal} />}
          {potModal.edit && <EditPot falseModal={falseModal} potId={currentPot.potId} />}
          {potModal.delete && <DeleteItem falseModal={falseModal} id={currentPot.potId} nameCategory={currentPot.name} />}
          {(potModal.addMoney||potModal.Withdraw) && <PotAddWithdraw potModal={potModal} falseModal={falseModal} currentPot={currentPot}/>}
        </div>
      }
      {potModal.showModal && <div className="fixed w-full bg-black opacity-50 h-full top-0 left-0"></div>}
    </section>
);
}