import { useState, useRef } from "react";
import AuthenticationForm from "@/components/authForm";
import { inputEvent, formEvent } from "@/components/types";
import { updateUserDetails } from "../API-Calls/user";
import useClickOutside from "@/hooks/useClickOutside";

type props = {
    shutModal:()=>void
}

export default function UpdateUserDetails({shutModal}:props) {
    const [showPassword, setShowPassword] = useState(false);
    const [err, setErr] = useState({ password: "", confirmPassword: "", name:'', email:'' });
    const userRef = useRef(null)
    useClickOutside({ref:userRef, falseModal:shutModal})
    const [userInfo, setUserInfo] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
        income: null,
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

    const handleSubmit = async (e: formEvent) => {
        e.preventDefault();
        const { password, confirmPassword, email, name, income } = userInfo;

        if (!password && !confirmPassword && !email && !name && !income) {
          return shutModal()
        }

        if (password && password !==undefined && password !== confirmPassword) {
            setErr((prev) => {
                return {...prev,
                password: "Passwords do no match",
                confirmPassword: "Passwords do no match",
                
                };
            });
        }
        if (err.password || err.confirmPassword) {
            return
        }
        
        await updateUserDetails(userInfo)
        return shutModal()
    };

    const revealPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div ref={userRef} className="z-[200]">
            <AuthenticationForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                userInfo={userInfo}
                showPassword={showPassword}
                signUp={true}
                err={err}
                isUpdate={true}
                handleBlur={()=>null}
                togglePasswordState={revealPassword}
            />
        </div>
    );
}
