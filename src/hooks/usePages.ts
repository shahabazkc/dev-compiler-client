import {
  PagesDataState,
  changeHeader,
  changePage,
  changePageState,
  changeTheme,
} from '@/redux/slices/pagesSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { getThemeColors } from '@/utils/getThemeColors';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function usePages() {
  const { theme, header, page, themeBaseColor } = useSelector(
    (state: RootState) => state.pages
  );

  useEffect(() => {
    let updatedTheme = theme;
    const localStorageTheme = localStorage.getItem('theme');
    if (!updatedTheme)
      updatedTheme = localStorageTheme as PagesDataState['theme'];
    if (!updatedTheme) updatedTheme = 'light';
    document.documentElement.className = updatedTheme;

    if (updatedTheme !== theme) {
      localStorage.setItem('theme', updatedTheme);
      dispatch(
        changeTheme({
          theme: updatedTheme,
          themeColors: getThemeColors(updatedTheme),
        })
      );
    }
  }, [theme]);

  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();

  useEffect(() => {
    const pageData = { ...{ header, page } };
    const header1Routes = ['/login', '/register', '/signup'];
    if (header1Routes.includes(router.pathname)) {
      pageData.header = 1;
    } else {
      pageData.header = 2;
    }
    pageData.page = router.pathname;
    if (header !== pageData.header) {
      dispatch(changeHeader(pageData.header));
    }
    if (pageData.page !== page) {
      dispatch(changePage(pageData.page));
    }
  }, [router.pathname]);

  return { ...{ page, header, theme, themeBaseColor } };
}
