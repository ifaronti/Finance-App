import { useState } from "react";
import SortBox from "./sortBox";
import SortButton from "./sortBTN";

export type btnEvent = React.SyntheticEvent<HTMLButtonElement>;

type sortProps = {
  theSort: (e: btnEvent) => void;
  sortName: string;
  currentSort: string;
  valueArr: string[];
};

export default function SortComponent({
  theSort,
  sortName,
  currentSort,
  valueArr,
}: sortProps) {
  const [showSort, setShowSort] = useState(false);

  const showList = () => {
    setShowSort(!showSort);
  };

  return (
    <div className="flex relative items-center gap-2">
      <p className="text-[14px] hidden md:block text-gray-500">{sortName}</p>
      <div className="flex relative flex-col gap-4">
        <span className="pr-5 md:pr-[unset]">
          <SortButton
            sortList={showList}
            currentSort={currentSort}
            sortName={sortName}
          />
        </span>
        <SortBox
          currentSort={currentSort}
          theSort={theSort}
          valueArr={valueArr}
          sortName={sortName}
          showSort={showSort}
        />
      </div>
    </div>
  );
}
