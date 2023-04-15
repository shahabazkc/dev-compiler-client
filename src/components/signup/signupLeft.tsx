import authStyles from "../../styles/auth.module.scss";
import { TextField, Button } from "@mui/material";
import signupStyles from "../../styles/signup.module.scss";
import Link from "next/link";

export const SignupLeft = () => {
    return (
        <div className={authStyles.authLeft}>
            <div className={authStyles.authLeftContent}>
                <div className="signup-content">
                    <h1 className={signupStyles.contentTitle}><span>Signup</span></h1>
                    <p className={signupStyles.signupContentText}>Hey, Whatsupp! Let’s get started devs</p>

                    <div className="login-form">
                        <div className="form__input">
                            <label className="label">Username</label>
                            <TextField size="small" label="Enter username" variant="outlined" />
                        </div>
                        <div className="form__input">
                            <label className="label">Email</label>
                            <TextField size="small" label="Enter your email" variant="outlined" />
                        </div>
                        <div className="form__input">
                            <label className="label">Mobile number</label>
                            <TextField size="small" label="Enter your mobile number" variant="outlined" />
                        </div>
                        <div className="form__input">
                            <label className="label">Password</label>
                            <TextField size="small" label="Enter your password" variant="outlined" />
                        </div>

                        <div className={authStyles.actionButton}>
                            <Button className={authStyles.button} variant="contained">Sign Up</Button>
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