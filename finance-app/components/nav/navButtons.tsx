import { btnProps } from "../types";
import { smallLogo, largeLogo } from "../svgAssets";
import SVGBTNS from "./navButtonsSVGs";
import { navStyles } from './NavigationStyles'
import NavToggle from "./navToggle";

export default function NavigationButtons({
  current,
  goTo,
  showBar,
  toggle
}: btnProps) {
  const changePage = (page: string) => {
    localStorage.setItem("page", page);
    goTo(page);
  };

  const overview = (
    <button
      onClick={() => changePage("dashboard")}
      className={navStyles(current, showBar, 'dashboard').buttons}
    >
      <span className="relative">{SVGBTNS(current).overview}</span>
      <span className={navStyles('', showBar).btnSpan}>Overview</span>
    </button>
  );  

  const transactions = (
    <button
      onClick={() => changePage("dashboard/transactions")}
      className={navStyles(current, showBar, 'transactions').buttons}
    >
      <span>{SVGBTNS(current).transactions}</span>
      <span className={navStyles('', showBar).btnSpan}>Transactions</span>
    </button>
  );

  const budget = (
    <button
      onClick={() => changePage("dashboard/budgets")}
      className={navStyles(current, showBar, 'budgets').buttons}
    >
      <span>{SVGBTNS(current).budget}</span>
      <span className={navStyles('', showBar).btnSpan}>Budgets</span>
    </button>
  );

  const pots = (
    <button
      onClick={() => changePage("dashboard/pots")}
      className={navStyles(current, showBar, 'pots').buttons}
    >
      <span>{SVGBTNS(current).pots}</span>
      <span className={navStyles('', showBar).btnSpan}>Pots</span>
    </button>
  );

  const recurring = (
    <button
      onClick={() => changePage("dashboard/bills")}
      className={navStyles(current, showBar, 'bills').buttons}
    >
      <span>{SVGBTNS(current).recurring}</span>
      <span className={navStyles('', showBar).btnSpan}>Recurring Bills</span>
    </button>
  );

  return (
    <section className={navStyles(current, showBar).section} >
      <div className={navStyles(current, showBar).BTNsWrapper}>
        <div className='hidden 2xl:block mb-[60px] pl-8'>
          {showBar ? largeLogo : smallLogo}
        </div>
        {overview}
        {transactions}
        {budget}
        {pots}
        {recurring}
        <NavToggle showBar={showBar} toggle={toggle}/>
      </div>
    </section>
  );
}
