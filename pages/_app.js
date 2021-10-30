import '../styles/globals.css';
import { Provider } from 'next-auth/client';
import Layout from '@/components/Layout/Layout';

import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
