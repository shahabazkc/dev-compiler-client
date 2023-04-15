import React from "react";
import authStyles from "../../styles/auth.module.scss";
import loginStyles from "../../styles/login.module.scss";
import { TextField, Button } from "@mui/material";
import Link from "next/link";
import { LoginDataTypes } from "@/types/customTypes";
import { validateLoginForm } from "@/utils/validators";

export default function LoginLeft() {

  const [loginData, setLoginData] = React.useState<LoginDataTypes>({
    username: {
      value: "",
      error: ""
    },
    password: {
      error: "",
      value: ""
    }
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: { value: e.target.value, error: "" } });
  };


  const submitHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const isValid = validateLoginForm(loginData, setLoginData);

    if (isValid) {
      console.log("now call the login api: loginData", loginData);
    }

  };

  const errorTextClass = "text-red-500 font-medium text-sm";

  return (
    <div className={authStyles.authLeft}>
      <div className={authStyles.authLeftContent}>
        <div className="login-content">
          <h1 className={loginStyles.contentTitle}><span>Welcome Back !</span></h1>
          <p className={loginStyles.loginContentText}>Welcome back! Please enter your details</p>

          <div className="login-form">
            <div className="form__input">
              <label className="label">Username/email</label>
              {loginData.username.error?.length > 0 && <p className={errorTextClass}>{loginData.username.error}</p>}
              <TextField name="username" error={loginData?.username.error?.length > 0} onChange={changeHandler} value={loginData.username.value} type="text" size="small" label="Enter your email/username" variant="outlined" />
            </div>
            <div className="form__input">
              <label className="label">Password</label>
              {loginData.password.error?.length > 0 && <p className={errorTextClass}>{loginData.password.error}</p>}
              <TextField name="password" error={loginData?.password?.error?.length > 0} onChange={changeHandler} value={loginData.password.value} type="password" size="small" label="Enter your password" variant="outlined" />
            </div>
            <div className="primary-text login_signup-primary-text">
              <Link href={'/'}>Forgot Password?</Link>
            </div>
            <div className={authStyles.actionButton}>
              <Button onClick={(e) => submitHandler(e)} className={authStyles.button} variant="contained">Sign In</Button>
            </div>
            <div className="signin_signup_text">
              <p>Don&apos;t have an account ?<Link href={'/signup'}> <span className="primary-text login_signup-primary-text">Signup</span></Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
