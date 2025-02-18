"use client";

import { useState } from "react";
import AuthenticationForm from "../../components/authForm";
import { inputEvent, formEvent } from "@/components/types";
import Image from "next/image";
import { login } from "@/components/API-Calls/login";
import { response } from "@/components/API-Calls/login";
import { useRouter } from "next/navigation";

export default function Login() {
  const signUp = false;
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState({
    email: "",
    password: "",
    serverErr: "",
  });

  const handleResponse = (data: response) => {
    if (data.success) {
      router.push("/dashboard");
    }
    else {
      setErr((prev) => {
        return { ...prev, serverErr: data.toString() };
      });
    }
  };

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
    e.preventDefault();
    console.log("onBlur");
  };

  const handleSubmit = async (e: formEvent) => {
    e.preventDefault();
    setLoading(true)
    
    const { password, email } = userInfo;
    if (!email || !password) {
      return setErr({ email: "invalid", password: "", serverErr: "" });
    }
    await login(userInfo, handleResponse);
    setLoading(false)
  };

  const revealPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="w-full flex items-center h-[100vh] 2xl:justify-normal justify-center gap-[140px]">
      <div className="hidden p-5 w-[600px] 2xl:block">
        <Image
          width={560}
          height={920}
          src={"/assets/images/illustration-authentication.svg"}
          alt="Home Image"
          className=""
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
        loading={loading}
      />
    </section>
  );
}
