import type { potModal, pot } from "../types";

type props = {
  modal: potModal;
  currentPot: pot;
  newValue: number;
};

export default function AddWithDrawProgressBar({ modal, currentPot, newValue }: props) {
  const newTotal = modal.addMoney
    ? Number(newValue) + currentPot.total
    : Number(newValue) > currentPot.total
    ? 0
    : currentPot.total - Number(newValue);

  const newAmount = (
    <div className="w-full flex items-center justify-between">
      <p className="text-gray-500 text-[14px]">New Amount</p>
      <p className="text-[2rem] transition-all duration-300 text-gray-900 font-bold">
        ${newTotal}
      </p>
    </div>
  );

  const projectedPercent = (newTotal / currentPot.target) * 100;
  const actualPercent = (currentPot.total / currentPot.target) * 100;
  const actualProgress = modal.addMoney
    ? actualPercent + "%"
    : newValue && projectedPercent + "%";
  const projectedProgress =
    modal.addMoney && currentPot.total !== 0
      ? projectedPercent + "%"
      : actualPercent - projectedPercent + "%";

  const progressBar = (
    <div className="w-full my-[8px] transition-all duration-300 flex gap-[2px] relative h-2 rounded-lg bg-[#F8F4F0]">
      <div
        style={{ width: actualProgress }}
        className={`h-full bg-gray-900 transition-all duration-300 rounded-l-lg`}
      ></div>
      <div
        style={{ width: projectedProgress }}
        className={`h-full transition-all duration-300 rounded-r-lg ${
          modal.addMoney ? "bg-green-500" : "bg-red-500"
        }`}
      ></div>
    </div>
  );

  const targetPercent = (
    <div className="w-full items-center flex justify-between">
      <p
        className={`text-[14px] ${
          modal.addMoney ? "text-green-500" : "text-red-500"
        }`}
      >
        {actualPercent}%
      </p>
      <p className="text-gray-500 text-[14px]">
        {" "}
        Target of ${currentPot.target}
      </p>
    </div>
  );

  return (
    <div className="flex w-full flex-col">
      {newAmount}
      {progressBar}
      {targetPercent}
    </div>
  );
}
