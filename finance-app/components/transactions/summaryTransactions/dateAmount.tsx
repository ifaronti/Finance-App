
export type dateProps = { amount: string; date: string; };
import { usePathname } from "next/navigation";

export default function AmountDate({ amount, date, }: dateProps) {
  const pathName = usePathname()
  return (
    <div className={`flex flex-col text-right ${pathName.includes('budgets')? 'gap-1':'gap-2'}`}>
      <p className={`font-bold ${amount.toString().includes('-') ? "text-gray-900" : "text-[#277C78]"}`}>
        {amount}
      </p>
      <p className="text-gray-500 text-[12px]">{date}</p>
    </div>
  );
}
