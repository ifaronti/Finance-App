import { Suspense } from "react"
export default function Layout({ children }: { children: React.ReactNode }) {
    return <Suspense fallback={<div>Loading...</div>}>
        <div>{children}</div>
    </Suspense>
}