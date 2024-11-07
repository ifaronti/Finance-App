import { bill, transaction } from "@/components/types";
import { formatDate, getLastDayOfMonth } from "@/components/svgAssets";

type props = {
    bill: bill
    paymentTransaction: transaction[]
}

export default function BillStatus({ bill, paymentTransaction }: props) {    
    
    const billStatus = (bill:bill, payments:transaction[]) => {
        let status
        const dueMonth = Number(new Date(bill?.createdAt).getMonth())
        const currentMonth = Number(new Date().getMonth())+1
        const dueDate = new Date(bill?.createdAt).getDate()
        const currentDate = new Date().getDate()
        const upcoming = Number(dueDate) - Number(currentDate) 

        if (payments?.some(item => item.name === bill?.name) && dueMonth === currentMonth) {
            status = 'paid'
        } 
        if (dueDate > currentDate && Number(dueDate) - Number(currentDate) <= 7 ) {
            status = 'Due Soon'
        }
        if (upcoming > 7 && currentMonth == dueMonth) {
            status = 'Upcoming'
        }
        const lastDay = getLastDayOfMonth(currentMonth)
        if (dueDate < 7 && lastDay === currentDate ) {
            status = 'Due Soon'
        }
        if (dueDate > 7 && lastDay - dueDate >= 0) {
            status = 'Upcoming'
        }
        return {status:status, date:formatDate(dueDate)}
    }
    return billStatus(bill, paymentTransaction)
}