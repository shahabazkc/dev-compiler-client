import React from 'react';
import { getUrlWithParams } from '../util';
import { getGoogleSignInUrl } from '@/api';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

export const googleSignInAction = async (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  e.preventDefault();

  try {
    const { data } = await getGoogleSignInUrl();
    console.log(data);
    window.location.assign(data?.data);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    toast.error(err?.response?.data?.message || err?.message);
  }
};
