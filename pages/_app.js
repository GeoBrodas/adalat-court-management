import '../styles/globals.css';
import { Provider } from 'next-auth/client';
import Layout from '@/components/Layout/Layout';

import Head from 'next/head';

import { Toaster } from 'react-hot-toast';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NextNProgress
        color="#700B97"
        height={3}
        options={{ showSpinner: false }}
      />
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
