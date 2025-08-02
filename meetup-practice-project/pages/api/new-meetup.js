import {MongoClient} from "mongodb";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect(process.env.MONGODB_URL);
        const db = client.db();

        const collection = await db.collection('meetups');
        const result = await collection.insertOne(data);

        client.close();

        res.status(201).json({message: 'Meetup Created Successfully!', result: result});
    }
}