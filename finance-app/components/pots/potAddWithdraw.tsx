import FrameHeader from "../modalFrames/frameHeader";
import FrameDescription from "../modalFrames/frameDescription";
import { potContext } from "@/providers/potsContext";
import { useContext } from "react";
import { showBarContext } from "@/app/dashboard/layout";
import {inputEvent } from "../types";
import AddEditBTN from "../modalFrames/modalbutton";
import Input2 from "../modalFrames/input2";
import AddDrawBar from "./addrawBar";
import EditPot from "./potModal/editPot";
import { editPot } from "../API-Calls/pots";

export default function AddWithdraw() {
  const { modal, setModal, currentPot, setCurrentPot } = useContext(potContext);
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
    if (modal.addMoney) {
      editPot(currentPot, )
    }
  }

  const headerText =( modal.addMoney ?
    (`Add to ${currentPot.name}?`)
    :
   (`Withdraw from ${currentPot.name}`))

  const handleChange = (e: inputEvent) => {
    const { value } = e.target
    const newValue = Number(currentPot?.total) > Number(value)? Number(currentPot.total - Number(value)):0
    setCurrentPot((prev) => {
      return { ...prev, total: Number(value) };
    });
  };
  //@ts-expect-error no buttonEvent type added to params type
  const changeInput = <Input2 value={currentPot.total} handleChange={handleChange} />
    
  return (
    <div className="bg-white flex flex-col px-5 py-6 md:px-8 md:py-8 gap-5 w-[335px] md:w-[560px] rounded-lg">
      <FrameHeader bigFont="yes" text={headerText} event={falseModal} />
      <FrameDescription text={description} />
      <AddDrawBar />
      {changeInput}
      <AddEditBTN text={BTNText} event={() => console.log("hoora")} />
    </div>
  );
}