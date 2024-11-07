import Link from "next/link";

export default function FormButton({ signUp }: { signUp: boolean }) {
  return (
    <>
      <button
        type="submit"
        className="w-full h-[53px] rounded-lg bg-black hover:bg-[#696868] text-white"
      >
        {signUp ? "Create Account" : "Login"}
      </button>
      <p className="text-[#696868] leading-[150%]">
        {signUp ? "Already have an account?" : "Need to create an account?"}{" "}
        <Link
          className="hover:text-[red] font-bold text-black"
          href={signUp ? "/login" : "/signup"}
        >
          {signUp ? "Login" : "Signup"}
        </Link>
      </p>
    </>
  );
}
