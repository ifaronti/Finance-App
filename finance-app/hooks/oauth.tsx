import axios from "axios"

export default function OAuth(code:string, navigate:()=>void){
    const url = process.env.NEXT_PUBLIC_URL

    const githubAuthorization = async() => {
        const { data } = await axios.get(`${url}/login?code=${code}`)
        if (data.accessToken) {
            localStorage.setItem('token', data.accessToken)
            navigate()
        }
    }

    return githubAuthorization()
}