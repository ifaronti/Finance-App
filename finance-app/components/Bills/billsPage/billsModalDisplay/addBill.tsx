"use client";

import { useState } from "react";
import { addBill } from "@/components/API-Calls/bills";
import { buttonEvent, categories, inputEvent } from "@/components/types";
import FrameHeader from "@/components/modalFrames/frameHeader";
import CategorySelect from "@/components/modalFrames/budgetCategory";
import InputComponent from "./InputsComponent";
import AddEditBTN from "@/components/modalFrames/modalbutton";
import { mutate } from "swr";

type props = {
  falseModal: () => void;
};

export default function AddBill({ falseModal }: props) {
  const [reqBody, setReqBody] = useState({
    avatar: "./assets/images/avatars/buzz-marketing-group.jpg",
    name: "",
    category: "",
    amount: 0,
    categoryId: 0,
  });

  const handleChange = (e: inputEvent | buttonEvent) => {
    const { name, value } = e.currentTarget;
    setReqBody((prev) => {
      return name === "category"
        ? {
            ...prev,
            [name]: value,
            //@ts-expect-error unexpect typ rejection
            categoryId: categories[value],
          }
        : {
            ...prev,
            [name]: value,
          };
    }); 
  };
    
    async function handleSubmit() {
      const { amount, category, categoryId, name, avatar } = reqBody
      if (!amount || !category || !categoryId || !name || !avatar) {
        return
      }
      await addBill({ ...reqBody, amount: -reqBody.amount })
      await mutate(['/bills?skip=0&sort=Latest&name='])
      falseModal()
      return
    }

  return (
    <div className="bg-white flex z-[150] flex-col px-5 py-6 md:px-8 md:py-8 gap-5 w-[335px] md:w-[560px] rounded-lg">
      <FrameHeader shutModal={falseModal} text="Add New Monthly Bill" />
      <p className="text-gray-500 text-[14px]">Select category of this Bill and fill in details below</p>
      <CategorySelect value={reqBody.category} handleChange={handleChange} />
      <InputComponent
        handleChange={handleChange}
        value={reqBody.amount}
        type="number"
        name="amount"
      />
      <InputComponent
        handleChange={handleChange}
        value={reqBody.name}
        type="text"
        name="name"
      />
      <AddEditBTN text="Add Bill" event={handleSubmit}/>
    </div>
  );
}
