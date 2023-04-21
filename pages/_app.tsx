
import React from 'react'
import Layout from '@/components/layout'
import '../src/styles/globals.scss';
import { AppPropsWithLayout } from '@/types/NextPageWithLayout';
import "react-toastify/dist/ReactToastify.css";
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { ThemeProvider } from 'next-themes';

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    return (
        <Provider store={store}>
            <ThemeProvider attribute='class'>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </Provider>
    )
}