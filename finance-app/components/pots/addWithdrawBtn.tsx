import { buttonEvent, pot } from "../types";

type props = {
  text: string;
  openModal: (e:buttonEvent, item: pot) => void,
  pot:pot
};

export default function AddWithdrawButton({ text, pot, openModal }: props) {
  
  return (
    <button
      name={text}
      onClick={(e)=>openModal(e, pot)}
      className="h-[53px] bg-[#F8F4F0] text-[14px] text-gray-900 rounded-lg font-bold w-[143.5px] md:w-[312px] 2xl:w-full"
    >
      {text}
    </button>
  );
}
