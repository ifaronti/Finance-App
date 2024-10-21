"use client";

import { useContext } from "react";
import { showBarContext } from "../layout";

export default function AddBill() {
  const { setShowModal } = useContext(showBarContext);

  return (
    <button
      onClick={() => setShowModal(true)}
      className="border-none transition-all duration-500 rounded-lg h-[53px] w-[129px] hover:bg-gray-500 bg-gray-900 text-white"
    >
      + Add Bill
    </button>
  );
}
