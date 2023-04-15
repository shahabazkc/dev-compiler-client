import React from "react";
import authStyles from "../../styles/auth.module.scss";
import loginStyles from "../../styles/login.module.scss";
import { TextField, Button } from "@mui/material";
import Link from "next/link";

export default function LoginLeft() {
  return (
    <div className={authStyles.authLeft}>
      <div className={authStyles.authLeftContent}>
        <div className="login-content">
          <h1 className={loginStyles.contentTitle}><span>Welcome Back !</span></h1>
          <p className={loginStyles.loginContentText}>Welcome back! Please enter your details</p>

          <div className="login-form">
            <div className="form__input">
              <label className="label">Username/email</label>
              <TextField size="small" label="Enter your email/username" variant="outlined" />
            </div>
            <div className="form__input">
              <label className="label">Password</label>
              <TextField type="password" size="small" label="Enter your password" variant="outlined" />
            </div>
            <div className="primary-text login_signup-primary-text">
              <Link href={'/'}>Forgot Password?</Link>
            </div>
            <div className={authStyles.actionButton}>
              <Button className={authStyles.button} variant="contained">Sign In</Button>
            </div>
            <div className="signin_signup_text">
              <p>Don't have an account?<Link href={'/signup'}> <span className="primary-text login_signup-primary-text">Signup</span></Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
