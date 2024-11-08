import { Suspense } from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
    return <div>
        <Suspense fallback={'loading...'}>
            {children}
        </Suspense>
    </div>
}