import axios from "axios"
import { userInfo } from "../types";

const url = process.env.NEXT_PUBLIC_URL
export const updateUserDetails = async(body:userInfo) => {
    try {
        await axios.patch(`${url}/user`, body, {
            headers: {
                authorization:`Booyaba ${localStorage.getItem('token')}`
        }})
    }
    catch (err) {
        //@ts-expect-error AxiosError
        console.log(err.message)
    }
}

export const deleteUser = async () => {
    try {
        await axios.delete(`${url}/user`, {
            headers: {
                authorization:`Booyaba ${localStorage.getItem('token')}`
        }})
    }
    catch (err) {
        //@ts-expect-error axiosError
        console.log(err.message)
    }
}