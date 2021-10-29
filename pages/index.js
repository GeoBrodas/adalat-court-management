import HomePage from '@/components/HomePage';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adalat</title>
        <meta name="description" content="The home-page of Adalat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  );
}
