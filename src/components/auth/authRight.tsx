import React from "react"
import codeIcon from "@/assets/images/code-icon.webp";
import authStyles from "../../styles/auth.module.scss"
export const AuthRight = () => {
    return (
        <div className={authStyles.authRight}>
            <img className={authStyles.image} src={codeIcon.src} />
        </div>
    )
}