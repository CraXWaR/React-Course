import {MongoClient} from "mongodb";

import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";

export default function HomePage(props) {
    return (<>
        <Head>
            <title>Meetup App</title>
            <meta name="description" content="A simple app to browse and join learning meetups."/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <MeetupList meetups={props.meetups}/>
    </>);
}

export async function getStaticProps() {
    const client = await MongoClient.connect(process.env.MONGODB_URL);
    const db = client.db();

    const collection = await db.collection('meetups');
    const meetups = await collection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                description: meetup.description,
                image: meetup.image,
                address: meetup.address,
                id: meetup._id.toString(),
            })),
        }, revalidate: 10
    }
}