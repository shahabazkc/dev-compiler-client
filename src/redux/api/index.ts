import { createUserForm, loginUserForm, verifyAuth } from "@/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from 'axios';

export const loginUserAsync = createAsyncThunk(
    'user/login',
    async (loginData: { [key: string]: string }) => {
        try {
            const { data } = await loginUserForm(loginData);
            return data;
        } catch (err) {
            const error = err as AxiosError;
            throw error?.response?.data;
        }
    }
);

export const userSignupAsync = createAsyncThunk(
    'user/signup',
    async (signupData: { [key: string]: string }) => {
        try {
            const { data } = await createUserForm(signupData);
            return data;
        } catch (err) {
            const error = err as AxiosError;
            throw error?.response?.data;
        }
    }
);

export const verifyAuthAsync = createAsyncThunk(
    'user/verify-auth',
    async () => {
        try {
            const { data } = await verifyAuth();
            return data;
        } catch (err) {
            const error = err as AxiosError;
            throw error?.response?.data;
        }
    }
);