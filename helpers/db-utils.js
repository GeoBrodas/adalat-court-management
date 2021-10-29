import { MongoClient } from 'mongodb';

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const cluster = process.env.MONGODB_CLUSTER;
const database = process.env.MONGODB_DATABASE;

// const MONGODB_URI = `mongodb+srv://${username}:${password}@${cluster}.3svps.mongodb.net/${database}?retryWrites=true&w=majority`;
const MONGODB_URI =
  'mongodb+srv://Judiciary:iglAHqSvAgRfBqFR@cluster0.a6qwp.mongodb.net/MyFirstDatabase?retryWrites=true&w=majority';

export async function connectToDatabase() {
  const client = await MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return client;
}
