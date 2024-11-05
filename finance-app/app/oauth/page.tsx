'use client'
import OAuth from "@/hooks/oauth";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter  } from "next/navigation";
import Link from "next/link";
import { FidgetSpinner } from 'react-loader-spinner'

export default function Page() {
    const [err, setErr] = useState('')
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    const code = params.get('code')?.toString()
    const router = useRouter()

    const redirect = () => {
        router.push('/dashboard')
    }

    useEffect(() => {
        if (code && code !== null) {
            OAuth(code, redirect)
        }
        else {
            setErr('An err has occured retry from homePage')
        }
        //eslint-disable-next-line
    }, [])
    
    return err ? <div className="w-full flex justify-center items-center gap-4 flex-col h-f[100vh]">
        <p className="text-[14px] text-red-500">{err}</p>
        <Link className="border-none hover:bg-gray-500 justify-center font-bold flex items-center bg-gray-900 transition-all duration-500 w-[200px] rounded-lg h-[53px]" href={'/'}>Retry</Link>
    </div>
        :
        <div className="w-full flex items-center justify-center gap-4 flex-col h-[100vh]">
            <p className="text-green-500 text-[1rem]">Redirecting</p>
            <FidgetSpinner
                visible={true}
                height="80"
                width="80"
                ariaLabel="fidget-spinner-loading"
                wrapperStyle={{}}
                wrapperClass="fidget-spinner-wrapper"
            />
        </div>
}