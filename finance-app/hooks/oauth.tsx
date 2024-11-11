import axios from "axios"

export type response = {
    success: boolean
    accessToken: string
    message?: string
    name:string
}

export default function OAuth(code:string, resHandler:(response?:response|string)=>void){
    const url = process.env.NEXT_PUBLIC_URL



    const githubAuthorization = async() => {
        const { data } = await axios.get<response>(`${url}/login?code=${code}`)
        if (data.accessToken) {
            localStorage.setItem('token', data.accessToken)
            localStorage.setItem('name', data.name)
            resHandler(data)
        }
        else {
            resHandler(data.message)
        }
    }

    return githubAuthorization()
}