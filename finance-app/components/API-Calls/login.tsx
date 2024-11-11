import axios from "axios"

type loginBody = {
    email: string
    password:string
}

export type response = {
    success: boolean
    accessToken: string
    name?:string
}

type handleResponse = (data:response)=>void
const url = process.env.NEXT_PUBLIC_URL
export const login =async (body:loginBody, handleResponse:handleResponse) => {
    try {
        const { data } = await axios.post<response>(`${url}/login`, body)
        if (data.accessToken) {
            localStorage.setItem('token', data.accessToken)
            localStorage.setItem('name', String(data.name))
        }
        handleResponse(data)
    }
    catch (err) {
        //@ts-expect-error any decalration still lints with red lines
        handleResponse(err.message)
    }
}