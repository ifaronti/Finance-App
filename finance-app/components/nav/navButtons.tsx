'use client'

import { smallLogo, largeLogo } from "../svgAssets";
import { navStyles } from './NavigationStyles'
import NavToggle from "./navToggle";
import BillsBTN from "./navButtonsComponents/bills";
import OverviewBTN from "./navButtonsComponents/overview";
import BudgetsBTN from "./navButtonsComponents/budgets";
import PotsBTN from "./navButtonsComponents/pots";
import TransactionsBTN from "./navButtonsComponents/transactions";
import { useShowbar } from "@/providers/showBarContext";
import ShowbarProvider from "@/providers/showBarContext";

export default function NavigationButtons() {
  const {showBar, setShowBar} = useShowbar()

  return (
    <ShowbarProvider>
      <section className={`2xl:h-screen flex-grow-0 relative flex transition-width duration-700 w-full ${showBar ? "2xl:w-[300px] relative md:w-[768px]" : "w-[88px] sm:w-full"
            } bg-[#201F24] sm:px-10 px-4 2xl:px-[unset] sm:h-[74px] h-[52px] 2xl:rounded-l-none rounded-t-lg 2xl:rounded-r-xl`} >
        <div className={navStyles('', showBar).BTNsWrapper}>
          <div className='hidden 2xl:block mb-[60px] pl-8'>
            {showBar ? largeLogo : smallLogo}
          </div>
          <OverviewBTN showBar={showBar} />
          <TransactionsBTN showBar={showBar} />
          <BudgetsBTN showBar={showBar} />
          <PotsBTN showBar={showBar} />
          <BillsBTN showBar={showBar} />
          <NavToggle showBar={showBar} toggle={()=>setShowBar(!showBar)} />
        </div>
      </section>
      </ShowbarProvider>
  )
}