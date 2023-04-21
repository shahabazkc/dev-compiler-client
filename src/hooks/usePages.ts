import { PagesDataState, changePageState } from '@/redux/slices/pagesSlice';
import { AppDispatch } from '@/redux/store';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export default function usePages() {
  const [pages, setPages] = useState<PagesDataState>({
    header: null,
    theme: null,
    page: null,
  });

  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();

  useEffect(() => {
    const pageData = { ...pages };

    const header1Routes = ['/login', '/register', '/signup'];

    if (header1Routes.includes(router.pathname)) {
      pageData.header = 1;
    } else {
      pageData.header = 2;
    }

    pageData.theme = 'system';
    pageData.page = router.pathname;
    setPages({ ...pageData });
    dispatch(changePageState(pageData));
  }, [router.pathname]);

  return { ...pages };
}
