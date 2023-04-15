import authStyles from "../../styles/auth.module.scss";
import { TextField, Button } from "@mui/material";
import signupStyles from "../../styles/signup.module.scss";
import Link from "next/link";
import React from "react";
import { validateSignupForm } from "@/utils/validators";
import { SignupDataTypes } from '../../types/customTypes';

export const SignupLeft = () => {
    const [signupData, setSignupData] = React.useState<SignupDataTypes>({
        username: {
            value: "",
            error: ""
        },
        email: {
            value: "",
            error: ""
        },
        mobile: {
            value: "",
            error: ""
        },
        password: {
            error: "",
            value: ""
        }
    });

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignupData({ ...signupData, [e.target.name]: { value: e.target.value, error: "" } });
    };


    const submitHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        const isValid = validateSignupForm(signupData, setSignupData);

        if (isValid) {
            console.log("now call the api: signupData", signupData);
        }

    };

    const errorTextClass = "text-red-500 font-medium text-sm";

    return (
        <div className={authStyles.authLeft}>
            <div className={authStyles.authLeftContent}>
                <div className="signup-content">
                    <h1 className={signupStyles.contentTitle}><span>Signup</span></h1>
                    <p className={signupStyles.signupContentText}>Hey, Whatsupp! Let’s get started devs</p>

                    <div className="login-form">
                        <div className="form__input">
                            <label className="label">Username</label>
                            {signupData.username.error?.length > 0 && <p className={errorTextClass}>{signupData.username.error}</p>}
                            <TextField name="username" error={signupData.username.error?.length > 0} type="text" value={signupData.username.value} onChange={changeHandler} size="small" label="Enter username" variant="outlined" />
                        </div>
                        <div className="form__input">
                            <label className="label">Email</label>
                            {signupData.email.error?.length > 0 && <p className={errorTextClass}>{signupData.email.error}</p>}
                            <TextField name="email" error={signupData.email.error?.length > 0} type="email" value={signupData.email.value} onChange={changeHandler} size="small" label="Enter your email" variant="outlined" />
                        </div>
                        <div className="form__input">
                            <label className="label">Mobile number</label>
                            {signupData.mobile.error?.length > 0 && <p className={errorTextClass}>{signupData.mobile.error}</p>}
                            <TextField name="mobile" error={signupData.mobile.error?.length > 0} type="text" value={signupData.mobile.value} onChange={changeHandler} size="small" label="Enter your mobile number" variant="outlined" />
                        </div>
                        <div className="form__input">
                            <label className="label">Password</label>
                            {signupData.password.error?.length > 0 && <p className={errorTextClass}>{signupData.password.error}</p>}
                            <TextField name="password" error={signupData.password.error?.length > 0} type="password" value={signupData.password.value} onChange={changeHandler} size="small" label="Enter your password" variant="outlined" />
                        </div>

                        <div className={authStyles.actionButton}>
                            <Button onClick={(e) => submitHandler(e)} className={authStyles.button} variant="contained">Sign Up</Button>
                        </div>
                        <div className="signin_signup_text">
                            <p>Already have an account?<Link href={'/login'}> <span className="primary-text login_signup-primary-text">Signin</span></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};