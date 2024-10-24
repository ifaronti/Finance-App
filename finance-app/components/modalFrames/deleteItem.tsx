import FrameHeader from "./frameHeader";
import { usePathname } from "next/navigation";
import { deleteBudget } from "../API-Calls/budgets";
import { deletePot } from "../API-Calls/pots";
import { mutate } from "swr";

type props = {
  id: number
  falseModal: () => void
  nameCategory:string
}

export default function DeleteItem({id, falseModal, nameCategory}:props) {
  const pathName = usePathname();
  const isBudget = pathName.includes("budgets") ? true : false;
  const text = isBudget ? "budget" : "pot";
  const revalKey = isBudget? '/budgets':'/pots'

  function deleteItem() {
    return isBudget
      ? deleteBudget(id)
      : deletePot(id);
  }

  const deleteAndRevalidate = async() => {
    await deleteItem()
    await mutate([revalKey])
    return
  }

  const confirmText = `Are you sure you want to delete this ${text}? This action cannot 
                        be reversed, and all the data inside it will be removed forever.`;

  return (
    <div className="w-[335px] md:w-[560px] md:h-[278px] z-[150] h-[277px] gap-5 rounded-lg bg-white px-5 py-6 md:px-8 md:py-8 flex flex-col">
      <FrameHeader
        text={`Delete '${nameCategory}'?`}
        shutModal={falseModal}
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
