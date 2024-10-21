"use client";

import PotCard from "./potCard";
import { potContext } from "@/providers/potsContext";
import { useContext } from "react";
import { buttonEvent,pot } from "../types";
import useGetPots from "@/hooks/getPots";

export default function Pots() {
  const { setModal, setCurrentPot, skip } = useContext(potContext)
  const {data:pots} = useGetPots({skip:Number(skip)})
  
  const potMod = (e: buttonEvent, item: pot) => {
    const {name} = e.currentTarget
    setCurrentPot({ name: item.name, target: item.target, total: item.total, theme: item.theme, potId:item.potId })
    setModal(prev => {
      return {
        ...prev,
        [name]:true
      }
    })
  }

  const addWithdrawPot = (item:pot) => {
    setCurrentPot({ name: item.name, target: item.target, total: 0, theme: item.theme, potId:item.potId })
  }

  const renderPots = pots?.data?.map((item, index) => {
    return (
      <PotCard
        key={index + 1}
        pot={item}
        event={()=>addWithdrawPot(item)}
        edit={(e:buttonEvent)=>potMod(e, item)}
        del={(e:buttonEvent)=>potMod(e, item)}
      />
    );
  });
    
  return(
    <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {renderPots}
    </section>
  )
}
