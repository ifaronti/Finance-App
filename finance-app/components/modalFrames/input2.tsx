import { usePathname } from "next/navigation";
import { buttonEvent } from "./input1";
import { inputEvent } from "../types";

type input2Props = {
  value: number 
  handleChange: (e:buttonEvent|inputEvent)=>void
}

export default function Input2({ value, handleChange }: input2Props) {
  const pathName = usePathname()
  const isBudget = pathName.includes('budgets')? true:false
    const labelText = isBudget? 'Maximum Spend':'Target'

  return (
    <div className="w-full gap-1 flex flex-col-reverse">
      <input
        type="number"
        value={value}
        onChange={handleChange}
        className="w-full h-[45px] rounded-lg pl-4 border border-gray-500"
        placeholder="$ e.g 2000"
        name={isBudget? 'maximum':'target'}
        id="amount"
      />
        <label className="font-bold text-gray-500 text-[12px]" htmlFor="amount">{labelText}</label>
    </div>
  );
}
