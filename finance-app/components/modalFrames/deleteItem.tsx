import FrameHeader from "./frameHeader";
import { usePathname } from "next/navigation";
import { budgetContexts } from "@/providers/budgetContext/budgetContext";
import { potContext } from "@/providers/potsContext";
import { deleteBudget } from "../API-Calls/budgets";
import { deletePot } from "../API-Calls/pots";
import { useContext } from "react";
import { mutate } from "swr";

export default function DeleteItem() {
  const pathName = usePathname();
  const isBudget = pathName.includes("budgets") ? true : false;
  const text = isBudget ? "budget" : "pot";
  const { currentBudget, setModal2 } = useContext(budgetContexts);
  const { currentPot, setModal } = useContext(potContext);
  const headerText = isBudget ? currentBudget.category : currentPot.name;
  const revalKey = isBudget? '/budgets':'/pots'

  function deleteItem() {
    return isBudget
      ? deleteBudget(currentBudget.budgetId)
      : deletePot(Number(currentPot.potId));
  }

  const deleteAndRevalidate = async() => {
    await deleteItem()
    await mutate([revalKey])
    return
  }

  const falseModal = () => {
    if (!isBudget) {
      //setShowModal(false);
      setModal({ add: false, edit: false, delete: false, addMoney:false, withdraw:false });
    } else {
      //setShowModal(false)
      setModal2({ add: false, edit: false, delete: false })
    }
  };

  const confirmText = `Are you sure you want to delete this ${text}? This action cannot 
                        be reversed, and all the data inside it will be removed forever.`;

  return (
    <div className="w-[335px] md:w-[560px] md:h-[278px] z-[150] h-[277px] gap-5 rounded-lg bg-white px-5 py-6 md:px-8 md:py-8 flex flex-col">
      <FrameHeader
        text={`Delete '${headerText}'?`}
        event={falseModal}
        bigFont="Yes"
      />
      <p className="text-gray-500 w-full text-[14px]">{confirmText}</p>
      <button
        onClick={deleteAndRevalidate}
        className="w-full h-[53px] bg-[#C94736] text-white rounded-lg"
      >
        Yes, Confirm Deletion
      </button>
      <button onClick={falseModal} className="text-gray-500 text-[14px]">
        No, I want to go back
      </button>
    </div>
  );
}
