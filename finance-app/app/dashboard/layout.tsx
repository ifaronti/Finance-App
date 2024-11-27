import NavSideBar from "@/components/nav";
import ShowbarProvider from "@/providers/showBarContext";
import MainHeader from "@/components/accountHeader";
import { Suspense } from "react";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShowbarProvider>
        <section className="flex flex-col-reverse gap-6 sm:gap-8 xl:gap-10 2xl:flex-row">
          <nav>
            <NavSideBar/>
          </nav>
          <div className="h-screen pt-8 overflow-y-scroll no-scrollbar">
            <MainHeader/>
            {children}
          </div>
        </section>
        </ShowbarProvider>
      </Suspense>
  );
}


