import FrameHeader from "../modalFrames/frameHeader";
import FrameDescription from "../modalFrames/frameDescription";
import { potContext } from "@/providers/potsContext";
import { useContext, useState } from "react";
import { showBarContext } from "@/app/dashboard/layout";
import {inputEvent } from "../types";
import AddEditBTN from "../modalFrames/modalbutton";
import Input2 from "../modalFrames/input2";
import AddDrawBar from "./addrawBar";
import { editPot } from "../API-Calls/pots";
import { mutate } from "swr";

export default function PotAddWithdraw() {
  const [newValue, setNewValue] = useState(0)
  const { modal, setModal,currentPot} = useContext(potContext);
  const { setShowModal } = useContext(showBarContext);
  const BTNText = modal.addMoney ? "Confirm Addition" : "Confirm Withdrawal";

  const description = `Add money to your pot to keep it separate from your 
                       main balance. As soon as you add this money, it will be
                       deducted from your current balance.`;

  const falseModal = () => {
    setShowModal(false);
    setModal({
      add: false,
      edit: false,
      delete: false,
      addMoney: false,
      withdraw: false,
    });
  };

  async function updatePot() {
    const newTotal = currentPot.total + Number(newValue)
    if (newValue === 0 || newValue === undefined) {
      return
    }
    const payload = {...currentPot, total:newTotal}
    if (modal.addMoney) {
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

  const headerText =( modal.addMoney ?
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
    <div className="bg-white flex flex-col px-5 py-6 md:px-8 md:py-8 gap-5 w-[335px] md:w-[560px] rounded-lg">
      <FrameHeader bigFont="yes" text={headerText} event={falseModal} />
      <FrameDescription text={description} />
      <AddDrawBar modal={modal} currentPot={currentPot} newValue={newValue} />
      {changeInput}
      <AddEditBTN text={BTNText} event={updatePot} />
    </div>
  );
}