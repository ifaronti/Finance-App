import useSWR from "swr";
import callClient from "@/lib/axios";
import { transaction } from "@/components/types";

type getTransactionsRequest = {
    skip: number
    category?:string,
    orderBy?:string,
    name?:string
}

type getTransactionsResponse = {
    success: boolean
    data:transaction[]
}

export default function useGetTransactions(params:getTransactionsRequest) {
  let url = `/transactions`;

  if (params) {
      //@ts-expect-error neccessary 
    const searchParams = new URLSearchParams(params);
    url = `${url}?${searchParams.toString()}`;
  }
  
    return useSWR(
      ["/transactions"],
      () => callClient.get<getTransactionsResponse>(url).then((res) => res.data),
      {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }
    );
  }