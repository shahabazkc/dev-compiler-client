import React from 'react';
import { getUrlWithParams } from '../util';

export const githubSignInAction = async (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  e.preventDefault();
  const CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string;
  const url = getUrlWithParams('https://github.com/login/oauth/authorize', {
    client_id: CLIENT_ID,
    redirect_uri: 'http://localhost:3000/login?auth=github/callback',
    scope: 'repo%20user',
  });
  window.location.assign(url);
};
