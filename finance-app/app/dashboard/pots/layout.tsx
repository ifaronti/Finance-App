"use client";
import PotsProvider from "@/providers/potsContext";


export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <PotsProvider>
      <div>{children}</div>
    </PotsProvider>
  );
}
