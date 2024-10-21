import { budget, transaction } from "../types";
import axios, { AxiosError } from "axios";

export type handleparams = {
  success: boolean;
  data: budget[] & { user?: { transactions: transaction[]; category: string } };
};
type handleData = (data: handleparams) => void;
const url = process.env.NEXT_PUBLIC_URL;

export const getBudgets = async (skip: number, handleData: handleData) => {
  try {
    const { data } = await axios.get(`${url}/budgets?skip=${skip}`, {
      headers: { authorization: `Booyaba ${localStorage.getItem("token")}` },
    });
    handleData(data);
  } catch (err: any) {
    console.log(err.message);
  }
};

export const createbudget = async (body: budget) => {
  try {
    await axios.post(`${url}/budgets`, body, {
      headers: { authorization: `Booyaba ${localStorage.getItem("token")}` },
    });
  } catch (err) {
    console.log(err);
  }
};

export const editBudget = async (budget:budget) => {
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
