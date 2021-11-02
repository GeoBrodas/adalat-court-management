import HomePage from '@/components/HomePage';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adaalat</title>
        <meta
          name="description"
          content="Adaalat: One step Solution to managing court hearings"
        />

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

      <HomePage />
    </div>
  );
}
