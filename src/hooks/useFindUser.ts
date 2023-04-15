import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { verifyAuthAsync } from "@/redux/api";
import { AppDispatch } from "@/redux/store";
export default function useFindUser() {
    const [user, setUser] = useState(undefined);
    const [isLoading, setLoading] = useState(true);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        async function findUser() {
            setLoading(true);
            let userData: any = null;
            try {
                const data = await dispatch(verifyAuthAsync()).unwrap()
                userData = data;
            } catch (err) {
                userData = null;
            }
            setTimeout(() => {
                setLoading(false);
                setUser(userData);
            }, 400)
        }
        findUser();
    }, []);

    return {
        user,
        isLoading,
    };
}
