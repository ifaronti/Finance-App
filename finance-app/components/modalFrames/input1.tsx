import { usePathname } from "next/navigation";
import { inputEvent } from "../types";
import CategorySelect from "./budgetCategory";
import useGetBudgets from "@/hooks/getBudgets";

export type buttonEvent = React.SyntheticEvent<HTMLButtonElement>;

export type inputProps = {
  handleChange: (e: inputEvent | buttonEvent) => void;
  value: string;
};

export default function Input1({ handleChange, value }: inputProps) {
  const pathName = usePathname();
  const isBudget = pathName.includes("budgets") ? true : false;
  const { data } = useGetBudgets({ skip: 0 });
  const usedCategories = data?.data?.map((item) => item.category)

  const input = (
    <div className="w-full relative flex flex-col gap-1">
      <input
        type="text"
        onChange={handleChange}
        value={value}
        name={isBudget ? "category" : "name"}
        className="w-full h-[45px] rounded-lg border border-gray-500 pl-5"
        placeholder={isBudget ? "e.g Savings" : ""}
        maxLength={30}
      />
      {!isBudget && (
        <p className="text-gray-500 text-[12px] absolute right-0 -bottom-5">
          {30 - Number(value.length.toFixed(2))} characters left
        </p>
      )}
    </div>
  );
  return (
    <div className="w-full flex flex-col gap-1">
      <p className="text-gray-500 text-[12px] font-bold">
        {isBudget ? "Budget Category" : "Pot Name"}
      </p>
      {isBudget ? (
        <CategorySelect
          handleChange={handleChange}
          array={usedCategories}
          value={value}
        />
      ) : (
        input
      )}
    </div>
  );
}
