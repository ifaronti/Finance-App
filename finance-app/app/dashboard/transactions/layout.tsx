import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transactions",
  description:"All transactions on your account"
};

export default function Layout({ children }: { children: React.ReactNode }){
  return (
    <div>{children}</div>
  );
}