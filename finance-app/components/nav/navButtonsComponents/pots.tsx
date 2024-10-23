import { navStyles } from "../NavigationStyles";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export type navBTNProps = {
  showBar: boolean
}

export default function PotsBTN({showBar}: navBTNProps) {
  const router = useRouter()
  const currentPath = usePathname()
    const pots = (
        <svg
          fill="none"
          height="22"
          viewBox="0 0 18 22"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m14.25 3.33595v-1.57594c0-.39782-.158-.779356-.4393-1.06066-.2813-.281305-.6629-.43934-1.0607-.43934h-7.5c-.39782 0-.77936.158035-1.06066.43934-.2813.281304-.43934.66284-.43934 1.06066v1.57594c-.84646.17368-1.60711.634-2.15363 1.30332-.54652.66931-.84545 1.50664-.84637 2.37074v10.49999c0 .9946.39509 1.9484 1.09835 2.6517.70326.7032 1.65709 1.0983 2.65165 1.0983h9c.9946 0 1.9484-.3951 2.6517-1.0983.7032-.7033 1.0983-1.6571 1.0983-2.6517v-10.49999c-.0009-.8641-.2999-1.70143-.8464-2.37074-.5465-.66932-1.3071-1.12964-2.1536-1.30332zm-6-1.57594h1.5v1.5h-1.5zm-3 0h1.5v1.5h-1.5zm4.5 14.24999v.75c0 .1989-.07902.3897-.21967.5303-.14065.1407-.33142.2197-.53033.2197s-.38968-.079-.53033-.2197c-.14065-.1406-.21967-.3314-.21967-.5303v-.75h-.75c-.19891 0-.38968-.079-.53033-.2197-.14065-.1406-.21967-.3314-.21967-.5303s.07902-.3897.21967-.5303c.14065-.1407.33142-.2197.53033-.2197h2.25c.19891 0 .3897-.079.5303-.2197.1407-.1406.2197-.3314.2197-.5303s-.079-.3897-.2197-.5303c-.1406-.1407-.33139-.2197-.5303-.2197h-1.5c-.59674 0-1.16903-.237-1.59099-.659s-.65901-.9943-.65901-1.591.23705-1.16902.65901-1.59098.99425-.65901 1.59099-.65901v-.75c0-.19891.07902-.38968.21967-.53033s.33142-.21967.53033-.21967.38968.07902.53033.21967.21967.33142.21967.53033v.75h.75c.1989 0 .3897.07902.5303.21967.1407.14065.2197.33142.2197.53033s-.079.38968-.2197.53033c-.1406.14065-.3314.21966-.5303.21966h-2.25c-.19891 0-.38968.079-.53033.2197-.14065.1406-.21967.3314-.21967.5303s.07902.3897.21967.5303c.14065.1407.33142.2197.53033.2197h1.5c.5967 0 1.169.2371 1.591.659.4219.422.659.9943.659 1.591s-.2371 1.169-.659 1.591c-.422.422-.9943.659-1.591.659zm3-12.74999h-1.5v-1.5h1.5z"
            fill={currentPath === "/dashboard/pots" ? "#277C78" : "#b3b3b3"}
          />
        </svg>
      );

  const navigateTo = () => {
    if (currentPath === "/dashboard/pots") {
      return
    }
        router.push('/dashboard/pots')
    }

    return (
        <button onClick={navigateTo} className={navStyles(currentPath, showBar, '/dashboard/pots').buttons}>
            <span>{pots}</span>
            <span className={navStyles('', showBar).btnSpan}>Pots</span>
        </button>
    )
}