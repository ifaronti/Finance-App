
import { useContext, useState } from "react"
import { potContext } from "@/providers/potsContext"

export default function AddDrawBar() {
    const { modal, currentPot } = useContext(potContext)
    /* the initValue decalaration line from this is disabled due to lint noting
    that setInitValue is not used. This so because the value is used to retain the 
    original value of currentPot.total so percentage changes are calculated with it 
    hence the use of arrow function to initialize the state value so it's declared 
    once when component conponent render and doesn't change if currentPot.total is 
    modified later */

    //eslint-disable-next-line  
    const [initValue, setInitValue] = useState(() => currentPot.total)
    const newTotal = modal.addMoney? initValue+currentPot.total: initValue- currentPot.total
    
    const newAmount = <div className="w-full flex items-center justify-between">
        <p className="text-gray-500 text-[14px]">New Amount</p>
        <p className="text-[2rem] transition-all duration-300 text-gray-900 font-bold">${(modal.withdraw &&currentPot.total > initValue)? 0:newTotal}</p>
    </div>

    const addrawPercent = Number(currentPot.total) / Number(currentPot.target)*100
    const actualPercent = Number(initValue) / Number(currentPot.target) * 100
    const actulBars = modal.addMoney ? actualPercent + '%' : actualPercent - addrawPercent + '%'
    const projectedBars = (modal.addMoney && currentPot.total!==0)?addrawPercent+'%':actualPercent+'%'

    const progressBar = <div className="w-full my-[8px] transition-all duration-300 flex gap-[2px] relative h-2 rounded-lg bg-[#F8F4F0]">
        <div style={{width:actulBars}} className={`h-full bg-gray-900 transition-all duration-300 rounded-l-lg`}></div>
        <div style={{width:projectedBars}} className={`h-full transition-all duration-300 rounded-r-lg ${modal.addMoney? 'bg-green-500':'bg-red-500'}`}></div>
    </div>

    const targetPercent = <div className="w-full items-center flex justify-between">
        <p className={`text-[14px] ${modal.addMoney?'text-green-500':'text-red-500'}`}>{ actualPercent}%</p>
        <p className="text-gray-500 text-[14px]"> Target of ${currentPot.target}</p>
    </div>

    return (
        <div className="flex w-full flex-col">
            {newAmount}
            {progressBar}
            {targetPercent}
        </div>
    )
}