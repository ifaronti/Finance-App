import { usePathname } from "next/navigation";
import { buttonEvent } from "./modalFrames/input1";

type props = { event: (e:buttonEvent) => void };

export default function AddButton({ event }: props) {
  const pathName = usePathname();
  const isBudget = pathName.includes("budgets") ? true : false;
  const buttonText = isBudget ? "+ Add New Budget" : "+ Add New Pot";

  return (
    <button
      name="add"
      onClick={(e)=>event(e)}
      className={`border-none transition-all duration-500 rounded-lg h-[53px] ${
        isBudget ? "w-[155px]" : "w-[129px]"
      } hover:bg-gray-500 bg-gray-900 text-white`}
    >
      {pathName.includes('bills')?"+ Add Bills": buttonText}
    </button>
  );
}
