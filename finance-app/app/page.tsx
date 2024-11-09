import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const oauthLink = 'https://github.com/login/oauth/authorize?client_id=Ov23liyOmaYRAksPwbCp&scope=read:user%20user:email'
  
  return (
    <section className="w-full flex items-center justify-between 2xl:justify-start gap-[140px]">
      <div className="hidden p-5 w-[600px] 2xl:block">
        <Image
          width={560}
          height={920}
          src={"/assets/images/illustration-authentication.svg"}
          alt="Home Image"
          className=""
        />
      </div>

      <div className="text-white 2xl:w-[unset] 2xl:h-[unset] w-full h-[100vh] items-center justify-center flex flex-col gap-3">
        <Link className="border-none hover:bg-gray-500 justify-center font-bold flex items-center bg-gray-900 transition-all duration-500 w-[200px] rounded-lg h-[53px]" href={'/signup'}>Sign Up</Link>
        <Link className="border-none hover:bg-gray-500 justify-center font-bold flex items-center bg-gray-900 transition-all duration-500 w-[200px] rounded-lg h-[53px]" href={'/login'}>Login</Link>
        <Link className="border-none hover:bg-gray-500 justify-center font-bold flex items-center bg-gray-900 transition-all duration-500 w-[200px] rounded-lg h-[53px]" href={oauthLink}> Sign In With Github</Link>
      </div>
    </section>
  );
}
