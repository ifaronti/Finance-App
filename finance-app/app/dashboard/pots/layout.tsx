import { Metadata } from "next";
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Pots",
  description:"Register savings target and total saved for tracking"
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <div>
        <Suspense fallback={'loading...'}>
            {children}
        </Suspense>
    </div>
}