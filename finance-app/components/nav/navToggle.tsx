import { toggleShowBar } from "../svgAssets";
import { toggleProps } from "../types";

export default function NavToggle({ showBar, toggle }: toggleProps) {
  const toggleButton = (
    <button
      onClick={toggle}
      className={`gap-4 w-full justify-start ${
        showBar ? "" : "-rotate-180"
      } bottom-[-45%] relative transition-all h-10 duration-[800ms] px-8 text-[#b3b3b3] items-center hidden 2xl:inline-flex`}
    >
      <span>{toggleShowBar}</span>
      <span
        className={`${
          showBar
            ? "text-[1rem] visible transition-all duration-[2s] opacity-100"
            : "transition-all duration-[0.3s] opacity-0 invisible"
        }`}
      >
        Minimize Menu
      </span>
    </button>
  );

  return toggleButton;
}
