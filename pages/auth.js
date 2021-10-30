import SignUp from '@/components/auth/SignUp';
import { getSession } from 'next-auth/client';

import Head from 'next/head';

function SignUpPage() {
  return (
    <>
      <Head>
        <title>SignUp!</title>
        <meta
          name="description"
          content="Adaalat: One step Solution to managing court hearings"
        />
      </Head>
      <SignUp />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  // checks for the incoming request and sees whether a session token is available or not and accordingly takes action

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false, // if we want to permanently redirect to auth page or not ?
      },
    };
  }

  return {
    props: {},
  };
}

export default SignUpPage;
