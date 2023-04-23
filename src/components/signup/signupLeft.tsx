import authStyles from "../../styles/auth.module.scss";
import { TextField, Button, Avatar } from "@mui/material";
import signupStyles from "./signup.module.scss";
import Link from "next/link";
import React from "react";
import { validateSignupForm } from "@/utils/validators";
import { SignupDataTypes } from '../../types/customTypes';
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from 'react-redux';
import { userSignupAsync } from "@/redux/api";
import githubIcon from "../../assets/images/github.png";
import googleIcon from "../../assets/images/google.png";
import { githubSignInAction } from "@/utils/github";
import { googleSignInAction } from "@/utils/google";

export const SignupLeft = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const [signupData, setSignupData] = React.useState<SignupDataTypes>({
        name: {
            value: "",
            error: ""
        },
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


    const submitHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const isValid = validateSignupForm(signupData, setSignupData);
        if (isValid) {
            try {
                const data = await dispatch(userSignupAsync({
                    name: signupData.name.value,
                    username: signupData.username.value,
                    email: signupData.email.value,
                    mobile_number: signupData.mobile.value,
                    password: signupData.password.value
                })).unwrap();
                if (data.status) {
                    toast.success('User created successfully',
                        {
                            position: "top-center",
                            autoClose: 500,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        }
                    );
                    router.push('/login');
                }
            }
            catch (err: any) {
                toast.error(err?.message || "Something went wrong");
            }
        }
    };

    const errorTextClass = "text-red-500 font-medium text-sm";

    return (
        <div className={authStyles.authLeft}>
            <div className={authStyles.authLeftContent}>
                <div className="signup-content">
                    <h1 className={signupStyles.contentTitle}><span>Signup</span></h1>
                    <p className={`${signupStyles.signupContentText} text-zinc-600`}>Hey, Whatsupp! Let’s get started devs</p>

                    <div className="login-form">
                        <div className="form__input text-zinc-600">
                            <label className="label">Name</label>
                            {signupData.name.error?.length > 0 && <p className={errorTextClass}>{signupData.name.error}</p>}
                            <TextField name="name" error={signupData.name.error?.length > 0} type="text" value={signupData.name.value} onChange={changeHandler} size="small" label="Enter your name" variant="outlined" />
                        </div>
                        <div className="form__input text-zinc-600">
                            <label className="label">Username</label>
                            {signupData.username.error?.length > 0 && <p className={errorTextClass}>{signupData.username.error}</p>}
                            <TextField name="username" error={signupData.username.error?.length > 0} type="text" value={signupData.username.value} onChange={changeHandler} size="small" label="Enter username" variant="outlined" />
                        </div>
                        <div className="form__input text-zinc-600">
                            <label className="label">Email</label>
                            {signupData.email.error?.length > 0 && <p className={errorTextClass}>{signupData.email.error}</p>}
                            <TextField name="email" error={signupData.email.error?.length > 0} type="email" value={signupData.email.value} onChange={changeHandler} size="small" label="Enter your email" variant="outlined" />
                        </div>
                        <div className="form__input text-zinc-600">
                            <label className="label">Mobile number</label>
                            {signupData.mobile.error?.length > 0 && <p className={errorTextClass}>{signupData.mobile.error}</p>}
                            <TextField name="mobile" error={signupData.mobile.error?.length > 0} type="text" value={signupData.mobile.value} onChange={changeHandler} size="small" label="Enter your mobile number" variant="outlined" />
                        </div>
                        <div className="form__input text-zinc-600">
                            <label className="label">Password</label>
                            {signupData.password.error?.length > 0 && <p className={errorTextClass}>{signupData.password.error}</p>}
                            <TextField name="password" error={signupData.password.error?.length > 0} type="password" value={signupData.password.value} onChange={changeHandler} size="small" label="Enter your password" variant="outlined" />
                        </div>

                        <div className={authStyles.actionButton}>
                            <Button onClick={(e) => submitHandler(e)} className={authStyles.button} variant="contained">Sign Up</Button>
                        </div>
                        <div className={authStyles.actionButton}>
                            <Button onClick={(e) => githubSignInAction(e)} startIcon={<Avatar style={{ height: "30px", width: "30px" }} src={githubIcon.src} />} className={authStyles.oAuthButton} variant="contained" > Sign Up with Gihub</Button>
                        </div>
                        <div className={authStyles.actionButton}>
                            <Button onClick={(e) => googleSignInAction(e)} startIcon={<Avatar style={{ height: "28px", width: "28px" }} src={googleIcon.src} />} className={authStyles.oAuthButton} variant="contained" > Sign Up with Google</Button>
                        </div>
                        <div className="signin_signup_text text-zinc-600">
                            <p>Already have an account?<Link href={'/login'}> <span className="text-purple-900 font-bold">Signin</span></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};