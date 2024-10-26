import { budget, transaction } from "../types";
import axios from "axios";

export type handleparams = {
  success: boolean;
  data: budget[] & { user?: { transactions: transaction[]; category: string } };
};

const url = process.env.NEXT_PUBLIC_URL;

export const createbudget = async (body: budget) => {
  try {
    await axios.post(`${url}/budgets`, body, {
      headers: { authorization: `Booyaba ${localStorage.getItem("token")}` },
    });
  } catch (err) {
    //@ts-expect-error any decalration still lints with red lines
    console.log(err.message);
  }
};

export const editBudget = async (budget:budget) => {
  try {
    await axios.patch(
      `${url}/budgets`,
      { budget },
      { headers: { authorization: `Booyaba ${localStorage.getItem('token')}` } }
    );
  } catch (err) {
    //@ts-expect-error any decalration still lints with red lines
    console.log(err.message);
  }
};

export const deleteBudget = async (budgetId: number) => {
  try {
    await axios.delete(`${url}/budgets?budgetId=${budgetId}`,{headers:{authorization:`Booyaba ${localStorage.getItem('token')}`}} )
  }
  catch (err) {
    //@ts-expect-error any decalration still lints with red lines
    console.log(err.message);
  }
}
