
import React from 'react'
import Layout from '@/components/layout'
import '../src/styles/globals.css';
import { AppPropsWithLayout } from '@/types/NextPageWithLayout';


export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    return <Layout><Component {...pageProps} /></Layout>
}