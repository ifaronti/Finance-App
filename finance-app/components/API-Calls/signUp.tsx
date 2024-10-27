import axios from "axios";
import { userInfo } from "../types";
type handle = ()=>void

export const registerAccount = async(body:userInfo, handleResponse:handle ) => {
    const url = process.env.NEXT_PUBLIC_URL

    try {
        const { data } = await axios.post(`${url}/register`, { ...body, balance: body.income })
        if (data.success) {
            handleResponse()
        }
    }
    catch (err) {
        console.log(err);
    }
}