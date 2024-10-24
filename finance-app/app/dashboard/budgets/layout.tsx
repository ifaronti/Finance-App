import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Budgets",
  description:"Budgets spending limits for categories of expenses"
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <div>{children}</div>

  );
}