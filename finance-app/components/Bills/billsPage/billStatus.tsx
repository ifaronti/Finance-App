import { bill } from "@/components/types";
import { formatDate, getLastDayOfMonth } from "@/components/svgAssets";

type props = {
    bill: bill
}

export default function BillStatus({ bill}: props) {    
    
    const billStatus = (bill:bill) => {
        let status

        const currentMonth = Number(new Date().getMonth())+1
        const dueDate = bill?.due_day
        const currentDate = new Date().getDate()
        const upcoming = dueDate - currentDate
        const lastDay = getLastDayOfMonth(currentMonth)

        if (dueDate < currentDate) {
            status = 'paid'
        } 
        if (dueDate > currentDate && dueDate - currentDate <= 7 ) {
            status = 'Due Soon'
        }
        if (upcoming > 7 ) {
            status = 'Upcoming'
        }
        
        if (dueDate < 7 && lastDay === currentDate ) {
            status = 'Due Soon'
        }
        if (dueDate > 7 && lastDay - dueDate >= 0) {
            status = 'Upcoming'
        }
        return {status:status, date:formatDate(dueDate)}
    }
    return billStatus(bill)
}