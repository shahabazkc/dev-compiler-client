import React from "react";
import styles from './home.module.scss';
import usePages from "@/hooks/usePages";

export const HomeQuote = () => {
    const { theme } = usePages();
    return (
        <div className={`${styles.homeQuoteContainer} ${styles[`homeQuoteContainer_${theme}`]}`}>
            <div className={`${styles.homeQuoteBox}`}>
                <div className={`${styles.quoteIcon}`}>
                “
                </div>
                <div className={`${styles.homeQuoteText}`}>
                    <p>
                    &quot;The best way to predict the future is to invent it.&quot; - Alan Kay Online coding environments are allowing developers to invent new ways of working and collaborating, paving the way for a more innovative and efficient future in software development.
                    </p>
                </div>
            </div>
        </div>
    );
};