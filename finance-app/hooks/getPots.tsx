import { pot } from "@/components/types";
import callClient from "@/lib/axios";
import useSWR from "swr";

type getPotsResponse = {
  success: boolean;
  data: pot[];
  names:string[]
};

type getPotsRequest = {
  orderBy?: string;
  skip: number;
};

export default function useGetPots(params: getPotsRequest) {
  let url = "/pots";

  if (params) {
    //@ts-expect-error unknown
    const searchParams = new URLSearchParams(params);
    url = `${url}?${searchParams.toString()}`;
  }

  return useSWR(
    ["/pots"],
    () => callClient.get<getPotsResponse>(url).then((res) => res.data),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
}
