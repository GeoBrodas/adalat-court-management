import { hashPassword } from '@/helpers/auth-utils';
import { db } from 'firebase-config';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const { email, password, firstName, lastName } = data;
    // server side validation
    if (
      !email ||
      !email.includes('@') ||
      !password ||
      password.trim().length < 7
    ) {
      res.status(422).json({
        message:
          'Invalid Input - password has to be atleast 7 characters long!',
      });
      return;
    }

    //checks if user already exists from firebase
    const existingUserRef = db.collection('users').doc(email);
    const existingUser = await existingUserRef.get();

    // check if user exists
    if (!existingUser.exists) {
      res.status(422).json({ message: 'User already exists!' });
      return;
    }

    // hash password using bcrypt
    const hashedPassword = await hashPassword(password);

    // create user
    const result = db.collection('users').add({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });

    res.status(201).json({ message: 'Created User!!', result });
  }
}

export default handler;
