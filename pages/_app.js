import '../styles/globals.css';
import { Provider } from 'next-auth/client';
import Layout from '@/components/Layout/Layout';

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
