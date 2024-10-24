import { navBTNProps } from "./pots";
import { navStyles } from "../NavigationStyles";
import {  useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function TransactionsBTN({showBar}: navBTNProps) {
    const goTo = useRouter()
    const currentPath = usePathname()
    const queryParams = new URLSearchParams
    queryParams.append('skip', '0')
    queryParams.append('sort', 'Latest')
    queryParams.append('category', 'All Transactions')
    queryParams.append('name', '')
    // queryParams.append('category', 'name')

    const transactions = (
        <svg
            fill="none"
            height="18"
            viewBox="0 0 18 18"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="m8.19292 12.9731c.05684.1371.07178.2879.04291.4334s-.10025.2792-.2051.3841l-3 3c-.06966.0698-.15237.1251-.24342.1628-.09105.0378-.18865.0572-.28721.0572s-.19615-.0194-.2872-.0572c-.09105-.0377-.17377-.093-.24342-.1628l-3.000003-3c-.105008-.1048-.176534-.2385-.205522-.3841-.028987-.1456-.014134-.2965.04268-.4336.056815-.1371.153035-.2543.276485-.3367.12344-.0824.26856-.1263.41698-.1262h2.25v-11.24998c0-.19891.07902-.389678.21967-.53033.14066-.140652.33142-.21967.53033-.21967.19892 0 .38968.079018.53033.21967s.21967.33142.21967.53033v11.24998h2.25c.14834 0 .29333.0441.41665.1265s.21943.1996.27617.3366zm8.83778-9.24371-3-2.999995c-.0696-.069732-.1523-.125051-.2434-.162795-.091-.037743-.1886-.05717-.2872-.05717s-.1962.019427-.2872.05717c-.091.037744-.1738.093063-.2434.162795l-3.00002 2.999995c-.10501.1049-.17654.23859-.20552.38415-.02899.14556-.01414.29646.04268.43357.05681.13712.15303.2543.27646.3367.1235.0824.2686.12633.417.12621h2.25v11.24998c0 .1989.079.3897.2197.5303.1406.1407.3314.2197.5303.2197s.3897-.079.5303-.2197c.1407-.1406.2197-.3314.2197-.5303v-11.24998h2.25c.1484.00012.2935-.04381.417-.12621.1234-.0824.2197-.19958.2765-.3367.0568-.13711.0716-.28801.0426-.43357-.0289-.14556-.1005-.27925-.2055-.38415z"
                fill={currentPath === '/dashboard/transactions' ? "#277C78" : "#b3b3b3"}
            />
        </svg>
    );

    const navigateTo = () => {
        if (currentPath === '/dashboard/transactions') {
            return
        }
        goTo.push(`/dashboard/transactions?${queryParams}`)
    }

    return (
        <button onClick={navigateTo} className={navStyles(currentPath, showBar, '/dashboard/transactions').buttons}>
            <span>{transactions}</span>
            <span className={navStyles('', showBar).btnSpan}>Transactions</span>
        </button>
    )
}