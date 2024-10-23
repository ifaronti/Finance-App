import NavSideBar from "@/components/nav";
import ShowbarProvider from "@/providers/showBarContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ShowbarProvider>
      <section className="flex flex-col-reverse gap-6 sm:gap-8 xl:gap-10 2xl:flex-row">
        <nav>
         <NavSideBar/>
        </nav>
        <div className="h-screen overflow-y-scroll no-scrollbar">
          {children}
        </div>
      </section>
    </ShowbarProvider>
  );
}
