import axios from "axios";

const callClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

callClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token') || ''
    config.headers.authorization = `Booyaba ${token}`
    return config
})

export default callClient