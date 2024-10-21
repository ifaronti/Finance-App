import { caretDown } from "../svgAssets";
import { sortMobile, filterMobile } from "../svgAssets";

type props = {
    sortList: (e: React.SyntheticEvent<HTMLButtonElement>) => void
    currentSort: string
    sortName:string
}

export default function SortButton({ sortList, currentSort, sortName }:props) {
  return (
    <button
      name={sortName}
      onClick={sortList}
      className={`md:text-[14px] flex w-0 relative items-center md:gap-4 md:px-5  text-gray-900 ${
        sortName === "Sort by" ? "md:w-[113px]" : "md:w-[177px]"
      } bg-none md:border md:rounded-lg h-[45px] border-gray-900`}
    >
      <span className="hidden md:block">{currentSort}</span>
      <span className="absolute hidden md:block right-5">{caretDown}</span>
      <span className="md:hidden relative block">
        {sortName === 'Sort by' ? sortMobile : filterMobile}
      </span>
    </button>
  );
}
