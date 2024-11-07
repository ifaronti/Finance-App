import callClient from "@/lib/axios";
import useSWR from "swr";
import { transaction, pot, budget, bill } from "@/components/types";

type GetSummaryResponse = {
  success: boolean;
  data: {
    transactionsSummary: transaction[];
    billsSummary: bill[];
    paidBills:transaction[]
    budgetSummary: {
      summary: { _sum: { maximum: number; spent: number } };
      snippet: budget[];
    };
    potSummary: {
      totalSaved: { _sum: { total: number } };
      summaryItems: pot[];
    };
    accountSummary: {
      balance: number
      expenses: number
      income:number
    },
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
