import usePages from "@/hooks/usePages"
import styles from './home.module.scss';
import React from "react";

export const HomeBanner = () => {

    const { theme } = usePages();

    return (
        <div className={`${styles.homeBanner} home_banner ${theme}`}>
            <div>
                <h2>
                    The fastest, most secure dev environment on the planet
                </h2>
            </div>
        </div>
    )
}