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
      <section className={navStyles('', showBar, '').section} >
        <div className={`${navStyles('', showBar).BTNsWrapper} w-fit mx-auto md:mx-[unset]`}>
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