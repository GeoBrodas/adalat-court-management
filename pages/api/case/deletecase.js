import { connectToDatabase } from '@/helpers/db-utils';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await connectToDatabase();
    const db = client.db();
    const response = await db.collection('cases').deleteOne({ uid: data });

    res.status(200).json({ message: 'Successfully delted case', response });
    client.close();
  }
}

export default handler;
