import Link from "next/link";
import { usePathname } from "next/navigation";

type props = { signUp: boolean, loading?:boolean }

export default function FormButton({ signUp, loading }: props) {
  const pathName = usePathname()

  function getText() {
    let btnText
    let linkText
    let paragraphText

    switch (pathName) {
      case '/login':
        btnText = 'Login'
        linkText = 'Signup'
        paragraphText = "Need to create an account?"
        break
      case '/signup':
        btnText = 'SignUp'
        linkText = 'Login'
        paragraphText = "Already have an account?"
        break
      default:
        btnText = 'Update'
        linkText = ''
        paragraphText = ''
    }
    return {btnText, linkText, paragraphText}
  }

  return (
    <>
      <button
        type="submit"
        className={`w-full ${loading? 'animate-pulse':''} h-[53px] rounded-lg bg-black hover:bg-[#696868] text-white`}
      >
        {getText().btnText}
      </button>
      <p className="text-[#696868] leading-[150%]">
        {getText().paragraphText}{" "}
        <Link
          className="hover:text-[red] font-bold text-black"
          href={signUp ? "/login" : "/signup"}
        >
          {getText().linkText}
        </Link>
      </p>
    </>
  );
}
