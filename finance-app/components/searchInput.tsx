import { searchSVG } from "./svgAssets";
type formEvent = React.FormEvent<HTMLFormElement>;
type inputEvent = React.ChangeEvent<HTMLInputElement>;
type searchProps = {
  handleChange: (e: inputEvent) => void;
  handleSubmit: (e: formEvent) => void;
  searchParam: string;
  placeholder: string;
};

export default function Search({
  handleChange,
  searchParam,
  handleSubmit,
  placeholder,
}: searchProps) {
  return (
    <form className="relative w-fit" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={searchParam}
        onChange={handleChange}
        placeholder={placeholder}
        className="xl:w-[320px] md:w-[162px] w-[215px] pl-4 rounded-lg text-[1rem] h-[45px] border-[#98908b] border"
      />
      <button className="absolute top-4 right-4" type="button">
        {searchSVG}
      </button>
    </form>
  );
}
