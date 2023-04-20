import React from "react";
// import styles from '../../styles/header.module.scss'
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import { HeaderOne } from "./HeaderOne";
import { HeaderTwo } from "./HeaderTwo";

export default function Header() {
    const { pages: { header } } = useSelector((state: RootState) => state);
    const getHeaderColor = () => {
        if (header == 1) {
            return '#000000'
        }
        else {
            return '#fff'
        }
    };

    return (
        <div>
            {
                header == 1 && <HeaderOne getHeaderColor={getHeaderColor} />
            }
            {
                header == 2 && <HeaderTwo getHeaderColor={getHeaderColor} />
            }
        </div >
    )
}