import Image from "next/image";
import Link from "next/link";
import { largeLogo } from "@/components/svgAssets";

export default function Home() {

  const oauthLink = 'https://github.com/login/oauth/authorize?client_id=Ov23liyOmaYRAksPwbCp&scope=read:user%20user:email'
  
  return (
    <section className="w-full flex items-center justify-between 2xl:justify-start gap-[140px]">
      <div className="hidden p-5 w-[600px] relative 2xl:block">
        <Image
          width={560}
          height={920}
          src={"/assets/images/illustration-authentication.svg"}
          alt="Home Image"
          className=" rounded-lg"
        />
        <div className="absolute h-full top-0 py-20 px-10 z-80">
          {largeLogo}
          <div className="absolute bottom-20">
            <h1 className="text-[32px] mb-4 w-[400px] font-bold text-white">
              Keep track of your money and save for your future
            </h1>
            <p className="text-[14px] text-white">
              Personal finance app puts you in control of your spending.
              Track transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
      </div>

      <div className="text-white 2xl:w-[unset] 2xl:h-[unset] w-full h-[100vh] items-center justify-center flex flex-col gap-3">
        <Link className="border-none hover:bg-gray-500 justify-center font-bold flex items-center bg-gray-900 transition-all duration-500 w-[200px] rounded-lg h-[53px]" href={'/signup'}>Sign Up</Link>
        <Link className="border-none hover:bg-gray-500 justify-center font-bold flex items-center bg-gray-900 transition-all duration-500 w-[200px] rounded-lg h-[53px]" href={'/login'}>Login</Link>
        <Link className="border-none hover:bg-gray-500 justify-center font-bold flex items-center bg-gray-900 transition-all duration-500 w-[200px] rounded-lg h-[53px]" href={oauthLink}> Sign In With Github</Link>
      </div>
    </section>
  );
}
