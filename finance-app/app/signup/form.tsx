import { formProps } from "@/components/types";
import { showPass, hidePassword } from "@/components/svgAssets";
import Link from "next/link";

export default function AuthenticationForm({
  handleChange,
  handleSubmit,
  handleBlur,
  showPassword,
  userInfo,
  signUp,
  err,
  togglePasswordState,
}: formProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="sm:w-[528px] rounded-xl gap-8 w-[323px] sm:py-8 py-5 px-5 sm:px-8 flex flex-col items-center bg-white"
    >
      <h1 className="self-start font-bold text-[2rem]">
        {signUp ? "Sign Up" : "Login"}
      </h1>
      <div className="w-full flex text-[#696868] flex-col gap-4">
        {signUp && (
          <div className="w-full gap-1 h-[67px] relative flex flex-col-reverse">
            <input
              required
              onChange={handleChange}
              name="name"
              onBlur={handleBlur}
              value={userInfo.name}
              type="text"
              minLength={1}
              placeholder="Jamisi Saphon"
              id="name"
              className="w-full pl-[20px] h-[45px] rounded-lg border border-[#98908b]"
            />

            {err.name && (
              <p className="text-[red] right-0 absolute -bottom-[22px] text-[1rem]">
                {err.name}
              </p>
            )}

            <label htmlFor="name">Name</label>
          </div>
        )}

        <div className="flex gap-1 h-[67px] relative flex-col-reverse w-full">
          <input
            required
            onChange={handleChange}
            name="email"
            value={userInfo.email}
            type="email"
            placeholder="jamisisaphon@example.com"
            id="email"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            minLength={5}
            onBlur={handleBlur}
            className="w-full pl-[20px] h-[45px] rounded-lg border border-[#98908b]"
          />

          <label htmlFor="email">Email</label>

          {err.email && (
            <p className="text-rose-600 absolute -bottom-[22px] right-0 text-[1rem]">
              {err.email}
            </p>
          )}
        </div>

        <div className="flex gap-1 h-[67px] relative flex-col-reverse w-full">
          <input
            required
            type={showPassword ? "text" : "password"}
            onChange={handleChange}
            name="password"
            value={userInfo.password}
            minLength={8}
            id="password"
            onBlur={handleBlur}
            className="w-full flex-shrink-0 pl-[20px] h-[45px] rounded-lg border border-[#98908b]"
          />

          {err.password && (
            <p className="text-[red] right-0 absolute -bottom-[22px] text-[1rem]">
              {err.password}
            </p>
          )}

          <button
            onClick={togglePasswordState}
            className="absolute bottom-3 right-8"
          >
            {showPassword ? showPass : hidePassword}
          </button>

          <label htmlFor="password">Password</label>
        </div>

        {signUp && (
          <div className="flex gap-1 h-[67px] relative flex-col-reverse w-full">
            <input
              required
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              name="confirmPassword"
              value={userInfo.confirmPassword}
              minLength={8}
              onBlur={handleBlur}
              id="confirm"
              className="w-full pl-[20px] h-[45px] rounded-lg border border-[#98908b]"
            />

            <button
              onClick={togglePasswordState}
              className="absolute bottom-3 right-8" 
            >
              {showPassword ? showPass : hidePassword}
            </button>

            {err.confirmPassword && (
              <p
                className={`text-[red] right-0 absolute -bottom-[22px] text-[1rem]`}
              >
                {err.confirmPassword}
              </p>
            )}

            <label htmlFor="confirm">Confirm Password</label>
          </div>
        )}
      </div>
      <button type="submit" className="w-full h-[53px] rounded-lg bg-black hover:bg-[#696868] text-white">
        {signUp ? "Create Account" : "Login"}
      </button>
      <p className="text-[#696868] leading-[150%]">
        {!signUp ? "Already have an account?" : "Need to create an account?"}{" "}
        <Link
          className="hover:text-[red] font-bold text-black"
          href={signUp ? "/login" : "/signup"}
        >
          {signUp ? "Login" : "Signup"}
        </Link>
      </p>
    </form>
  );
}
