import React from "react";
import styles from '../../styles/header.module.scss'
import variables from '../../styles/variables.module.scss'
export default function Header() {
    return (
        <div className={styles.Header}>
            <h3 className={variables.primaryColor}>Dev Compiler</h3>
        </div>
    )
}