import Link from "next/link";
import { detailsLink } from "./types";
import { caretRight } from "./svgAssets";

export default function SeeDetails({ location, text }: detailsLink) {
  return (
    <Link
      className="text-[14px] flex gap-4 items-center text-gray-500"
      href={location}
    >
      {text}
      {caretRight}
    </Link>
  );
}
