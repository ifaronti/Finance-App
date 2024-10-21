import { caretDown } from "../svgAssets";
type props = {
  categoryShow: () => void;
  value: string;
  theme?:string
};

export default function SelectBTN({ categoryShow, value, theme }: props) {
  return (
    <button
      onClick={categoryShow}
      className="w-full flex items-center justify-between h-[45px] px-5 border border-gray-500 rounded-lg"
    >
      <span className="flex gap-3 items-center">
        {theme && <span className="h-4 w-4 rounded-full" style={{background:theme}}></span>}
        <span>{value}</span>
      </span>
      {caretDown}
    </button>
  );
}