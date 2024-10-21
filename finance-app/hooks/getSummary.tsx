import callClient from "@/lib/axios";
import useSWR from "swr";
import { transaction, pot, budget } from "@/components/types";

type GetSummaryResponse = {
  success: boolean;
  data: {
    transactionsSummary: transaction[];
    billsSummary: transaction[];
    budgetSummary: {
      summary: { _sum: { maximum: number; spent: number } };
      snippet: budget[];
    };
    potSummary: {
      totalSaved: { _sum: { total: number } };
      summaryItems: pot[];
    };
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
