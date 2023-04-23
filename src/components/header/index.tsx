import React from "react";
// import styles from '../../styles/header.module.scss'
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import { HeaderOne } from "./HeaderOne";
import { HeaderTwo } from "./HeaderTwo";
import { useRouter } from "next/router";

export default function Header() {
    const { pages: { header } } = useSelector((state: RootState) => state);

    return (
        <>
            {
                header == 1 && <HeaderOne />
            }
            {
                header == 2 && <HeaderTwo />
            }
        </>
    )
}