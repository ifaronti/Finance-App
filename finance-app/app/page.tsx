import Image from "next/image";
import Link from "next/link";

export default function Home() {
  
  return (
    <section className="w-full flex items-center gap-[140px]">
      <div className="hidden p-5 w-[600px] 2xl:block">
        <Image
          width={560}
          height={920}
          src={"/assets/images/illustration-authentication.svg"}
          alt="Home Image"
          className=""
        />
      </div>

      <div className="text-white flex flex-col gap-3">
        <Link className="border-none hover:bg-gray-500 justify-center font-bold flex items-center bg-gray-900 transition-all duration-500 w-[200px] rounded-lg h-[53px]" href={'/signup'}>Sign Up</Link>
        <Link className="border-none hover:bg-gray-500 justify-center font-bold flex items-center bg-gray-900 transition-all duration-500 w-[200px] rounded-lg h-[53px]" href={'/login'}>Login</Link>
      </div>
    </section>
  );
}
