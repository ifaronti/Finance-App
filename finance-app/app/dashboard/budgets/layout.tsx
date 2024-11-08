import { Metadata } from "next";
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Budgets",
  description:"Budgets spending limits for categories of expenses"
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <div>
        <Suspense fallback={'loading...'}>
            {children}
        </Suspense>
    </div>
}