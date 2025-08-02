import {MongoClient, ObjectId} from "mongodb";

import MeetupDetails from '../../components/meetups/MeetupDetail';
import Head from "next/head";

export default function DetailsPage(props) {
    return (<>
        <Head>
            <title>{props.title} | Meetup Details</title>
            <meta name="description" content={props.description}/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <MeetupDetails
            image={props.image}
            title={props.title}
            address={props.address}
            description={props.description}
        />
    </>);
}

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://CraXWaR:Q3o1pAalHjfHvkRN@nextjscluster.2kgssdr.mongodb.net/?retryWrites=true&w=majority&appName=NextJSCluster');
    const db = client.db();

    const collection = await db.collection('meetups');
    const meetups = await collection.find({}, {_id: 1}).toArray();

    client.close();

    const paths = meetups.map((meetup) => ({
        params: {id: meetup._id.toString()},
    }));

    return {
        fallback: 'blocking', paths,
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.id;

    const client = await MongoClient.connect('mongodb+srv://CraXWaR:Q3o1pAalHjfHvkRN@nextjscluster.2kgssdr.mongodb.net/?retryWrites=true&w=majority&appName=NextJSCluster');
    const db = client.db();

    const collection = await db.collection('meetups');
    const meetup = await collection.findOne({_id: new ObjectId(meetupId)});
    client.close();

    return {
        props: {
            id: meetup._id.toString(),
            title: meetup.title,
            description: meetup.description,
            image: meetup.image,
            address: meetup.address,
        }
    };
}
