import { useContext } from "react";
import { potContext } from "@/providers/potsContext";
import { buttonEvent, pot } from "../types";
import { showBarContext } from "@/app/dashboard/layout";

type props = {
  text: string;
  event: (item: pot) => void,
  pot:pot
};

export default function AddWithdrawButton({ text, pot, event }: props) {
  const { setModal } = useContext(potContext)
  const {setShowModal} = useContext(showBarContext)
  
  function buttonEvent(e: buttonEvent) {
    const { name } = e.currentTarget
    if (name === '+ Add Money') {
      setModal(prev => {
        return {
          ...prev,
          addMoney:true
        }
      })
    }
    else {
      setModal(prev => {
        return {
          ...prev,
          withdraw:true
        }
      })
    }
    event(pot)
    setShowModal(true)
  }

  return (
    <button
      name={text}
      onClick={buttonEvent}
      className="h-[53px] bg-[#F8F4F0] text-[14px] text-gray-900 rounded-lg font-bold w-[143.5px] md:w-[312px] 2xl:w-[227px]"
    >
      {text}
    </button>
  );
}
