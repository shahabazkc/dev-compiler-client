import React from "react";
import styles from '../../styles/header.module.scss'

export default function Header() {
    return (
        <div className={styles.Header}>
            <h3 className="header_text">Dev Compiler</h3>
        </div>
    )
}