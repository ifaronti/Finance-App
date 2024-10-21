import axios from "axios";
import { transaction, pot, budget } from "../types";

type user = {
  balance: number
  expenses: number
  income:number
}
export type responseData = {
    data: {
        transactionsSummary: transaction[];
        billsSummary: transaction[] & user;
        budgetSummary: { summary: number; snippet: budget[] };
        potSummary: { totalSaved: number; summaryItems: pot[] };
        accountSummary:user
    }
    success:boolean
};

type handleError = (error: string) => void;

type handleData = (data: responseData) => void;

const url = process.env.NEXT_PUBLIC_URL;

export const summaryData = async (
  handleData: handleData,
  handleError: handleError
) => {
  try {
    const { data } = await axios.get(`${url}/summary`, {
      headers: { authorization: `Booyaba ${localStorage.getItem("token")}` }
    });
      handleData(data);
      
  } catch (err: any) {
    handleError(err.message);
  }
};
