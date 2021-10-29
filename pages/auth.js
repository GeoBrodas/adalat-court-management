import SignUp from '@/components/auth/SignUp';
import { getSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function SignUpPage() {
  // client side protection ( less preferred )
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace('/');
      } else {
        setLoading(false);
      }
    });
  }, [router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <SignUp />;
}

export default SignUpPage;
