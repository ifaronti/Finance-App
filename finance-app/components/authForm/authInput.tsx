import { inputEvent } from "../types";
import { showPass, hidePassword } from "@/components/svgAssets";

type props = {
  name: string;
  handleBlur: (e: inputEvent) => void;
  handleChange: (e: inputEvent) => void;
  err: string;
  placeholder: string;
  type: string;
  pattern?: string;
  togglePasswordState?: () => void;
  showPassword?: boolean;
  value:string|number
};

export default function AuthenticationInput({
  name,
  handleBlur,
  handleChange,
  err,
  placeholder,
  type,
  value,
  pattern,
  togglePasswordState,
  showPassword,
}: props) {
  return (
    <div className="w-full gap-1 h-[67px] relative flex flex-col-reverse">
      <input
        required
        onChange={handleChange}
        name={name}
        onBlur={handleBlur}
        value={value}
        type={type}
        pattern={pattern}
        minLength={1}
        placeholder={placeholder}
        id={name}
        className="w-full pl-[20px] h-[45px] rounded-lg border border-[#98908b]"
      />

      {err && (
        <p className="text-[red] right-0 absolute -bottom-[22px] text-[1rem]">
          {err}
        </p>
      )}

      { name.includes('assword') && (
        <button
          onClick={togglePasswordState}
          className="absolute bottom-3 right-8"
        >
          {showPassword ? showPass : hidePassword}
        </button>
      )}

      <label className="capitalize" htmlFor={name}>
        {name}
      </label>
    </div>
  );
}
