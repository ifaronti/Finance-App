import axios from "axios";
import { pot } from "../types";

const url = process.env.NEXT_PUBLIC_URL;

export const editPot = async (pot: pot, add?:number, subtract?:number) => {
  let reqURL = `${url}/pot?`
  if (add) {
    reqURL += `add=${add}`
  }
  if (subtract) {
    reqURL += `subtract=${subtract}`
  }
  try {
    await axios.patch(reqURL, pot, {
      headers: { authorization: `Booyaba ${localStorage.getItem("token")}` },
    });
  } catch (err: any) {
    console.log(err.message);
  }
};

export const createPot = async(body: pot) => {
  try {
    await axios.post(`${url}/pots?subtract=${Number(body.total)}`, body, {headers:{authorization:`Booyaba ${localStorage.getItem('token')}`}})
  }
  catch (err:any) {
    console.log(err.message)
  }
}

export const deletePot = async (potId: number) => {
  try {
    await axios.delete(`${url}/pots?potId=${potId}`, {
      headers: { authorization: `Booyaba ${localStorage.getItem("token")}` },
    });
  }
  catch (err: any) {
    console.log(err.message);
  }
};
