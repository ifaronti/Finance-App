
import BudgetHeader from "../Budget/budgetCard/budgetHeader";
import PotProgress from "./potProgress";
import AddWithdrawButton from "./addWithdrawBtn";
import { pot } from "../types";
import { buttonEvent } from "../types";

type cardProp = {
    pot: pot
    event:(item:pot)=> void
    edit:(e:buttonEvent)=> void
    del:(e:buttonEvent)=> void
}

export default function PotCard({ pot, event, edit, del }: cardProp) {
    return (
        <div className="bg-white flex flex-col gap-8 w-[343px] md:w-[688px] xl:w-[518px] p-5 rounded-lg md:p-6">
            <BudgetHeader category={pot.name} theme={pot.theme} edit={(e)=>edit(e)} del={(e)=>del(e)} />
            <PotProgress pot={pot} />
            <div className="w-full flex justify-between">
                <AddWithdrawButton text="+ Add Money" toggleModal={()=>event(pot)} pot={pot} />
                <AddWithdrawButton text="Withdraw" pot={pot} toggleModal={()=>event(pot)} />
            </div>
        </div>
    )
}