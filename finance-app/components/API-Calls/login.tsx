import axios from "axios"

type loginBody = {
    email: string
    password:string
}

export type response = {
    success: boolean
    accessToken:string
}

type handleResponse = (data:response)=>void
const url = process.env.NEXT_PUBLIC_URL
export const login =async (body:loginBody, handleResponse:handleResponse) => {
    try {
        const { data } = await axios.post(`${url}/login`, body)
        handleResponse(data)
    }
    catch (err:any) {
        handleResponse(err.message)
    }
}