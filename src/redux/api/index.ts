import {
  createUserForm,
  loginUserForm,
  logoutUser,
  signInWithGithub,
  verifyAuth,
} from '@/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
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

export const logoutUserAsync = createAsyncThunk('user/logout', async () => {
  try {
    const { data } = await logoutUser();
    return data;
  } catch (err) {
    const error = err as AxiosError;
    throw error?.response?.data;
  }
});

export const signInWithGithubAsync = createAsyncThunk(
  'user/github-signin',
  async (code: string) => {
    try {
      const { data } = await signInWithGithub(code);
      return data;
    } catch (err) {
      const error = err as AxiosError;
      throw error?.response?.data;
    }
  }
);
