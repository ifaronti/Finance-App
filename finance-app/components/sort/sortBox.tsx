type sortProps = {
  theSort: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  sortName: string;
  currentSort: string;
  valueArr: string[];
  showSort: boolean;
};

export default function SortBox({
  valueArr,
  currentSort,
  theSort,
  sortName,
  showSort,
}: sortProps) {
  const sortCategory = valueArr.map((item, index) => {
    return (
      <button
        onClick={theSort}
        key={index + 1}
        name={sortName}
        className={`border-none flex flex-col gap-3 text-left p-0 w-full ${
          currentSort === item ? "font-bold" : ""
        } bg-none text-[14px]`}
        value={item}
      >
        {item}
        {index + 1 === valueArr.length ? "" : <hr className="w-full h-[1px]" />}
      </button>
    );
  });

  return (
    <div
      className={`px-5 z-[9] absolute right-0 top-14 rounded-lg ${
        sortName === "Sort by"
          ? "min-w-[114px] no-scrollbar"
          : "min-w-[177px] h-[300px] no-scrollbar overflow-y-scroll"
      }  flex-col ${
        showSort ? "flex" : "hidden"
      } bg-white py-3 shadow-[0_0_5px_7px_rgba(0,0,0,0.08)] gap-4 text-left`}
    >
      {sortCategory}
    </div>
  );
}
