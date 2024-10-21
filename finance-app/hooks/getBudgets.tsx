import useSWR from "swr";
import callClient from "@/lib/axios";
import { budget } from "@/components/types";

type getBudgetRequest = {
  skip?: number;
};

type getBudgetResponse = {
  success: true;
  data: budget[];
  chartItems:budget[]
};

export default function useGetBudgets(params: getBudgetRequest) {
  let url = "/budgets";
  if (params) {
    //@ts-expect-error unknow reason it's not accepted
    const searchParams = new URLSearchParams(params);
    url = `${url}?${searchParams.toString()}`;
  }

  return useSWR(
    ["/budgets"],
    () => callClient.get<getBudgetResponse>(url).then((res) => res.data),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
}
