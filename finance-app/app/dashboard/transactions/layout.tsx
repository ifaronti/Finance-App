import { Metadata } from "next";
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Transactions",
  description:"All transactions on your account"
};


export default function Layout({ children }: { children: React.ReactNode }) {
    return <div>
        <Suspense fallback={'loading...'}>
            {children}
        </Suspense>
    </div>
}
