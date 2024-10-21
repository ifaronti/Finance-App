"use client";

import { useState } from "react";
import AuthenticationForm from "./form";
import { inputEvent, formEvent } from "@/components/types";
import Image from "next/image";

export default function SignUp() {
  const signUp = true;
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
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
      return setErr((prev) => {
        return { ...prev, [name]: `Can't be empty` };
      });
    }
    if (validity.patternMismatch) {
      return setErr((prev) => {
        return { ...prev, [name]: `Please enter correct ${name} format` };
      });
    }
    if (validity.valid) {
      return setErr((prev) => {
        return { ...prev, [name]: "" };
      });
    }
  };

  const handleSubmit = (e: formEvent) => {
    e.preventDefault();
    const { password, confirmPassword } = userInfo;
    if (password !== confirmPassword) {
      return setErr((prev) => {
        return {
          ...prev,
          password: "Passwords do no match",
          confirmPassword: "Passwords do no match",
        };
      });
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    console.log(data);
  };

  const revealPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="w-full flex items-center gap-[140px]">
      <div className="hidden h-fit p-5 flex-grow-0 w-[600px] 2xl:block">
        <Image
          width={560}
          height={920}
          src={"/images/illustration-authentication.svg"}
          alt="Home Image"
          className=" rounded-lg"
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
      />
    </section>
  );
}
