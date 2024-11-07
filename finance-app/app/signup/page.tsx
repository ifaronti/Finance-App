"use client";

import { useState } from "react";
import AuthenticationForm from "@/components/authForm";
import { inputEvent, formEvent } from "@/components/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { registerAccount } from "@/components/API-Calls/signUp";

export default function SignUp() {
  const router = useRouter()
  const signUp = true;
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    income: 0,
    avatar:"./assets/images/avatars/emma-richardson.jpg"
  });
  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    income:0,
    all: "",
  });

  const handleChange = (e: inputEvent) => {
    const { name, value } = e.target;
    setErr((prev) => {
      return { ...prev, [name]: "" };
    });

    return setUserInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleBlur = (e: inputEvent) => {
    const { name, validity, minLength } = e.target;
    if (validity.tooShort) {
      return setErr((prev) => {
        return { ...prev, [name]: `Minimum ${minLength} characters required` };
      });
    }
    if (validity.valueMissing) {
      return setErr((prev) => {return { ...prev, [name]: `Can't be empty` }});
    }
    if (validity.patternMismatch) {
      return setErr((prev) => {return { ...prev, [name]: `use correct ${name} format` }});
    }
    if (validity.valid) {
      return setErr((prev) => {return { ...prev, [name]: "" }});
    }
  };

  async function handleResponse() {
    router.push('/')
  }

  const handleSubmit = async (e: formEvent) => {
    e.preventDefault();
    const { password, confirmPassword, email, name, income } = userInfo;
    if (!password || !confirmPassword || !email || !name || income == 0) {
      return setErr(prev=>{return{...prev, all:'All fields are required'}})
    }
    if (password !== confirmPassword) {
      return setErr((prev) => {
        return {...prev,
          password: "Passwords do no match",
          confirmPassword: "Passwords do no match",
        };
      });
    }
    await registerAccount(userInfo, handleResponse)
  };

  const revealPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="w-full flex items-center gap-[140px]">
      <div className="hidden h-fit p-5 flex-grow-0 w-[600px] 2xl:block">
        <Image width={560} height={920} className=" rounded-lg" alt="Home Image"
          src={"/assets/images/illustration-authentication.svg"}
        />

      </div>
      <AuthenticationForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        userInfo={userInfo}
        showPassword={showPassword}
        signUp={signUp}
        err={err}
        handleBlur={handleBlur}
        togglePasswordState={revealPassword}
        isUpdate={false}
      />
    </section>
  );
}
