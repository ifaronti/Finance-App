import axios from "axios";
import { pot } from "../types";

const url = process.env.NEXT_PUBLIC_URL;

export const editPot = async (pot: pot, add?:number|string, subtract?:number|string) => {
  let reqURL = `${url}/pots?`
  if (add && add !=='') {
    reqURL += `add=${add}`
  }
  if (subtract && subtract !=='') {
    reqURL += `subtract=${subtract}`
  }
  
  try {
    await axios.patch(reqURL, pot, {
      headers: { authorization: `Booyaba ${localStorage.getItem("token")}` },
    });
  } catch (err) {
    //@ts-expect-error unknown
    console.log(err.message);
  }
};

export const createPot = async(body: pot) => {
  try {
    await axios.post(`${url}/pots`, {...body}, {headers:{authorization:`Booyaba ${localStorage.getItem('token')}`}})
  }
  catch (err) {
    //@ts-expect-error unknown
    console.log(err.message)
  }
}

export const deletePot = async (potId: number) => {
  try {
    await axios.delete(`${url}/pots?potId=${potId}`, {
      headers: { authorization: `Booyaba ${localStorage.getItem("token")}` },
    });
  }
  catch (err) {
    //@ts-expect-error unknown
    console.log(err.message);
  }
};
