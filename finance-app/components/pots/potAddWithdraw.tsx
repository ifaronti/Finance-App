import FrameHeader from "../modalFrames/frameHeader";
import FrameDescription from "../modalFrames/frameDescription";
import {inputEvent,pot, potModal } from "../types";
import AddEditBTN from "../modalFrames/modalbutton";
import Input2 from "../modalFrames/input2";
import AddDWithdrawBar from "./addWithdrawBar";
import { editPot } from "../API-Calls/pots";
import { mutate } from "swr";
import { useState } from "react";
import { useRef } from "react";
import useClickOutside from "@/hooks/useClickOutside";

type props = {
  falseModal: () =>void;
  currentPot: pot
  potModal:potModal
}

export default function PotAddWithdraw({potModal, falseModal, currentPot}:props) {
  const [newValue, setNewValue] = useState(0)
  const addWithdrawRef = useRef(null)
  useClickOutside({ref:addWithdrawRef, falseModal})
  
  const BTNText = potModal.addMoney ? "Confirm Addition" : "Confirm Withdrawal";

  const description = `Add money to your pot to keep it separate from your 
                       main balance. As soon as you add this money, it will be
                       deducted from your current balance.`;


  async function updatePot() {
    const newTotal = currentPot.total + Number(newValue)
    if (newValue === 0 || newValue === undefined) {
      return
    }
    const payload = {...currentPot, total:newTotal}
    if (potModal.addMoney) {
     await editPot(payload, '', Number(newValue))
    }
    else {
      await editPot(payload, Number(newValue), '')
    }
    await mutate(['/pots'])
    await mutate(['/summary'])
    setNewValue(0)
    return
  }

  const headerText =( potModal.addMoney ?
    (`Add to ${currentPot.name}?`)
    :
   (`Withdraw from ${currentPot.name}`))

  const handleChange = (e: inputEvent) => {
    const { value } = e.target
    setNewValue(Number(value))  
  };  

  //@ts-expect-error no buttonEvent type added to params type
  const changeInput = <Input2 value={newValue} handleChange={handleChange} />
    
  return (
    <div ref={addWithdrawRef} className="bg-white flex flex-col px-5 py-6 md:px-8 md:py-8 gap-5 w-[335px] md:w-[560px] rounded-lg">
      <FrameHeader bigFont="yes" text={headerText} shutModal={falseModal} />
      <FrameDescription text={description} />
      <AddDWithdrawBar modal={potModal} currentPot={currentPot} newValue={newValue} />
      {changeInput}
      <AddEditBTN text={BTNText} event={updatePot} />
    </div>
  );
}