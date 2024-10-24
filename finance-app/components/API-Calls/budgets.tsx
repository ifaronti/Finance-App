import { budget, transaction } from "../types";
import axios from "axios";

export type reqBudget = {
  category: string | undefined
  categoryId: number | undefined
  maximum: number | undefined
  spent: number | undefined
  budgetId: number | undefined
  theme: string | undefined
  spent?:number |undefined
}

export type handleparams = {
  success: boolean;
  data: reqBudget[] & { user?: { transactions: transaction[]; category: string } };
};

const url = process.env.NEXT_PUBLIC_URL;
export const createbudget = async (body: budget) => {
  try {
    await axios.post(`${url}/budgets`, body, {
      headers: { authorization: `Booyaba ${localStorage.getItem("token")}` },
    });
  } catch (err) {
    console.log(err);
  }
};

export const editBudget = async (budget:reqBudget) => {
  try {
    await axios.patch(
      `${url}/budgets`,
      { budget },
      { headers: { authorization: `Booyaba ${localStorage.getItem('token')}` } }
    );
  } catch (err: any) {
    console.log(err.message);
  }
};

export const deleteBudget = async (budgetId: number) => {
  try {
    await axios.delete(`${url}/budgets?budgetId=${budgetId}`,{headers:{authorization:`Booyaba ${localStorage.getItem('token')}`}} )
  }
  catch (err: any) {
    console.log(err.message);
  }
}
