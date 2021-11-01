import '../styles/globals.css';
import { Provider } from 'next-auth/client';
import Layout from '@/components/Layout/Layout';

import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Meta tags og */}
        <meta property="og:title" content="Adaalat" />
        <meta
          property="og:description"
          content="A court management system to add, register case, withdraw case seamlessly."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dapafwlvo/image/upload/v1635735765/image1_kafi3l.png"
        />
        <meta property="og:url" content="https://adaalat.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Twitter */}
        <meta name="twitter:title" content="Adaalat" />
        <meta
          name="twitter:description"
          content="A court management system to add, register case, withdraw case seamlessly."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dapafwlvo/image/upload/v1635735765/image1_kafi3l.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
