import axios from 'axios'

export const logout = async () => {
    const url = process.env.NEXT_PUBLIC_URL
    try {
        await axios.delete(`${url}/logout`, {headers:{authorization: `Booyaba ${localStorage.getItem('token')}`}})
    }
    catch (err) {
        //@ts-expect-error AxiosError type isn't accepted neither is any
        console.log(err.message)
    }
}