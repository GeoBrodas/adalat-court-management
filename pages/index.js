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
      </Head>

      <HomePage />
    </div>
  );
}
