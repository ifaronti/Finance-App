import { navStyles } from "../NavigationStyles";
import { useRouter } from "next/navigation";
import { navBTNProps } from "./pots";
import { usePathname } from "next/navigation";

export default function BillsBTN({ showBar }: navBTNProps) {
  const router = useRouter()
  const currentPath = usePathname()
  const queryParams = new URLSearchParams
  queryParams.append('skip', '0')
  queryParams.append('sort', 'Latest')
  queryParams.append('name', '')

    const recurringBills = (
        <svg
          fill="none"
          height="17"
          viewBox="0 0 20 17"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m18.25.51001h-16.5c-.39782 0-.779356.158035-1.06066.43934-.281305.2813-.43934.66284-.43934 1.06066v14.24999c.000068.1278.032807.2535.095109.3651.062302.1117.152099.2055.260865.2727.108766.0671.232893.1054.360595.1111.127701.0057.254741-.0214.369061-.0786l2.66437-1.3322 2.66437 1.3322c.1042.0522.21911.0793.33563.0793s.23143-.0271.33563-.0793l2.66437-1.3322 2.6644 1.3322c.1042.0522.2191.0793.3356.0793s.2314-.0271.3356-.0793l2.6644-1.3322 2.6644 1.3322c.1143.0572.2413.0843.369.0786s.2519-.044.3606-.1111c.1088-.0672.1986-.161.2609-.2727.0623-.1116.095-.2373.0951-.3651v-14.24999c0-.39782-.158-.77936-.4393-1.06066-.2813-.281305-.6629-.43934-1.0607-.43934zm-3.75 9.74999h-9c-.19891 0-.38968-.079-.53033-.2197-.14065-.14061-.21967-.33138-.21967-.53029s.07902-.38968.21967-.53033.33142-.21967.53033-.21967h9c.1989 0 .3897.07902.5303.21967.1407.14065.2197.33142.2197.53033s-.079.38968-.2197.53029c-.1406.1407-.3314.2197-.5303.2197zm0-2.99999h-9c-.19891 0-.38968-.07902-.53033-.21967s-.21967-.33142-.21967-.53033.07902-.38968.21967-.53033.33142-.21967.53033-.21967h9c.1989 0 .3897.07902.5303.21967.1407.14065.2197.33142.2197.53033s-.079.38968-.2197.53033c-.1406.14065-.3314.21967-.5303.21967z"
            fill={currentPath === "/dashboard/bills" ? "#277C78" : "#b3b3b3"}
          />
        </svg>
      );

  const navigateTo = () => {
    if (currentPath === "/dashboard/bills") {
      return
    }
      router.push(`/dashboard/bills?${queryParams}`)
    }

    return (
        <button onClick={navigateTo} className={navStyles(currentPath, showBar, '/dashboard/bills').buttons}>
            <span>{recurringBills}</span>
            <span className={navStyles('', showBar).btnSpan}>Recurring Bills</span>
        </button>
    )
}