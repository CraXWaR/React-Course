import {MongoClient} from "mongodb";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://CraXWaR:Q3o1pAalHjfHvkRN@nextjscluster.2kgssdr.mongodb.net/?retryWrites=true&w=majority&appName=NextJSCluster');
        const db = client.db();

        const collection = await db.collection('meetups');
        const result = await collection.insertOne(data);

        client.close();

        res.status(201).json({message: 'Meetup Created Successfully!', result: result});
    }
}