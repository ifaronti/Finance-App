import callClient from "@/lib/axios";
import useSWR from "swr";

type budget = {
  category: string,
  theme: string,
  spent: number
  maximum: number
}

type pot = {
  name: string
  total: number
  theme: string
}

type transaction = {
  amount: number
  date: string
  avatar: string
  name:string
}
export type GetSummaryResponse = {
  success: boolean;
  data: {
    income: number;
    expenses: number;
    balance: number
    total_saved: number
    paid_bills: number
    upcoming_bills: number
    due_soon: number
    total_spent: number
    total_limits: number
    budgets: budget[]
    transactions: transaction[]
    pots:pot[]
  };
};

export default function useGetSummary() {
  const url = `/summary`;

  return useSWR(
    ["/summary"],
    () => callClient.get<GetSummaryResponse>(url).then((res) => res.data),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
}
