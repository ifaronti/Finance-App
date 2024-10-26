import useSWR from "swr";
import callClient from "@/lib/axios";
import { bill, transaction } from "@/components/types";

type reqParams = {
  name?: string;
  skip: number;
  sort?: string;
};

type getResponse = {
  success: boolean;
  data: bill[];
  isLastPage: boolean;
  paidBills:transaction[]
};

export default function useGetBills(params:reqParams) {
  let url = "/bills";
    if (params) {
    //@ts-expect-error unrecognized params type
    const searchParams = new URLSearchParams(params);
    url = `${url}?${searchParams}`;
  }

  return useSWR([url], () =>
      callClient.get<getResponse>(url).then((res) => res.data),
    {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    }
  );
}
