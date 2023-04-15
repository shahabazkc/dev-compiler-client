import React from "react";
import { AuthRight } from "@/components/auth/authRight";
import LoginLeft from "@/components/login/loginLeft";
export default function Login() {
  return (
    <div className="auth-component">
      <LoginLeft/>
      <AuthRight/>
    </div>
  )
}
