import { db } from 'firebase-config';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const recievedEmail = credentials.email;
        const usersCollection = db.collection('users').doc(recievedEmail);
        const user = await usersCollection.get();

        if (!user.exists) {
          throw new Error('No user found!');
        }

        console.log(user.data());

        const isValid = await verifyPassword(
          credentials.password,
          user.data().password
        );

        if (!isValid) {
          throw new Error('Invalid password!');
        }

        return {
          email: user.data().email,
        };
      },
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
