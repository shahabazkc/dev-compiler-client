import { AuthRight } from "@/components/auth/authRight";
import { SignupLeft } from "@/components/signup/signupLeft";
import React from "react";
export default function signup() {
  return (
    <div className="auth-component">
      <SignupLeft />
      <AuthRight />
    </div>
  )
}
