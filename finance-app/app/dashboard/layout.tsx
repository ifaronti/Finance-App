"use client";

import NavigationButtons from "@/components/nav/navButtons";
import { useEffect, useState, createContext } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { barContext } from "@/components/types";
import useGetSummary from "@/hooks/getSummary";

const contextInit = {
  showBar: true,
  showModal: false,
  setShowModal: () => {},
  responseData: {
    accountSummary:{expenses:0, balance:0, income:0},
    transactionsSummary: [],
    billsSummary: [],
    budgetSummary: { summary: {_sum:{maximum:0, spent:0}}, snippet: [] },
    potSummary: { totalSaved: {_sum:{total:0}}, summaryItems: [] },
  },
};

export const showBarContext = createContext<barContext>(contextInit);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [current, setCurrent] = useState<string | null>("");
  const [showBar, setShowBar] = useState<boolean>(true);
  const [showModal, setShowModal] = useState(false);
  const navigateTo = useRouter();
  const pathName = usePathname();

  const { data: data } = useGetSummary()
  const responseData = data?.data

  useEffect(() => {
    const thePath = pathName.includes("dashboard/")
      ? pathName.split("/")[2]
      : "dashboard";
    setCurrent(thePath);
  }, [pathName]);

  const goTo = (page: string) => {
    setCurrent(page.replace("dashboard/", ""));
    navigateTo.push("/" + page);
  };

  const toggle = () => {
    setShowBar(!showBar);
  };

  return (
    <showBarContext.Provider
      //@ts-expect-error unknown
      value={{ showBar, showModal, responseData, setShowModal }}
    >
      <section className="flex flex-col-reverse gap-6 sm:gap-8 xl:gap-10 2xl:flex-row">
        <nav>
          <NavigationButtons
            current={current}
            showBar={showBar}
            goTo={goTo}
            toggle={toggle}
          />
        </nav>
        <div className="h-screen overflow-y-scroll no-scrollbar">
          {children}
        </div>
        <div
          className={`${
            showModal
              ? "block fixed transition-all duration-700 w-full h-full z-[60] opacity-50 bg-black"
              : "hidden"
          }`}
        ></div>
      </section>
    </showBarContext.Provider>
  );
}
