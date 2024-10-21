import { transaction } from "@/components/types";

type props = {
    transaction: transaction
    somePaid: transaction[]
}

export default function BillStatus({transaction, somePaid}:props) {

    const formatDate = (date: number) => {
        let format
        switch (date) {
            case 1:
                format = date+'st'
                break
            case 2:
                format = date+'nd'
                break
            case 3:
                format = date+'rd'
                break
            default:
                format = date+'th'
        }
        return format
    }

    const billStatus = (transaction:transaction, somePaid:transaction[]) => {
        let status
        // const dueMonth = Number(new Date(transaction.date).getMonth()) + 1
        // const currentMonth = Number(new Date().getMonth())+1
        const dueDate = new Date(transaction.date).getDate()
        const currentDate = new Date().getDate()
        if (somePaid.some(item => item.name === transaction.name) && Number(currentDate) > Number(dueDate)) {
            status = 'paid'
        } 
        if (dueDate > currentDate && Number(dueDate) - Number(currentDate) <= 7 ) {
            status = 'Due Soon'
        }
        if (Number(dueDate) - Number(currentDate) > 7) {
            status = 'Upcoming'
        }       
        return {status:status, date:formatDate(dueDate)}
    }
    return billStatus(transaction, somePaid)
}